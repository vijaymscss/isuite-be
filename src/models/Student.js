const mongoose = require("mongoose");

// Schema for score data (reusable for reading, listening, etc.)
const scoreSchema = new mongoose.Schema(
  {
    testId: {
      type: String,
      required: true,
    },
    dateTime: {
      type: Date,
      required: true,
    },
    score: {
      type: Number,
      required: true,
    },
  },
  { _id: false }
);

// Schema for speaking score (includes topic and feedback)
const speakingScoreSchema = new mongoose.Schema(
  {
    testId: {
      type: String,
      required: true,
    },
    dateTime: {
      type: Date,
      required: true,
    },
    topic: {
      type: String,
      required: true,
    },
    score: {
      type: Number,
      required: true,
    },
    feedback: {
      type: [String],
      default: [],
    },
  },
  { _id: false }
);

// Schema for verbal ability score (includes module)
const verbalAbilityScoreSchema = new mongoose.Schema(
  {
    testId: {
      type: String,
      required: true,
    },
    dateTime: {
      type: Date,
      required: true,
    },
    module: {
      type: String,
      required: true,
    },
    score: {
      type: Number,
      required: true,
    },
  },
  { _id: false }
);

// Schema for aptitude score (includes module)
const aptitudeScoreSchema = new mongoose.Schema(
  {
    testId: {
      type: String,
      required: true,
    },
    dateTime: {
      type: Date,
      required: true,
    },
    module: {
      type: String,
      required: true,
    },
    score: {
      type: Number,
      required: true,
    },
  },
  { _id: false }
);

// Schema for communication practice
const communicationSchema = new mongoose.Schema(
  {
    reading: [scoreSchema],
    listening: [scoreSchema],
    speaking: [speakingScoreSchema],
  },
  { _id: false }
);

// Schema for practice section
const practiceSchema = new mongoose.Schema(
  {
    communication: {
      type: communicationSchema,
      default: () => ({ reading: [], listening: [], speaking: [] }),
    },
    verbalAbility: [verbalAbilityScoreSchema],
    aptitude: [aptitudeScoreSchema],
  },
  { _id: false }
);

// Schema for module assessment split scores (for communication)
const assessmentSplitSchema = new mongoose.Schema(
  {
    questionCount: {
      type: Number,
      required: true,
    },
    correctAns: {
      type: Number,
      required: true,
    },
    score: {
      type: Number,
      required: true,
    },
  },
  { _id: false }
);

// Schema for communication assessment splits
const communicationSplitsSchema = new mongoose.Schema(
  {
    reading: assessmentSplitSchema,
    listening: assessmentSplitSchema,
    speaking: assessmentSplitSchema,
  },
  { _id: false }
);

// Schema for module assessment data (verbalAbility, quantitativeAptitude)
const moduleAssessmentDataSchema = new mongoose.Schema(
  {
    time: {
      type: Date,
      required: true,
    },
    questionCount: {
      type: Number,
      required: true,
    },
    correctAns: {
      type: Number,
      required: true,
    },
    score: {
      type: Number,
      required: true,
    },
  },
  { _id: false }
);

// Schema for communication assessment data (includes splits)
const communicationAssessmentDataSchema = new mongoose.Schema(
  {
    time: {
      type: Date,
      required: true,
    },
    questionCount: {
      type: Number,
      required: true,
    },
    correctAns: {
      type: Number,
      required: true,
    },
    score: {
      type: Number,
      required: true,
    },
    splits: communicationSplitsSchema,
  },
  { _id: false }
);

// Schema for module assessment section
const moduleAssessmentSchema = new mongoose.Schema(
  {
    verbalAbility: [moduleAssessmentDataSchema],
    quantitativeAptitude: [moduleAssessmentDataSchema],
    communication: [communicationAssessmentDataSchema],
  },
  { _id: false }
);

// Schema for SQL solution data
const sqlSolutionSchema = new mongoose.Schema(
  {
    questionId: {
      type: String,
      required: true,
    },
    dateTime: {
      type: Date,
      required: true,
    },
    query: {
      type: String,
      required: true,
    },
    difficulty: {
      type: String,
      required: true,
    },
  },
  { _id: false }
);

// Schema for DSA solution data
const dsaSolutionSchema = new mongoose.Schema(
  {
    questionId: {
      type: String,
      required: true,
    },
    difficulty: {
      type: String,
      required: true,
    },
    dateTime: {
      type: Date,
      required: true,
    },
    code: {
      type: String,
      required: true,
    },
  },
  { _id: false }
);

const studentSchema = new mongoose.Schema(
  {
    rollNo: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    classId: {
      type: String,
      required: true,
      trim: false,
    },
    college: {
      type: String,
      trim: true,
    },
    department: {
      type: String,
      trim: true,
    },
    rootDept: {
      type: String,
      trim: true,
    },
    emailID: {
      type: String,
      required: true,
      trim: true,
    },
    year: {
      type: Number,
    },
    role: {
      type: [String],
      default: [],
    },
    dsa: [dsaSolutionSchema],
    practice: {
      type: practiceSchema,
      default: () => ({
        communication: { reading: [], listening: [], speaking: [] },
        verbalAbility: [],
        aptitude: [],
      }),
    },
    moduleAssessment: {
      type: moduleAssessmentSchema,
      default: () => ({
        verbalAbility: [],
        quantitativeAptitude: [],
        communication: [],
      }),
    },
    sql: [sqlSolutionSchema],
    today: {
      type: {
        date: {
          type: Date,
        },
        speaking: {
          type: Number,
          default: 5,
        },
        dailyChallenge: {
          type: Boolean,
          default: true,
        },
      },
      default: () => ({
        date: new Date(),
        speaking: 3,
        dailyChallenge: false,
      }),
    },
  },
  {
    timestamps: false,
    collection: "student_data",
  }
);

// Index for faster email lookups
studentSchema.index({ emailID: 1 });

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;
