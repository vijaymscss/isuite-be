const express = require("express");
const router = express.Router();
const API = require("../config/apiNames");
const codeController = require("../controllers/codeController");

// POST /api/code/compile - Compile and run code
router.post(API.CODE.COMPILE, codeController.compileCode);

// POST /api/code/run-tests - Run code with custom test cases
router.post(API.CODE.RUN_TESTS, codeController.runTestCases);

// POST /api/code/validate - Validate DSA code against question test cases
router.post(API.CODE.VALIDATE, codeController.validateDSACode);

// GET /api/code/questions - List all DSA questions
router.get(API.CODE.QUESTIONS, codeController.listDSAQuestions);

// GET /api/code/questions/:questionId - Get DSA question by ID
router.get(API.CODE.QUESTION_BY_ID, codeController.getDSAQuestion);

// GET /api/code/languages - Get supported languages
router.get(API.CODE.LANGUAGES, codeController.getLanguages);

module.exports = router;
