const Student = require("../models/Student");

/**
 * Get all students from the database
 * @returns {Promise<Array>} Array of all student profiles
 */
const getAllStudents = async () => {
  try {
    const students = await Student.find({}).sort({ rollNo: 1 });
    return students;
  } catch (error) {
    throw new Error(`Error fetching all students: ${error.message}`);
  }
};

/**
 * Get student profile by email ID
 * @param {string} emailID - The email ID of the student
 * @returns {Promise<Object|null>} Student profile data or null if not found
 */
const getStudentByEmail = async (emailID) => {
  try {
    const student = await Student.findOne({ emailID: emailID.toLowerCase() });
    return student;
  } catch (error) {
    throw new Error(`Error fetching student profile: ${error.message}`);
  }
};

/**
 * Create a new student profile
 * @param {Object} studentData - The student data to create
 * @returns {Promise<Object>} Created student profile
 */
const createStudent = async (studentData) => {
  try {
    const student = new Student(studentData);
    await student.save();
    return student;
  } catch (error) {
    throw new Error(`Error creating student profile: ${error.message}`);
  }
};

/**
 * Update student profile by email ID
 * @param {string} emailID - The email ID of the student
 * @param {Object} updateData - The data to update
 * @returns {Promise<Object|null>} Updated student profile or null if not found
 */
const updateStudentByEmail = async (emailID, updateData) => {
  try {
    const student = await Student.findOneAndUpdate(
      { emailID: emailID.toLowerCase() },
      updateData,
      { new: true, runValidators: true }
    );
    return student;
  } catch (error) {
    throw new Error(`Error updating student profile: ${error.message}`);
  }
};

/**
 * Add communication score to student profile
 * @param {string} emailID - The email ID of the student
 * @param {string} communicationType - Type of communication (reading, listening, speaking)
 * @param {Object} scoreData - The score data { testId, dateTime, score }
 * @returns {Promise<Object|null>} Updated student profile or null if not found
 */
const addCommunicationScore = async (emailID, communicationType, scoreData) => {
  try {
    const validTypes = ["reading", "listening", "speaking"];
    if (!validTypes.includes(communicationType)) {
      throw new Error(`Invalid communication type. Must be one of: ${validTypes.join(", ")}`);
    }

    const updatePath = `practice.communication.${communicationType}`;
    
    const student = await Student.findOneAndUpdate(
      { emailID: emailID.toLowerCase() },
      { $push: { [updatePath]: scoreData } },
      { new: true, runValidators: true }
    );
    return student;
  } catch (error) {
    throw new Error(`Error adding communication score: ${error.message}`);
  }
};

/**
 * Add speaking score with topic to student profile
 * @param {string} emailID - The email ID of the student
 * @param {Object} speakingData - The speaking data { testId, dateTime, topic, score }
 * @returns {Promise<Object|null>} Updated student profile or null if not found
 */
const addSpeakingScore = async (emailID, speakingData) => {
  try {
    const student = await Student.findOneAndUpdate(
      { emailID: emailID.toLowerCase() },
      { $push: { "practice.communication.speaking": speakingData } },
      { new: true, runValidators: true }
    );
    return student;
  } catch (error) {
    throw new Error(`Error adding speaking score: ${error.message}`);
  }
};

/**
 * Add verbal ability score to student profile
 * @param {string} emailID - The email ID of the student
 * @param {Object} verbalAbilityData - The verbal ability data { testId, dateTime, module, score }
 * @returns {Promise<Object|null>} Updated student profile or null if not found
 */
const addVerbalAbilityScore = async (emailID, verbalAbilityData) => {
  try {
    const student = await Student.findOneAndUpdate(
      { emailID: emailID.toLowerCase() },
      { $push: { "practice.verbalAbility": verbalAbilityData } },
      { new: true, runValidators: true }
    );
    
    return student;
  } catch (error) {
    throw new Error(`Error adding verbal ability score: ${error.message}`);
  }
};

/**
 * Add aptitude score to student profile
 * @param {string} emailID - The email ID of the student
 * @param {Object} aptitudeData - The aptitude data { testId, dateTime, module, score }
 * @returns {Promise<Object|null>} Updated student profile or null if not found
 */
const addAptitudeScore = async (emailID, aptitudeData) => {
  try {
    const student = await Student.findOneAndUpdate(
      { emailID: emailID.toLowerCase() },
      { $push: { "practice.aptitude": aptitudeData } },
      { new: true, runValidators: true }
    );

    if (student) {
    }
    
    return student;
  } catch (error) {
    throw new Error(`Error adding aptitude score: ${error.message}`);
  }
};

/**
 * Add module assessment to student profile
 * @param {string} emailID - The email ID of the student
 * @param {string} assessmentType - Type of assessment (verbalAbility, quantitativeAptitude, communication)
 * @param {Object} assessmentData - The assessment data
 * @returns {Promise<Object|null>} Updated student profile or null if not found
 */
const addModuleAssessment = async (emailID, assessmentType, assessmentData) => {
  try {
    const validTypes = ["verbalAbility", "quantitativeAptitude", "communication"];
    if (!validTypes.includes(assessmentType)) {
      throw new Error(`Invalid assessment type. Must be one of: ${validTypes.join(", ")}`);
    }

    const updatePath = `moduleAssessment.${assessmentType}`;
    
    const student = await Student.findOneAndUpdate(
      { emailID: emailID.toLowerCase() },
      { $push: { [updatePath]: assessmentData } },
      { new: true, runValidators: true }
    );
    return student;
  } catch (error) {
    throw new Error(`Error adding module assessment: ${error.message}`);
  }
};

