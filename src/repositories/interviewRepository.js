const Content = require("../models/Content");

/**
 * Get interview details from the content collection
 * @returns {Promise<Array>} Array of interview details
 */
const getInterviewDetails = async () => {
  try {
    const result = await Content.findOne(
      {},
      { interview_details: 1, _id: 0 }
    );
    return result ? result.interview_details : [];
  } catch (error) {
    throw new Error(`Error fetching interview details: ${error.message}`);
  }
};

/**
 * Create a new interview detail and push it to the content collection
 * @param {Object} interviewData - The interview detail object to add
 * @returns {Promise<Object>} The newly added interview detail
 */
const createInterview = async (interviewData) => {
  try {
    let content = await Content.findOne({});

    if (!content) {
      content = new Content({ interview_details: [interviewData] });
    } else {
      content.interview_details.push(interviewData);
    }

    await content.save();

    return content.interview_details[content.interview_details.length - 1];
  } catch (error) {
    throw new Error(`Error creating interview detail: ${error.message}`);
  }
};

module.exports = {
  getInterviewDetails,
  createInterview,
};
