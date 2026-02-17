const testDetailsRepository = require("../repositories/testDetailsRepository");

/**
 * Get all test details
 * @route GET /test-details/list
 */
const getAllTestDetails = async (req, res, next) => {
  try {
    const testDetails = await testDetailsRepository.getAllTestDetails();

    res.json({
      success: true,
      count: testDetails.length,
      data: testDetails,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Get test details by class ID
 * @route GET /test-details/class/:classId
 */
const getTestDetailsByClassId = async (req, res, next) => {
  try {
    const { classId } = req.params;

    if (!classId) {
      return res.status(400).json({
        success: false,
        error: "Bad Request",
        message: "classId parameter is required",
      });
    }

    const testDetails = await testDetailsRepository.getTestDetailsByClassId(classId);

    res.json({
      success: true,
      count: testDetails.length,
      data: testDetails,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Get test details by ID
 * @route GET /test-details/:id
 */
const getTestDetailsById = async (req, res, next) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({
        success: false,
        error: "Bad Request",
        message: "id parameter is required",
      });
    }

    const testDetails = await testDetailsRepository.getTestDetailsById(id);

    if (!testDetails) {
      return res.status(404).json({
        success: false,
        error: "Not Found",
        message: "Test details not found for the given ID",
      });
    }

    res.json({
      success: true,
      data: testDetails,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Create new test details
 * @route POST /test-details/create
 */
const createTestDetails = async (req, res, next) => {
  try {
    const { classId, details, testDate, createdEmail, createdUser } = req.body;

    // Validate required fields
    if (!classId) {
      return res.status(400).json({
        success: false,
        error: "Bad Request",
        message: "classId is required",
      });
    }

    if (!details) {
      return res.status(400).json({
        success: false,
        error: "Bad Request",
        message: "details object is required",
      });
    }

    // Validate details structure
    if (!details.communication) {
      return res.status(400).json({
        success: false,
        error: "Bad Request",
        message: "details.communication is required",
      });
    }

    if (!testDate) {
      return res.status(400).json({
        success: false,
        error: "Bad Request",
        message: "testDate is required",
      });
    }

    if (!createdEmail) {
      return res.status(400).json({
        success: false,
        error: "Bad Request",
        message: "createdEmail is required",
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(createdEmail)) {
      return res.status(400).json({
        success: false,
        error: "Bad Request",
        message: "Invalid email format for createdEmail",
      });
    }

    if (!createdUser) {
      return res.status(400).json({
        success: false,
        error: "Bad Request",
        message: "createdUser is required",
      });
    }

    // Check if test already exists for this classId and testDate combination
    const existingTest = await testDetailsRepository.getTestDetailsByClassIdAndDate(
      classId,
      new Date(testDate)
    );

    if (existingTest) {
      return res.status(200).json({
        status: "failed",
        message: "Test is already created for this class",
      });
    }

    const testDetailsData = {
      classId,
      details: {
        communication: {
          reading: details.communication.reading || 0,
          listening: details.communication.listening || 0,
          speaking: details.communication.speaking || 0,
        },
        verbalAbility: details.verbalAbility || 0,
        aptitude: details.aptitude || 0,
        technicalCoding: details.technicalCoding || 0,
        sql: details.sql || 0,
      },
      testDate: new Date(testDate),
      createdEmail,
      createdUser,
      createdOn: new Date(),
    };

    const createdTestDetails = await testDetailsRepository.createTestDetails(testDetailsData);

    res.status(200).json({
      status: "success",
      message: "Test is created successfully",
      data: createdTestDetails,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Update test details by ID
 * @route PUT /test-details/:id
 */
const updateTestDetails = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updateData = req.body;

    if (!id) {
      return res.status(400).json({
        success: false,
        error: "Bad Request",
        message: "id parameter is required",
      });
    }

    // Check if test details exists
    const existingTestDetails = await testDetailsRepository.getTestDetailsById(id);
    if (!existingTestDetails) {
      return res.status(404).json({
        success: false,
        error: "Not Found",
        message: "Test details not found for the given ID",
      });
    }

    // Validate email format if provided
    if (updateData.createdEmail) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(updateData.createdEmail)) {
        return res.status(400).json({
          success: false,
          error: "Bad Request",
          message: "Invalid email format for createdEmail",
        });
      }
    }

    const updatedTestDetails = await testDetailsRepository.updateTestDetails(id, updateData);

    res.json({
      success: true,
      message: "Test details updated successfully",
      data: updatedTestDetails,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Delete test details by ID
 * @route DELETE /test-details/:id
 */
const deleteTestDetails = async (req, res, next) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({
        success: false,
        error: "Bad Request",
        message: "id parameter is required",
      });
    }

    const deletedTestDetails = await testDetailsRepository.deleteTestDetails(id);

    if (!deletedTestDetails) {
      return res.status(404).json({
        success: false,
        error: "Not Found",
        message: "Test details not found for the given ID",
      });
    }

    res.json({
      success: true,
      message: "Test details deleted successfully",
      data: deletedTestDetails,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Get test details by creator email
 * @route GET /test-details/by-email
 */
const getTestDetailsByEmail = async (req, res, next) => {
  try {
    const { email } = req.query;

    if (!email) {
      return res.status(400).json({
        success: false,
        error: "Bad Request",
        message: "email query parameter is required",
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        error: "Bad Request",
        message: "Invalid email format",
      });
    }

    const testDetails = await testDetailsRepository.getTestDetailsByCreatedEmail(email);

    res.json({
      success: true,
      count: testDetails.length,
      data: testDetails,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Get test details by classId and date
 * @route GET /test-details/class/:classId/date
 * @query {string} date - Test date (required)
 */
const getTestDetailsByClassIdAndDate = async (req, res, next) => {
  try {
    const { classId } = req.params;
    const { date } = req.query;

    if (!classId) {
      return res.status(400).json({
        success: false,
        error: "Bad Request",
        message: "classId parameter is required",
      });
    }

    if (!date) {
      return res.status(400).json({
        success: false,
        error: "Bad Request",
        message: "date query parameter is required",
      });
    }

    // Validate date format
    const parsedDate = new Date(date);
    if (isNaN(parsedDate.getTime())) {
      return res.status(400).json({
        success: false,
        error: "Bad Request",
        message: "Invalid date format. Use ISO 8601 format (e.g., 2026-01-29)",
      });
    }

    const testDetails = await testDetailsRepository.getTestDetailsByClassIdAndDate(
      classId,
      parsedDate
    );

    if (!testDetails) {
      return res.status(404).json({
        success: false,
        error: "Not Found",
        message: "Test details not found for the given classId and date",
      });
    }

    res.json({
      success: true,
      data: testDetails,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllTestDetails,
  getTestDetailsByClassId,
  getTestDetailsById,
  createTestDetails,
  updateTestDetails,
  deleteTestDetails,
  getTestDetailsByEmail,
  getTestDetailsByClassIdAndDate,
};
