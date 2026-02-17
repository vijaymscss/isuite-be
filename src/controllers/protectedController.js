/**
 * Protected endpoint - requires authentication
 */
const getProtectedData = (req, res) => {
  res.json({
    success: true,
    message: "You are authenticated",
    data: {
      userId: req.auth.userId,
    },
  });
};

/**
 * Get current user profile
 */
const getUserProfile = (req, res) => {
  res.json({
    success: true,
    data: {
      userId: req.auth.userId,
      sessionId: req.auth.sessionId,
    },
  });
};

module.exports = {
  getProtectedData,
  getUserProfile,
};
