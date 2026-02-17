const express = require("express");
const API = require("../config/apiNames");
const { requireAuth } = require("../middleware/auth");
const protectedController = require("../controllers/protectedController");

const router = express.Router();

// Apply authentication middleware to all routes in this router
router.use(requireAuth);

/**
 * @route   GET /protected
 * @desc    Protected endpoint
 * @access  Private
 */
router.get(API.PROTECTED.ROOT, protectedController.getProtectedData);

/**
 * @route   GET /protected/profile
 * @desc    Get user profile
 * @access  Private
 */
router.get(API.PROTECTED.PROFILE, protectedController.getUserProfile);

module.exports = router;
