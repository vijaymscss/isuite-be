const axios = require("axios");
const codeWrapperService = require("./codeWrapperService");

const JUDGE0_URL = "https://ce.judge0.com/submissions";

// Language IDs for Judge0
const LANGUAGE_IDS = {
  cpp: 54,      // C++ (GCC 9.2.0)
  java: 62,     // Java (OpenJDK 13.0.1)
  python: 71,   // Python (3.8.1)
};

/**
 * Submit code to Judge0 and wait for result
 * @param {string} sourceCode - The source code to compile and run
 * @param {string} language - The programming language (cpp, java, python)
 * @param {string} stdin - Optional standard input
 * @returns {Promise<object>} - The compilation/execution result
 */
const submitCode = async (sourceCode, language, stdin = "") => {
  const languageId = LANGUAGE_IDS[language.toLowerCase()];
  
  if (!languageId) {
    throw new Error(`Unsupported language: ${language}. Supported languages: cpp, java, python`);
  }

  try {
    const response = await axios.post(
      `${JUDGE0_URL}?base64_encoded=false&wait=true`,
      {
        language_id: languageId,
        source_code: sourceCode,
        stdin: stdin,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
        timeout: 30000, // 30 second timeout
      }
    );

    return {
      stdout: response.data.stdout,
      stderr: response.data.stderr,
      compile_output: response.data.compile_output,
      status: response.data.status,
      time: response.data.time,
      memory: response.data.memory,
    };
  } catch (error) {
    if (error.response) {
      throw new Error(`Judge0 API error: ${error.response.status} - ${error.response.statusText}`);
    }
    throw new Error(`Failed to connect to Judge0: ${error.message}`);
  }
};

/**
 * Run code with test cases (using stdin/stdout)
 * @param {string} sourceCode - The source code to compile and run
 * @param {string} language - The programming language (cpp, java, python)
 * @param {Array} testCases - Array of test cases with input and expectedOutput
 * @returns {Promise<object>} - The test results
 */
const runWithTestCases = async (sourceCode, language, testCases) => {
  const results = [];
  let allPassed = true;

  for (let i = 0; i < testCases.length; i++) {
    const testCase = testCases[i];
    const result = await submitCode(sourceCode, language, testCase.input || "");

    const passed = 
      result.status.id === 3 && // Accepted status
      result.stdout?.trim() === testCase.expectedOutput?.trim();

    if (!passed) {
      allPassed = false;
    }

    results.push({
      testCaseId: i + 1,
      passed,
      input: testCase.input || "",
      expectedOutput: testCase.expectedOutput,
      actualOutput: result.stdout?.trim() || "",
      stderr: result.stderr,
      compile_output: result.compile_output,
      status: result.status.description,
      time: result.time,
      memory: result.memory,
    });
  }

  return {
    allPassed,
    totalTests: testCases.length,
    passedTests: results.filter((r) => r.passed).length,
    testResults: results,
  };
};

/**
 * Convert DSA test case input to stdin format based on language
 * @param {object|string|number|array} input - The test case input
 * @returns {string} - Formatted stdin string (JSON for objects/arrays)
 */
const formatInputAsStdin = (input) => {
  if (typeof input === "string") {
    return input;
  }
  if (typeof input === "number") {
    return String(input);
  }
  if (Array.isArray(input)) {
    // For arrays, output as JSON for easy parsing
    return JSON.stringify(input);
  }
  if (typeof input === "object" && input !== null) {
    // For objects, output as JSON for easy parsing
    return JSON.stringify(input);
  }
  return String(input);
};

/**
 * Format expected output for comparison
 * @param {any} expectedOutput - The expected output
 * @returns {string} - Formatted expected output string
 */
const formatExpectedOutput = (expectedOutput) => {
  if (typeof expectedOutput === "boolean") {
    return expectedOutput ? "true" : "false";
  }
  if (typeof expectedOutput === "number") {
    return String(expectedOutput);
  }
  if (Array.isArray(expectedOutput)) {
    return JSON.stringify(expectedOutput);
  }
  return String(expectedOutput);
};

/**
 * Normalize output for comparison (handles different formats)
 * @param {string} output - The output string to normalize
 * @returns {string} - Normalized output
 */
