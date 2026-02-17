const studentRepository = require("../repositories/studentRepository");
const aiModelService = require("../services/aiModelService");

/**
 * Get all students
 * @route GET /student/list
 */
const getAllStudents = async (req, res, next) => {
  try {
    const students = await studentRepository.getAllStudents();

    res.json({
      success: true,
      count: students.length,
      data: students.map((student) => ({
        rollNo: student.rollNo,
        name: student.name,
        college: student.college,
        department: student.department,
        rootDept: student.rootDept,
        emailID: student.emailID,
        year: student.year,
      })),
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Get student profile by email ID
 * @route GET /student/profile
 * @queryParam {string} emailId - Student's email address (required)
 */
const getStudentProfile = async (req, res, next) => {
  try {
    const { emailId } = req.query;

    // Validate emailId parameter
    if (!emailId) {
      return res.status(400).json({
        success: false,
        error: "Bad Request",
        message: "emailId query parameter is required",
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailId)) {
      return res.status(400).json({
        success: false,
        error: "Bad Request",
        message: "Invalid email format",
      });
    }

    // Fetch student profile from database
    let student = await studentRepository.getStudentByEmail(emailId);

    if (!student) {
      return res.status(404).json({
        success: false,
        error: "Not Found",
        message: "Student profile not found for the given email",
      });
    }

    // Check if today's date needs to be reset
    const currentDate = new Date();
    const todayStart = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate());
    
    let needsReset = false;
    if (!student.today || !student.today.date) {
      needsReset = true;
    } else {
      const studentTodayDate = new Date(student.today.date);
      const studentDateStart = new Date(studentTodayDate.getFullYear(), studentTodayDate.getMonth(), studentTodayDate.getDate());
      needsReset = studentDateStart.getTime() !== todayStart.getTime();
    }

    if (needsReset) {
      // Reset today object with fresh values
      student = await studentRepository.resetTodayForStudent(emailId);
    }

    res.json({
      success: true,
      data: {
        rollNo: student.rollNo,
        name: student.name,
        college: student.college,
        department: student.department,
        rootDept: student.rootDept,
        emailID: student.emailID,
        year: student.year,
        classId: student.classId,
        role: student.role,
        dsa: student.dsa || [],
        sql: student.sql || [],
        today: student.today || { date: new Date(), speaking: 3, dailyChallenge: false },
      },
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Get complete student details by email ID
 * @route GET /student/complete-details
 * @queryParam {string} emailId - Student's email address (required)
 */
const getCompleteStudentDetails = async (req, res, next) => {
  try {
    const { emailId } = req.query;

    // Validate emailId parameter
    if (!emailId) {
      return res.status(400).json({
        success: false,
        error: "Bad Request",
        message: "emailId query parameter is required",
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailId)) {
      return res.status(400).json({
        success: false,
        error: "Bad Request",
        message: "Invalid email format",
      });
    }

    // Fetch student from database
    let student = await studentRepository.getStudentByEmail(emailId);

    if (!student) {
      return res.status(404).json({
        success: false,
        error: "Not Found",
        message: "Student not found for the given email",
      });
    }

    // Check if today's date needs to be reset
    const currentDate = new Date();
    const todayStart = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate());
    
    let needsReset = false;
    if (!student.today || !student.today.date) {
      needsReset = true;
    } else {
      const studentTodayDate = new Date(student.today.date);
      const studentDateStart = new Date(studentTodayDate.getFullYear(), studentTodayDate.getMonth(), studentTodayDate.getDate());
      needsReset = studentDateStart.getTime() !== todayStart.getTime();
    }

    if (needsReset) {
      // Reset today object with fresh values
      student = await studentRepository.resetTodayForStudent(emailId);
    }

    // Return complete student document
    res.json({
      success: true,
      data: {
        _id: student._id,
        rollNo: student.rollNo,
        name: student.name,
        college: student.college,
        department: student.department,
        rootDept: student.rootDept,
        emailID: student.emailID,
        year: student.year,
        classId: student.classId,
        role: student.role || ["student"],
        dsa: student.dsa || [],
        sql: student.sql || [],
        practice: student.practice || {
          communication: {
            reading: [],
            listening: [],
            speaking: [],
          },
          verbalAbility: [],
          aptitude: [],
        },
        moduleAssessment: student.moduleAssessment || {
          verbalAbility: [],
          quantitativeAptitude: [],
          communication: [],
        },
        today: student.today || { date: new Date(), speaking: 3, dailyChallenge: false },
      },
    });
  } catch (error) {
    next(error);
  }
};

/**s
 * Add communication score to student profile
 * @route POST /student/communication-score
 * @body {string} emailId - Student's email address (required)
 * @body {string} communicationType - Type: reading, listening, or speaking (required)
 * @body {Object} scoreData - { testId, dateTime, score } (required)
 */
const addCommunicationScore = async (req, res, next) => {
  try {
    const { emailId, communicationType, scoreData } = req.body;

    // Validate required fields
    if (!emailId) {
      return res.status(400).json({
        success: false,
        error: "Bad Request",
        message: "emailId is required",
      });
    }

    if (!communicationType) {
      return res.status(400).json({
        success: false,
        error: "Bad Request",
        message: "communicationType is required",
      });
    }

    const validTypes = ["reading", "listening", "speaking"];
    if (!validTypes.includes(communicationType)) {
      return res.status(400).json({
        success: false,
        error: "Bad Request",
        message: `communicationType must be one of: ${validTypes.join(", ")}`,
      });
    }

    if (!scoreData || !scoreData.testId || !scoreData.dateTime || scoreData.score === undefined) {
      return res.status(400).json({
        success: false,
        error: "Bad Request",
        message: "scoreData must include testId, dateTime, and score",
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailId)) {
      return res.status(400).json({
        success: false,
        error: "Bad Request",
        message: "Invalid email format",
      });
    }

    // Add communication score
    const student = await studentRepository.addCommunicationScore(
      emailId,
      communicationType,
      scoreData
    );

    if (!student) {
      return res.status(404).json({
        success: false,
        error: "Not Found",
        message: "Student profile not found for the given email",
      });
    }

    res.json({
      success: true,
      message: `${communicationType} score added successfully`,
      data: {
        emailID: student.emailID,
        communicationType,
        addedScore: scoreData,
        updatedCommunication: student.practice.communication,
      },
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Generate a unique test ID for speaking practice
 * @returns {string} Unique test ID with format pcs_<random_number>
 */
const generateTestId = () => {
  const randomNum = Math.floor(Math.random() * 1000000000);
  return `pcs_${randomNum}`;
};

/**
 * Get speaking score using Gemini AI evaluation
 * @route POST /student/speaking-score
 * @body {string} topic - The topic for evaluation (required)
 * @body {string} spokenData - The spoken text to evaluate (required)
 * @body {string} emailId - Student's email address (required)
 */
const getSpeakingScore = async (req, res, next) => {
  try {
    const { topic, spokenData, emailId } = req.body;

    // Validate required fields
    if (!topic) {
      return res.status(400).json({
        success: false,
        error: "Bad Request",
        message: "topic is required",
      });
    }

    if (!spokenData) {
      return res.status(400).json({
        success: false,
        error: "Bad Request",
        message: "spokenData is required",
      });
    }

    if (!emailId) {
      return res.status(400).json({
        success: false,
        error: "Bad Request",
        message: "emailId is required",
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailId)) {
      return res.status(400).json({
        success: false,
        error: "Bad Request",
        message: "Invalid email format",
      });
    }

    // Check if student exists
    const existingStudent = await studentRepository.getStudentByEmail(emailId);
    if (!existingStudent) {
      return res.status(404).json({
        success: false,
        error: "Not Found",
        message: "Student profile not found for the given email",
      });
    }

    // Evaluate speaking using AI Model
    const evaluation = await aiModelService.evaluateSpeaking(topic, spokenData);

    // Prepare data for database
    const speakingData = {
      testId: generateTestId(),
      dateTime: new Date(),
      topic: topic,
      score: evaluation.score,
      feedback: evaluation.feedback,
    };

    // Save to database
    await studentRepository.addSpeakingScore(emailId, speakingData);

    // Return only score and feedback to frontend
    res.json({
      score: evaluation.score,
      feedback: evaluation.feedback,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Add verbal ability score to student profile
 * @route POST /student/verbal-ability-score
 * @body {string} emailId - Student's email address (required)
 * @body {string} testId - Test ID with format VA-<id> (required)
 * @body {string} dateTime - Date and time of the test (required)
 * @body {string} module - Module name (required)
 * @body {number} score - Score achieved (required)
 */
const addVerbalAbilityScore = async (req, res, next) => {
  try {
    const { emailId, testId, dateTime, module, score } = req.body;

    // Validate required fields
    if (!emailId) {
      return res.status(400).json({
        success: false,
        error: "Bad Request",
        message: "emailId is required",
      });
    }

    if (!testId) {
      return res.status(400).json({
        success: false,
        error: "Bad Request",
        message: "testId is required",
      });
    }

    if (!dateTime) {
      return res.status(400).json({
        success: false,
        error: "Bad Request",
        message: "dateTime is required",
      });
    }

    if (!module) {
      return res.status(400).json({
        success: false,
        error: "Bad Request",
        message: "module is required",
      });
    }

    if (score === undefined || score === null) {
      return res.status(400).json({
        success: false,
        error: "Bad Request",
        message: "score is required",
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailId)) {
      return res.status(400).json({
        success: false,
        error: "Bad Request",
        message: "Invalid email format",
      });
    }

    // Validate testId format (VA-<id>)
    if (!testId.startsWith("VA-")) {
      return res.status(400).json({
        success: false,
        error: "Bad Request",
        message: "testId must start with 'VA-' prefix",
      });
    }

    // Prepare verbal ability data
    const verbalAbilityData = {
      testId,
      dateTime,
      module,
      score,
    };

    // Add verbal ability score
    const student = await studentRepository.addVerbalAbilityScore(
      emailId,
      verbalAbilityData
    );

    if (!student) {
      return res.status(404).json({
        success: false,
        error: "Not Found",
        message: "Student profile not found for the given email",
      });
    }

    res.json({
      success: true,
      message: "Verbal ability score added successfully",
      data: {
        emailID: student.emailID,
        addedScore: verbalAbilityData,
        updatedVerbalAbility: student.practice.verbalAbility,
      },
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Add aptitude score to student profile
 * @route POST /student/aptitude-score
 * @body {string} emailId - Student's email address (required)
 * @body {string} testId - Test ID with format QA-<id> (required)
 * @body {string} dateTime - Date and time of the test (required)
 * @body {string} module - Module name (required)
 * @body {number} score - Score achieved (required)
 */
const addAptitudeScore = async (req, res, next) => {
  console.log("req.body", req.body);
  try {
    const { emailId, testId, dateTime, module, score } = req.body;

    // Validate required fields
    if (!emailId) {
      return res.status(400).json({
        success: false,
        error: "Bad Request",
        message: "emailId is required",
      });
    }

    if (!testId) {
      return res.status(400).json({
        success: false,
        error: "Bad Request",
        message: "testId is required",
      });
    }

    if (!dateTime) {
      return res.status(400).json({
        success: false,
        error: "Bad Request",
        message: "dateTime is required",
      });
    }

    if (!module) {
      return res.status(400).json({
        success: false,
        error: "Bad Request",
        message: "module is required",
      });
    }

    if (score === undefined || score === null) {
      return res.status(400).json({
        success: false,
        error: "Bad Request",
        message: "score is required",
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailId)) {
      return res.status(400).json({
        success: false,
        error: "Bad Request",
        message: "Invalid email format",
      });
    }

    // Validate testId format (QA-<id>)
    if (!testId.startsWith("QA-")) {
      return res.status(400).json({
        success: false,
        error: "Bad Request",
        message: "testId must start with 'QA-' prefix",
      });
    }

    // Prepare aptitude data
    const aptitudeData = {
      testId,
      dateTime,
      module,
      score,
    };

    console.log("[Controller] addAptitudeScore - Request body:", JSON.stringify(req.body, null, 2));
    console.log("[Controller] Prepared aptitudeData:", JSON.stringify(aptitudeData, null, 2));

    // Add aptitude score
    const student = await studentRepository.addAptitudeScore(
      emailId,
      aptitudeData
    );

    console.log("[Controller] Repository returned student:", !!student);

    if (!student) {
      return res.status(404).json({
        success: false,
        error: "Not Found",
        message: "Student profile not found for the given email",
      });
    }

    res.json({
      success: true,
      message: "Aptitude score added successfully",
      data: {
        emailID: student.emailID,
        addedScore: aptitudeData,
        updatedAptitude: student.practice.aptitude,
      },
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Add module assessment to student profile
 * @route POST /student/module-assessment
 * @queryParam {string} emailId - Student's email address (required)
 * @body {string} assessmentType - Type of assessment (verbalAbility, quantitativeAptitude, communication)
 * @body {object} data - Assessment data { time, questionCount, correctAns, score }
 * @body {object} splits - (Only for communication) { reading, listening, speaking }
 */
const addModuleAssessment = async (req, res, next) => {
  try {
    const { emailId } = req.query;
    const { assessmentType, data, splits } = req.body;

    // Validate emailId parameter
    if (!emailId) {
      return res.status(400).json({
        success: false,
        error: "Bad Request",
        message: "emailId query parameter is required",
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailId)) {
      return res.status(400).json({
        success: false,
        error: "Bad Request",
        message: "Invalid email format",
      });
    }

    // Validate assessmentType
    const validTypes = ["verbalAbility", "quantitativeAptitude", "communication"];
    if (!assessmentType || !validTypes.includes(assessmentType)) {
      return res.status(400).json({
        success: false,
        error: "Bad Request",
        message: `assessmentType is required and must be one of: ${validTypes.join(", ")}`,
      });
    }

    // Validate data object
    if (!data) {
      return res.status(400).json({
        success: false,
        error: "Bad Request",
        message: "data object is required",
      });
    }

    // Validate required data fields
    if (!data.time) {
      return res.status(400).json({
        success: false,
        error: "Bad Request",
        message: "data.time is required",
      });
    }

    if (data.questionCount === undefined || data.questionCount === null) {
      return res.status(400).json({
        success: false,
        error: "Bad Request",
        message: "data.questionCount is required",
      });
    }

    if (data.correctAns === undefined || data.correctAns === null) {
      return res.status(400).json({
        success: false,
        error: "Bad Request",
        message: "data.correctAns is required",
      });
    }

    if (data.score === undefined || data.score === null) {
      return res.status(400).json({
        success: false,
        error: "Bad Request",
        message: "data.score is required",
      });
    }

    // Prepare assessment data based on type
    let assessmentData = {
      time: new Date(data.time),
      questionCount: data.questionCount,
      correctAns: data.correctAns,
      score: data.score,
    };

    // For communication type, validate and add splits
    if (assessmentType === "communication") {
      if (!splits) {
        return res.status(400).json({
          success: false,
          error: "Bad Request",
          message: "splits object is required for communication assessment",
        });
      }

      const requiredSplits = ["reading", "listening", "speaking"];
      for (const splitType of requiredSplits) {
        if (!splits[splitType]) {
          return res.status(400).json({
            success: false,
            error: "Bad Request",
            message: `splits.${splitType} is required for communication assessment`,
          });
        }
        if (splits[splitType].questionCount === undefined || 
            splits[splitType].correctAns === undefined || 
            splits[splitType].score === undefined) {
          return res.status(400).json({
            success: false,
            error: "Bad Request",
            message: `splits.${splitType} must have questionCount, correctAns, and score`,
          });
        }
      }

      assessmentData.splits = {
        reading: {
          questionCount: splits.reading.questionCount,
          correctAns: splits.reading.correctAns,
          score: splits.reading.score,
        },
        listening: {
          questionCount: splits.listening.questionCount,
          correctAns: splits.listening.correctAns,
          score: splits.listening.score,
        },
        speaking: {
          questionCount: splits.speaking.questionCount,
          correctAns: splits.speaking.correctAns,
          score: splits.speaking.score,
        },
      };
    }

    // Add module assessment
    const student = await studentRepository.addModuleAssessment(
      emailId,
      assessmentType,
      assessmentData
    );

    if (!student) {
      return res.status(404).json({
        success: false,
        error: "Not Found",
        message: "Student profile not found for the given email",
      });
    }

    res.json({
      success: true,
      message: "Module assessment added successfully",
      data: {
        emailID: student.emailID,
        assessmentType: assessmentType,
        addedAssessment: assessmentData,
      },
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Update today's data for a student
 * @route PUT /student/update-today
 * @body { emailId, speaking?, dailyChallenge? }
 */
const updateToday = async (req, res, next) => {
  try {
    const { emailId, speaking, dailyChallenge } = req.body;

    // Validate emailId
    if (!emailId) {
      return res.status(400).json({
        success: false,
        error: "Bad Request",
        message: "emailId is required",
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailId)) {
      return res.status(400).json({
        success: false,
        error: "Bad Request",
        message: "Invalid email format",
      });
    }

    // Validate that at least one field to update is provided
    if (speaking === undefined && dailyChallenge === undefined) {
      return res.status(400).json({
        success: false,
        error: "Bad Request",
        message: "At least one of 'speaking' or 'dailyChallenge' must be provided",
      });
    }

    // Validate speaking value if provided
    if (speaking !== undefined) {
      if (typeof speaking !== "number" || speaking < 0) {
        return res.status(400).json({
          success: false,
          error: "Bad Request",
          message: "speaking must be a non-negative number",
        });
      }
    }

    // Validate dailyChallenge value if provided
    if (dailyChallenge !== undefined && typeof dailyChallenge !== "boolean") {
      return res.status(400).json({
        success: false,
        error: "Bad Request",
        message: "dailyChallenge must be a boolean",
      });
    }

    // Build update data
    const todayData = {};
    if (speaking !== undefined) todayData.speaking = speaking;
    if (dailyChallenge !== undefined) todayData.dailyChallenge = dailyChallenge;

    // Update today's data
    const student = await studentRepository.updateTodayForStudent(emailId, todayData);

    if (!student) {
      return res.status(404).json({
        success: false,
        error: "Not Found",
        message: "Student profile not found for the given email",
      });
    }

    res.json({
      success: true,
      message: "Today's data updated successfully",
      data: {
        emailID: student.emailID,
        today: student.today,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllStudents,
  getStudentProfile,
  getCompleteStudentDetails,
  addCommunicationScore,
  getSpeakingScore,
  addVerbalAbilityScore,
  addAptitudeScore,
  addModuleAssessment,
  updateToday,
};
