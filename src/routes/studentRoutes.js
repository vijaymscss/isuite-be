const express = require("express");
const API = require("../config/apiNames");
const { requireAuth } = require("../middleware/auth");
const studentController = require("../controllers/studentController");

const router = express.Router();

// Public route (no authentication required)
router.post(API.STUDENT.MODULE_ASSESSMENT, studentController.addModuleAssessment);

// Apply authentication middleware to all remaining routes in this router
router.use(requireAuth);

/**
 * @route   GET /student/list
 * @desc    Get all students
 * @access  Private (requires JWT authentication)
 * @header  Authorization: Bearer <jwt_token>
 * 
 * @example
 * GET /api/student/list
 * 
 * Sample Request:
 * curl -X GET "http://localhost:4000/api/student/list" \
 *   -H "Authorization: Bearer <your_jwt_token>"
 * 
 * Sample Response:
 * {
 *   "success": true,
 *   "count": 2,
 *   "data": [
 *     {
 *       "emailId": "john.doe@example.com",
 *       "firstName": "John",
 *       "lastName": "Doe",
 *       ...
 *     }
 *   ]
 * }
 */
router.get(API.STUDENT.LIST, studentController.getAllStudents);

/**
 * @route   GET /student/profile
 * @desc    Get student profile by email ID
 * @access  Private (requires JWT authentication)
 * @header  Authorization: Bearer <jwt_token>
 * @query   emailId - Student's email address (required)
 * 
 * @example
 * GET /api/student/profile?emailId=john.doe@example.com
 * 
 * Sample Request:
 * curl -X GET "http://localhost:3000/api/student/profile?emailId=john.doe@example.com" \
 *   -H "Authorization: Bearer <your_jwt_token>"
 * 
 * Sample Response:
 * {
 *   "success": true,
 *   "data": {
 *     "emailId": "john.doe@example.com",
 *     "firstName": "John",
 *     "lastName": "Doe",
 *     "phoneNumber": "+1234567890",
 *     "enrollmentDate": "2025-01-15T00:00:00.000Z",
 *     "courses": ["JavaScript", "Python", "Data Structures"],
 *     "status": "active",
 *     "createdAt": "2025-01-15T10:30:00.000Z",
 *     "updatedAt": "2025-01-15T10:30:00.000Z"
 *   }
 * }
 */
router.get(API.STUDENT.GET_PROFILE, studentController.getStudentProfile);

/**
 * @route   POST /student/communication-score
 * @desc    Add communication score (reading, listening, or speaking)
 * @access  Private (requires JWT authentication)
 * @header  Authorization: Bearer <jwt_token>
 * @body    { emailId, communicationType, scoreData: { testId, dateTime, score } }
 * 
 * @example
 * POST /api/student/communication-score
 * 
 * Sample Request:
 * curl -X POST "http://localhost:4000/api/student/communication-score" \
 *   -H "Authorization: Bearer <your_jwt_token>" \
 *   -H "Content-Type: application/json" \
 *   -d '{
 *     "emailId": "vijayakumar.mscss@gmail.com",
 *     "communicationType": "reading",
 *     "scoreData": {
 *       "testId": "TEST001",
 *       "dateTime": "2026-01-11T10:30:00.000Z",
 *       "score": 85
 *     }
 *   }'
 * 
 * Sample Response:
 * {
 *   "success": true,
 *   "message": "reading score added successfully",
 *   "data": {
 *     "emailID": "vijayakumar.mscss@gmail.com",
 *     "communicationType": "reading",
 *     "addedScore": { "testId": "TEST001", "dateTime": "2026-01-11T10:30:00.000Z", "score": 85 },
 *     "updatedCommunication": { "reading": [...], "listening": [...], "speaking": [...] }
 *   }
 * }
 */
router.post(API.STUDENT.COMMUNICATION_SCORE, studentController.addCommunicationScore);

/**
 * @route   POST /student/speaking-score
 * @desc    Evaluate speaking text using Gemini AI and save score
 * @access  Private (requires JWT authentication)
 * @header  Authorization: Bearer <jwt_token>
 * @body    { topic, spokenData, emailId }
 * 
 * @example
 * POST /api/student/speaking-score
 * 
 * Sample Request:
 * curl -X POST "http://localhost:4000/api/student/speaking-score" \
 *   -H "Authorization: Bearer <your_jwt_token>" \
 *   -H "Content-Type: application/json" \
 *   -d '{
 *     "topic": "The importance of technology in education",
 *     "spokenData": "Technology has revolutionized the way we learn...",
 *     "emailId": "vijayakumar.mscss@gmail.com"
 *   }'
 * 
 * Sample Response:
 * {
 *   "score": 75,
 *   "feedback": [
 *     "Good topic relevance but could expand on specific examples",
 *     "Minor grammatical errors in sentence structure",
 *     "Consider adding more content to meet the 150 word minimum"
 *   ]
 * }
 */
router.post(API.STUDENT.SPEAKING_SCORE, studentController.getSpeakingScore);

