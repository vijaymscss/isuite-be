const { sqlQuestion } = require("../constants/SQL/sqlQuestion");

/**
 * Question Repository
 * Handles loading and finding questions
 */
class QuestionRepository {
  constructor() {
    this.questions = new Map();
    this.loadQuestions();
  }

  /**
   * Load all questions into memory for fast lookup
   */
  loadQuestions() {
    for (const question of sqlQuestion) {
      this.questions.set(question.question_id, question);
    }
  }

  /**
   * Find a question by ID
   */
  findById(questionId) {
    return this.questions.get(questionId) || null;
  }

  /**
   * Get all questions (for listing)
   */
  findAll() {
    return Array.from(this.questions.values());
  }

  /**
   * Get questions by category
   */
  findByCategory(category) {
    return this.findAll().filter(
      (q) => q.category.toLowerCase() === category.toLowerCase()
    );
  }

  /**
   * Get questions by difficulty
   */
  findByDifficulty(difficulty) {
    return this.findAll().filter(
      (q) => q.difficulty.toLowerCase() === difficulty.toLowerCase()
    );
  }
}

module.exports = new QuestionRepository();