const normalizeOutput = (output) => {
  if (!output) return "";
  
  // Trim whitespace
  let normalized = output.trim();
  
  // Try to parse as JSON and re-stringify for consistent format
  try {
    const parsed = JSON.parse(normalized);
    return JSON.stringify(parsed);
  } catch (e) {
    // Not valid JSON, continue with other normalizations
  }
  
  // Remove brackets and normalize array-like strings
  // Convert "0 1" or "0, 1" to "[0,1]" format
  if (!normalized.startsWith("[")) {
    // Check if it looks like space or comma separated numbers
    const parts = normalized.split(/[\s,]+/).filter(p => p !== "");
    if (parts.length > 0 && parts.every(p => !isNaN(p) || p === "true" || p === "false")) {
      // Convert to JSON array format
      const values = parts.map(p => {
        if (p === "true") return true;
        if (p === "false") return false;
        return isNaN(p) ? p : Number(p);
      });
      return JSON.stringify(values);
    }
  }
  
  return normalized;
};

/**
 * Compare expected and actual outputs
 * @param {any} expectedOutput - The expected output (can be any type)
 * @param {string} actualOutput - The actual output string from execution
 * @returns {boolean} - Whether they match
 */
const compareOutputs = (expectedOutput, actualOutput) => {
  const expectedStr = formatExpectedOutput(expectedOutput);
  const actualStr = actualOutput?.trim() || "";
  
  // Direct comparison
  if (expectedStr === actualStr) {
    return true;
  }
  
  // Normalized comparison
  const normalizedExpected = normalizeOutput(expectedStr);
  const normalizedActual = normalizeOutput(actualStr);
  
  if (normalizedExpected === normalizedActual) {
    return true;
  }
  
  // For boolean comparisons (case insensitive)
  if (typeof expectedOutput === "boolean") {
    return actualStr.toLowerCase() === String(expectedOutput).toLowerCase();
  }
  
  // For number comparisons
  if (typeof expectedOutput === "number") {
    return Number(actualStr) === expectedOutput;
  }
  
  return false;
};

/**
 * Run DSA question test cases
 * @param {string} sourceCode - The source code to compile and run
 * @param {string} language - The programming language (cpp, java, python)
 * @param {Array} testCases - Array of DSA test cases with input and expectedOutput
 * @returns {Promise<object>} - The test results
 */
const runDSATestCases = async (sourceCode, language, testCases) => {
  const results = [];
  let allPassed = true;

  for (let i = 0; i < testCases.length; i++) {
    const testCase = testCases[i];
    const stdin = formatInputAsStdin(testCase.input);

    const result = await submitCode(sourceCode, language, stdin);

    const actualOutput = result.stdout?.trim() || "";
    const passed = result.status.id === 3 && compareOutputs(testCase.expectedOutput, actualOutput);

    if (!passed) {
      allPassed = false;
    }

    results.push({
      testCaseId: i + 1,
      passed,
      input: testCase.input,
      expectedOutput: testCase.expectedOutput,
      actualOutput: actualOutput,
      stderr: result.stderr,
      compile_output: result.compile_output,
      status: result.status.description,
      time: result.time,
      memory: result.memory,
    });
  }

  return {
    allPassed,
    totalTests: testCases.length,
    passedTests: results.filter((r) => r.passed).length,
    testResults: results,
  };
};

/**
 * Deep equality comparison for expected vs actual outputs
 * @param {any} expected - Expected output
 * @param {any} actual - Actual output
 * @returns {boolean} - Whether they are equal
 */
const deepEqual = (expected, actual) => {
  // Handle null/undefined
  if (expected === null || expected === undefined) {
    return actual === null || actual === undefined;
  }
  
  // Handle primitives
  if (typeof expected !== 'object') {
    if (typeof expected === 'boolean') {
      return actual === expected || String(actual).toLowerCase() === String(expected).toLowerCase();
    }
    if (typeof expected === 'number') {
      return Number(actual) === expected || String(actual) === String(expected);
    }
    return String(expected) === String(actual);
  }
  
  // Handle arrays
  if (Array.isArray(expected)) {
    if (!Array.isArray(actual)) return false;
    if (expected.length !== actual.length) return false;
    return expected.every((val, idx) => deepEqual(val, actual[idx]));
  }
  
  // Handle objects
  if (typeof actual !== 'object' || actual === null) return false;
  const expectedKeys = Object.keys(expected);
  const actualKeys = Object.keys(actual);
  if (expectedKeys.length !== actualKeys.length) return false;
  return expectedKeys.every(key => deepEqual(expected[key], actual[key]));
};

/**
 * Run DSA test cases with wrapped code (single execution for all test cases)
 * @param {string} userCode - User's function code (not full program)
 * @param {string} language - Programming language (python, java, cpp)
 * @param {string} functionName - Name of the function to call
 * @param {Array} testCases - Array of test cases with input and expectedOutput
 * @returns {Promise<object>} - Test results with comparison
 */
