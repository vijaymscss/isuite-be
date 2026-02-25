const mongoose = require("mongoose");

const jobDescriptionSchema = new mongoose.Schema(
  {
    summary: { type: String },
    responsibilities: { type: [String], default: [] },
    requirements: { type: [String], default: [] },
    preferredSkills: { type: [String], default: [] },
  },
  { _id: false }
);

const interviewDetailSchema = new mongoose.Schema(
  {
    companyName: { type: String },
    jobRole: { type: String },
    jobType: { type: String },
    jobUrl: { type: String },
    location: { type: String },
    salaryPackage: { type: String },
    experienceLevel: { type: String },
    eligibleBatches: { type: [String], default: [] },
    eligibleBranches: { type: [String], default: [] },
    interviewDate: { type: Date },
    registrationDeadline: { type: Date },
    interviewMode: { type: String },
    venue: { type: String },
    jobDescription: { type: jobDescriptionSchema },
    selectionProcess: { type: [String], default: [] },
    status: { type: String },
  },
  { _id: false }
);

const contentSchema = new mongoose.Schema(
  {
    interview_details: { type: [interviewDetailSchema], default: [] },
  },
  {
    collection: "content",
    strict: false,
  }
);

module.exports = mongoose.model("Content", contentSchema);