/**
 * @route   POST /student/verbal-ability-score
 * @desc    Add verbal ability score to student profile
 * @access  Private (requires JWT authentication)
 * @header  Authorization: Bearer <jwt_token>
 * @body    { emailId, testId, dateTime, module, score }
 * 
 * @example
 * POST /api/student/verbal-ability-score
 * 
 * Sample Request:
 * curl -X POST "http://localhost:4000/api/student/verbal-ability-score" \
 *   -H "Authorization: Bearer <your_jwt_token>" \
 *   -H "Content-Type: application/json" \
 *   -d '{
 *     "emailId": "vijayakumar.mscss@gmail.com",
 *     "testId": "VA-001",
 *     "dateTime": "2026-01-14T10:30:00.000Z",
 *     "module": "Vocabulary",
 *     "score": 77
 *   }'
 * 
 * Sample Response:
 * {
 *   "success": true,
 *   "message": "Verbal ability score added successfully",
 *   "data": {
 *     "emailID": "vijayakumar.mscss@gmail.com",
 *     "addedScore": { "testId": "VA-001", "dateTime": "2026-01-14T10:30:00.000Z", "module": "Vocabulary", "score": 77 },
 *     "updatedVerbalAbility": [...]
 *   }
 * }
 */
router.post(API.STUDENT.VERBAL_ABILITY_SCORE, studentController.addVerbalAbilityScore);

/**
 * @route   POST /student/aptitude-score
 * @desc    Add aptitude score to student profile
 * @access  Private (requires JWT authentication)
 * @header  Authorization: Bearer <jwt_token>
 * @body    { emailId, testId, dateTime, module, score }
 * 
 * @example
 * POST /api/student/aptitude-score
 * 
 * Sample Request:
 * curl -X POST "http://localhost:4000/api/student/aptitude-score" \
 *   -H "Authorization: Bearer <your_jwt_token>" \
 *   -H "Content-Type: application/json" \
 *   -d '{
 *     "emailId": "vijayakumar.mscss@gmail.com",
 *     "testId": "QA-001",
 *     "dateTime": "2026-01-14T10:30:00.000Z",
 *     "module": "Quantitative Aptitude",
 *     "score": 77
 *   }'
 * 
 * Sample Response:
 * {
 *   "success": true,
 *   "message": "Aptitude score added successfully",
 *   "data": {
 *     "emailID": "vijayakumar.mscss@gmail.com",
 *     "addedScore": { "testId": "QA-001", "dateTime": "2026-01-14T10:30:00.000Z", "module": "Quantitative Aptitude", "score": 77 },
 *     "updatedAptitude": [...]
 *   }
 * }
 */
router.post(API.STUDENT.APTITUDE_SCORE, studentController.addAptitudeScore);

/**
 * @route   GET /student/complete-details
 * @desc    Get complete student details by email ID
 * @access  Private (requires JWT authentication)
 * @header  Authorization: Bearer <jwt_token>
 * @query   emailId - Student's email address (required)
 * 
 * @example
 * GET /api/student/complete-details?emailId=vijayakumar.mscss@gmail.com
 * 
 * Sample Response:
 * {
 *   "success": true,
 *   "data": {
 *     "_id": "69630bbb6d527a687cff0376",
 *     "rollNo": "PSG24CSE001",
 *     "name": "Vijaya kumar",
 *     "college": "PSG-Tech",
 *     "department": "CSE",
 *     "rootDept": "Computer Science",
 *     "emailID": "vijayakumar.mscss@gmail.com",
 *     "year": 1,
 *     "classId": "PSGTCSE1",
 *     "role": ["student"],
 *     "dsa": [...],
 *     "sql": [...],
 *     "practice": {...},
 *     "moduleAssessment": {...},
 *     "today": {...}
 *   }
 * }
 */
router.get(API.STUDENT.COMPLETE_DETAILS, studentController.getCompleteStudentDetails);

/**
 * @route   PUT /student/update-today
 * @desc    Update today's data (speaking count and dailyChallenge status)
 * @access  Private (requires JWT authentication)
 * @header  Authorization: Bearer <jwt_token>
 * @body    { emailId, speaking?, dailyChallenge? }
 * 
 * @example
 * PUT /api/student/update-today
 * 
 * Sample Request:
 * curl -X PUT "http://localhost:4000/api/student/update-today" \
 *   -H "Authorization: Bearer <your_jwt_token>" \
 *   -H "Content-Type: application/json" \
 *   -d '{
 *     "emailId": "vijayakumar.mscss@gmail.com",
 *     "speaking": 4,
 *     "dailyChallenge": false
 *   }'
 * 
 * Sample Response:
 * {
 *   "success": true,
 *   "message": "Today's data updated successfully",
 *   "data": {
 *     "emailID": "vijayakumar.mscss@gmail.com",
 *     "today": {
 *       "date": "2026-02-09T18:30:00.000Z",
 *       "speaking": 4,
 *       "dailyChallenge": false,
 *       "_id": "698b251f7adad15692651cdf"
 *     }
 *   }
 * }
 */
router.put(API.STUDENT.UPDATE_TODAY, studentController.updateToday);

module.exports = router;
