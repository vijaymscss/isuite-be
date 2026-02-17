const sqlValidatorService = require("../services/sqlValidatorService");
const questionRepository = require("../repositories/questionRepository");
const studentRepository = require("../repositories/studentRepository");

/**
 * Validate SQL query against test cases
 */
const validateQuery = async (req, res) => {
  const { question_id, userQuery, emailId } = req.body;

  // Validate input
  if (!question_id) {
    return res.status(200).json({
      success: false,
      error: "Validation Error",
      message: "question_id is required",
    });
  }

  if (!userQuery || typeof userQuery !== "string") {
    return res.status(200).json({
      success: false,
      error: "Validation Error",
      message: "userQuery is required and must be a string",
    });
  }

  // Basic SQL injection prevention - only allow SELECT queries
  const trimmedQuery = userQuery.trim().toUpperCase();
  if (!trimmedQuery.startsWith("SELECT")) {
    return res.status(200).json({
      success: false,
      error: "Validation Error",
      message: "Only SELECT queries are allowed",
    });
  }

  // Find the question
  const question = questionRepository.findById(question_id);
  if (!question) {
    return res.status(200).json({
      success: false,
      error: "Not Found",
      message: `Question with ID "${question_id}" not found`,
    });
  }

  // Validate the query
  const validationResult = sqlValidatorService.validateQuery(question, userQuery);

  console.log("[Controller] SQL validation result - allPassed:", validationResult.allPassed);
  console.log("[Controller] emailId provided:", !!emailId, emailId);

  // If query executed successfully (all test cases passed) and emailId is provided, store in DB
  if (validationResult.allPassed && emailId) {
    try {
      console.log("[Controller] Attempting to save SQL solution...");
      const result = await studentRepository.addOrUpdateSqlSolution(
        emailId,
        question_id,
        userQuery,
        question.difficulty
      );
      
      console.log("[Controller] Save result:", result);
      
      if (result.student) {
        validationResult.saved = true;
        validationResult.isUpdate = result.isUpdate;
      } else {
        validationResult.saved = false;
        validationResult.saveError = "Student not found";
      }
    } catch (error) {
      // Log error but don't fail the response - query validation was successful
      console.error("Error saving SQL solution:", error.message);
      validationResult.saved = false;
      validationResult.saveError = error.message;
    }
  } else {
    console.log("[Controller] Not saving - allPassed:", validationResult.allPassed, "emailId:", emailId);
  }

  res.json({
    success: true,
    data: validationResult,
  });
};

/**
 * Get question by ID (without solution)
 */
const getQuestion = (req, res) => {
  const { questionId } = req.params;

  const question = questionRepository.findById(questionId);
  if (!question) {
    return res.status(404).json({
      success: false,
      error: "Not Found",
      message: `Question with ID "${questionId}" not found`,
    });
  }

  // Return question without solution and test case expected outputs
  const { solution, testCases, ...questionWithoutSolution } = question;

  res.json({
    success: true,
    data: {
      ...questionWithoutSolution,
      testCaseCount: testCases.length,
    },
  });
};

/**
 * List all questions
 */
const listQuestions = (req, res) => {
  const { category, difficulty } = req.query;

  let questions = questionRepository.findAll();

  if (category) {
    questions = questions.filter(
      (q) => q.category.toLowerCase() === category.toLowerCase()
    );
  }

  if (difficulty) {
    questions = questions.filter(
      (q) => q.difficulty.toLowerCase() === difficulty.toLowerCase()
    );
  }

  // Return questions without solutions
  const questionsWithoutSolutions = questions.map(
    ({ solution, testCases, ...q }) => ({
      ...q,
      testCaseCount: testCases.length,
    })
  );

  res.json({
    success: true,
    data: {
      total: questionsWithoutSolutions.length,
      questions: questionsWithoutSolutions,
    },
  });
};

module.exports = {
  validateQuery,
  getQuestion,
  listQuestions,
};
