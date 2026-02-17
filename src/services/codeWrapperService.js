/**
 * Code Wrapper Service
 * Generates executable code by wrapping user's function with a test harness
 * Supports Python, Java, and C++
 */

/**
 * Generate Python wrapper code
 * @param {string} userCode - User's function implementation
 * @param {string} functionName - Name of the function to call
 * @param {Array} testCases - Array of test cases with input
 * @returns {string} - Complete executable Python code
 */
const wrapPythonCode = (userCode, functionName, testCases) => {
  // Escape the JSON string for safe embedding in Python
  const testCasesJson = JSON.stringify(testCases.map(tc => tc.input));
  // Escape backslashes and single quotes for Python string
  const escapedJson = testCasesJson.replace(/\\/g, '\\\\').replace(/'/g, "\\'");
  
  const lines = [
    'import json',
    'import sys',
    'import io',
    '',
    '# Capture stdout from the very beginning (for user script-level print statements)',
    '_global_captured_output = io.StringIO()',
    '_original_stdout = sys.stdout',
    'sys.stdout = _global_captured_output',
    '',
    '# ============ USER CODE START ============',
    userCode,
    '# ============ USER CODE END ============',
    '',
    '# Capture any script-level stdout before running tests',
    '_script_stdout = _global_captured_output.getvalue()',
    'sys.stdout = _original_stdout',
    '',
    '# Test harness',
    'def run_tests():',
    `    expected_function = "${functionName}"`,
    '    ',
    '    # Check if expected function exists',
    '    if expected_function not in dir() and expected_function not in globals():',
    '        # Try to find what functions the user defined',
    '        user_functions = [name for name in globals() if callable(globals().get(name)) and not name.startswith("_") and name not in ["run_tests", "json", "sys", "io"]]',
    '        print(json.dumps({',
    '            "error": "function_not_found",',
    '            "message": f"Function \'{expected_function}\' not found",',
    '            "expected_function": expected_function,',
    '            "found_functions": user_functions,',
    '            "stdout": _script_stdout',
    '        }))',
    '        return',
    '    ',
    `    func = globals().get("${functionName}")`,
    '    if not callable(func):',
    '        print(json.dumps({',
    '            "error": "not_callable",',
    `            "message": f"\'${functionName}\' is not a callable function",`,
    `            "expected_function": "${functionName}",`,
    '            "stdout": _script_stdout',
    '        }))',
    '        return',
    '    ',
    `    test_inputs = json.loads('${escapedJson}')`,
    '    results = []',
    '    all_stdout = []',
    '    ',
    '    for idx, test_input in enumerate(test_inputs):',
    '        # Capture stdout for this test case',
    '        captured_output = io.StringIO()',
    '        old_stdout = sys.stdout',
    '        sys.stdout = captured_output',
    '        ',
    '        try:',
    '            # Call function based on input type',
    '            if isinstance(test_input, dict):',
    '                result = func(**test_input)',
    '            elif isinstance(test_input, list):',
    '                result = func(test_input)',
    '            else:',
    '                result = func(test_input)',
    '            ',
    '            sys.stdout = old_stdout',
    '            stdout_value = captured_output.getvalue()',
    '            all_stdout.append(stdout_value)',
    '            results.append({"output": result, "error": None, "stdout": stdout_value})',
    '        except Exception as e:',
    '            sys.stdout = old_stdout',
    '            stdout_value = captured_output.getvalue()',
    '            all_stdout.append(stdout_value)',
    '            results.append({"output": None, "error": str(e), "stdout": stdout_value})',
    '    ',
    '    # Include script-level stdout in the final output',
    '    combined_stdout = _script_stdout + "".join(all_stdout)',
    '    print(json.dumps({"results": results, "stdout": combined_stdout, "script_stdout": _script_stdout}))',
    '',
    'if __name__ == "__main__":',
    '    run_tests()',
  ];
  
  return lines.join('\n');
};

/**
 * Generate Java wrapper code
 * @param {string} userCode - User's function implementation
 * @param {string} functionName - Name of the function to call
 * @param {Array} testCases - Array of test cases with input
 * @returns {string} - Complete executable Java code
 */
const wrapJavaCode = (userCode, functionName, testCases) => {
  // Generate test case execution code
  const testExecutions = testCases.map((tc, index) => {
    const input = tc.input;
    return generateJavaTestCall(functionName, input, index);
  }).join('\n            ');

  return `
import java.util.*;
import java.io.*;
import java.lang.reflect.*;

public class Main {
    
    // Capture script-level stdout
    private static ByteArrayOutputStream scriptOutputStream = new ByteArrayOutputStream();
    private static PrintStream originalOut = System.out;
    private static String scriptStdout = "";
    
    // Static block to capture any script-level output
    static {
        System.setOut(new PrintStream(scriptOutputStream));
    }
    
    // ============ USER CODE START ============
    ${userCode}
    // ============ USER CODE END ============
    
    // Helper to escape JSON strings
    private static String escapeJson(String s) {
        if (s == null) return "";
        return s.replace("\\\\", "\\\\\\\\").replace("\\"", "\\\\\\"").replace("\\n", "\\\\n").replace("\\r", "\\\\r").replace("\\t", "\\\\t");
    }
    
    // Helper to convert array to JSON string
    private static String arrayToJson(int[] arr) {
        if (arr == null) return "null";
        StringBuilder sb = new StringBuilder("[");
        for (int i = 0; i < arr.length; i++) {
            sb.append(arr[i]);
            if (i < arr.length - 1) sb.append(",");
        }
        sb.append("]");
        return sb.toString();
    }
    
    private static String arrayToJson(String[] arr) {
        if (arr == null) return "null";
        StringBuilder sb = new StringBuilder("[");
        for (int i = 0; i < arr.length; i++) {
            sb.append("\\"").append(escapeJson(arr[i])).append("\\"");
            if (i < arr.length - 1) sb.append(",");
        }
        sb.append("]");
        return sb.toString();
    }
    
    private static String toJson(Object result) {
        if (result == null) return "null";
        if (result instanceof int[]) return arrayToJson((int[]) result);
        if (result instanceof String[]) return arrayToJson((String[]) result);
        if (result instanceof Boolean) return result.toString();
        if (result instanceof Integer) return result.toString();
        if (result instanceof Long) return result.toString();
        if (result instanceof Double) return result.toString();
        if (result instanceof String) return "\\"" + escapeJson((String) result) + "\\"";
        if (result instanceof List) {
            List<?> list = (List<?>) result;
            StringBuilder sb = new StringBuilder("[");
            for (int i = 0; i < list.size(); i++) {
                sb.append(toJson(list.get(i)));
                if (i < list.size() - 1) sb.append(",");
            }
            sb.append("]");
            return sb.toString();
        }
        return result.toString();
    }
    
    // Check if the expected function exists
    private static boolean functionExists(String functionName) {
        Method[] methods = Main.class.getDeclaredMethods();
        for (Method method : methods) {
            if (method.getName().equals(functionName)) {
                return true;
            }
        }
        return false;
    }
    
    // Get list of user-defined functions
    private static String getUserFunctions() {
        Method[] methods = Main.class.getDeclaredMethods();
        StringBuilder sb = new StringBuilder("[");
        boolean first = true;
        for (Method method : methods) {
            String name = method.getName();
            // Skip helper and main methods
            if (!name.equals("main") && !name.equals("arrayToJson") && !name.equals("toJson") && 
                !name.equals("escapeJson") && !name.equals("functionExists") && !name.equals("getUserFunctions")) {
                if (!first) sb.append(",");
                sb.append("\\"").append(name).append("\\"");
                first = false;
            }
        }
        sb.append("]");
        return sb.toString();
    }
    
    public static void main(String[] args) {
        // Capture script-level stdout
        scriptStdout = scriptOutputStream.toString();
        System.setOut(originalOut);
        
        String expectedFunction = "${functionName}";
        
        // Check if function exists
        if (!functionExists(expectedFunction)) {
            System.out.println("{\\"error\\":\\"function_not_found\\",\\"message\\":\\"Function '" + expectedFunction + "' not found\\",\\"expected_function\\":\\"" + expectedFunction + "\\",\\"found_functions\\":" + getUserFunctions() + ",\\"stdout\\":\\"" + escapeJson(scriptStdout) + "\\",\\"script_stdout\\":\\"" + escapeJson(scriptStdout) + "\\"}");
            return;
        }
        
        StringBuilder results = new StringBuilder("[");
        StringBuilder allStdout = new StringBuilder();
        int testCount = ${testCases.length};
        
        try {
            ${testExecutions}
        } catch (Exception e) {
            // If there's an unhandled exception, output error for remaining tests
        }
        
        results.append("]");
        String combinedStdout = scriptStdout + allStdout.toString();
        System.out.println("{\\"results\\":" + results.toString() + ",\\"stdout\\":\\"" + escapeJson(combinedStdout) + "\\",\\"script_stdout\\":\\"" + escapeJson(scriptStdout) + "\\"}");
    }
}
`.trim();
};

/**
 * Generate Java test call code for a single test case
 */
const generateJavaTestCall = (functionName, input, index) => {
  let argSetup = '';
  let funcCall = '';
  
  if (typeof input === 'object' && input !== null && !Array.isArray(input)) {
    // Object with named parameters
    const args = [];
    for (const [key, value] of Object.entries(input)) {
      if (Array.isArray(value)) {
        argSetup += `int[] ${key}_${index} = new int[]{${value.join(', ')}};\n                `;
        args.push(`${key}_${index}`);
      } else if (typeof value === 'string') {
        args.push(`"${value.replace(/"/g, '\\"')}"`);
      } else {
        args.push(value);
      }
    }
    funcCall = `${functionName}(${args.join(', ')})`;
  } else if (Array.isArray(input)) {
    // Array input
    argSetup = `int[] input_${index} = new int[]{${input.join(', ')}};\n                `;
    funcCall = `${functionName}(input_${index})`;
  } else if (typeof input === 'string') {
    funcCall = `${functionName}("${input.replace(/"/g, '\\"')}")`;
  } else {
    funcCall = `${functionName}(${input})`;
  }
  
  return `
            // Test case ${index + 1}
            try {
                // Capture stdout for this test case
                ByteArrayOutputStream testOutputStream_${index} = new ByteArrayOutputStream();
                System.setOut(new PrintStream(testOutputStream_${index}));
                
                ${argSetup}Object result_${index} = ${funcCall};
                
                System.setOut(originalOut);
                String testStdout_${index} = testOutputStream_${index}.toString();
                allStdout.append(testStdout_${index});
                
                if (${index} > 0) results.append(",");
                results.append("{\\"output\\":").append(toJson(result_${index})).append(",\\"error\\":null,\\"stdout\\":\\"").append(escapeJson(testStdout_${index})).append("\\"}");
            } catch (Exception e) {
                System.setOut(originalOut);
                if (${index} > 0) results.append(",");
                results.append("{\\"output\\":null,\\"error\\":\\"").append(escapeJson(e.getMessage())).append("\\",\\"stdout\\":\\"\\"}");
            }`;
};

/**
 * Generate C++ wrapper code
 * @param {string} userCode - User's function implementation
 * @param {string} functionName - Name of the function to call
 * @param {Array} testCases - Array of test cases with input
 * @returns {string} - Complete executable C++ code
 */
const wrapCppCode = (userCode, functionName, testCases) => {
  const testExecutions = testCases.map((tc, index) => {
    return generateCppTestCall(functionName, tc.input, index);
  }).join('\n    ');

  return `
#include <iostream>
#include <vector>
#include <string>
#include <sstream>
#include <functional>
#include <algorithm>
#include <unordered_map>
#include <map>
#include <set>
#include <queue>
#include <stack>
#include <climits>
#include <cmath>

using namespace std;

// ============ USER CODE START ============
${userCode}
// ============ USER CODE END ============

// Helper functions for JSON output
string vectorToJson(const vector<int>& v) {
    string result = "[";
    for (size_t i = 0; i < v.size(); i++) {
        result += to_string(v[i]);
        if (i < v.size() - 1) result += ",";
    }
    result += "]";
    return result;
}

string vectorToJson(const vector<string>& v) {
    string result = "[";
    for (size_t i = 0; i < v.size(); i++) {
        result += "\\"" + v[i] + "\\"";
        if (i < v.size() - 1) result += ",";
    }
    result += "]";
    return result;
}

template<typename T>
string toJson(const T& val) {
    ostringstream oss;
    oss << val;
    return oss.str();
}

string toJson(bool val) {
    return val ? "true" : "false";
}

string toJson(const string& val) {
    return "\\"" + val + "\\"";
}

string toJson(const vector<int>& val) {
    return vectorToJson(val);
}

string toJson(const vector<string>& val) {
    return vectorToJson(val);
}

// Helper to escape JSON strings
string escapeJson(const string& s) {
    string result;
    for (char c : s) {
        switch (c) {
            case '\\\\': result += "\\\\\\\\"; break;
            case '"': result += "\\\\\\""; break;
            case '\\n': result += "\\\\n"; break;
            case '\\r': result += "\\\\r"; break;
            case '\\t': result += "\\\\t"; break;
            default: result += c; break;
        }
    }
    return result;
}

// Global variables for stdout capture
stringstream scriptOutputStream;
streambuf* originalCoutBuffer = nullptr;
string scriptStdout;

// Capture stdout at program start
class StdoutCapture {
public:
    StdoutCapture() {
        originalCoutBuffer = cout.rdbuf();
        cout.rdbuf(scriptOutputStream.rdbuf());
    }
};

// This will execute before main and user code
static StdoutCapture capturer;

int main() {
    // Capture script-level stdout
    scriptStdout = scriptOutputStream.str();
    cout.rdbuf(originalCoutBuffer);
    
    string expectedFunction = "${functionName}";
    stringstream allStdout;
    
    // Note: C++ doesn't have runtime reflection, so we can't dynamically check if function exists
    // The compiler will catch undefined functions at compile time
    // But we include the structure for consistency
    
    cout << "{\\"results\\":[";
    
    ${testExecutions}
    
    string combinedStdout = scriptStdout + allStdout.str();
    cout << "],\\"stdout\\":\\"" << escapeJson(combinedStdout) << "\\",\\"script_stdout\\":\\"" << escapeJson(scriptStdout) << "\\"}" << endl;
    return 0;
}
`.trim();
};

/**
 * Generate C++ test call code for a single test case
 */
const generateCppTestCall = (functionName, input, index) => {
  let setup = '';
  let funcCall = '';
  const separator = index > 0 ? 'cout << ",";' : '';
  
  if (typeof input === 'object' && input !== null && !Array.isArray(input)) {
    // Object with named parameters
    const args = [];
    for (const [key, value] of Object.entries(input)) {
      if (Array.isArray(value)) {
        setup += `vector<int> ${key}_${index} = {${value.join(', ')}};\n        `;
        args.push(`${key}_${index}`);
      } else if (typeof value === 'string') {
        args.push(`"${value.replace(/"/g, '\\"')}"`);
      } else {
        args.push(value);
      }
    }
    funcCall = `${functionName}(${args.join(', ')})`;
  } else if (Array.isArray(input)) {
    setup = `vector<int> input_${index} = {${input.join(', ')}};\n        `;
    funcCall = `${functionName}(input_${index})`;
  } else if (typeof input === 'string') {
    funcCall = `${functionName}("${input.replace(/"/g, '\\"')}")`;
  } else {
    funcCall = `${functionName}(${input})`;
  }
  
  return `
    // Test case ${index + 1}
    ${separator}
    try {
        // Capture stdout for this test case
        stringstream testOutputStream_${index};
        streambuf* testOriginalBuffer_${index} = cout.rdbuf();
        cout.rdbuf(testOutputStream_${index}.rdbuf());
        
        ${setup}auto result_${index} = ${funcCall};
        
        cout.rdbuf(testOriginalBuffer_${index});
        string testStdout_${index} = testOutputStream_${index}.str();
        allStdout << testStdout_${index};
        
        cout << "{\\"output\\":" << toJson(result_${index}) << ",\\"error\\":null,\\"stdout\\":\\"" << escapeJson(testStdout_${index}) << "\\"}";
    } catch (const exception& e) {
        cout.rdbuf(originalCoutBuffer);
        cout << "{\\"output\\":null,\\"error\\":\\"" << escapeJson(e.what()) << "\\",\\"stdout\\":\\"\\"}";
    } catch (...) {
        cout.rdbuf(originalCoutBuffer);
        cout << "{\\"output\\":null,\\"error\\":\\"Unknown error\\",\\"stdout\\":\\"\\"}";
    }`;
};

/**
 * Wrap user code with test harness based on language
 * @param {string} userCode - User's function implementation
 * @param {string} language - Programming language (python, java, cpp)
 * @param {string} functionName - Name of the function to call
 * @param {Array} testCases - Array of test cases
 * @returns {string} - Complete executable code
 */
const wrapCode = (userCode, language, functionName, testCases) => {
  const lang = language.toLowerCase();
  
  switch (lang) {
    case 'python':
      return wrapPythonCode(userCode, functionName, testCases);
    case 'java':
      return wrapJavaCode(userCode, functionName, testCases);
    case 'cpp':
    case 'c++':
      return wrapCppCode(userCode, functionName, testCases);
    default:
      throw new Error(`Unsupported language: ${language}`);
  }
};

module.exports = {
  wrapCode,
  wrapPythonCode,
  wrapJavaCode,
  wrapCppCode,
};
