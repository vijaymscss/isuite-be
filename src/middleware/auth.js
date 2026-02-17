const { ClerkExpressRequireAuth } = require("@clerk/clerk-sdk-node");

/**
 * Clerk authentication middleware
 * Requires valid JWT token in Authorization header
 */
const clerkAuth = ClerkExpressRequireAuth();

const requireAuth = (req, res, next) => {
  clerkAuth(req, res, (err) => {
    if (err) {
      return next(err);
    }
    next();
  });
};

module.exports = {
  requireAuth,
};
