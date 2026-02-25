const interviewRepository = require("../repositories/interviewRepository");

/**
 * Get all interview details
 * @route GET /interview/list
 */
const getInterviewDetails = async (req, res, next) => {
  try {
    const interviewDetails = await interviewRepository.getInterviewDetails();

    res.json({
      success: true,
      count: interviewDetails.length,
      data: interviewDetails,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Create a new interview detail
 * @route POST /interview/create
 */
const createInterview = async (req, res, next) => {
  try {
    const {
      companyName,
      jobRole,
      jobType,
      jobUrl,
      location,
      salaryPackage,
      experienceLevel,
      eligibleBatches,
      eligibleBranches,
      interviewDate,
      registrationDeadline,
      interviewMode,
      venue,
      jobDescription,
      selectionProcess,
      status,
    } = req.body;

    const requiredFields = { companyName, jobRole, jobType, location, experienceLevel, interviewDate, interviewMode, status };
    const missingFields = Object.entries(requiredFields)
      .filter(([, value]) => !value)
      .map(([key]) => key);

    if (missingFields.length > 0) {
      return res.status(400).json({
        success: false,
        error: "Bad Request",
        message: `Missing required fields: ${missingFields.join(", ")}`,
      });
    }

    const interviewData = {
      companyName,
      jobRole,
      jobType,
      jobUrl,
      location,
      salaryPackage,
      experienceLevel,
      eligibleBatches,
      eligibleBranches,
      interviewDate,
      registrationDeadline,
      interviewMode,
      venue,
      jobDescription,
      selectionProcess,
      status,
    };

    const newInterview = await interviewRepository.createInterview(interviewData);

    res.status(201).json({
      success: true,
      message: "Interview detail created successfully",
      data: newInterview,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getInterviewDetails,
  createInterview,
};
