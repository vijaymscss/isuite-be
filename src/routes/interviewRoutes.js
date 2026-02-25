const express = require("express");
const API = require("../config/apiNames");
const interviewController = require("../controllers/interviewController");

const router = express.Router();

/**
 * @route   GET /interview/list
 * @desc    Get all interview details from the content collection
 * @access  Public
 *
 * @example
 * GET /api/interview/list
 *
 * Sample Response:
 * {
 *   "success": true,
 *   "count": 3,
 *   "data": [
 *     {
 *       "companyName": "TCS",
 *       "jobRole": "Software Engineer",
 *       ...
 *     }
 *   ]
 * }
 */
router.get(API.INTERVIEW.LIST, interviewController.getInterviewDetails);

/**
 * @route   POST /interview/create
 * @desc    Create a new interview detail
 * @access  Public
 *
 * @example
 * POST /api/interview/create
 * Body:
 * {
 *   "companyName": "TCS",
 *   "jobRole": "Software Engineer",
 *   "jobType": "Full-time",
 *   "jobUrl": "https://tcs.com/careers/123",
 *   "location": "Chennai",
 *   "salaryPackage": "3.6 LPA",
 *   ...
 * }
 */
router.post(API.INTERVIEW.CREATE, interviewController.createInterview);

module.exports = router;