const runWrappedDSACode = async (userCode, language, functionName, testCases) => {
  // Wrap user code with test harness
  const wrappedCode = codeWrapperService.wrapCode(userCode, language, functionName, testCases);
  
  // Submit to Judge0
  const result = await submitCode(wrappedCode, language, "");
  
  // Check for compilation/runtime errors
  if (result.status.id !== 3) {
    // Not accepted - compilation or runtime error
    const errorMessage = result.compile_output || result.stderr || result.status.description;
    
    return {
      success: false,
      allPassed: false,
      totalTests: testCases.length,
      passedTests: 0,
      failedTests: testCases.length,
      error: {
        type: result.status.id === 6 ? 'Compilation Error' : 
              result.status.id === 5 ? 'Time Limit Exceeded' :
              result.status.id === 11 ? 'Runtime Error' : 'Execution Error',
        message: errorMessage,
      },
      executionTime: result.time,
      memoryUsed: result.memory,
      testResults: testCases.map((tc, index) => ({
        testCaseId: index + 1,
        passed: false,
        input: tc.input,
        expectedOutput: tc.expectedOutput,
        actualOutput: null,
        error: errorMessage,
        status: result.status.description,
      })),
    };
  }
  
  // Parse JSON output from stdout
  let outputs;
  try {
    const stdout = result.stdout?.trim() || "{}";
    outputs = JSON.parse(stdout);
  } catch (parseError) {
    return {
      success: false,
      allPassed: false,
      totalTests: testCases.length,
      passedTests: 0,
      failedTests: testCases.length,
      error: {
        type: 'Output Parse Error',
        message: `Failed to parse program output as JSON: ${result.stdout}`,
      },
      stdout: result.stdout,
      executionTime: result.time,
      memoryUsed: result.memory,
      testResults: testCases.map((tc, index) => ({
        testCaseId: index + 1,
        passed: false,
        input: tc.input,
        expectedOutput: tc.expectedOutput,
        actualOutput: result.stdout,
        error: 'Output format error',
        status: 'Parse Error',
      })),
    };
  }
  
  // Check if function was not found
  if (outputs.error === 'function_not_found' || outputs.error === 'not_callable') {
    const foundFunctions = outputs.found_functions || [];
    let errorMessage = outputs.message;
    
    if (foundFunctions.length > 0) {
      errorMessage += `. Found function(s): ${foundFunctions.join(', ')}`;
    }
    
    return {
      success: false,
      allPassed: false,
      totalTests: testCases.length,
      passedTests: 0,
      failedTests: testCases.length,
      error: {
        type: 'Function Name Error',
        message: errorMessage,
        expectedFunction: outputs.expected_function,
        foundFunctions: foundFunctions,
      },
      stdout: outputs.stdout || '',
      executionTime: result.time,
      memoryUsed: result.memory,
      testResults: testCases.map((tc, index) => ({
        testCaseId: index + 1,
        passed: false,
        input: tc.input,
        expectedOutput: tc.expectedOutput,
        actualOutput: null,
        error: `Function '${outputs.expected_function}' not found`,
        status: 'Function Not Found',
      })),
    };
  }
  
  // Extract results array from new format
  const resultsArray = outputs.results || outputs;
  const programStdout = outputs.stdout || '';
  
  // Compare outputs with expected values
  const testResults = [];
  let allPassed = true;
  let passedCount = 0;
  
  for (let i = 0; i < testCases.length; i++) {
    const testCase = testCases[i];
    const outputEntry = resultsArray[i] || { output: null, error: 'No output' };
    
    const actualOutput = outputEntry.output;
    const errorMsg = outputEntry.error;
    const testStdout = outputEntry.stdout || '';
    
    // Deep equality comparison
    const passed = !errorMsg && deepEqual(testCase.expectedOutput, actualOutput);
    
    if (passed) {
      passedCount++;
    } else {
      allPassed = false;
    }
    
    testResults.push({
      testCaseId: i + 1,
      passed,
      input: testCase.input,
      expectedOutput: testCase.expectedOutput,
      actualOutput: actualOutput,
      ...(testStdout && { stdout: testStdout }),
      ...(errorMsg && { error: errorMsg }),
      status: errorMsg ? 'Runtime Error' : (passed ? 'Accepted' : 'Wrong Answer'),
    });
  }
  
  return {
    success: true,
    allPassed,
    totalTests: testCases.length,
    passedTests: passedCount,
    failedTests: testCases.length - passedCount,
    executionTime: result.time,
    memoryUsed: result.memory,
    stdout: programStdout,
    testResults,
  };
};

module.exports = {
  submitCode,
  runWithTestCases,
  runDSATestCases,
  runWrappedDSACode,
  deepEqual,
  formatInputAsStdin,
  formatExpectedOutput,
  normalizeOutput,
  compareOutputs,
  LANGUAGE_IDS,
};
