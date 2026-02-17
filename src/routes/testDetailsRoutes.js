const express = require("express");
const API = require("../config/apiNames");
const { requireAuth } = require("../middleware/auth");
const testDetailsController = require("../controllers/testDetailsController");

const router = express.Router();

// Apply authentication middleware to all routes in this router
router.use(requireAuth);

/**
 * @route   GET /test-details/list
 * @desc    Get all test details
 * @access  Private (requires JWT authentication)
 * @header  Authorization: Bearer <jwt_token>
 *
 * @example
 * GET /api/test-details/list
 *
 * Sample Request:
 * curl -X GET "http://localhost:4000/api/test-details/list" \
 *   -H "Authorization: Bearer <your_jwt_token>"
 *
 * Sample Response:
 * {
 *   "success": true,
 *   "count": 1,
 *   "data": [...]
 * }
 */
router.get(API.TEST_DETAILS.LIST, testDetailsController.getAllTestDetails);

/**
 * @route   GET /test-details/by-email
 * @desc    Get test details by creator email
 * @access  Private (requires JWT authentication)
 * @header  Authorization: Bearer <jwt_token>
 * @query   email - Creator's email address (required)
 *
 * @example
 * GET /api/test-details/by-email?email=teacher@example.com
 */
router.get(API.TEST_DETAILS.BY_EMAIL, testDetailsController.getTestDetailsByEmail);

/**
 * @route   GET /test-details/class/:classId
 * @desc    Get test details by class ID
 * @access  Private (requires JWT authentication)
 * @header  Authorization: Bearer <jwt_token>
 *
 * @example
 * GET /api/test-details/class/CLASS-001
 */
router.get(API.TEST_DETAILS.BY_CLASS, testDetailsController.getTestDetailsByClassId);

/**
 * @route   GET /test-details/class/:classId/date
 * @desc    Get test details by class ID and date
 * @access  Private (requires JWT authentication)
 * @header  Authorization: Bearer <jwt_token>
 * @query   date - Test date in ISO format (required)
 *
 * @example
 * GET /api/test-details/class/CLASS-001/date?date=2026-01-29
 *
 * Sample Response:
 * {
 *   "success": true,
 *   "data": {...}
 * }
 */
router.get(API.TEST_DETAILS.BY_CLASS_AND_DATE, testDetailsController.getTestDetailsByClassIdAndDate);

/**
 * @route   GET /test-details/:id
 * @desc    Get test details by ID
 * @access  Private (requires JWT authentication)
 * @header  Authorization: Bearer <jwt_token>
 *
 * @example
 * GET /api/test-details/60d5ecb8b4e6d532c4f0a1b2
 */
router.get(API.TEST_DETAILS.BY_ID, testDetailsController.getTestDetailsById);

/**
 * @route   POST /test-details/create
 * @desc    Create new test details
 * @access  Private (requires JWT authentication)
 * @header  Authorization: Bearer <jwt_token>
 *
 * @example
 * POST /api/test-details/create
 *
 * Sample Request Body:
 * {
 *   "classId": "CLASS-001",
 *   "details": {
 *     "communication": {
 *       "reading": 10,
 *       "listening": 10,
 *       "speaking": 2
 *     },
 *     "verbalAbility": 10,
 *     "aptitude": 10,
 *     "technicalCoding": 2,
 *     "sql": 2
 *   },
 *   "testDate": "2026-01-22",
 *   "createdEmail": "teacher@example.com",
 *   "createdUser": "John Doe"
 * }
 *
 * Sample Response:
 * {
 *   "success": true,
 *   "message": "Test details created successfully",
 *   "data": {...}
 * }
 */
router.post(API.TEST_DETAILS.CREATE, testDetailsController.createTestDetails);

/**
 * @route   PUT /test-details/:id
 * @desc    Update test details by ID
 * @access  Private (requires JWT authentication)
 * @header  Authorization: Bearer <jwt_token>
 *
 * @example
 * PUT /api/test-details/60d5ecb8b4e6d532c4f0a1b2
 */
router.put(API.TEST_DETAILS.BY_ID, testDetailsController.updateTestDetails);

/**
 * @route   DELETE /test-details/:id
 * @desc    Delete test details by ID
 * @access  Private (requires JWT authentication)
 * @header  Authorization: Bearer <jwt_token>
 *
 * @example
 * DELETE /api/test-details/60d5ecb8b4e6d532c4f0a1b2
 */
router.delete(API.TEST_DETAILS.BY_ID, testDetailsController.deleteTestDetails);

module.exports = router;
