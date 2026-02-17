const OpenAI = require("openai");
const { getConfig } = require("../config/aiModel");

/**
 * Parse the AI response to extract score and feedback
 * @param {string} responseText - The raw response from AI
 * @returns {{score: number, feedback: string[]}} Parsed result
 */
const parseResponse = (responseText) => {
  const lines = responseText.trim().split("\n");
  let score = 0;
  const feedback = [];

  for (const line of lines) {
    const trimmedLine = line.trim();
    
    // Extract score
    if (trimmedLine.toLowerCase().startsWith("score:")) {
      const scoreMatch = trimmedLine.match(/score:\s*(\d+)/i);
      if (scoreMatch) {
        score = parseInt(scoreMatch[1], 10);
      }
    }
    
    // Extract feedback points (lines starting with -)
    if (trimmedLine.startsWith("-")) {
      feedback.push(trimmedLine.substring(1).trim());
    }
  }

  return { score, feedback };
};

/**
 * Evaluate speaking text using AI Model
 * @param {string} topic - The topic to evaluate against
 * @param {string} spokenData - The spoken text to evaluate
 * @returns {Promise<{score: number, feedback: string[]}>} Evaluation result
 */
const evaluateSpeaking = async (topic, spokenData) => {
  try {
    const { provider, apiKey, model, speakingEvaluation } = getConfig();

    if (!apiKey || apiKey === "your_api_key_here") {
      throw new Error("AI Model API key is not configured");
    }

    const wordCount = spokenData.trim().split(/\s+/).length;

    const prompt = `
You are an evaluator for spoken English responses generated from speech-to-text systems.

The transcript may be raw and lack punctuation.

STEP 1 — NORMALIZATION:
Rewrite the transcript by adding appropriate punctuation, capitalization, and sentence boundaries.
Do NOT change the meaning, wording, or add new ideas.

STEP 2 — EVALUATION:

SCORING (Total = 100):
- Topic relevance and coverage: 40 points
- Grammar and language accuracy: 30 points
- Clarity and organization of speech: 30 points

CRITICAL RULES (MUST FOLLOW STRICTLY):
1. If topic relevance is BELOW 20 out of 40, the FINAL SCORE MUST NOT EXCEED 30.
2. Deduct up to 30 points if content is repetitive or off-topic.
3. If transcript is under 120 words, cap the final score at 60 ONLY IF topic relevance is 25/40 or higher.


Topic:
"${topic}"

Student Transcript:
"${spokenData}"

INSTRUCTIONS:
- Apply relevance evaluation FIRST.
- Apply penalties NEXT.
- Apply length cap LAST, only if allowed.
- Final score must be an integer between 0 and 95.

Return output in EXACTLY the following format:

Score: <final score>
- Topic Relevance: <one concise sentence on how well the speech stayed on topic in 20 words or less>
- Grammar: <one concise sentence on grammar and language usage in 20 words or less>
- Clarity: <one concise sentence on clarity and flow of speech in 20 words or less>

Do not include explanations, calculations, or extra text.
`;

    let responseText;

    if (provider === "openai") {
      const client = new OpenAI({ apiKey });

      const response = await client.responses.create({
        model: model,
        input: prompt,
        max_output_tokens: 1000,
        reasoning: { effort: "low" },
      });

      responseText = response.output_text;
    } else if (provider === "gemini") {
      // Fallback to Gemini using axios
      const axios = require("axios");
      const baseUrl = "https://generativelanguage.googleapis.com/v1beta/models";
      const url = `${baseUrl}/${model}:generateContent?key=${apiKey}`;
      
      const response = await axios.post(url, {
        contents: [{ parts: [{ text: prompt }] }],
        generationConfig: {
          temperature: 0.7,
          maxOutputTokens: 200,
        },
      });

      responseText = response.data.candidates?.[0]?.content?.parts?.[0]?.text;
    } else {
      throw new Error(`Unsupported AI provider: ${provider}`);
    }

    if (!responseText) {
      throw new Error("No response from AI Model");
    }

    // Parse the response
    const result = parseResponse(responseText);

    // Validate and ensure score is within bounds
    result.score = Math.max(
      speakingEvaluation.minScore,
      Math.min(speakingEvaluation.maxScore, result.score)
    );

    // Apply word count cap
    if (wordCount < speakingEvaluation.minWordCount && result.score > speakingEvaluation.maxScoreUnderWordLimit) {
      result.score = speakingEvaluation.maxScoreUnderWordLimit;
    }

    // Ensure exactly 3 feedback points
    while (result.feedback.length < speakingEvaluation.feedbackPointsCount) {
      result.feedback.push("Continue practicing to improve your speaking skills.");
    }
    result.feedback = result.feedback.slice(0, speakingEvaluation.feedbackPointsCount);

    return {
      score: result.score,
      feedback: result.feedback,
    };
  } catch (error) {
    console.error("[AIModel] Evaluation error:", error.message);
    throw new Error(`Speaking evaluation failed: ${error.message}`);
  }
};

module.exports = {
  evaluateSpeaking,
};
