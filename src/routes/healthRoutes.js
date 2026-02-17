const express = require("express");
const API = require("../config/apiNames");
const healthController = require("../controllers/healthController");

const router = express.Router();

/**
 * @route   GET /health
 * @desc    Health check endpoint
 * @access  Public
 */
router.get(API.HEALTH.CHECK, healthController.healthCheck);

/**
 * @route   GET /test
 * @desc    Simple test endpoint
 * @access  Public
 */
router.get(API.HEALTH.TEST, healthController.test);

module.exports = router;
