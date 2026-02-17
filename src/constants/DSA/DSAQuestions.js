export const dsaQuestions = [
  {
    "question_id": "LC_DSA_001",
    "category": "Programming",
    "difficulty": "Easy",
    "title": "Two Sum",
    "description": "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",
    "functionName": "twoSum",
    "inputFormat": "nums: number[], target: number",
    "outputFormat": "number[]",
    "constraints": [
      "2 <= nums.length <= 10^4",
      "Exactly one valid answer exists"
    ],
    "testCases": [
      {
        "input": { "nums": [2, 7, 11, 15], "target": 9 },
        "expectedOutput": [0, 1]
      },
      {
        "input": { "nums": [3, 2, 4], "target": 6 },
        "expectedOutput": [1, 2]
      },
      {
        "input": { "nums": [3, 3], "target": 6 },
        "expectedOutput": [0, 1]
      }
    ],
    "tags": ["array", "hashmap"]
  },

  {
    "question_id": "LC_DSA_002",
    "category": "Programming",
    "difficulty": "Easy",
    "title": "Valid Palindrome",
    "description": "Return true if the given string is a palindrome, considering only alphanumeric characters and ignoring case.",
    "functionName": "isPalindrome",
    "inputFormat": "s: string",
    "outputFormat": "boolean",
    "constraints": [
      "1 <= s.length <= 10^5"
    ],
    "testCases": [
      {
        "input": "A man, a plan, a canal: Panama",
        "expectedOutput": true
      },
      {
        "input": "race a car",
        "expectedOutput": false
      },
      {
        "input": " ",
        "expectedOutput": true
      }
    ],
    "tags": ["string", "two-pointers"]
  },

  {
    "question_id": "LC_DSA_003",
    "category": "Programming",
    "difficulty": "Medium",
    "title": "Maximum Subarray",
    "description": "Find the contiguous subarray with the largest sum and return its sum.",
    "functionName": "maxSubArray",
    "inputFormat": "nums: number[]",
    "outputFormat": "number",
    "constraints": [
      "1 <= nums.length <= 10^5"
    ],
    "testCases": [
      {
        "input": [-2, 1, -3, 4, -1, 2, 1, -5, 4],
        "expectedOutput": 6
      },
      {
        "input": [1],
        "expectedOutput": 1
      },
      {
        "input": [-1, -2, -3],
        "expectedOutput": -1
      }
    ],
    "tags": ["array", "dynamic-programming"]
  },

  {
    "question_id": "LC_DSA_004",
    "category": "Programming",
    "difficulty": "Medium",
    "title": "Merge Two Sorted Arrays",
    "description": "Merge two sorted arrays into one sorted array and return it.",
    "functionName": "mergeSortedArrays",
    "inputFormat": "nums1: number[], nums2: number[]",
    "outputFormat": "number[]",
    "constraints": [
      "0 <= nums1.length, nums2.length <= 10^5"
    ],
    "testCases": [
      {
        "input": { "nums1": [1, 3, 5], "nums2": [2, 4, 6] },
        "expectedOutput": [1, 2, 3, 4, 5, 6]
      },
      {
        "input": { "nums1": [], "nums2": [1] },
        "expectedOutput": [1]
      },
      {
        "input": { "nums1": [2], "nums2": [] },
        "expectedOutput": [2]
      }
    ],
    "tags": ["array", "two-pointers"]
  },

  {
    "question_id": "LC_DSA_005",
    "category": "Programming",
    "difficulty": "Medium",
    "title": "Climbing Stairs",
    "description": "You are climbing a staircase. It takes n steps to reach the top. Each time you can climb either 1 or 2 steps. Return the number of distinct ways to reach the top.",
    "functionName": "climbStairs",
    "inputFormat": "n: number",
    "outputFormat": "number",
    "constraints": [
      "1 <= n <= 45"
    ],
    "testCases": [
      {
        "input": 2,
        "expectedOutput": 2
      },
      {
        "input": 3,
        "expectedOutput": 3
      },
      {
        "input": 5,
        "expectedOutput": 8
      }
    ],
    "tags": ["dynamic-programming", "recursion"]
  }
]
