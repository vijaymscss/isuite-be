const express = require("express");
const API = require("../config/apiNames");
const { requireAuth } = require("../middleware/auth");
const sqlController = require("../controllers/sqlController");

const router = express.Router();

// Apply authentication to all SQL routes
router.use(requireAuth);

/**
 * @route   POST /sql/validate
 * @desc    Validate user SQL query against test cases
 * @access  Private (requires JWT)
 * @body    { question_id: string, userQuery: string }
 */
router.post(API.SQL.VALIDATE, sqlController.validateQuery);

/**
 * @route   GET /sql/questions
 * @desc    List all SQL questions
 * @access  Public
 * @query   category, difficulty (optional filters)
 */
router.get(API.SQL.QUESTIONS, sqlController.listQuestions);

/**
 * @route   GET /sql/questions/:questionId
 * @desc    Get a specific SQL question by ID
 * @access  Public
 */
router.get(API.SQL.QUESTION_BY_ID, sqlController.getQuestion);

module.exports = router;
