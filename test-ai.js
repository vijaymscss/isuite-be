require('dotenv').config();
const OpenAI = require('openai');
const { getConfig } = require('./src/config/aiModel');

(async () => {
  const { provider, apiKey, model, speakingEvaluation } = getConfig();
  
  const topic = 'The importance of education';
  const spokenData = 'Education is very important for everyone. It helps people learn new skills and knowledge. Schools and universities provide education to students. Education improves our lives and society.';
  
  const prompt = `
You are an evaluator for spoken English responses.

Evaluate the transcript strictly according to the rules below.

SCORING (Total = 100 points):
- Relevance to topic: 40 points
- Clarity and organization: 30 points
- Depth and coverage on grammar and vocabulary: 30 points

PENALTIES & CAPS:
- Deduct up to 10 points if content is repetitive or off-topic.
- If transcript is under ${speakingEvaluation.minWordCount} words, cap the final score at ${speakingEvaluation.maxScoreUnderWordLimit}.

Topic:
"${topic}"

Student Transcript:
"${spokenData}"

INSTRUCTIONS:
- Apply all penalties and caps before giving the final score.
- Final score must be an integer between 0 and 100.

Return output in EXACTLY the following format:

Score: <final score>
- Relevance: <one concise sentence>
- Clarity: <one concise sentence>
- Depth: <one concise sentence>

Do not include explanations, calculations, or extra text.
`;

  const client = new OpenAI({ apiKey });
  
  const response = await client.responses.create({
    model: model,
    input: prompt,
    max_output_tokens: 1000,
    reasoning: { effort: "low" },
  });
})();