/**
 * Add or update SQL solution for a student
 * @param {string} emailID - The email ID of the student
 * @param {string} questionId - The SQL question ID
 * @param {string} query - The executed SQL query
 * @param {string} difficulty - The difficulty level of the question
 * @returns {Promise<Object|null>} Updated student profile or null if not found
 */
const addOrUpdateSqlSolution = async (emailID, questionId, query, difficulty) => {
  try {

    // First, check if the student exists
    const existingStudent = await Student.findOne({
      emailID: emailID.toLowerCase(),
    });

    if (!existingStudent) {
      return { student: null, isUpdate: false };
    }

    // Check if the question is already solved
    const hasExistingQuestion = existingStudent.sql && 
      existingStudent.sql.some(s => s.questionId === questionId);


    if (hasExistingQuestion) {
      // Question already solved, update the query and dateTime
      const updatedStudent = await Student.findOneAndUpdate(
        { emailID: emailID.toLowerCase(), "sql.questionId": questionId },
        {
          $set: {
            "sql.$.query": query,
            "sql.$.dateTime": new Date(),
            "sql.$.difficulty": difficulty,
          },
        },
        { new: true, runValidators: true }
      );
      return { student: updatedStudent, isUpdate: true };
    } else {
      // Question not solved yet, add new entry
      const updatedStudent = await Student.findOneAndUpdate(
        { emailID: emailID.toLowerCase() },
        {
          $push: {
            sql: {
              questionId,
              dateTime: new Date(),
              query,
              difficulty,
            },
          },
        },
        { new: true, runValidators: true }
      );
      return { student: updatedStudent, isUpdate: false };
    }
  } catch (error) {
    throw new Error(`Error adding/updating SQL solution: ${error.message}`);
  }
};

/**
 * Add or update DSA solution for a student
 * @param {string} emailID - The email ID of the student
 * @param {string} questionId - The DSA question ID
 * @param {string} difficulty - The difficulty level of the question
 * @param {string} code - The submitted code
 * @returns {Promise<Object|null>} Updated student profile or null if not found
 */
const addOrUpdateDsaSolution = async (emailID, questionId, difficulty, code) => {
  try {

    // First, check if the student exists
    const existingStudent = await Student.findOne({
      emailID: emailID.toLowerCase(),
    });

    if (!existingStudent) {
      return { student: null, isUpdate: false };
    }

    // Check if the question is already solved
    const hasExistingQuestion = existingStudent.dsa && 
      existingStudent.dsa.some(d => d.questionId === questionId);


    if (hasExistingQuestion) {
      // Question already solved, update the code and dateTime
      const updatedStudent = await Student.findOneAndUpdate(
        { emailID: emailID.toLowerCase(), "dsa.questionId": questionId },
        {
          $set: {
            "dsa.$.code": code,
            "dsa.$.dateTime": new Date(),
            "dsa.$.difficulty": difficulty,
          },
        },
        { new: true, runValidators: true }
      );
      return { student: updatedStudent, isUpdate: true };
    } else {
      // Question not solved yet, add new entry
      const updatedStudent = await Student.findOneAndUpdate(
        { emailID: emailID.toLowerCase() },
        {
          $push: {
            dsa: {
              questionId,
              difficulty,
              dateTime: new Date(),
              code,
            },
          },
        },
        { new: true, runValidators: true }
      );
      return { student: updatedStudent, isUpdate: false };
    }
  } catch (error) {
    throw new Error(`Error adding/updating DSA solution: ${error.message}`);
  }
};

/**
 * Update today's data for a student (speaking count or dailyChallenge status)
 * @param {string} emailId - Student's email ID
 * @param {Object} todayData - The data to update { speaking, dailyChallenge }
 * @returns {Object} Updated student document
 */
const updateTodayForStudent = async (emailId, todayData) => {
  try {

    const updateFields = {};
    
    if (todayData.speaking !== undefined) {
      updateFields["today.speaking"] = todayData.speaking;
    }
    
    if (todayData.dailyChallenge !== undefined) {
      updateFields["today.dailyChallenge"] = todayData.dailyChallenge;
    }

    const updatedStudent = await Student.findOneAndUpdate(
      { emailID: emailId.toLowerCase() },
      { $set: updateFields },
      { new: true, runValidators: true }
    );

    if (!updatedStudent) {
      throw new Error("Student not found");
    }

    return updatedStudent;
  } catch (error) {
    throw new Error(`Error updating today: ${error.message}`);
  }
};

/**
 * Reset the today object for a student (daily reset)
 * @param {string} emailId - Student's email ID
 * @returns {Object} Updated student document
 */
const resetTodayForStudent = async (emailId) => {
  try {
    
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    const updatedStudent = await Student.findOneAndUpdate(
      { emailID: emailId },
      {
        $set: {
          today: {
            date: today,
            speaking: 3,
            dailyChallenge: false,
          },
        },
      },
      { new: true }
    );

    if (!updatedStudent) {
      throw new Error("Student not found");
    }

    return updatedStudent;
  } catch (error) {
    throw new Error(`Error resetting today: ${error.message}`);
  }
};

module.exports = {
  getAllStudents,
  getStudentByEmail,
  createStudent,
  updateStudentByEmail,
  addCommunicationScore,
  addSpeakingScore,
  addVerbalAbilityScore,
  addAptitudeScore,
  addModuleAssessment,
  addOrUpdateSqlSolution,
  addOrUpdateDsaSolution,
  resetTodayForStudent,
  updateTodayForStudent,
};
