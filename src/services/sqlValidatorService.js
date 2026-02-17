const Database = require("better-sqlite3");

/**
 * SQL Validator Service
 * Handles SQL query validation against test cases
 */
class SqlValidatorService {
  /**
   * Map JS types to SQLite column types
   */
  getSqliteType(type) {
    const typeMap = {
      int: "INTEGER",
      integer: "INTEGER",
      varchar: "TEXT",
      text: "TEXT",
      boolean: "INTEGER",
      float: "REAL",
      double: "REAL",
      date: "TEXT",
      datetime: "TEXT",
    };
    return typeMap[type.toLowerCase()] || "TEXT";
  }

  /**
   * Generate CREATE TABLE statement from table schema
   */
  generateCreateTableSql(table) {
    const columns = table.columns.map((col) => {
      let colDef = `${col.name} ${this.getSqliteType(col.type)}`;
      if (col.isPrimaryKey) {
        colDef += " PRIMARY KEY";
      }
      return colDef;
    });
    return `CREATE TABLE ${table.name} (${columns.join(", ")});`;
  }

  /**
   * Generate INSERT statements for test data
   */
  generateInsertSql(tableName, rows) {
    if (!rows || rows.length === 0) return [];

    return rows.map((row) => {
      const columns = Object.keys(row);
      const values = Object.values(row).map((val) => {
        if (val === null) return "NULL";
        if (typeof val === "string") return `'${val.replace(/'/g, "''")}'`;
        return val;
      });
      return `INSERT INTO ${tableName} (${columns.join(", ")}) VALUES (${values.join(", ")});`;
    });
  }

  /**
   * Normalize result for comparison
   * - Convert to lowercase keys
   * - Sort rows by all columns for consistent comparison
   */
  normalizeResult(rows) {
    if (!rows || rows.length === 0) return [];

    return rows
      .map((row) => {
        const normalized = {};
        for (const [key, value] of Object.entries(row)) {
          normalized[key.toLowerCase()] = value;
        }
        return normalized;
      })
      .sort((a, b) => {
        const keys = Object.keys(a);
        for (const key of keys) {
          if (a[key] < b[key]) return -1;
          if (a[key] > b[key]) return 1;
        }
        return 0;
      });
  }

  /**
   * Compare two result sets
   */
  compareResults(actual, expected) {
    const normalizedActual = this.normalizeResult(actual);
    const normalizedExpected = this.normalizeResult(expected);

    if (normalizedActual.length !== normalizedExpected.length) {
      return {
        match: false,
        reason: `Row count mismatch: got ${normalizedActual.length}, expected ${normalizedExpected.length}`,
      };
    }

    for (let i = 0; i < normalizedExpected.length; i++) {
      const actualRow = normalizedActual[i];
      const expectedRow = normalizedExpected[i];

      const expectedKeys = Object.keys(expectedRow).map((k) => k.toLowerCase());
      const actualKeys = Object.keys(actualRow);

      // Check if all expected columns exist
      for (const key of expectedKeys) {
        if (!(key in actualRow)) {
          return {
            match: false,
            reason: `Missing column: ${key}`,
          };
        }

        if (actualRow[key] !== expectedRow[key.toLowerCase()]) {
          return {
            match: false,
            reason: `Value mismatch at row ${i + 1}, column "${key}": got "${actualRow[key]}", expected "${expectedRow[key.toLowerCase()]}"`,
          };
        }
      }
    }

    return { match: true };
  }

  /**
   * Run a single test case
   */
  runTestCase(testCase, tables, userQuery) {
    const db = new Database(":memory:");

    try {
      // Create tables
      for (const table of tables) {
        const createSql = this.generateCreateTableSql(table);
        db.exec(createSql);
      }

      // Insert test data
      for (const table of tables) {
        const tableData = testCase.input[table.name];
        if (tableData) {
          const insertStatements = this.generateInsertSql(table.name, tableData);
          for (const sql of insertStatements) {
            db.exec(sql);
          }
        }
      }

      // Execute user query
      const result = db.prepare(userQuery).all();

      // Compare results
      const comparison = this.compareResults(result, testCase.expectedOutput);

      return {
        testCaseId: testCase.id,
        passed: comparison.match,
        ...(comparison.match
          ? {}
          : {
              reason: comparison.reason,
              actualOutput: result,
              expectedOutput: testCase.expectedOutput,
            }),
      };
    } catch (error) {
      return {
        testCaseId: testCase.id,
        passed: false,
        reason: `Execution error: ${error.message}`,
      };
    } finally {
      db.close();
    }
  }

  /**
   * Validate user query against all test cases
   */
  validateQuery(question, userQuery) {
    const results = [];
    let passedCount = 0;

    for (const testCase of question.testCases) {
      const result = this.runTestCase(testCase, question.tables, userQuery);
      results.push(result);
      if (result.passed) passedCount++;
    }

    return {
      questionId: question.question_id,
      title: question.title,
      totalTestCases: question.testCases.length,
      passed: passedCount,
      failed: question.testCases.length - passedCount,
      allPassed: passedCount === question.testCases.length,
      results,
    };
  }
}

module.exports = new SqlValidatorService();
