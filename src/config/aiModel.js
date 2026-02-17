/**
 * AI Model Configuration
 * Supports: gemini, openai (extensible for future providers)
 */

const providers = {
  gemini: {
    model: "gemini-2.0-flash-lite",
  },
  openai: {
    model: "gpt-5-nano",
  },
};

/**
 * Get current AI model configuration
 * @returns {Object} AI model configuration
 */
const getConfig = () => {
  const activeProvider = process.env.AI_MODEL_PROVIDER || "openai";
  return {
    provider: activeProvider,
    apiKey: process.env.AI_MODEL_API_KEY,
    model: providers[activeProvider]?.model,
    providers,

    // Speaking evaluation config
    speakingEvaluation: {
      minWordCount: 150,
      maxScore: 100,
      minScore: 0,
      feedbackPointsCount: 3,
      maxScoreUnderWordLimit: 70,
    },
  };
};

module.exports = { getConfig };
