const mongoose = require("mongoose");

// Schema for communication details
const communicationSchema = new mongoose.Schema(
  {
    reading: {
      type: Number,
      required: true,
      default: 0,
    },
    listening: {
      type: Number,
      required: true,
      default: 0,
    },
    speaking: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  { _id: false }
);

// Schema for test details breakdown
const detailsSchema = new mongoose.Schema(
  {
    communication: {
      type: communicationSchema,
      required: true,
    },
    verbalAbility: {
      type: Number,
      required: true,
      default: 0,
    },
    aptitude: {
      type: Number,
      required: true,
      default: 0,
    },
    technicalCoding: {
      type: Number,
      required: true,
      default: 0,
    },
    sql: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  { _id: false }
);

// Main TestDetails schema
const testDetailsSchema = new mongoose.Schema(
  {
    classId: {
      type: String,
      required: true,
      trim: true,
    },
    details: {
      type: detailsSchema,
      required: true,
    },
    testDate: {
      type: Date,
      required: true,
    },
    createdEmail: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    createdUser: {
      type: String,
      required: true,
      trim: true,
    },
    createdOn: {
      type: Date,
      required: true,
      default: Date.now,
    },
  },
  {
    timestamps: true,
    collection: "test_details",
  }
);

// Index for efficient queries
testDetailsSchema.index({ classId: 1 });
testDetailsSchema.index({ createdEmail: 1 });
testDetailsSchema.index({ testDate: 1 });

const TestDetails = mongoose.model("TestDetails", testDetailsSchema);

module.exports = TestDetails;
