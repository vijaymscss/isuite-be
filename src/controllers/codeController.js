const judge0Service = require("../services/judge0Service");
const dsaQuestionRepository = require("../repositories/dsaQuestionRepository");
const studentRepository = require("../repositories/studentRepository");

/**
 * Compile and run code
 */
const compileCode = async (req, res) => {
  const { sourceCode, language, stdin } = req.body;

  // Validate input
  if (!sourceCode || typeof sourceCode !== "string") {
    return res.status(200).json({
      success: false,
      error: "Validation Error",
      message: "sourceCode is required and must be a string",
    });
  }

  if (!language || typeof language !== "string") {
    return res.status(200).json({
      success: false,
      error: "Validation Error",
      message: "language is required and must be a string (cpp, java, python)",
    });
  }

  const validLanguages = ["cpp", "java", "python"];
  if (!validLanguages.includes(language.toLowerCase())) {
    return res.status(200).json({
      success: false,
      error: "Validation Error",
      message: `Invalid language. Supported languages: ${validLanguages.join(", ")}`,
    });
  }

  try {
    const result = await judge0Service.submitCode(sourceCode, language, stdin || "");

    res.json({
      success: true,
      data: result,
    });
  } catch (error) {
    res.status(200).json({
      success: false,
      error: "Compilation Error",
      message: error.message,
    });
  }
};

/**
 * Run code with test cases
 */
const runTestCases = async (req, res) => {
  const { sourceCode, language, testCases } = req.body;

  // Validate input
  if (!sourceCode || typeof sourceCode !== "string") {
    return res.status(200).json({
      success: false,
      error: "Validation Error",
      message: "sourceCode is required and must be a string",
    });
  }

  if (!language || typeof language !== "string") {
    return res.status(200).json({
      success: false,
      error: "Validation Error",
      message: "language is required and must be a string (cpp, java, python)",
    });
  }

  const validLanguages = ["cpp", "java", "python"];
  if (!validLanguages.includes(language.toLowerCase())) {
    return res.status(200).json({
      success: false,
      error: "Validation Error",
      message: `Invalid language. Supported languages: ${validLanguages.join(", ")}`,
    });
  }

  if (!testCases || !Array.isArray(testCases) || testCases.length === 0) {
    return res.status(200).json({
      success: false,
      error: "Validation Error",
      message: "testCases is required and must be a non-empty array",
    });
  }

  try {
    const result = await judge0Service.runWithTestCases(sourceCode, language, testCases);

    res.json({
      success: true,
      data: result,
    });
  } catch (error) {
    res.status(200).json({
      success: false,
      error: "Execution Error",
      message: error.message,
    });
  }
};

/**
 * Validate DSA code against question test cases
 * Frontend sends: question_id, source_code (function only), language, emailId (optional)
 * Backend wraps with test harness and runs all test cases in single execution
 */
const validateDSACode = async (req, res) => {
  const { question_id, source_code, language, emailId } = req.body;

  // Validate input
  if (!question_id) {
    return res.status(200).json({
      success: false,
      error: "Validation Error",
      message: "question_id is required",
    });
  }

  if (!source_code || typeof source_code !== "string") {
    return res.status(200).json({
      success: false,
      error: "Validation Error",
      message: "source_code is required and must be a string",
    });
  }

  if (!language || typeof language !== "string") {
    return res.status(200).json({
      success: false,
      error: "Validation Error",
      message: "language is required and must be a string (cpp, java, python)",
    });
  }

  const validLanguages = ["cpp", "java", "python"];
  if (!validLanguages.includes(language.toLowerCase())) {
    return res.status(200).json({
      success: false,
      error: "Validation Error",
      message: `Invalid language. Supported languages: ${validLanguages.join(", ")}`,
    });
  }

  // Find the question
  const question = dsaQuestionRepository.findById(question_id);
  if (!question) {
    return res.status(200).json({
      success: false,
      error: "Not Found",
      message: `Question with ID "${question_id}" not found`,
    });
  }

  // Validate function name exists
  if (!question.functionName) {
    return res.status(200).json({
      success: false,
      error: "Configuration Error",
      message: "Question is missing function name configuration",
    });
  }

  try {
    // Use the new wrapped execution method
    const result = await judge0Service.runWrappedDSACode(
      source_code,
      language,
      question.functionName,
      question.testCases
    );

    // If all tests passed and emailId is provided, save to DB
    let saved = false;
    let isUpdate = false;
    let saveError = null;

    if (result.allPassed && emailId) {
      try {
        console.log("[Controller] Attempting to save DSA solution...");
        const saveResult = await studentRepository.addOrUpdateDsaSolution(
          emailId,
          question_id,
          question.difficulty,
          source_code
        );
        
        console.log("[Controller] DSA Save result:", saveResult);
        
        if (saveResult.student) {
          saved = true;
          isUpdate = saveResult.isUpdate;
        } else {
          saveError = "Student not found";
        }
      } catch (error) {
        console.error("Error saving DSA solution:", error.message);
        saveError = error.message;
      }
    }

    // Return structured response
    res.json({
      success: result.success,
      data: {
        questionId: question.question_id,
        questionTitle: question.title,
        difficulty: question.difficulty,
        expectedFunctionName: question.functionName,
        allPassed: result.allPassed,
        totalTests: result.totalTests,
        passedTests: result.passedTests,
        failedTests: result.failedTests,
        executionTime: result.executionTime,
        memoryUsed: result.memoryUsed,
        ...(result.stdout && { stdout: result.stdout }),
        ...(result.error && { error: result.error }),
        testResults: result.testResults,
        ...(emailId && { saved, isUpdate }),
        ...(saveError && { saveError }),
      },
    });
  } catch (error) {
    res.status(200).json({
      success: false,
      error: "Execution Error",
      message: error.message,
    });
  }
};

/**
 * Get DSA question by ID (without test case expected outputs)
 */
const getDSAQuestion = (req, res) => {
  const { questionId } = req.params;

  const question = dsaQuestionRepository.findById(questionId);
  if (!question) {
    return res.status(200).json({
      success: false,
      error: "Not Found",
      message: `Question with ID "${questionId}" not found`,
    });
  }

  // Return question without expected outputs in test cases
  const { testCases, ...questionData } = question;
  const sanitizedTestCases = testCases.map((tc, index) => ({
    testCaseId: index + 1,
    input: tc.input,
    // Don't expose expectedOutput
  }));

  res.json({
    success: true,
    data: {
      ...questionData,
      testCases: sanitizedTestCases,
      testCaseCount: testCases.length,
    },
  });
};

/**
 * List all DSA questions
 */
const listDSAQuestions = (req, res) => {
  const { category, difficulty } = req.query;

  let questions = dsaQuestionRepository.findAll();

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

  // Return questions without test case details
  const questionsWithoutTestCases = questions.map(
    ({ testCases, ...q }) => ({
      ...q,
      testCaseCount: testCases.length,
    })
  );

  res.json({
    success: true,
    data: {
      total: questionsWithoutTestCases.length,
      questions: questionsWithoutTestCases,
    },
  });
};

/**
 * Get supported languages
 */
const getLanguages = (req, res) => {
  res.json({
    success: true,
    data: {
      languages: [
        { id: "cpp", name: "C++", judge0Id: 54 },
        { id: "java", name: "Java", judge0Id: 62 },
        { id: "python", name: "Python", judge0Id: 71 },
      ],
    },
  });
};

module.exports = {
  compileCode,
  runTestCases,
  validateDSACode,
  getDSAQuestion,
  listDSAQuestions,
  getLanguages,
};
