const TestDetails = require("../models/TestDetails");

/**
 * Get all test details from the database
 * @returns {Promise<Array>} Array of all test details
 */
const getAllTestDetails = async () => {
  try {
    const testDetails = await TestDetails.find({}).sort({ createdOn: -1 });
    return testDetails;
  } catch (error) {
    throw new Error(`Error fetching all test details: ${error.message}`);
  }
};

/**
 * Get test details by classId
 * @param {string} classId - The class ID
 * @returns {Promise<Array>} Array of test details for the class
 */
const getTestDetailsByClassId = async (classId) => {
  try {
    const testDetails = await TestDetails.find({ classId }).sort({ testDate: -1 });
    return testDetails;
  } catch (error) {
    throw new Error(`Error fetching test details by classId: ${error.message}`);
  }
};

/**
 * Get test details by ID
 * @param {string} id - The test details document ID
 * @returns {Promise<Object|null>} Test details or null if not found
 */
const getTestDetailsById = async (id) => {
  try {
    const testDetails = await TestDetails.findById(id);
    return testDetails;
  } catch (error) {
    throw new Error(`Error fetching test details by ID: ${error.message}`);
  }
};

/**
 * Create new test details
 * @param {Object} testDetailsData - The test details data to create
 * @returns {Promise<Object>} Created test details
 */
const createTestDetails = async (testDetailsData) => {
  try {
    const testDetails = new TestDetails(testDetailsData);
    await testDetails.save();
    return testDetails;
  } catch (error) {
    throw new Error(`Error creating test details: ${error.message}`);
  }
};

/**
 * Update test details by ID
 * @param {string} id - The test details document ID
 * @param {Object} updateData - The data to update
 * @returns {Promise<Object|null>} Updated test details or null if not found
 */
const updateTestDetails = async (id, updateData) => {
  try {
    const testDetails = await TestDetails.findByIdAndUpdate(
      id,
      { $set: updateData },
      { new: true, runValidators: true }
    );
    return testDetails;
  } catch (error) {
    throw new Error(`Error updating test details: ${error.message}`);
  }
};

/**
 * Delete test details by ID
 * @param {string} id - The test details document ID
 * @returns {Promise<Object|null>} Deleted test details or null if not found
 */
const deleteTestDetails = async (id) => {
  try {
    const testDetails = await TestDetails.findByIdAndDelete(id);
    return testDetails;
  } catch (error) {
    throw new Error(`Error deleting test details: ${error.message}`);
  }
};

/**
 * Get test details by created email
 * @param {string} email - The creator's email
 * @returns {Promise<Array>} Array of test details created by the user
 */
const getTestDetailsByCreatedEmail = async (email) => {
  try {
    const testDetails = await TestDetails.find({ 
      createdEmail: email.toLowerCase() 
    }).sort({ createdOn: -1 });
    return testDetails;
  } catch (error) {
    throw new Error(`Error fetching test details by email: ${error.message}`);
  }
};

/**
 * Check if test details exists for a given classId and testDate combination
 * @param {string} classId - The class ID
 * @param {Date} testDate - The test date
 * @returns {Promise<Object|null>} Existing test details or null if not found
 */
const getTestDetailsByClassIdAndDate = async (classId, testDate) => {
  try {
    // Normalize the date to start of day for comparison
    const startOfDay = new Date(testDate);
    startOfDay.setHours(0, 0, 0, 0);
    const endOfDay = new Date(testDate);
    endOfDay.setHours(23, 59, 59, 999);

    const testDetails = await TestDetails.findOne({
      classId,
      testDate: { $gte: startOfDay, $lte: endOfDay },
    });
    return testDetails;
  } catch (error) {
    throw new Error(`Error checking existing test details: ${error.message}`);
  }
};

module.exports = {
  getAllTestDetails,
  getTestDetailsByClassId,
  getTestDetailsById,
  createTestDetails,
  updateTestDetails,
  deleteTestDetails,
  getTestDetailsByCreatedEmail,
  getTestDetailsByClassIdAndDate,
};
