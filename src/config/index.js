require("dotenv").config();

module.exports = {
  port: parseInt(process.env.PORT || "3000", 10),
  nodeEnv: process.env.NODE_ENV || "development",
  mongodbUri: process.env.MONGODB_URI || "mongodb://localhost:27017/coderunner",
  clerk: {
    jwtIssuer: process.env.CLERK_JWT_ISSUER,
  },
};
