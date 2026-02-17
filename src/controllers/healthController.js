/**
 * Health check endpoint
 */
const healthCheck = (req, res) => {
  res.status(200).json({
    success: true,
    message: "Server is running",
    data: {
      timestamp: new Date().toISOString(),
    },
  });
};

/**
 * Simple test endpoint
 */
const test = (req, res) => {
  res.status(200).send("hello");
};

module.exports = {
  healthCheck,
  test,
};
