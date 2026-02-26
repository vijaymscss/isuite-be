const dsaQuestions = [
  {
    "question_id": "dsa_q01",
    "category": "Programming",
    "difficulty": "Easy",
    "title": "Reverse Array",
    "description": "Reverse the given array in-place.",
    "inputFormat": "nums: number[]",
    "outputFormat": "number[]",
    "constraints": ["1 <= nums.length <= 10^5"],
    "testCases": [
      { "input": [1, 2, 3, 4], "expectedOutput": [4, 3, 2, 1] },
      { "input": [5], "expectedOutput": [5] }
    ],
    "tags": ["array", "two-pointers"],
    "pattern": {
      "cpp": [
        "vector<int> reverseArray(vector<int>& nums) { // dont change the function signature",
        "    // write your code here",
        "}"
      ],
      "java": [
        "public int[] reverseArray(int[] nums) { // dont change the function signature",
        "    // write your code here",
        "}"
      ],
      "python": [
        "def reverseArray(nums): # dont change the function signature",
        "    # write your code here",
        "    pass"
      ]
    }
  },

  {
    "question_id": "dsa_q02",
    "category": "Programming",
    "difficulty": "Easy",
    "title": "Find Maximum Element",
    "description": "Return the maximum element in an array.",
    "inputFormat": "nums: number[]",
    "outputFormat": "number",
    "constraints": ["1 <= nums.length <= 10^5"],
    "testCases": [
      { "input": [1, 5, 3, 9, 2], "expectedOutput": 9 },
      { "input": [-5, -1, -10], "expectedOutput": -1 }
    ],
    "tags": ["array"],
    "pattern": {
      "cpp": [
        "int findMax(vector<int>& nums) { // dont change the function signature",
        "    // write your code here",
        "}"
      ],
      "java": [
        "public int findMax(int[] nums) { // dont change the function signature",
        "    // write your code here",
        "}"
      ],
      "python": [
        "def findMax(nums): # dont change the function signature",
        "    # write your code here",
        "    pass"
      ]
    }
  },

  {
    "question_id": "dsa_q03",
    "category": "Programming",
    "difficulty": "Easy",
    "title": "Remove Duplicates from Sorted Array",
    "description": "Remove duplicates in-place and return new length.",
    "inputFormat": "nums: number[]",
    "outputFormat": "number",
    "constraints": ["Array is sorted"],
    "testCases": [
      { "input": [1,1,2], "expectedOutput": 2 },
      { "input": [0,0,1,1,2], "expectedOutput": 3 }
    ],
    "tags": ["array", "two-pointers"],
    "pattern": {
      "cpp": [
        "int removeDuplicates(vector<int>& nums) { // dont change the function signature",
        "    // write your code here",
        "}"
      ],
      "java": [
        "public int removeDuplicates(int[] nums) { // dont change the function signature",
        "    // write your code here",
        "}"
      ],
      "python": [
        "def removeDuplicates(nums): # dont change the function signature",
        "    # write your code here",
        "    pass"
      ]
    }
  },

  {
    "question_id": "dsa_q04",
    "category": "Programming",
    "difficulty": "Easy",
    "title": "Move Zeroes",
    "description": "Move all zeroes to the end while maintaining order.",
    "inputFormat": "nums: number[]",
    "outputFormat": "number[]",
    "constraints": ["1 <= nums.length <= 10^5"],
    "testCases": [
      { "input": [0,1,0,3,12], "expectedOutput": [1,3,12,0,0] }
    ],
    "tags": ["array", "two-pointers"],
    "pattern": {
      "cpp": [
        "vector<int> moveZeroes(vector<int>& nums) { // dont change the function signature",
        "    // write your code here",
        "}"
      ],
      "java": [
        "public int[] moveZeroes(int[] nums) { // dont change the function signature",
        "    // write your code here",
        "}"
      ],
      "python": [
        "def moveZeroes(nums): # dont change the function signature",
        "    # write your code here",
        "    pass"
      ]
    }
  },

  {
    "question_id": "dsa_q05",
    "category": "Programming",
    "difficulty": "Easy",
    "title": "Check Sorted Array",
    "description": "Check whether an array is sorted in non-decreasing order.",
    "inputFormat": "nums: number[]",
    "outputFormat": "boolean",
    "constraints": ["1 <= nums.length <= 10^5"],
    "testCases": [
      { "input": [1,2,3,4], "expectedOutput": true },
      { "input": [3,2,1], "expectedOutput": false }
    ],
    "tags": ["array"],
    "pattern": {
      "cpp": [
        "bool isSorted(vector<int>& nums) { // dont change the function signature",
        "    // write your code here",
        "}"
      ],
      "java": [
        "public boolean isSorted(int[] nums) { // dont change the function signature",
        "    // write your code here",
        "}"
      ],
      "python": [
        "def isSorted(nums): # dont change the function signature",
        "    # write your code here",
        "    pass"
      ]
    }
  },
  {
    "question_id": "dsa_q06",
    "category": "Programming",
    "difficulty": "Easy",
    "title": "Find Missing Number",
    "description": "Find the missing number from 0 to n.",
    "inputFormat": "nums: number[]",
    "outputFormat": "number",
    "constraints": ["0 <= nums[i] <= n"],
    "testCases": [
      { "input": [3,0,1], "expectedOutput": 2 },
      { "input": [0,1], "expectedOutput": 2 }
    ],
    "tags": ["array", "math"],
    "pattern": {
      "cpp": [
        "int missingNumber(vector<int>& nums) { // dont change the function signature",
        "    // write your code here",
        "}"
      ],
      "java": [
        "public int missingNumber(int[] nums) { // dont change the function signature",
        "    // write your code here",
        "}"
      ],
      "python": [
        "def missingNumber(nums): # dont change the function signature",
        "    # write your code here",
        "    pass"
      ]
    }
  },

  {
    "question_id": "dsa_q07",
    "category": "Programming",
    "difficulty": "Easy",
    "title": "Rotate Array",
    "description": "Rotate array to the right by k steps.",
    "inputFormat": "nums: number[], k: number",
    "outputFormat": "number[]",
    "constraints": ["1 <= nums.length <= 10^5"],
    "testCases": [
      { "input": { "nums": [1,2,3,4,5], "k": 2 }, "expectedOutput": [4,5,1,2,3] }
    ],
    "tags": ["array"],
    "pattern": {
      "cpp": [
        "vector<int> rotateArray(vector<int>& nums, int k) { // dont change the function signature",
        "    // write your code here",
        "}"
      ],
      "java": [
        "public int[] rotateArray(int[] nums, int k) { // dont change the function signature",
        "    // write your code here",
        "}"
      ],
      "python": [
        "def rotateArray(nums, k): # dont change the function signature",
        "    # write your code here",
        "    pass"
      ]
    }
  },

  {
    "question_id": "dsa_q08",
    "category": "Programming",
    "difficulty": "Easy",
    "title": "Second Largest Element",
    "description": "Find the second largest element in an array.",
    "inputFormat": "nums: number[]",
    "outputFormat": "number",
    "constraints": ["n >= 2"],
    "testCases": [
      { "input": [10,5,20,8], "expectedOutput": 10 }
    ],
    "tags": ["array"],
    "pattern": {
      "cpp": [
        "int secondLargest(vector<int>& nums) { // dont change the function signature",
        "    // write your code here",
        "}"
      ],
      "java": [
        "public int secondLargest(int[] nums) { // dont change the function signature",
        "    // write your code here",
        "}"
      ],
      "python": [
        "def secondLargest(nums): # dont change the function signature",
        "    # write your code here",
        "    pass"
      ]
    }
  },

  {
    "question_id": "dsa_q09",
    "category": "Programming",
    "difficulty": "Easy",
    "title": "Array Frequency",
    "description": "Find frequency of each element.",
    "inputFormat": "nums: number[]",
    "outputFormat": "object",
    "constraints": ["1 <= nums.length <= 10^4"],
    "testCases": [
      { "input": [1,2,2,3], "expectedOutput": {"1":1,"2":2,"3":1} }
    ],
    "tags": ["array", "hashmap"],
    "pattern": {
      "cpp": [
        "unordered_map<int, int> frequency(vector<int>& nums) { // dont change the function signature",
        "    // write your code here",
        "}"
      ],
      "java": [
        "public Map<Integer, Integer> frequency(int[] nums) { // dont change the function signature",
        "    // write your code here",
        "}"
      ],
      "python": [
        "def frequency(nums): # dont change the function signature",
        "    # write your code here",
        "    pass"
      ]
    }
  },

  {
    "question_id": "dsa_q10",
    "category": "Programming",
    "difficulty": "Easy",
    "title": "Reverse String",
    "description": "Reverse a given string.",
    "inputFormat": "s: string",
    "outputFormat": "string",
    "constraints": ["1 <= s.length <= 10^5"],
    "testCases": [
      { "input": "hello", "expectedOutput": "olleh" }
    ],
    "tags": ["string"],
    "pattern": {
      "cpp": [
        "string reverseString(string s) { // dont change the function signature",
        "    // write your code here",
        "}"
      ],
      "java": [
        "public String reverseString(String s) { // dont change the function signature",
        "    // write your code here",
        "}"
      ],
      "python": [
        "def reverseString(s): # dont change the function signature",
        "    # write your code here",
        "    pass"
      ]
    }
  },
  {
    "question_id": "dsa_q11",
    "category": "Programming",
    "difficulty": "Easy",
    "title": "Check Anagram",
    "description": "Check if two strings are anagrams.",
    "inputFormat": "s: string, t: string",
    "outputFormat": "boolean",
    "constraints": ["1 <= length <= 10^5"],
    "testCases": [
      { "input": { "s": "listen", "t": "silent" }, "expectedOutput": true }
    ],
    "tags": ["string", "hashmap"],
    "pattern": {
      "cpp": [
        "bool isAnagram(string s, string t) { // dont change the function signature",
        "    // write your code here",
        "}"
      ],
      "java": [
        "public boolean isAnagram(String s, String t) { // dont change the function signature",
        "    // write your code here",
        "}"
      ],
      "python": [
        "def isAnagram(s, t): # dont change the function signature",
        "    # write your code here",
        "    pass"
      ]
    }
  },

  {
    "question_id": "dsa_q12",
    "category": "Programming",
    "difficulty": "Easy",
    "title": "First Non-Repeating Character",
    "description": "Return first non-repeating character index.",
    "inputFormat": "s: string",
    "outputFormat": "number",
    "constraints": ["1 <= s.length <= 10^5"],
    "testCases": [
      { "input": "leetcode", "expectedOutput": 0 }
    ],
    "tags": ["string", "hashmap"],
    "pattern": {
      "cpp": [
        "int firstUniqueChar(string s) { // dont change the function signature",
        "    // write your code here",
        "}"
      ],
      "java": [
        "public int firstUniqueChar(String s) { // dont change the function signature",
        "    // write your code here",
        "}"
      ],
      "python": [
        "def firstUniqueChar(s): # dont change the function signature",
        "    # write your code here",
        "    pass"
      ]
    }
  },

  {
    "question_id": "dsa_q13",
    "category": "Programming",
    "difficulty": "Easy",
    "title": "Count Vowels",
    "description": "Count number of vowels in a string.",
    "inputFormat": "s: string",
    "outputFormat": "number",
    "constraints": ["1 <= s.length <= 10^5"],
    "testCases": [
      { "input": "hello", "expectedOutput": 2 }
    ],
    "tags": ["string"],
    "pattern": {
      "cpp": [
        "int countVowels(string s) { // dont change the function signature",
        "    // write your code here",
        "}"
      ],
      "java": [
        "public int countVowels(String s) { // dont change the function signature",
        "    // write your code here",
        "}"
      ],
      "python": [
        "def countVowels(s): # dont change the function signature",
        "    # write your code here",
        "    pass"
      ]
    }
  },

  {
    "question_id": "dsa_q14",
    "category": "Programming",
    "difficulty": "Easy",
    "title": "Remove Duplicate Characters",
    "description": "Remove duplicate characters from string.",
    "inputFormat": "s: string",
    "outputFormat": "string",
    "constraints": ["1 <= s.length <= 10^5"],
    "testCases": [
      { "input": "aabbcc", "expectedOutput": "abc" }
    ],
    "tags": ["string"],
    "pattern": {
      "cpp": [
        "string removeDuplicates(string s) { // dont change the function signature",
        "    // write your code here",
        "}"
      ],
      "java": [
        "public String removeDuplicates(String s) { // dont change the function signature",
        "    // write your code here",
        "}"
      ],
      "python": [
        "def removeDuplicates(s): # dont change the function signature",
        "    # write your code here",
        "    pass"
      ]
    }
  },

  {
    "question_id": "dsa_q15",
    "category": "Programming",
    "difficulty": "Easy",
    "title": "Longest Word",
    "description": "Find longest word in a sentence.",
    "inputFormat": "s: string",
    "outputFormat": "string",
    "constraints": ["1 <= s.length <= 10^5"],
    "testCases": [
      { "input": "I love programming", "expectedOutput": "programming" }
    ],
    "tags": ["string"],
    "pattern": {
      "cpp": [
        "string longestWord(string s) { // dont change the function signature",
        "    // write your code here",
        "}"
      ],
      "java": [
        "public String longestWord(String s) { // dont change the function signature",
        "    // write your code here",
        "}"
      ],
      "python": [
        "def longestWord(s): # dont change the function signature",
        "    # write your code here",
        "    pass"
      ]
    }
  },

  {
    "question_id": "dsa_q16",
    "category": "Programming",
    "difficulty": "Easy",
    "title": "Reverse Words",
    "description": "Reverse words in a sentence.",
    "inputFormat": "s: string",
    "outputFormat": "string",
    "constraints": ["1 <= s.length <= 10^5"],
    "testCases": [
      { "input": "Hello World", "expectedOutput": "World Hello" }
    ],
    "tags": ["string"],
    "pattern": {
      "cpp": [
        "string reverseWords(string s) { // dont change the function signature",
        "    // write your code here",
        "}"
      ],
      "java": [
        "public String reverseWords(String s) { // dont change the function signature",
        "    // write your code here",
        "}"
      ],
      "python": [
        "def reverseWords(s): # dont change the function signature",
        "    # write your code here",
        "    pass"
      ]
    }
  },

  {
    "question_id": "dsa_q17",
    "category": "Programming",
    "difficulty": "Easy",
    "title": "Only Digits",
    "description": "Check if string contains only digits.",
    "inputFormat": "s: string",
    "outputFormat": "boolean",
    "constraints": ["1 <= s.length <= 10^5"],
    "testCases": [
      { "input": "12345", "expectedOutput": true },
      { "input": "12a45", "expectedOutput": false }
    ],
    "tags": ["string"],
    "pattern": {
      "cpp": [
        "bool isDigits(string s) { // dont change the function signature",
        "    // write your code here",
        "}"
      ],
      "java": [
        "public boolean isDigits(String s) { // dont change the function signature",
        "    // write your code here",
        "}"
      ],
      "python": [
        "def isDigits(s): # dont change the function signature",
        "    # write your code here",
        "    pass"
      ]
    }
  },

  {
    "question_id": "dsa_q18",
    "category": "Programming",
    "difficulty": "Easy",
    "title": "Substring Search",
    "description": "Find first occurrence of substring.",
    "inputFormat": "haystack: string, needle: string",
    "outputFormat": "number",
    "constraints": ["1 <= length <= 10^5"],
    "testCases": [
      { "input": { "haystack": "hello", "needle": "ll" }, "expectedOutput": 2 }
    ],
    "tags": ["string"],
    "pattern": {
      "cpp": [
        "int strStr(string haystack, string needle) { // dont change the function signature",
        "    // write your code here",
        "}"
      ],
      "java": [
        "public int strStr(String haystack, String needle) { // dont change the function signature",
        "    // write your code here",
        "}"
      ],
      "python": [
        "def strStr(haystack, needle): # dont change the function signature",
        "    # write your code here",
        "    pass"
      ]
    }
  },

  {
    "question_id": "dsa_q19",
    "category": "Programming",
    "difficulty": "Easy",
    "title": "Check Palindrome String",
    "description": "Check if string is palindrome.",
    "inputFormat": "s: string",
    "outputFormat": "boolean",
    "constraints": ["1 <= s.length <= 10^5"],
    "testCases": [
      { "input": "madam", "expectedOutput": true },
      { "input": "hello", "expectedOutput": false }
    ],
    "tags": ["string", "two-pointers"],
    "pattern": {
      "cpp": [
        "bool isPalindrome(string s) { // dont change the function signature",
        "    // write your code here",
        "}"
      ],
      "java": [
        "public boolean isPalindrome(String s) { // dont change the function signature",
        "    // write your code here",
        "}"
      ],
      "python": [
        "def isPalindrome(s): # dont change the function signature",
        "    # write your code here",
        "    pass"
      ]
    }
  },

  {
    "question_id": "dsa_q20",
    "category": "Programming",
    "difficulty": "Easy",
    "title": "Merge Sorted Arrays",
    "description": "Merge two sorted arrays into one sorted array.",
    "inputFormat": "nums1: number[], nums2: number[]",
    "outputFormat": "number[]",
    "constraints": ["Arrays are sorted"],
    "testCases": [
      { "input": { "nums1": [1,3,5], "nums2": [2,4,6] }, "expectedOutput": [1,2,3,4,5,6] }
    ],
    "tags": ["array", "two-pointers"],
    "pattern": {
      "cpp": [
        "vector<int> mergeArrays(vector<int>& nums1, vector<int>& nums2) { // dont change the function signature",
        "    // write your code here",
        "}"
      ],
      "java": [
        "public int[] mergeArrays(int[] nums1, int[] nums2) { // dont change the function signature",
        "    // write your code here",
        "}"
      ],
      "python": [
        "def mergeArrays(nums1, nums2): # dont change the function signature",
        "    # write your code here",
        "    pass"
      ]
    }
  }
];

module.exports = { dsaQuestions };