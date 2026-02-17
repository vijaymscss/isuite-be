export const sqlQuestion = [
  {
    "question_id": "LC_SQL_JOIN_001",
    "category": "SQL",
    "difficulty": "Easy",
    "title": "Employees With Department Names",
    "description": "Write an SQL query to list employee names along with their department names.",
    "tables": [
      {
        "name": "Employee",
        "columns": [
          { "name": "id", "type": "int", "isPrimaryKey": true },
          { "name": "name", "type": "varchar" },
          { "name": "department_id", "type": "int" }
        ]
      },
      {
        "name": "Department",
        "columns": [
          { "name": "id", "type": "int", "isPrimaryKey": true },
          { "name": "name", "type": "varchar" }
        ]
      }
    ],
    "testCases": [
      {
        "id": "TC1",
        "input": {
          "Employee": [
            { "id": 1, "name": "Alice", "department_id": 1 },
            { "id": 2, "name": "Bob", "department_id": 2 }
          ],
          "Department": [
            { "id": 1, "name": "HR" },
            { "id": 2, "name": "IT" }
          ]
        },
        "expectedOutput": [
          { "name": "Alice", "department": "HR" },
          { "name": "Bob", "department": "IT" }
        ]
      },
      {
        "id": "TC2",
        "input": {
          "Employee": [{ "id": 1, "name": "John", "department_id": 1 }],
          "Department": [{ "id": 1, "name": "Finance" }]
        },
        "expectedOutput": [
          { "name": "John", "department": "Finance" }
        ]
      },
      {
        "id": "TC3",
        "input": {
          "Employee": [],
          "Department": []
        },
        "expectedOutput": []
      }
    ],
    "solution": {
      "language": "SQL",
      "query": "SELECT e.name, d.name AS department FROM Employee e JOIN Department d ON e.department_id = d.id;"
    }
  },

  {
    "question_id": "LC_SQL_JOIN_002",
    "category": "SQL",
    "difficulty": "Medium",
    "title": "Customers Without Orders",
    "description": "Find customers who have never placed an order.",
    "tables": [
      {
        "name": "Customer",
        "columns": [
          { "name": "id", "type": "int", "isPrimaryKey": true },
          { "name": "name", "type": "varchar" }
        ]
      },
      {
        "name": "Orders",
        "columns": [
          { "name": "id", "type": "int", "isPrimaryKey": true },
          { "name": "customer_id", "type": "int" }
        ]
      }
    ],
    "testCases": [
      {
        "id": "TC1",
        "input": {
          "Customer": [
            { "id": 1, "name": "A" },
            { "id": 2, "name": "B" }
          ],
          "Orders": [
            { "id": 1, "customer_id": 1 }
          ]
        },
        "expectedOutput": [
          { "name": "B" }
        ]
      },
      {
        "id": "TC2",
        "input": {
          "Customer": [{ "id": 1, "name": "A" }],
          "Orders": []
        },
        "expectedOutput": [
          { "name": "A" }
        ]
      },
      {
        "id": "TC3",
        "input": {
          "Customer": [],
          "Orders": []
        },
        "expectedOutput": []
      }
    ],
    "solution": {
      "language": "SQL",
      "query": "SELECT c.name FROM Customer c LEFT JOIN Orders o ON c.id = o.customer_id WHERE o.id IS NULL;"
    }
  },

  {
    "question_id": "LC_SQL_JOIN_003",
    "category": "SQL",
    "difficulty": "Medium",
    "title": "Highest Salary in Each Department",
    "description": "Find the highest salary in each department.",
    "tables": [
      {
        "name": "Employee",
        "columns": [
          { "name": "id", "type": "int", "isPrimaryKey": true },
          { "name": "salary", "type": "int" },
          { "name": "department_id", "type": "int" }
        ]
      },
      {
        "name": "Department",
        "columns": [
          { "name": "id", "type": "int", "isPrimaryKey": true },
          { "name": "name", "type": "varchar" }
        ]
      }
    ],
    "testCases": [
      {
        "id": "TC1",
        "input": {
          "Employee": [
            { "id": 1, "salary": 1000, "department_id": 1 },
            { "id": 2, "salary": 2000, "department_id": 1 }
          ],
          "Department": [{ "id": 1, "name": "IT" }]
        },
        "expectedOutput": [
          { "name": "IT", "salary": 2000 }
        ]
      },
      {
        "id": "TC2",
        "input": {
          "Employee": [{ "id": 1, "salary": 3000, "department_id": 2 }],
          "Department": [{ "id": 2, "name": "HR" }]
        },
        "expectedOutput": [
          { "name": "HR", "salary": 3000 }
        ]
      },
      {
        "id": "TC3",
        "input": {
          "Employee": [],
          "Department": []
        },
        "expectedOutput": []
      }
    ],
    "solution": {
      "language": "SQL",
      "query": "SELECT d.name, MAX(e.salary) AS salary FROM Employee e JOIN Department d ON e.department_id = d.id GROUP BY d.name;"
    }
  },

  {
    "question_id": "LC_SQL_JOIN_004",
    "category": "SQL",
    "difficulty": "Medium",
    "title": "Employees Earning More Than Their Manager",
    "description": "Find employees whose salary is greater than their manager.",
    "tables": [
      {
        "name": "Employee",
        "columns": [
          { "name": "id", "type": "int", "isPrimaryKey": true },
          { "name": "name", "type": "varchar" },
          { "name": "salary", "type": "int" },
          { "name": "manager_id", "type": "int" }
        ]
      }
    ],
    "testCases": [
      {
        "id": "TC1",
        "input": {
          "Employee": [
            { "id": 1, "name": "A", "salary": 3000, "manager_id": 2 },
            { "id": 2, "name": "B", "salary": 2000, "manager_id": null }
          ]
        },
        "expectedOutput": [
          { "name": "A" }
        ]
      },
      {
        "id": "TC2",
        "input": {
          "Employee": [
            { "id": 1, "name": "A", "salary": 1000, "manager_id": 2 },
            { "id": 2, "name": "B", "salary": 2000, "manager_id": null }
          ]
        },
        "expectedOutput": []
      },
      {
        "id": "TC3",
        "input": {
          "Employee": []
        },
        "expectedOutput": []
      }
    ],
    "solution": {
      "language": "SQL",
      "query": "SELECT e.name FROM Employee e JOIN Employee m ON e.manager_id = m.id WHERE e.salary > m.salary;"
    }
  },

  {
    "question_id": "LC_SQL_JOIN_005",
    "category": "SQL",
    "difficulty": "Medium",
    "title": "Products Never Ordered",
    "description": "Find products that were never ordered.",
    "tables": [
      {
        "name": "Product",
        "columns": [
          { "name": "id", "type": "int", "isPrimaryKey": true },
          { "name": "name", "type": "varchar" }
        ]
      },
      {
        "name": "Orders",
        "columns": [
          { "name": "id", "type": "int", "isPrimaryKey": true },
          { "name": "product_id", "type": "int" }
        ]
      }
    ],
    "testCases": [
      {
        "id": "TC1",
        "input": {
          "Product": [
            { "id": 1, "name": "Pen" },
            { "id": 2, "name": "Pencil" }
          ],
          "Orders": [{ "id": 1, "product_id": 1 }]
        },
        "expectedOutput": [
          { "name": "Pencil" }
        ]
      },
      {
        "id": "TC2",
        "input": {
          "Product": [{ "id": 1, "name": "Book" }],
          "Orders": []
        },
        "expectedOutput": [
          { "name": "Book" }
        ]
      },
      {
        "id": "TC3",
        "input": {
          "Product": [],
          "Orders": []
        },
        "expectedOutput": []
      }
    ],
    "solution": {
      "language": "SQL",
      "query": "SELECT p.name FROM Product p LEFT JOIN Orders o ON p.id = o.product_id WHERE o.id IS NULL;"
    }
  },

  {
    "question_id": "LC_SQL_JOIN_006",
    "category": "SQL",
    "difficulty": "Hard",
    "title": "Students Enrolled in All Courses",
    "description": "Find students who are enrolled in all available courses.",
    "tables": [
      {
        "name": "Student",
        "columns": [
          { "name": "id", "type": "int", "isPrimaryKey": true }
        ]
      },
      {
        "name": "Enrollment",
        "columns": [
          { "name": "student_id", "type": "int" },
          { "name": "course_id", "type": "int" }
        ]
      },
      {
        "name": "Course",
        "columns": [
          { "name": "id", "type": "int", "isPrimaryKey": true }
        ]
      }
    ],
    "testCases": [
      {
        "id": "TC1",
        "input": {
          "Student": [{ "id": 1 }],
          "Course": [{ "id": 1 }, { "id": 2 }],
          "Enrollment": [
            { "student_id": 1, "course_id": 1 },
            { "student_id": 1, "course_id": 2 }
          ]
        },
        "expectedOutput": [
          { "id": 1 }
        ]
      },
      {
        "id": "TC2",
        "input": {
          "Student": [{ "id": 1 }],
          "Course": [{ "id": 1 }, { "id": 2 }],
          "Enrollment": [{ "student_id": 1, "course_id": 1 }]
        },
        "expectedOutput": []
      },
      {
        "id": "TC3",
        "input": {
          "Student": [],
          "Course": [],
          "Enrollment": []
        },
        "expectedOutput": []
      }
    ],
    "solution": {
      "language": "SQL",
      "query": "SELECT s.id FROM Student s JOIN Enrollment e ON s.id = e.student_id GROUP BY s.id HAVING COUNT(DISTINCT e.course_id) = (SELECT COUNT(*) FROM Course);"
    }
  },
  {
    "question_id": "LC_SQL_JOIN_007",
    "category": "SQL",
    "difficulty": "Easy",
    "title": "Books and Their Authors",
    "description": "Write an SQL query to list book titles along with their author names.",
    "tables": [
      {
        "name": "Book",
        "columns": [
          { "name": "id", "type": "int", "isPrimaryKey": true },
          { "name": "title", "type": "varchar" },
          { "name": "author_id", "type": "int" }
        ]
      },
      {
        "name": "Author",
        "columns": [
          { "name": "id", "type": "int", "isPrimaryKey": true },
          { "name": "name", "type": "varchar" }
        ]
      }
    ],
    "testCases": [
      {
        "id": "TC1",
        "input": {
          "Book": [
            { "id": 1, "title": "Book1", "author_id": 1 },
            { "id": 2, "title": "Book2", "author_id": 2 }
          ],
          "Author": [
            { "id": 1, "name": "AuthorA" },
            { "id": 2, "name": "AuthorB" }
          ]
        },
        "expectedOutput": [
          { "title": "Book1", "author": "AuthorA" },
          { "title": "Book2", "author": "AuthorB" }
        ]
      },
      {
        "id": "TC2",
        "input": {
          "Book": [{ "id": 1, "title": "Book3", "author_id": 3 }],
          "Author": [{ "id": 3, "name": "AuthorC" }]
        },
        "expectedOutput": [
          { "title": "Book3", "author": "AuthorC" }
        ]
      },
      {
        "id": "TC3",
        "input": {
          "Book": [],
          "Author": []
        },
        "expectedOutput": []
      }
    ],
    "solution": {
      "language": "SQL",
      "query": "SELECT b.title, a.name AS author FROM Book b JOIN Author a ON b.author_id = a.id;"
    }
  },
  {
    "question_id": "LC_SQL_JOIN_008",
    "category": "SQL",
    "difficulty": "Medium",
    "title": "Departments Without Employees",
    "description": "Find departments that have no employees.",
    "tables": [
      {
        "name": "Department",
        "columns": [
          { "name": "id", "type": "int", "isPrimaryKey": true },
          { "name": "name", "type": "varchar" }
        ]
      },
      {
        "name": "Employee",
        "columns": [
          { "name": "id", "type": "int", "isPrimaryKey": true },
          { "name": "department_id", "type": "int" }
        ]
      }
    ],
    "testCases": [
      {
        "id": "TC1",
        "input": {
          "Department": [
            { "id": 1, "name": "HR" },
            { "id": 2, "name": "IT" }
          ],
          "Employee": [{ "id": 1, "department_id": 1 }]
        },
        "expectedOutput": [
          { "name": "IT" }
        ]
      },
      {
        "id": "TC2",
        "input": {
          "Department": [{ "id": 1, "name": "Finance" }],
          "Employee": []
        },
        "expectedOutput": [
          { "name": "Finance" }
        ]
      },
      {
        "id": "TC3",
        "input": {
          "Department": [],
          "Employee": []
        },
        "expectedOutput": []
      }
    ],
    "solution": {
      "language": "SQL",
      "query": "SELECT d.name FROM Department d LEFT JOIN Employee e ON d.id = e.department_id WHERE e.id IS NULL;"
    }
  },
  {
    "question_id": "LC_SQL_JOIN_009",
    "category": "SQL",
    "difficulty": "Medium",
    "title": "Average Salary Per Department",
    "description": "Calculate the average salary in each department.",
    "tables": [
      {
        "name": "Employee",
        "columns": [
          { "name": "id", "type": "int", "isPrimaryKey": true },
          { "name": "salary", "type": "int" },
          { "name": "department_id", "type": "int" }
        ]
      },
      {
        "name": "Department",
        "columns": [
          { "name": "id", "type": "int", "isPrimaryKey": true },
          { "name": "name", "type": "varchar" }
        ]
      }
    ],
    "testCases": [
      {
        "id": "TC1",
        "input": {
          "Employee": [
            { "id": 1, "salary": 1000, "department_id": 1 },
            { "id": 2, "salary": 2000, "department_id": 1 }
          ],
          "Department": [{ "id": 1, "name": "IT" }]
        },
        "expectedOutput": [
          { "name": "IT", "average_salary": 1500 }
        ]
      },
      {
        "id": "TC2",
        "input": {
          "Employee": [{ "id": 1, "salary": 3000, "department_id": 2 }],
          "Department": [{ "id": 2, "name": "HR" }]
        },
        "expectedOutput": [
          { "name": "HR", "average_salary": 3000 }
        ]
      },
      {
        "id": "TC3",
        "input": {
          "Employee": [],
          "Department": []
        },
        "expectedOutput": []
      }
    ],
    "solution": {
      "language": "SQL",
      "query": "SELECT d.name, AVG(e.salary) AS average_salary FROM Employee e JOIN Department d ON e.department_id = d.id GROUP BY d.name;"
    }
  },
  {
    "question_id": "LC_SQL_JOIN_010",
    "category": "SQL",
    "difficulty": "Hard",
    "title": "Employees With Duplicate Names",
    "description": "Find employees who have the same name as another employee.",
    "tables": [
      {
        "name": "Employee",
        "columns": [
          { "name": "id", "type": "int", "isPrimaryKey": true },
          { "name": "name", "type": "varchar" }
        ]
      }
    ],
    "testCases": [
      {
        "id": "TC1",
        "input": {
          "Employee": [
            { "id": 1, "name": "Alice" },
            { "id": 2, "name": "Bob" },
            { "id": 3, "name": "Alice" }
          ]
        },
        "expectedOutput": [
          { "name": "Alice" }
        ]
      },
      {
        "id": "TC2",
        "input": {
          "Employee": [
            { "id": 1, "name": "John" }
          ]
        },
        "expectedOutput": []
      },
      {
        "id": "TC3",
        "input": {
          "Employee": []
        },
        "expectedOutput": []
      }
    ],
    "solution": {
      "language": "SQL",
      "query": "SELECT e1.name FROM Employee e1 JOIN Employee e2 ON e1.name = e2.name AND e1.id != e2.id GROUP BY e1.name;"
    }
  },
  {
    "question_id": "LC_SQL_JOIN_011",
    "category": "SQL",
    "difficulty": "Medium",
    "title": "Customers With Multiple Orders",
    "description": "Find customers who have placed more than one order.",
    "tables": [
      {
        "name": "Customer",
        "columns": [
          { "name": "id", "type": "int", "isPrimaryKey": true },
          { "name": "name", "type": "varchar" }
        ]
      },
      {
        "name": "Orders",
        "columns": [
          { "name": "id", "type": "int", "isPrimaryKey": true },
          { "name": "customer_id", "type": "int" }
        ]
      }
    ],
    "testCases": [
      {
        "id": "TC1",
        "input": {
          "Customer": [
            { "id": 1, "name": "A" },
            { "id": 2, "name": "B" }
          ],
          "Orders": [
            { "id": 1, "customer_id": 1 },
            { "id": 2, "customer_id": 1 }
          ]
        },
        "expectedOutput": [
          { "name": "A" }
        ]
      },
      {
        "id": "TC2",
        "input": {
          "Customer": [{ "id": 1, "name": "C" }],
          "Orders": [{ "id": 1, "customer_id": 1 }]
        },
        "expectedOutput": []
      },
      {
        "id": "TC3",
        "input": {
          "Customer": [],
          "Orders": []
        },
        "expectedOutput": []
      }
    ],
    "solution": {
      "language": "SQL",
      "query": "SELECT c.name FROM Customer c JOIN Orders o ON c.id = o.customer_id GROUP BY c.name HAVING COUNT(o.id) > 1;"
    }
  },
  {
    "question_id": "LC_SQL_JOIN_012",
    "category": "SQL",
    "difficulty": "Medium",
    "title": "Products Ordered By Multiple Customers",
    "description": "Find products that have been ordered by more than one customer.",
    "tables": [
      {
        "name": "Product",
        "columns": [
          { "name": "id", "type": "int", "isPrimaryKey": true },
          { "name": "name", "type": "varchar" }
        ]
      },
      {
        "name": "Orders",
        "columns": [
          { "name": "id", "type": "int", "isPrimaryKey": true },
          { "name": "product_id", "type": "int" },
          { "name": "customer_id", "type": "int" }
        ]
      }
    ],
    "testCases": [
      {
        "id": "TC1",
        "input": {
          "Product": [
            { "id": 1, "name": "Pen" },
            { "id": 2, "name": "Pencil" }
          ],
          "Orders": [
            { "id": 1, "product_id": 1, "customer_id": 1 },
            { "id": 2, "product_id": 1, "customer_id": 2 }
          ]
        },
        "expectedOutput": [
          { "name": "Pen" }
        ]
      },
      {
        "id": "TC2",
        "input": {
          "Product": [{ "id": 1, "name": "Book" }],
          "Orders": [{ "id": 1, "product_id": 1, "customer_id": 1 }]
        },
        "expectedOutput": []
      },
      {
        "id": "TC3",
        "input": {
          "Product": [],
          "Orders": []
        },
        "expectedOutput": []
      }
    ],
    "solution": {
      "language": "SQL",
      "query": "SELECT p.name FROM Product p JOIN Orders o ON p.id = o.product_id GROUP BY p.name HAVING COUNT(DISTINCT o.customer_id) > 1;"
    }
  },
  {
    "question_id": "LC_SQL_JOIN_013",
    "category": "SQL",
    "difficulty": "Hard",
    "title": "Managers With At Least 3 Employees",
    "description": "Find managers who have at least 3 direct reports.",
    "tables": [
      {
        "name": "Employee",
        "columns": [
          { "name": "id", "type": "int", "isPrimaryKey": true },
          { "name": "name", "type": "varchar" },
          { "name": "manager_id", "type": "int" }
        ]
      }
    ],
    "testCases": [
      {
        "id": "TC1",
        "input": {
          "Employee": [
            { "id": 1, "name": "Boss", "manager_id": null },
            { "id": 2, "name": "Emp1", "manager_id": 1 },
            { "id": 3, "name": "Emp2", "manager_id": 1 },
            { "id": 4, "name": "Emp3", "manager_id": 1 }
          ]
        },
        "expectedOutput": [
          { "name": "Boss" }
        ]
      },
      {
        "id": "TC2",
        "input": {
          "Employee": [
            { "id": 1, "name": "Boss", "manager_id": null },
            { "id": 2, "name": "Emp1", "manager_id": 1 }
          ]
        },
        "expectedOutput": []
      },
      {
        "id": "TC3",
        "input": {
          "Employee": []
        },
        "expectedOutput": []
      }
    ],
    "solution": {
      "language": "SQL",
      "query": "SELECT m.name FROM Employee m JOIN Employee e ON m.id = e.manager_id GROUP BY m.name HAVING COUNT(e.id) >= 3;"
    }
  },
  {
    "question_id": "LC_SQL_JOIN_014",
    "category": "SQL",
    "difficulty": "Medium",
    "title": "Students With Highest GPA",
    "description": "Find students with the highest GPA.",
    "tables": [
      {
        "name": "Student",
        "columns": [
          { "name": "id", "type": "int", "isPrimaryKey": true },
          { "name": "name", "type": "varchar" }
        ]
      },
      {
        "name": "Grade",
        "columns": [
          { "name": "student_id", "type": "int" },
          { "name": "gpa", "type": "float" }
        ]
      }
    ],
    "testCases": [
      {
        "id": "TC1",
        "input": {
          "Student": [
            { "id": 1, "name": "Alice" },
            { "id": 2, "name": "Bob" }
          ],
          "Grade": [
            { "student_id": 1, "gpa": 3.5 },
            { "student_id": 2, "gpa": 3.8 }
          ]
        },
        "expectedOutput": [
          { "name": "Bob" }
        ]
      },
      {
        "id": "TC2",
        "input": {
          "Student": [{ "id": 1, "name": "Charlie" }],
          "Grade": [{ "student_id": 1, "gpa": 4.0 }]
        },
        "expectedOutput": [
          { "name": "Charlie" }
        ]
      },
      {
        "id": "TC3",
        "input": {
          "Student": [],
          "Grade": []
        },
        "expectedOutput": []
      }
    ],
    "solution": {
      "language": "SQL",
      "query": "SELECT s.name FROM Student s JOIN Grade g ON s.id = g.student_id WHERE g.gpa = (SELECT MAX(gpa) FROM Grade);"
    }
  },
  {
    "question_id": "LC_SQL_JOIN_015",
    "category": "SQL",
    "difficulty": "Easy",
    "title": "Books Not Borrowed",
    "description": "Find books that have never been borrowed.",
    "tables": [
      {
        "name": "Book",
        "columns": [
          { "name": "id", "type": "int", "isPrimaryKey": true },
          { "name": "title", "type": "varchar" }
        ]
      },
      {
        "name": "Borrow",
        "columns": [
          { "name": "id", "type": "int", "isPrimaryKey": true },
          { "name": "book_id", "type": "int" }
        ]
      }
    ],
    "testCases": [
      {
        "id": "TC1",
        "input": {
          "Book": [
            { "id": 1, "title": "Book1" },
            { "id": 2, "title": "Book2" }
          ],
          "Borrow": [{ "id": 1, "book_id": 1 }]
        },
        "expectedOutput": [
          { "title": "Book2" }
        ]
      },
      {
        "id": "TC2",
        "input": {
          "Book": [{ "id": 1, "title": "Book3" }],
          "Borrow": []
        },
        "expectedOutput": [
          { "title": "Book3" }
        ]
      },
      {
        "id": "TC3",
        "input": {
          "Book": [],
          "Borrow": []
        },
        "expectedOutput": []
      }
    ],
    "solution": {
      "language": "SQL",
      "query": "SELECT b.title FROM Book b LEFT JOIN Borrow br ON b.id = br.book_id WHERE br.id IS NULL;"
    }
  },
  {
    "question_id": "LC_SQL_JOIN_016",
    "category": "SQL",
    "difficulty": "Medium",
    "title": "Authors With Most Books",
    "description": "Find the author who has written the most books.",
    "tables": [
      {
        "name": "Author",
        "columns": [
          { "name": "id", "type": "int", "isPrimaryKey": true },
          { "name": "name", "type": "varchar" }
        ]
      },
      {
        "name": "Book",
        "columns": [
          { "name": "id", "type": "int", "isPrimaryKey": true },
          { "name": "author_id", "type": "int" }
        ]
      }
    ],
    "testCases": [
      {
        "id": "TC1",
        "input": {
          "Author": [
            { "id": 1, "name": "AuthorA" },
            { "id": 2, "name": "AuthorB" }
          ],
          "Book": [
            { "id": 1, "author_id": 1 },
            { "id": 2, "author_id": 1 },
            { "id": 3, "author_id": 2 }
          ]
        },
        "expectedOutput": [
          { "name": "AuthorA" }
        ]
      },
      {
        "id": "TC2",
        "input": {
          "Author": [{ "id": 1, "name": "AuthorC" }],
          "Book": [{ "id": 1, "author_id": 1 }]
        },
        "expectedOutput": [
          { "name": "AuthorC" }
        ]
      },
      {
        "id": "TC3",
        "input": {
          "Author": [],
          "Book": []
        },
        "expectedOutput": []
      }
    ],
    "solution": {
      "language": "SQL",
      "query": "SELECT a.name FROM Author a JOIN Book b ON a.id = b.author_id GROUP BY a.name ORDER BY COUNT(b.id) DESC LIMIT 1;"
    }
  },
  {
    "question_id": "LC_SQL_JOIN_017",
    "category": "SQL",
    "difficulty": "Hard",
    "title": "Sales By Region",
    "description": "Calculate total sales amount by region.",
    "tables": [
      {
        "name": "Region",
        "columns": [
          { "name": "id", "type": "int", "isPrimaryKey": true },
          { "name": "name", "type": "varchar" }
        ]
      },
      {
        "name": "Customer",
        "columns": [
          { "name": "id", "type": "int", "isPrimaryKey": true },
          { "name": "region_id", "type": "int" }
        ]
      },
      {
        "name": "Orders",
        "columns": [
          { "name": "id", "type": "int", "isPrimaryKey": true },
          { "name": "customer_id", "type": "int" },
          { "name": "amount", "type": "int" }
        ]
      }
    ],
    "testCases": [
      {
        "id": "TC1",
        "input": {
          "Region": [
            { "id": 1, "name": "North" },
            { "id": 2, "name": "South" }
          ],
          "Customer": [
            { "id": 1, "region_id": 1 },
            { "id": 2, "region_id": 2 }
          ],
          "Orders": [
            { "id": 1, "customer_id": 1, "amount": 100 },
            { "id": 2, "customer_id": 1, "amount": 200 }
          ]
        },
        "expectedOutput": [
          { "name": "North", "total_sales": 300 },
          { "name": "South", "total_sales": 0 }
        ]
      },
      {
        "id": "TC2",
        "input": {
          "Region": [{ "id": 1, "name": "East" }],
          "Customer": [{ "id": 1, "region_id": 1 }],
          "Orders": [{ "id": 1, "customer_id": 1, "amount": 500 }]
        },
        "expectedOutput": [
          { "name": "East", "total_sales": 500 }
        ]
      },
      {
        "id": "TC3",
        "input": {
          "Region": [],
          "Customer": [],
          "Orders": []
        },
        "expectedOutput": []
      }
    ],
    "solution": {
      "language": "SQL",
      "query": "SELECT r.name, SUM(o.amount) AS total_sales FROM Region r LEFT JOIN Customer c ON r.id = c.region_id LEFT JOIN Orders o ON c.id = o.customer_id GROUP BY r.name;"
    }
  },
  {
    "question_id": "LC_SQL_JOIN_018",
    "category": "SQL",
    "difficulty": "Easy",
    "title": "Duplicate Emails",
    "description": "Find all duplicate emails in the Person table.",
    "tables": [
      {
        "name": "Person",
        "columns": [
          { "name": "id", "type": "int", "isPrimaryKey": true },
          { "name": "email", "type": "varchar" }
        ]
      }
    ],
    "testCases": [
      {
        "id": "TC1",
        "input": {
          "Person": [
            { "id": 1, "email": "a@example.com" },
            { "id": 2, "email": "b@example.com" },
            { "id": 3, "email": "a@example.com" }
          ]
        },
        "expectedOutput": [
          { "email": "a@example.com" }
        ]
      },
      {
        "id": "TC2",
        "input": {
          "Person": [{ "id": 1, "email": "c@example.com" }]
        },
        "expectedOutput": []
      },
      {
        "id": "TC3",
        "input": {
          "Person": []
        },
        "expectedOutput": []
      }
    ],
    "solution": {
      "language": "SQL",
      "query": "SELECT p1.email FROM Person p1 JOIN Person p2 ON p1.email = p2.email AND p1.id != p2.id GROUP BY p1.email;"
    }
  },
  {
    "question_id": "LC_SQL_JOIN_019",
    "category": "SQL",
    "difficulty": "Medium",
    "title": "Second Highest Salary",
    "description": "Find the second highest salary from the Employee table.",
    "tables": [
      {
        "name": "Employee",
        "columns": [
          { "name": "id", "type": "int", "isPrimaryKey": true },
          { "name": "salary", "type": "int" }
        ]
      }
    ],
    "testCases": [
      {
        "id": "TC1",
        "input": {
          "Employee": [
            { "id": 1, "salary": 100 },
            { "id": 2, "salary": 200 },
            { "id": 3, "salary": 300 }
          ]
        },
        "expectedOutput": [
          { "salary": 200 }
        ]
      },
      {
        "id": "TC2",
        "input": {
          "Employee": [
            { "id": 1, "salary": 100 },
            { "id": 2, "salary": 200 },
            { "id": 3, "salary": 300 },
            { "id": 4, "salary": 400 },
            { "id": 5, "salary": 500 }
          ]
        },
        "expectedOutput": [{  "salary": 400 },]
      },
      {
        "id": "TC3",
        "input": {
          "Employee": [
            { "id": 2, "salary": 200234 },
            { "id": 3, "salary": 300123 },
            { "id": 4, "salary": 400456 },
          ]
        },
        "expectedOutput": [{ "salary": 300123 }]
      }
    ],
    "solution": {
      "language": "SQL",
      "query": "SELECT MAX(salary) AS salary FROM Employee WHERE salary < (SELECT MAX(salary) FROM Employee);"
    }
  },
  {
    "question_id": "LC_SQL_JOIN_020",
    "category": "SQL",
    "difficulty": "Hard",
    "title": "Consecutive Numbers",
    "description": "Find all numbers that appear at least three times consecutively.",
    "tables": [
      {
        "name": "Logs",
        "columns": [
          { "name": "id", "type": "int", "isPrimaryKey": true },
          { "name": "num", "type": "int" }
        ]
      }
    ],
    "testCases": [
      {
        "id": "TC1",
        "input": {
          "Logs": [
            { "id": 1, "num": 1 },
            { "id": 2, "num": 1 },
            { "id": 3, "num": 1 },
            { "id": 4, "num": 2 }
          ]
        },
        "expectedOutput": [
          { "num": 1 }
        ]
      },
      {
        "id": "TC2",
        "input": {
          "Logs": [
            { "id": 1, "num": 1 },
            { "id": 2, "num": 2 }
          ]
        },
        "expectedOutput": []
      },
      {
        "id": "TC3",
        "input": {
          "Logs": []
        },
        "expectedOutput": []
      }
    ],
    "solution": {
      "language": "SQL",
      "query": "SELECT DISTINCT l1.num FROM Logs l1 JOIN Logs l2 ON l1.id = l2.id - 1 JOIN Logs l3 ON l1.id = l3.id - 2 WHERE l1.num = l2.num AND l1.num = l3.num;"
    }
  },
  {
    "question_id": "LC_SQL_JOIN_021",
    "category": "SQL",
    "difficulty": "Easy",
    "title": "Big Countries",
    "description": "Find countries with area >= 3000000 or population >= 25000000.",
    "tables": [
      {
        "name": "World",
        "columns": [
          { "name": "name", "type": "varchar", "isPrimaryKey": true },
          { "name": "area", "type": "int" },
          { "name": "population", "type": "int" }
        ]
      }
    ],
    "testCases": [
      {
        "id": "TC1",
        "input": {
          "World": [
            { "name": "CountryA", "area": 4000000, "population": 10000000 },
            { "name": "CountryB", "area": 2000000, "population": 30000000 }
          ]
        },
        "expectedOutput": [
          { "name": "CountryA" },
          { "name": "CountryB" }
        ]
      },
      {
        "id": "TC2",
        "input": {
          "World": [{ "name": "CountryC", "area": 1000000, "population": 10000000 }]
        },
        "expectedOutput": []
      },
      {
        "id": "TC3",
        "input": {
          "World": []
        },
        "expectedOutput": []
      }
    ],
    "solution": {
      "language": "SQL",
      "query": "SELECT name FROM World WHERE area >= 3000000 OR population >= 25000000;"
    }
  },
  {
    "question_id": "LC_SQL_JOIN_022",
    "category": "SQL",
    "difficulty": "Medium",
    "title": "Classes With More Than 5 Students",
    "description": "Find classes that have more than 5 students.",
    "tables": [
      {
        "name": "Courses",
        "columns": [
          { "name": "student", "type": "varchar" },
          { "name": "class", "type": "varchar" }
        ]
      }
    ],
    "testCases": [
      {
        "id": "TC1",
        "input": {
          "Courses": [
            { "student": "A", "class": "Math" },
            { "student": "B", "class": "Math" },
            { "student": "C", "class": "Math" },
            { "student": "D", "class": "Math" },
            { "student": "E", "class": "Math" },
            { "student": "F", "class": "Math" },
            { "student": "G", "class": "English" }
          ]
        },
        "expectedOutput": [
          { "class": "Math" }
        ]
      },
      {
        "id": "TC2",
        "input": {
          "Courses": [
            { "student": "A", "class": "Science" }
          ]
        },
        "expectedOutput": []
      },
      {
        "id": "TC3",
        "input": {
          "Courses": []
        },
        "expectedOutput": []
      }
    ],
    "solution": {
      "language": "SQL",
      "query": "SELECT class FROM Courses GROUP BY class HAVING COUNT(DISTINCT student) >= 5;"
    }
  },
  {
    "question_id": "LC_SQL_JOIN_023",
    "category": "SQL",
    "difficulty": "Hard",
    "title": "Department Top Three Salaries",
    "description": "Find the top three distinct salaries for each department.",
    "tables": [
      {
        "name": "Employee",
        "columns": [
          { "name": "id", "type": "int", "isPrimaryKey": true },
          { "name": "salary", "type": "int" },
          { "name": "department_id", "type": "int" }
        ]
      },
      {
        "name": "Department",
        "columns": [
          { "name": "id", "type": "int", "isPrimaryKey": true },
          { "name": "name", "type": "varchar" }
        ]
      }
    ],
    "testCases": [
      {
        "id": "TC1",
        "input": {
          "Employee": [
            { "id": 1, "salary": 1000, "department_id": 1 },
            { "id": 2, "salary": 2000, "department_id": 1 },
            { "id": 3, "salary": 3000, "department_id": 1 },
            { "id": 4, "salary": 4000, "department_id": 1 }
          ],
          "Department": [{ "id": 1, "name": "IT" }]
        },
        "expectedOutput": [
          { "department": "IT", "salary": 4000 },
          { "department": "IT", "salary": 3000 },
          { "department": "IT", "salary": 2000 }
        ]
      },
      {
        "id": "TC2",
        "input": {
          "Employee": [{ "id": 1, "salary": 5000, "department_id": 2 }],
          "Department": [{ "id": 2, "name": "HR" }]
        },
        "expectedOutput": [
          { "department": "HR", "salary": 5000 }
        ]
      },
      {
        "id": "TC3",
        "input": {
          "Employee": [],
          "Department": []
        },
        "expectedOutput": []
      }
    ],
    "solution": {
      "language": "SQL",
      "query": "SELECT d.name AS department, e.salary FROM Employee e JOIN Department d ON e.department_id = d.id WHERE (SELECT COUNT(DISTINCT salary) FROM Employee WHERE department_id = e.department_id AND salary > e.salary) < 3 ORDER BY d.name, e.salary DESC;"
    }
  },
  {
    "question_id": "LC_SQL_JOIN_024",
    "category": "SQL",
    "difficulty": "Medium",
    "title": "Rising Temperature",
    "description": "Find dates with higher temperature compared to the previous day.",
    "tables": [
      {
        "name": "Weather",
        "columns": [
          { "name": "id", "type": "int", "isPrimaryKey": true },
          { "name": "recordDate", "type": "date" },
          { "name": "temperature", "type": "int" }
        ]
      }
    ],
    "testCases": [
      {
        "id": "TC1",
        "input": {
          "Weather": [
            { "id": 1, "recordDate": "2015-01-01", "temperature": 10 },
            { "id": 2, "recordDate": "2015-01-02", "temperature": 25 },
            { "id": 3, "recordDate": "2015-01-03", "temperature": 20 }
          ]
        },
        "expectedOutput": [
          { "id": 2 }
        ]
      },
      {
        "id": "TC2",
        "input": {
          "Weather": [
            { "id": 1, "recordDate": "2015-01-01", "temperature": 30 }
          ]
        },
        "expectedOutput": []
      },
      {
        "id": "TC3",
        "input": {
          "Weather": []
        },
        "expectedOutput": []
      }
    ],
    "solution": {
      "language": "SQL",
      "query": "SELECT w1.id FROM Weather w1 JOIN Weather w2 ON DATE_ADD(w2.recordDate, INTERVAL 1 DAY) = w1.recordDate WHERE w1.temperature > w2.temperature;"
    }
  },
  {
    "question_id": "LC_SQL_JOIN_025",
    "category": "SQL",
    "difficulty": "Hard",
    "title": "Friend Requests Acceptance Rate",
    "description": "Calculate the acceptance rate of friend requests.",
    "tables": [
      {
        "name": "Request",
        "columns": [
          { "name": "sender_id", "type": "int" },
          { "name": "send_to_id", "type": "int" },
          { "name": "request_date", "type": "date" }
        ]
      },
      {
        "name": "Accept",
        "columns": [
          { "name": "requester_id", "type": "int" },
          { "name": "accepter_id", "type": "int" },
          { "name": "accept_date", "type": "date" }
        ]
      }
    ],
    "testCases": [
      {
        "id": "TC1",
        "input": {
          "Request": [
            { "sender_id": 1, "send_to_id": 2, "request_date": "2016-06-01" },
            { "sender_id": 1, "send_to_id": 3, "request_date": "2016-06-01" }
          ],
          "Accept": [
            { "requester_id": 1, "accepter_id": 2, "accept_date": "2016-06-08" }
          ]
        },
        "expectedOutput": [
          { "accept_rate": 0.5 }
        ]
      },
      {
        "id": "TC2",
        "input": {
          "Request": [{ "sender_id": 1, "send_to_id": 2, "request_date": "2016-06-01" }],
          "Accept": [{ "requester_id": 1, "accepter_id": 2, "accept_date": "2016-06-08" }]
        },
        "expectedOutput": [
          { "accept_rate": 1.0 }
        ]
      },
      {
        "id": "TC3",
        "input": {
          "Request": [],
          "Accept": []
        },
        "expectedOutput": [
          { "accept_rate": 0.0 }
        ]
      }
    ],
    "solution": {
      "language": "SQL",
      "query": "SELECT IFNULL(ROUND(COUNT(*) * 1.0 / (SELECT COUNT(*) FROM (SELECT DISTINCT sender_id, send_to_id FROM Request)), 2), 0) AS accept_rate FROM (SELECT DISTINCT r.sender_id, r.send_to_id FROM Request r JOIN Accept a ON r.sender_id = a.requester_id AND r.send_to_id = a.accepter_id) t;"
    }
  },
  {
    "question_id": "LC_SQL_JOIN_026",
    "category": "SQL",
    "difficulty": "Medium",
    "title": "Average Selling Price",
    "description": "Calculate the average selling price for each product.",
    "tables": [
      {
        "name": "Product",
        "columns": [
          { "name": "product_id", "type": "int", "isPrimaryKey": true }
        ]
      },
      {
        "name": "Prices",
        "columns": [
          { "name": "product_id", "type": "int" },
          { "name": "start_date", "type": "date" },
          { "name": "end_date", "type": "date" },
          { "name": "price", "type": "int" }
        ]
      },
      {
        "name": "UnitsSold",
        "columns": [
          { "name": "product_id", "type": "int" },
          { "name": "purchase_date", "type": "date" },
          { "name": "units", "type": "int" }
        ]
      }
    ],
    "testCases": [
      {
        "id": "TC1",
        "input": {
          "Product": [{ "product_id": 1 }],
          "Prices": [{ "product_id": 1, "start_date": "2019-02-17", "end_date": "2019-02-28", "price": 5 }],
          "UnitsSold": [{ "product_id": 1, "purchase_date": "2019-02-25", "units": 20 }]
        },
        "expectedOutput": [
          { "product_id": 1, "average_price": 5 }
        ]
      },
      {
        "id": "TC2",
        "input": {
          "Product": [{ "product_id": 2 }],
          "Prices": [{ "product_id": 2, "start_date": "2019-03-01", "end_date": "2019-03-22", "price": 10 }],
          "UnitsSold": []
        },
        "expectedOutput": [
          { "product_id": 2, "average_price": 0 }
        ]
      },
      {
        "id": "TC3",
        "input": {
          "Product": [],
          "Prices": [],
          "UnitsSold": []
        },
        "expectedOutput": []
      }
    ],
    "solution": {
      "language": "SQL",
      "query": "SELECT p.product_id, IFNULL(ROUND(SUM(pr.price * u.units) / SUM(u.units), 2), 0) AS average_price FROM Product p LEFT JOIN Prices pr ON p.product_id = pr.product_id LEFT JOIN UnitsSold u ON p.product_id = u.product_id AND u.purchase_date BETWEEN pr.start_date AND pr.end_date GROUP BY p.product_id;"
    }
  }
]


