/**
 * Centralized API Route Names Configuration
 * All API endpoint paths are defined here for consistency and maintainability
 */

module.exports = {
  // Base paths for route mounting
  BASE: {
    API: "/api",
    HEALTH: "/",
    PROTECTED: "/protected",
    SQL: "/sql",
    CODE: "/code",
    STUDENT: "/student",
    TEST_DETAILS: "/test-details",
  },

  // Health routes
  HEALTH: {
    CHECK: "/",
    TEST: "/test",
  },

  // Student routes
  STUDENT: {
    LIST: "/list",
    GET_PROFILE: "/profile",
    COMPLETE_DETAILS: "/complete-details",
    COMMUNICATION_SCORE: "/communication-score",
    SPEAKING_SCORE: "/speaking-score",
    VERBAL_ABILITY_SCORE: "/verbal-ability-score",
    APTITUDE_SCORE: "/aptitude-score",
    MODULE_ASSESSMENT: "/module-assessment",
    UPDATE_TODAY: "/update-today",
  },

  // Test Details routes
  TEST_DETAILS: {
    LIST: "/list",
    CREATE: "/create",
    BY_ID: "/:id",
    BY_CLASS: "/class/:classId",
    BY_CLASS_AND_DATE: "/class/:classId/date",
    BY_EMAIL: "/by-email",
  },

  // Protected routes
  PROTECTED: {
    ROOT: "/",
    PROFILE: "/profile",
  },

  // SQL routes
  SQL: {
    VALIDATE: "/validate",
    QUESTIONS: "/questions",
    QUESTION_BY_ID: "/questions/:questionId",
  },

  // Code routes
  CODE: {
    COMPILE: "/compile",
    RUN_TESTS: "/run-tests",
    VALIDATE: "/validate",
    QUESTIONS: "/questions",
    QUESTION_BY_ID: "/questions/:questionId",
    LANGUAGES: "/languages",
  },

  // Parameter placeholders (for documentation/reference)
  PARAMS: {
    ID: ":id",
    QUESTION_ID: ":questionId",
  },
};
