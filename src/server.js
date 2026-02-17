const app = require("./app");
const config = require("./config");
const { connectDB } = require("./config/database");

const startServer = async () => {
  console.log("🚀 Starting server...");
  
  // Connect to MongoDB
  console.log("📡 Connecting to MongoDB...");
  await connectDB();
  console.log("✅ MongoDB connected successfully");

  app.listen(config.port, () => {
    console.log(`🎉 Server is running on port ${config.port}`);
    console.log(`🔗 API available at http://localhost:${config.port}`);
  });
};

// Handle uncaught exceptions
process.on("uncaughtException", (err) => {
  console.error("Uncaught Exception:", err);
  process.exit(1);
});

// Handle unhandled promise rejections
process.on("unhandledRejection", (err) => {
  console.error("Unhandled Rejection:", err);
  process.exit(1);
});

startServer();
