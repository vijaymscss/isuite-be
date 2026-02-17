const config = require("../config");

/**
 * Global error handler middleware
 */
const errorHandler = (err, req, res, next) => {
  console.error(`[Error] ${err.message}`, err.stack);

  // Handle Clerk authentication errors
  if (err.status === 401 || err.statusCode === 401) {
    return res.status(401).json({
      success: false,
      error: "Unauthorized",
      message: "Authentication required",
    });
  }

  // Handle validation errors
  if (err.name === "ValidationError") {
    return res.status(400).json({
      success: false,
      error: "Validation Error",
      message: err.message,
    });
  }

  // Default error response
  const statusCode = err.status || err.statusCode || 500;
  res.status(statusCode).json({
    success: false,
    error: config.nodeEnv === "production" ? "Internal Server Error" : err.message,
    ...(config.nodeEnv !== "production" && { stack: err.stack }),
  });
};

/**
 * 404 Not Found handler
 */
const notFoundHandler = (req, res) => {
  res.status(404).json({
    success: false,
    error: "Not Found",
    message: `Route ${req.method} ${req.originalUrl} not found`,
  });
};

module.exports = {
  errorHandler,
  notFoundHandler,
};
