export interface Question {
  question_id: string;
  questionType: string;
  question: string;
  sentence: string;
  options: string[];
  correctAnswer: string;
  explanation: string[];
}

export const synonymSentenceQuestions: Question[] = [
  {
    "question_id": "SYN_1",
    "questionType": "SYNONYM",
    "question": "Choose the best replacement for the underlined part of the sentence:",
    "sentence": "She did not attend the meeting because **she was suffering from fever**.",
    "options": [
      "she suffered from fever",
      "she was suffering from fever",
      "she is suffering from fever",
      "she had been suffering fever"
    ],
    "correctAnswer": "she was suffering from fever",
    "explanation": [
      "The past continuous tense correctly explains an ongoing condition in the past.",
      "Other options either change tense or use incorrect structure."
    ]
  },
  {
    "question_id": "SYN_2",
    "questionType": "SYNONYM",
    "question": "Choose the best replacement for the underlined part of the sentence:",
    "sentence": "The project was delayed due to **lack of proper planning**.",
    "options": [
      "lack of proper planning",
      "lacking proper planning",
      "the plan was not proper",
      "improperly planned"
    ],
    "correctAnswer": "lack of proper planning",
    "explanation": [
      "The noun phrase fits grammatically after the preposition 'due to'.",
      "Other options either change sentence structure or meaning."
    ]
  },
  {
    "question_id": "SYN_3",
    "questionType": "SYNONYM",
    "question": "Choose the best replacement for the underlined part of the sentence:",
    "sentence": "He completed the task quickly; **as a result, he received appreciation**.",
    "options": [
      "therefore he received appreciation",
      "as a result, he received appreciation",
      "so that he received appreciation",
      "because he received appreciation"
    ],
    "correctAnswer": "as a result, he received appreciation",
    "explanation": [
      "The phrase 'as a result' correctly shows consequence.",
      "Other options either change meaning or misuse connectors."
    ]
  },
  {
    "question_id": "SYN_4",
    "questionType": "SYNONYM",
    "question": "Choose the best replacement for the underlined part of the sentence:",
    "sentence": "The manager was angry with the clerk; **he made a serious mistake**.",
    "options": [
      "he committed a serious mistake",
      "he made a serious mistake",
      "he had been making a serious mistake",
      "he makes a serious mistake"
    ],
    "correctAnswer": "he made a serious mistake",
    "explanation": [
      "The sentence is in the simple past tense, describing a completed action.",
      "The correct option preserves tense and meaning without grammatical distortion."
    ]
  },
  {
    "question_id": "SYN_5",
    "questionType": "SYNONYM",
    "question": "Choose the best replacement for the underlined part of the sentence:",
    "sentence": "The teacher was not present yesterday because **the teacher was analyzing the report** in the lab.",
    "options": [
      "the teacher is analyzing the report",
      "the teacher has analyzed the report",
      "the teacher was analyzing the report",
      "the teacher analyzes the report"
    ],
    "correctAnswer": "the teacher was analyzing the report",
    "explanation": [
      "The past continuous tense is appropriate for an action that was in progress at a specific time in the past.",
      "The auxiliary 'was' matches the singular subject."
    ]
  },
  {
    "question_id": "SYN_6",
    "questionType": "SYNONYM",
    "question": "Choose the best replacement for the underlined part of the sentence:",
    "sentence": "The teacher was not present yesterday because **the teacher was analyzing the project** in the lab.",
    "options": [
      "the teacher was analyzing the project",
      "the teacher analyzes the project",
      "the teacher is analyzing the project",
      "the teacher has analyzed the project"
    ],
    "correctAnswer": "the teacher was analyzing the project",
    "explanation": [
      "The past continuous tense is appropriate for an action that was in progress at a specific time in the past.",
      "The auxiliary 'was' matches the singular subject."
    ]
  },
  {
    "question_id": "SYN_7",
    "questionType": "SYNONYM",
    "question": "Choose the best replacement for the underlined part of the sentence:",
    "sentence": "The teacher was not present yesterday because **the teacher was analyzing the application** in the lab.",
    "options": [
      "the teacher is analyzing the application",
      "the teacher was analyzing the application",
      "the teacher has analyzed the application",
      "the teacher analyzes the application"
    ],
    "correctAnswer": "the teacher was analyzing the application",
    "explanation": [
      "The past continuous tense is appropriate for an action that was in progress at a specific time in the past.",
      "The auxiliary 'was' matches the singular subject."
    ]
  },
  {
    "question_id": "SYN_8",
    "questionType": "SYNONYM",
    "question": "Choose the best replacement for the underlined part of the sentence:",
    "sentence": "The teacher was not present yesterday because **the teacher was analyzing the data** in the lab.",
    "options": [
      "the teacher has analyzed the data",
      "the teacher was analyzing the data",
      "the teacher analyzes the data",
      "the teacher is analyzing the data"
    ],
    "correctAnswer": "the teacher was analyzing the data",
    "explanation": [
      "The past continuous tense is appropriate for an action that was in progress at a specific time in the past.",
      "The auxiliary 'was' matches the singular subject."
    ]
  },
  {
    "question_id": "SYN_9",
    "questionType": "SYNONYM",
    "question": "Choose the best replacement for the underlined part of the sentence:",
    "sentence": "The teacher was not present yesterday because **the teacher was analyzing the findings** in the lab.",
    "options": [
      "the teacher was analyzing the findings",
      "the teacher has analyzed the findings",
      "the teacher analyzes the findings",
      "the teacher is analyzing the findings"
    ],
    "correctAnswer": "the teacher was analyzing the findings",
    "explanation": [
      "The past continuous tense is appropriate for an action that was in progress at a specific time in the past.",
      "The auxiliary 'was' matches the singular subject."
    ]
  },
  {
    "question_id": "SYN_10",
    "questionType": "SYNONYM",
    "question": "Choose the best replacement for the underlined part of the sentence:",
    "sentence": "The teacher was not present yesterday because **the teacher was analyzing the document** in the lab.",
    "options": [
      "the teacher analyzes the document",
      "the teacher was analyzing the document",
      "the teacher has analyzed the document",
      "the teacher is analyzing the document"
    ],
    "correctAnswer": "the teacher was analyzing the document",
    "explanation": [
      "The past continuous tense is appropriate for an action that was in progress at a specific time in the past.",
      "The auxiliary 'was' matches the singular subject."
    ]
  },
  {
    "question_id": "SYN_11",
    "questionType": "SYNONYM",
    "question": "Choose the best replacement for the underlined part of the sentence:",
    "sentence": "The teacher was not present yesterday because **the teacher was analyzing the budget** in the lab.",
    "options": [
      "the teacher was analyzing the budget",
      "the teacher analyzes the budget",
      "the teacher is analyzing the budget",
      "the teacher has analyzed the budget"
    ],
    "correctAnswer": "the teacher was analyzing the budget",
    "explanation": [
      "The past continuous tense is appropriate for an action that was in progress at a specific time in the past.",
      "The auxiliary 'was' matches the singular subject."
    ]
  },
  {
    "question_id": "SYN_12",
    "questionType": "SYNONYM",
    "question": "Choose the best replacement for the underlined part of the sentence:",
    "sentence": "The teacher was not present yesterday because **the teacher was analyzing the schedule** in the lab.",
    "options": [
      "the teacher is analyzing the schedule",
      "the teacher analyzes the schedule",
      "the teacher was analyzing the schedule",
      "the teacher has analyzed the schedule"
    ],
    "correctAnswer": "the teacher was analyzing the schedule",
    "explanation": [
      "The past continuous tense is appropriate for an action that was in progress at a specific time in the past.",
      "The auxiliary 'was' matches the singular subject."
    ]
  },
  {
    "question_id": "SYN_13",
    "questionType": "SYNONYM",
    "question": "Choose the best replacement for the underlined part of the sentence:",
    "sentence": "The teacher was not present yesterday because **the teacher was analyzing the plan** in the lab.",
    "options": [
      "the teacher was analyzing the plan",
      "the teacher has analyzed the plan",
      "the teacher is analyzing the plan",
      "the teacher analyzes the plan"
    ],
    "correctAnswer": "the teacher was analyzing the plan",
    "explanation": [
      "The past continuous tense is appropriate for an action that was in progress at a specific time in the past.",
      "The auxiliary 'was' matches the singular subject."
    ]
  },
  {
    "question_id": "SYN_14",
    "questionType": "SYNONYM",
    "question": "Choose the best replacement for the underlined part of the sentence:",
    "sentence": "The teacher was not present yesterday because **the teacher was analyzing the results** in the lab.",
    "options": [
      "the teacher is analyzing the results",
      "the teacher has analyzed the results",
      "the teacher analyzes the results",
      "the teacher was analyzing the results"
    ],
    "correctAnswer": "the teacher was analyzing the results",
    "explanation": [
      "The past continuous tense is appropriate for an action that was in progress at a specific time in the past.",
      "The auxiliary 'was' matches the singular subject."
    ]
  },
  {
    "question_id": "SYN_15",
    "questionType": "SYNONYM",
    "question": "Choose the best replacement for the underlined part of the sentence:",
    "sentence": "The teacher was not present yesterday because **the teacher was analyzing the system** in the lab.",
    "options": [
      "the teacher is analyzing the system",
      "the teacher analyzes the system",
      "the teacher was analyzing the system",
      "the teacher has analyzed the system"
    ],
    "correctAnswer": "the teacher was analyzing the system",
    "explanation": [
      "The past continuous tense is appropriate for an action that was in progress at a specific time in the past.",
      "The auxiliary 'was' matches the singular subject."
    ]
  },
  {
    "question_id": "SYN_16",
    "questionType": "SYNONYM",
    "question": "Choose the best replacement for the underlined part of the sentence:",
    "sentence": "The teacher was not present yesterday because **the teacher was analyzing the presentation** in the lab.",
    "options": [
      "the teacher has analyzed the presentation",
      "the teacher was analyzing the presentation",
      "the teacher analyzes the presentation",
      "the teacher is analyzing the presentation"
    ],
    "correctAnswer": "the teacher was analyzing the presentation",
    "explanation": [
      "The past continuous tense is appropriate for an action that was in progress at a specific time in the past.",
      "The auxiliary 'was' matches the singular subject."
    ]
  },
  {
    "question_id": "SYN_17",
    "questionType": "SYNONYM",
    "question": "Choose the best replacement for the underlined part of the sentence:",
    "sentence": "The teacher was not present yesterday because **the teacher was analyzing the contract** in the lab.",
    "options": [
      "the teacher has analyzed the contract",
      "the teacher is analyzing the contract",
      "the teacher analyzes the contract",
      "the teacher was analyzing the contract"
    ],
    "correctAnswer": "the teacher was analyzing the contract",
    "explanation": [
      "The past continuous tense is appropriate for an action that was in progress at a specific time in the past.",
      "The auxiliary 'was' matches the singular subject."
    ]
  },
  {
    "question_id": "SYN_18",
    "questionType": "SYNONYM",
    "question": "Choose the best replacement for the underlined part of the sentence:",
    "sentence": "The pilot was not present yesterday because **the pilot was analyzing the report** in the lab.",
    "options": [
      "the pilot is analyzing the report",
      "the pilot analyzes the report",
      "the pilot was analyzing the report",
      "the pilot has analyzed the report"
    ],
    "correctAnswer": "the pilot was analyzing the report",
    "explanation": [
      "The past continuous tense is appropriate for an action that was in progress at a specific time in the past.",
      "The auxiliary 'was' matches the singular subject."
    ]
  },
  {
    "question_id": "SYN_19",
    "questionType": "SYNONYM",
    "question": "Choose the best replacement for the underlined part of the sentence:",
    "sentence": "The pilot was not present yesterday because **the pilot was analyzing the project** in the lab.",
    "options": [
      "the pilot analyzes the project",
      "the pilot has analyzed the project",
      "the pilot was analyzing the project",
      "the pilot is analyzing the project"
    ],
    "correctAnswer": "the pilot was analyzing the project",
    "explanation": [
      "The past continuous tense is appropriate for an action that was in progress at a specific time in the past.",
      "The auxiliary 'was' matches the singular subject."
    ]
  },
  {
    "question_id": "SYN_20",
    "questionType": "SYNONYM",
    "question": "Choose the best replacement for the underlined part of the sentence:",
    "sentence": "The pilot was not present yesterday because **the pilot was analyzing the application** in the lab.",
    "options": [
      "the pilot has analyzed the application",
      "the pilot is analyzing the application",
      "the pilot analyzes the application",
      "the pilot was analyzing the application"
    ],
    "correctAnswer": "the pilot was analyzing the application",
    "explanation": [
      "The past continuous tense is appropriate for an action that was in progress at a specific time in the past.",
      "The auxiliary 'was' matches the singular subject."
    ]
  },
  {
    "question_id": "SYN_21",
    "questionType": "SYNONYM",
    "question": "Choose the best replacement for the underlined part of the sentence:",
    "sentence": "The pilot was not present yesterday because **the pilot was analyzing the data** in the lab.",
    "options": [
      "the pilot analyzes the data",
      "the pilot was analyzing the data",
      "the pilot is analyzing the data",
      "the pilot has analyzed the data"
    ],
    "correctAnswer": "the pilot was analyzing the data",
    "explanation": [
      "The past continuous tense is appropriate for an action that was in progress at a specific time in the past.",
      "The auxiliary 'was' matches the singular subject."
    ]
  },
  {
    "question_id": "SYN_22",
    "questionType": "SYNONYM",
    "question": "Choose the best replacement for the underlined part of the sentence:",
    "sentence": "The pilot was not present yesterday because **the pilot was analyzing the findings** in the lab.",
    "options": [
      "the pilot was analyzing the findings",
      "the pilot is analyzing the findings",
      "the pilot analyzes the findings",
      "the pilot has analyzed the findings"
    ],
    "correctAnswer": "the pilot was analyzing the findings",
    "explanation": [
      "The past continuous tense is appropriate for an action that was in progress at a specific time in the past.",
      "The auxiliary 'was' matches the singular subject."
    ]
  },
  {
    "question_id": "SYN_23",
    "questionType": "SYNONYM",
    "question": "Choose the best replacement for the underlined part of the sentence:",
    "sentence": "The pilot was not present yesterday because **the pilot was analyzing the document** in the lab.",
    "options": [
      "the pilot is analyzing the document",
      "the pilot has analyzed the document",
      "the pilot was analyzing the document",
      "the pilot analyzes the document"
    ],
    "correctAnswer": "the pilot was analyzing the document",
    "explanation": [
      "The past continuous tense is appropriate for an action that was in progress at a specific time in the past.",
      "The auxiliary 'was' matches the singular subject."
    ]
  },
  {
    "question_id": "SYN_24",
    "questionType": "SYNONYM",
    "question": "Choose the best replacement for the underlined part of the sentence:",
    "sentence": "The pilot was not present yesterday because **the pilot was analyzing the budget** in the lab.",
    "options": [
      "the pilot is analyzing the budget",
      "the pilot analyzes the budget",
      "the pilot has analyzed the budget",
      "the pilot was analyzing the budget"
    ],
    "correctAnswer": "the pilot was analyzing the budget",
    "explanation": [
      "The past continuous tense is appropriate for an action that was in progress at a specific time in the past.",
      "The auxiliary 'was' matches the singular subject."
    ]
  },
  {
    "question_id": "SYN_25",
    "questionType": "SYNONYM",
    "question": "Choose the best replacement for the underlined part of the sentence:",
    "sentence": "The pilot was not present yesterday because **the pilot was analyzing the schedule** in the lab.",
    "options": [
      "the pilot was analyzing the schedule",
      "the pilot is analyzing the schedule",
      "the pilot analyzes the schedule",
      "the pilot has analyzed the schedule"
    ],
    "correctAnswer": "the pilot was analyzing the schedule",
    "explanation": [
      "The past continuous tense is appropriate for an action that was in progress at a specific time in the past.",
      "The auxiliary 'was' matches the singular subject."
    ]
  },
  {
    "question_id": "SYN_26",
    "questionType": "SYNONYM",
    "question": "Choose the best replacement for the underlined part of the sentence:",
    "sentence": "The pilot was not present yesterday because **the pilot was analyzing the plan** in the lab.",
    "options": [
      "the pilot is analyzing the plan",
      "the pilot has analyzed the plan",
      "the pilot analyzes the plan",
      "the pilot was analyzing the plan"
    ],
    "correctAnswer": "the pilot was analyzing the plan",
    "explanation": [
      "The past continuous tense is appropriate for an action that was in progress at a specific time in the past.",
      "The auxiliary 'was' matches the singular subject."
    ]
  },
  {
    "question_id": "SYN_27",
    "questionType": "SYNONYM",
    "question": "Choose the best replacement for the underlined part of the sentence:",
    "sentence": "The pilot was not present yesterday because **the pilot was analyzing the results** in the lab.",
    "options": [
      "the pilot is analyzing the results",
      "the pilot has analyzed the results",
      "the pilot analyzes the results",
      "the pilot was analyzing the results"
    ],
    "correctAnswer": "the pilot was analyzing the results",
    "explanation": [
      "The past continuous tense is appropriate for an action that was in progress at a specific time in the past.",
      "The auxiliary 'was' matches the singular subject."
    ]
  },
  {
    "question_id": "SYN_28",
    "questionType": "SYNONYM",
    "question": "Choose the best replacement for the underlined part of the sentence:",
    "sentence": "The pilot was not present yesterday because **the pilot was analyzing the system** in the lab.",
    "options": [
      "the pilot was analyzing the system",
      "the pilot analyzes the system",
      "the pilot is analyzing the system",
      "the pilot has analyzed the system"
    ],
    "correctAnswer": "the pilot was analyzing the system",
    "explanation": [
      "The past continuous tense is appropriate for an action that was in progress at a specific time in the past.",
      "The auxiliary 'was' matches the singular subject."
    ]
  },
  {
    "question_id": "SYN_29",
    "questionType": "SYNONYM",
    "question": "Choose the best replacement for the underlined part of the sentence:",
    "sentence": "The pilot was not present yesterday because **the pilot was analyzing the presentation** in the lab.",
    "options": [
      "the pilot was analyzing the presentation",
      "the pilot analyzes the presentation",
      "the pilot is analyzing the presentation",
      "the pilot has analyzed the presentation"
    ],
    "correctAnswer": "the pilot was analyzing the presentation",
    "explanation": [
      "The past continuous tense is appropriate for an action that was in progress at a specific time in the past.",
      "The auxiliary 'was' matches the singular subject."
    ]
  },
  {
    "question_id": "SYN_30",
    "questionType": "SYNONYM",
    "question": "Choose the best replacement for the underlined part of the sentence:",
    "sentence": "The pilot was not present yesterday because **the pilot was analyzing the contract** in the lab.",
    "options": [
      "the pilot is analyzing the contract",
      "the pilot has analyzed the contract",
      "the pilot analyzes the contract",
      "the pilot was analyzing the contract"
    ],
    "correctAnswer": "the pilot was analyzing the contract",
    "explanation": [
      "The past continuous tense is appropriate for an action that was in progress at a specific time in the past.",
      "The auxiliary 'was' matches the singular subject."
    ]
  },
  {
    "question_id": "SYN_31",
    "questionType": "SYNONYM",
    "question": "Choose the best replacement for the underlined part of the sentence:",
    "sentence": "Sarah was not present yesterday because **sarah was analyzing the report** in the lab.",
    "options": [
      "sarah was analyzing the report",
      "sarah has analyzed the report",
      "sarah analyzes the report",
      "sarah is analyzing the report"
    ],
    "correctAnswer": "sarah was analyzing the report",
    "explanation": [
      "The past continuous tense is appropriate for an action that was in progress at a specific time in the past.",
      "The auxiliary 'was' matches the singular subject."
    ]
  },
  {
    "question_id": "SYN_32",
    "questionType": "SYNONYM",
    "question": "Choose the best replacement for the underlined part of the sentence:",
    "sentence": "Sarah was not present yesterday because **sarah was analyzing the project** in the lab.",
    "options": [
      "sarah has analyzed the project",
      "sarah is analyzing the project",
      "sarah analyzes the project",
      "sarah was analyzing the project"
    ],
    "correctAnswer": "sarah was analyzing the project",
    "explanation": [
      "The past continuous tense is appropriate for an action that was in progress at a specific time in the past.",
      "The auxiliary 'was' matches the singular subject."
    ]
  },
  {
    "question_id": "SYN_33",
    "questionType": "SYNONYM",
    "question": "Choose the best replacement for the underlined part of the sentence:",
    "sentence": "Sarah was not present yesterday because **sarah was analyzing the application** in the lab.",
    "options": [
      "sarah has analyzed the application",
      "sarah is analyzing the application",
      "sarah analyzes the application",
      "sarah was analyzing the application"
    ],
    "correctAnswer": "sarah was analyzing the application",
    "explanation": [
      "The past continuous tense is appropriate for an action that was in progress at a specific time in the past.",
      "The auxiliary 'was' matches the singular subject."
    ]
  },
  {
    "question_id": "SYN_34",
    "questionType": "SYNONYM",
    "question": "Choose the best replacement for the underlined part of the sentence:",
    "sentence": "Sarah was not present yesterday because **sarah was analyzing the data** in the lab.",
    "options": [
      "sarah is analyzing the data",
      "sarah has analyzed the data",
      "sarah analyzes the data",
      "sarah was analyzing the data"
    ],
    "correctAnswer": "sarah was analyzing the data",
    "explanation": [
      "The past continuous tense is appropriate for an action that was in progress at a specific time in the past.",
      "The auxiliary 'was' matches the singular subject."
    ]
  },
  {
    "question_id": "SYN_35",
    "questionType": "SYNONYM",
    "question": "Choose the best replacement for the underlined part of the sentence:",
    "sentence": "Sarah was not present yesterday because **sarah was analyzing the findings** in the lab.",
    "options": [
      "sarah is analyzing the findings",
      "sarah analyzes the findings",
      "sarah has analyzed the findings",
      "sarah was analyzing the findings"
    ],
    "correctAnswer": "sarah was analyzing the findings",
    "explanation": [
      "The past continuous tense is appropriate for an action that was in progress at a specific time in the past.",
      "The auxiliary 'was' matches the singular subject."
    ]
  },
  {
    "question_id": "SYN_36",
    "questionType": "SYNONYM",
    "question": "Choose the best replacement for the underlined part of the sentence:",
    "sentence": "Sarah was not present yesterday because **sarah was analyzing the document** in the lab.",
    "options": [
      "sarah is analyzing the document",
      "sarah has analyzed the document",
      "sarah analyzes the document",
      "sarah was analyzing the document"
    ],
    "correctAnswer": "sarah was analyzing the document",
    "explanation": [
      "The past continuous tense is appropriate for an action that was in progress at a specific time in the past.",
      "The auxiliary 'was' matches the singular subject."
    ]
  },
  {
    "question_id": "SYN_37",
    "questionType": "SYNONYM",
    "question": "Choose the best replacement for the underlined part of the sentence:",
    "sentence": "Sarah was not present yesterday because **sarah was analyzing the budget** in the lab.",
    "options": [
      "sarah is analyzing the budget",
      "sarah analyzes the budget",
      "sarah has analyzed the budget",
      "sarah was analyzing the budget"
    ],
    "correctAnswer": "sarah was analyzing the budget",
    "explanation": [
      "The past continuous tense is appropriate for an action that was in progress at a specific time in the past.",
      "The auxiliary 'was' matches the singular subject."
    ]
  },
  {
    "question_id": "SYN_38",
    "questionType": "SYNONYM",
    "question": "Choose the best replacement for the underlined part of the sentence:",
    "sentence": "Sarah was not present yesterday because **sarah was analyzing the schedule** in the lab.",
    "options": [
      "sarah is analyzing the schedule",
      "sarah was analyzing the schedule",
      "sarah has analyzed the schedule",
      "sarah analyzes the schedule"
    ],
    "correctAnswer": "sarah was analyzing the schedule",
    "explanation": [
      "The past continuous tense is appropriate for an action that was in progress at a specific time in the past.",
      "The auxiliary 'was' matches the singular subject."
    ]
  },
  {
    "question_id": "SYN_39",
    "questionType": "SYNONYM",
    "question": "Choose the best replacement for the underlined part of the sentence:",
    "sentence": "Sarah was not present yesterday because **sarah was analyzing the plan** in the lab.",
    "options": [
      "sarah is analyzing the plan",
      "sarah was analyzing the plan",
      "sarah analyzes the plan",
      "sarah has analyzed the plan"
    ],
    "correctAnswer": "sarah was analyzing the plan",
    "explanation": [
      "The past continuous tense is appropriate for an action that was in progress at a specific time in the past.",
      "The auxiliary 'was' matches the singular subject."
    ]
  },
  {
    "question_id": "SYN_40",
    "questionType": "SYNONYM",
    "question": "Choose the best replacement for the underlined part of the sentence:",
    "sentence": "Sarah was not present yesterday because **sarah was analyzing the results** in the lab.",
    "options": [
      "sarah has analyzed the results",
      "sarah was analyzing the results",
      "sarah is analyzing the results",
      "sarah analyzes the results"
    ],
    "correctAnswer": "sarah was analyzing the results",
    "explanation": [
      "The past continuous tense is appropriate for an action that was in progress at a specific time in the past.",
      "The auxiliary 'was' matches the singular subject."
    ]
  },
  {
    "question_id": "SYN_41",
    "questionType": "SYNONYM",
    "question": "Choose the best replacement for the underlined part of the sentence:",
    "sentence": "Sarah was not present yesterday because **sarah was analyzing the system** in the lab.",
    "options": [
      "sarah is analyzing the system",
      "sarah analyzes the system",
      "sarah was analyzing the system",
      "sarah has analyzed the system"
    ],
    "correctAnswer": "sarah was analyzing the system",
    "explanation": [
      "The past continuous tense is appropriate for an action that was in progress at a specific time in the past.",
      "The auxiliary 'was' matches the singular subject."
    ]
  },
  {
    "question_id": "SYN_42",
    "questionType": "SYNONYM",
    "question": "Choose the best replacement for the underlined part of the sentence:",
    "sentence": "Sarah was not present yesterday because **sarah was analyzing the presentation** in the lab.",
    "options": [
      "sarah is analyzing the presentation",
      "sarah analyzes the presentation",
      "sarah was analyzing the presentation",
      "sarah has analyzed the presentation"
    ],
    "correctAnswer": "sarah was analyzing the presentation",
    "explanation": [
      "The past continuous tense is appropriate for an action that was in progress at a specific time in the past.",
      "The auxiliary 'was' matches the singular subject."
    ]
  },
  {
    "question_id": "SYN_43",
    "questionType": "SYNONYM",
    "question": "Choose the best replacement for the underlined part of the sentence:",
    "sentence": "Sarah was not present yesterday because **sarah was analyzing the contract** in the lab.",
    "options": [
      "sarah was analyzing the contract",
      "sarah analyzes the contract",
      "sarah is analyzing the contract",
      "sarah has analyzed the contract"
    ],
    "correctAnswer": "sarah was analyzing the contract",
    "explanation": [
      "The past continuous tense is appropriate for an action that was in progress at a specific time in the past.",
      "The auxiliary 'was' matches the singular subject."
    ]
  },
  {
    "question_id": "SYN_44",
    "questionType": "SYNONYM",
    "question": "Choose the best replacement for the underlined part of the sentence:",
    "sentence": "The team was not present yesterday because **the team was analyzing the report** in the lab.",
    "options": [
      "the team was analyzing the report",
      "the team analyzes the report",
      "the team is analyzing the report",
      "the team has analyzed the report"
    ],
    "correctAnswer": "the team was analyzing the report",
    "explanation": [
      "The past continuous tense is appropriate for an action that was in progress at a specific time in the past.",
      "The auxiliary 'was' matches the singular subject."
    ]
  },
  {
    "question_id": "SYN_45",
    "questionType": "SYNONYM",
    "question": "Choose the best replacement for the underlined part of the sentence:",
    "sentence": "The team was not present yesterday because **the team was analyzing the project** in the lab.",
    "options": [
      "the team was analyzing the project",
      "the team analyzes the project",
      "the team has analyzed the project",
      "the team is analyzing the project"
    ],
    "correctAnswer": "the team was analyzing the project",
    "explanation": [
      "The past continuous tense is appropriate for an action that was in progress at a specific time in the past.",
      "The auxiliary 'was' matches the singular subject."
    ]
  },
  {
    "question_id": "SYN_46",
    "questionType": "SYNONYM",
    "question": "Choose the best replacement for the underlined part of the sentence:",
    "sentence": "The team was not present yesterday because **the team was analyzing the application** in the lab.",
    "options": [
      "the team was analyzing the application",
      "the team analyzes the application",
      "the team has analyzed the application",
      "the team is analyzing the application"
    ],
    "correctAnswer": "the team was analyzing the application",
    "explanation": [
      "The past continuous tense is appropriate for an action that was in progress at a specific time in the past.",
      "The auxiliary 'was' matches the singular subject."
    ]
  },
  {
    "question_id": "SYN_47",
    "questionType": "SYNONYM",
    "question": "Choose the best replacement for the underlined part of the sentence:",
    "sentence": "The team was not present yesterday because **the team was analyzing the data** in the lab.",
    "options": [
      "the team was analyzing the data",
      "the team analyzes the data",
      "the team is analyzing the data",
      "the team has analyzed the data"
    ],
    "correctAnswer": "the team was analyzing the data",
    "explanation": [
      "The past continuous tense is appropriate for an action that was in progress at a specific time in the past.",
      "The auxiliary 'was' matches the singular subject."
    ]
  },
  {
    "question_id": "SYN_48",
    "questionType": "SYNONYM",
    "question": "Choose the best replacement for the underlined part of the sentence:",
    "sentence": "The team was not present yesterday because **the team was analyzing the findings** in the lab.",
    "options": [
      "the team is analyzing the findings",
      "the team analyzes the findings",
      "the team has analyzed the findings",
      "the team was analyzing the findings"
    ],
    "correctAnswer": "the team was analyzing the findings",
    "explanation": [
      "The past continuous tense is appropriate for an action that was in progress at a specific time in the past.",
      "The auxiliary 'was' matches the singular subject."
    ]
  },
  {
    "question_id": "SYN_49",
    "questionType": "SYNONYM",
    "question": "Choose the best replacement for the underlined part of the sentence:",
    "sentence": "The team was not present yesterday because **the team was analyzing the document** in the lab.",
    "options": [
      "the team is analyzing the document",
      "the team analyzes the document",
      "the team was analyzing the document",
      "the team has analyzed the document"
    ],
    "correctAnswer": "the team was analyzing the document",
    "explanation": [
      "The past continuous tense is appropriate for an action that was in progress at a specific time in the past.",
      "The auxiliary 'was' matches the singular subject."
    ]
  },
  {
    "question_id": "SYN_50",
    "questionType": "SYNONYM",
    "question": "Choose the best replacement for the underlined part of the sentence:",
    "sentence": "The team was not present yesterday because **the team was analyzing the budget** in the lab.",
    "options": [
      "the team analyzes the budget",
      "the team was analyzing the budget",
      "the team has analyzed the budget",
      "the team is analyzing the budget"
    ],
    "correctAnswer": "the team was analyzing the budget",
    "explanation": [
      "The past continuous tense is appropriate for an action that was in progress at a specific time in the past.",
      "The auxiliary 'was' matches the singular subject."
    ]
  },
  {
    "question_id": "SYN_51",
    "questionType": "SYNONYM",
    "question": "Choose the best replacement for the underlined part of the sentence:",
    "sentence": "The team was not present yesterday because **the team was analyzing the schedule** in the lab.",
    "options": [
      "the team has analyzed the schedule",
      "the team was analyzing the schedule",
      "the team analyzes the schedule",
      "the team is analyzing the schedule"
    ],
    "correctAnswer": "the team was analyzing the schedule",
    "explanation": [
      "The past continuous tense is appropriate for an action that was in progress at a specific time in the past.",
      "The auxiliary 'was' matches the singular subject."
    ]
  },
  {
    "question_id": "SYN_52",
    "questionType": "SYNONYM",
    "question": "Choose the best replacement for the underlined part of the sentence:",
    "sentence": "The team was not present yesterday because **the team was analyzing the plan** in the lab.",
    "options": [
      "the team is analyzing the plan",
      "the team analyzes the plan",
      "the team has analyzed the plan",
      "the team was analyzing the plan"
    ],
    "correctAnswer": "the team was analyzing the plan",
    "explanation": [
      "The past continuous tense is appropriate for an action that was in progress at a specific time in the past.",
      "The auxiliary 'was' matches the singular subject."
    ]
  },
  {
    "question_id": "SYN_53",
    "questionType": "SYNONYM",
    "question": "Choose the best replacement for the underlined part of the sentence:",
    "sentence": "The team was not present yesterday because **the team was analyzing the results** in the lab.",
    "options": [
      "the team has analyzed the results",
      "the team is analyzing the results",
      "the team analyzes the results",
      "the team was analyzing the results"
    ],
    "correctAnswer": "the team was analyzing the results",
    "explanation": [
      "The past continuous tense is appropriate for an action that was in progress at a specific time in the past.",
      "The auxiliary 'was' matches the singular subject."
    ]
  },
  {
    "question_id": "SYN_54",
    "questionType": "SYNONYM",
    "question": "Choose the best replacement for the underlined part of the sentence:",
    "sentence": "The team was not present yesterday because **the team was analyzing the system** in the lab.",
    "options": [
      "the team was analyzing the system",
      "the team analyzes the system",
      "the team has analyzed the system",
      "the team is analyzing the system"
    ],
    "correctAnswer": "the team was analyzing the system",
    "explanation": [
      "The past continuous tense is appropriate for an action that was in progress at a specific time in the past.",
      "The auxiliary 'was' matches the singular subject."
    ]
  },
  {
    "question_id": "SYN_55",
    "questionType": "SYNONYM",
    "question": "Choose the best replacement for the underlined part of the sentence:",
    "sentence": "The team was not present yesterday because **the team was analyzing the presentation** in the lab.",
    "options": [
      "the team is analyzing the presentation",
      "the team analyzes the presentation",
      "the team was analyzing the presentation",
      "the team has analyzed the presentation"
    ],
    "correctAnswer": "the team was analyzing the presentation",
    "explanation": [
      "The past continuous tense is appropriate for an action that was in progress at a specific time in the past.",
      "The auxiliary 'was' matches the singular subject."
    ]
  },
  {
    "question_id": "SYN_56",
    "questionType": "SYNONYM",
    "question": "Choose the best replacement for the underlined part of the sentence:",
    "sentence": "The team was not present yesterday because **the team was analyzing the contract** in the lab.",
    "options": [
      "the team has analyzed the contract",
      "the team is analyzing the contract",
      "the team analyzes the contract",
      "the team was analyzing the contract"
    ],
    "correctAnswer": "the team was analyzing the contract",
    "explanation": [
      "The past continuous tense is appropriate for an action that was in progress at a specific time in the past.",
      "The auxiliary 'was' matches the singular subject."
    ]
  },
  {
    "question_id": "SYN_57",
    "questionType": "SYNONYM",
    "question": "Choose the best replacement for the underlined part of the sentence:",
    "sentence": "The director was not present yesterday because **the director was analyzing the report** in the lab.",
    "options": [
      "the director was analyzing the report",
      "the director analyzes the report",
      "the director is analyzing the report",
      "the director has analyzed the report"
    ],
    "correctAnswer": "the director was analyzing the report",
    "explanation": [
      "The past continuous tense is appropriate for an action that was in progress at a specific time in the past.",
      "The auxiliary 'was' matches the singular subject."
    ]
  },
  {
    "question_id": "SYN_58",
    "questionType": "SYNONYM",
    "question": "Choose the best replacement for the underlined part of the sentence:",
    "sentence": "The director was not present yesterday because **the director was analyzing the project** in the lab.",
    "options": [
      "the director is analyzing the project",
      "the director analyzes the project",
      "the director has analyzed the project",
      "the director was analyzing the project"
    ],
    "correctAnswer": "the director was analyzing the project",
    "explanation": [
      "The past continuous tense is appropriate for an action that was in progress at a specific time in the past.",
      "The auxiliary 'was' matches the singular subject."
    ]
  },
  {
    "question_id": "SYN_59",
    "questionType": "SYNONYM",
    "question": "Choose the best replacement for the underlined part of the sentence:",
    "sentence": "The director was not present yesterday because **the director was analyzing the application** in the lab.",
    "options": [
      "the director is analyzing the application",
      "the director analyzes the application",
      "the director has analyzed the application",
      "the director was analyzing the application"
    ],
    "correctAnswer": "the director was analyzing the application",
    "explanation": [
      "The past continuous tense is appropriate for an action that was in progress at a specific time in the past.",
      "The auxiliary 'was' matches the singular subject."
    ]
  },
  {
    "question_id": "SYN_60",
    "questionType": "SYNONYM",
    "question": "Choose the best replacement for the underlined part of the sentence:",
    "sentence": "The director was not present yesterday because **the director was analyzing the data** in the lab.",
    "options": [
      "the director has analyzed the data",
      "the director analyzes the data",
      "the director was analyzing the data",
      "the director is analyzing the data"
    ],
    "correctAnswer": "the director was analyzing the data",
    "explanation": [
      "The past continuous tense is appropriate for an action that was in progress at a specific time in the past.",
      "The auxiliary 'was' matches the singular subject."
    ]
  },
  {
    "question_id": "SYN_61",
    "questionType": "SYNONYM",
    "question": "Choose the best replacement for the underlined part of the sentence:",
    "sentence": "The director was not present yesterday because **the director was analyzing the findings** in the lab.",
    "options": [
      "the director is analyzing the findings",
      "the director analyzes the findings",
      "the director has analyzed the findings",
      "the director was analyzing the findings"
    ],
    "correctAnswer": "the director was analyzing the findings",
    "explanation": [
      "The past continuous tense is appropriate for an action that was in progress at a specific time in the past.",
      "The auxiliary 'was' matches the singular subject."
    ]
  },
  {
    "question_id": "SYN_62",
    "questionType": "SYNONYM",
    "question": "Choose the best replacement for the underlined part of the sentence:",
    "sentence": "The director was not present yesterday because **the director was analyzing the document** in the lab.",
    "options": [
      "the director was analyzing the document",
      "the director analyzes the document",
      "the director has analyzed the document",
      "the director is analyzing the document"
    ],
    "correctAnswer": "the director was analyzing the document",
    "explanation": [
      "The past continuous tense is appropriate for an action that was in progress at a specific time in the past.",
      "The auxiliary 'was' matches the singular subject."
    ]
  },
  {
    "question_id": "SYN_63",
    "questionType": "SYNONYM",
    "question": "Choose the best replacement for the underlined part of the sentence:",
    "sentence": "The director was not present yesterday because **the director was analyzing the budget** in the lab.",
    "options": [
      "the director has analyzed the budget",
      "the director analyzes the budget",
      "the director is analyzing the budget",
      "the director was analyzing the budget"
    ],
    "correctAnswer": "the director was analyzing the budget",
    "explanation": [
      "The past continuous tense is appropriate for an action that was in progress at a specific time in the past.",
      "The auxiliary 'was' matches the singular subject."
    ]
  },
  {
    "question_id": "SYN_64",
    "questionType": "SYNONYM",
    "question": "Choose the best replacement for the underlined part of the sentence:",
    "sentence": "The director was not present yesterday because **the director was analyzing the schedule** in the lab.",
    "options": [
      "the director was analyzing the schedule",
      "the director analyzes the schedule",
      "the director is analyzing the schedule",
      "the director has analyzed the schedule"
    ],
    "correctAnswer": "the director was analyzing the schedule",
    "explanation": [
      "The past continuous tense is appropriate for an action that was in progress at a specific time in the past.",
      "The auxiliary 'was' matches the singular subject."
    ]
  },
  {
    "question_id": "SYN_65",
    "questionType": "SYNONYM",
    "question": "Choose the best replacement for the underlined part of the sentence:",
    "sentence": "The director was not present yesterday because **the director was analyzing the plan** in the lab.",
    "options": [
      "the director analyzes the plan",
      "the director was analyzing the plan",
      "the director has analyzed the plan",
      "the director is analyzing the plan"
    ],
    "correctAnswer": "the director was analyzing the plan",
    "explanation": [
      "The past continuous tense is appropriate for an action that was in progress at a specific time in the past.",
      "The auxiliary 'was' matches the singular subject."
    ]
  },
  {
    "question_id": "SYN_66",
    "questionType": "SYNONYM",
    "question": "Choose the best replacement for the underlined part of the sentence:",
    "sentence": "The director was not present yesterday because **the director was analyzing the results** in the lab.",
    "options": [
      "the director has analyzed the results",
      "the director analyzes the results",
      "the director was analyzing the results",
      "the director is analyzing the results"
    ],
    "correctAnswer": "the director was analyzing the results",
    "explanation": [
      "The past continuous tense is appropriate for an action that was in progress at a specific time in the past.",
      "The auxiliary 'was' matches the singular subject."
    ]
  },
  {
    "question_id": "SYN_67",
    "questionType": "SYNONYM",
    "question": "Choose the best replacement for the underlined part of the sentence:",
    "sentence": "The director was not present yesterday because **the director was analyzing the system** in the lab.",
    "options": [
      "the director was analyzing the system",
      "the director analyzes the system",
      "the director is analyzing the system",
      "the director has analyzed the system"
    ],
    "correctAnswer": "the director was analyzing the system",
    "explanation": [
      "The past continuous tense is appropriate for an action that was in progress at a specific time in the past.",
      "The auxiliary 'was' matches the singular subject."
    ]
  },
  {
    "question_id": "SYN_68",
    "questionType": "SYNONYM",
    "question": "Choose the best replacement for the underlined part of the sentence:",
    "sentence": "The director was not present yesterday because **the director was analyzing the presentation** in the lab.",
    "options": [
      "the director has analyzed the presentation",
      "the director is analyzing the presentation",
      "the director analyzes the presentation",
      "the director was analyzing the presentation"
    ],
    "correctAnswer": "the director was analyzing the presentation",
    "explanation": [
      "The past continuous tense is appropriate for an action that was in progress at a specific time in the past.",
      "The auxiliary 'was' matches the singular subject."
    ]
  },
  {
    "question_id": "SYN_69",
    "questionType": "SYNONYM",
    "question": "Choose the best replacement for the underlined part of the sentence:",
    "sentence": "The director was not present yesterday because **the director was analyzing the contract** in the lab.",
    "options": [
      "the director is analyzing the contract",
      "the director was analyzing the contract",
      "the director analyzes the contract",
      "the director has analyzed the contract"
    ],
    "correctAnswer": "the director was analyzing the contract",
    "explanation": [
      "The past continuous tense is appropriate for an action that was in progress at a specific time in the past.",
      "The auxiliary 'was' matches the singular subject."
    ]
  },
  {
    "question_id": "SYN_70",
    "questionType": "SYNONYM",
    "question": "Choose the best replacement for the underlined part of the sentence:",
    "sentence": "The student was not present yesterday because **the student was analyzing the report** in the lab.",
    "options": [
      "the student was analyzing the report",
      "the student analyzes the report",
      "the student is analyzing the report",
      "the student has analyzed the report"
    ],
    "correctAnswer": "the student was analyzing the report",
    "explanation": [
      "The past continuous tense is appropriate for an action that was in progress at a specific time in the past.",
      "The auxiliary 'was' matches the singular subject."
    ]
  },
  {
    "question_id": "SYN_71",
    "questionType": "SYNONYM",
    "question": "Choose the best replacement for the underlined part of the sentence:",
    "sentence": "The student was not present yesterday because **the student was analyzing the project** in the lab.",
    "options": [
      "the student has analyzed the project",
      "the student is analyzing the project",
      "the student was analyzing the project",
      "the student analyzes the project"
    ],
    "correctAnswer": "the student was analyzing the project",
    "explanation": [
      "The past continuous tense is appropriate for an action that was in progress at a specific time in the past.",
      "The auxiliary 'was' matches the singular subject."
    ]
  },
  {
    "question_id": "SYN_72",
    "questionType": "SYNONYM",
    "question": "Choose the best replacement for the underlined part of the sentence:",
    "sentence": "The student was not present yesterday because **the student was analyzing the application** in the lab.",
    "options": [
      "the student has analyzed the application",
      "the student is analyzing the application",
      "the student analyzes the application",
      "the student was analyzing the application"
    ],
    "correctAnswer": "the student was analyzing the application",
    "explanation": [
      "The past continuous tense is appropriate for an action that was in progress at a specific time in the past.",
      "The auxiliary 'was' matches the singular subject."
    ]
  },
  {
    "question_id": "SYN_73",
    "questionType": "SYNONYM",
    "question": "Choose the best replacement for the underlined part of the sentence:",
    "sentence": "The student was not present yesterday because **the student was analyzing the data** in the lab.",
    "options": [
      "the student is analyzing the data",
      "the student analyzes the data",
      "the student has analyzed the data",
      "the student was analyzing the data"
    ],
    "correctAnswer": "the student was analyzing the data",
    "explanation": [
      "The past continuous tense is appropriate for an action that was in progress at a specific time in the past.",
      "The auxiliary 'was' matches the singular subject."
    ]
  },
  {
    "question_id": "SYN_74",
    "questionType": "SYNONYM",
    "question": "Choose the best replacement for the underlined part of the sentence:",
    "sentence": "The student was not present yesterday because **the student was analyzing the findings** in the lab.",
    "options": [
      "the student was analyzing the findings",
      "the student has analyzed the findings",
      "the student is analyzing the findings",
      "the student analyzes the findings"
    ],
    "correctAnswer": "the student was analyzing the findings",
    "explanation": [
      "The past continuous tense is appropriate for an action that was in progress at a specific time in the past.",
      "The auxiliary 'was' matches the singular subject."
    ]
  },
  {
    "question_id": "SYN_75",
    "questionType": "SYNONYM",
    "question": "Choose the best replacement for the underlined part of the sentence:",
    "sentence": "The student was not present yesterday because **the student was analyzing the document** in the lab.",
    "options": [
      "the student is analyzing the document",
      "the student analyzes the document",
      "the student has analyzed the document",
      "the student was analyzing the document"
    ],
    "correctAnswer": "the student was analyzing the document",
    "explanation": [
      "The past continuous tense is appropriate for an action that was in progress at a specific time in the past.",
      "The auxiliary 'was' matches the singular subject."
    ]
  },
  {
    "question_id": "SYN_76",
    "questionType": "SYNONYM",
    "question": "Choose the best replacement for the underlined part of the sentence:",
    "sentence": "The student was not present yesterday because **the student was analyzing the budget** in the lab.",
    "options": [
      "the student was analyzing the budget",
      "the student analyzes the budget",
      "the student is analyzing the budget",
      "the student has analyzed the budget"
    ],
    "correctAnswer": "the student was analyzing the budget",
    "explanation": [
      "The past continuous tense is appropriate for an action that was in progress at a specific time in the past.",
      "The auxiliary 'was' matches the singular subject."
    ]
  },
  {
    "question_id": "SYN_77",
    "questionType": "SYNONYM",
    "question": "Choose the best replacement for the underlined part of the sentence:",
    "sentence": "The student was not present yesterday because **the student was analyzing the schedule** in the lab.",
    "options": [
      "the student is analyzing the schedule",
      "the student was analyzing the schedule",
      "the student has analyzed the schedule",
      "the student analyzes the schedule"
    ],
    "correctAnswer": "the student was analyzing the schedule",
    "explanation": [
      "The past continuous tense is appropriate for an action that was in progress at a specific time in the past.",
      "The auxiliary 'was' matches the singular subject."
    ]
  },
  {
    "question_id": "SYN_78",
    "questionType": "SYNONYM",
    "question": "Choose the best replacement for the underlined part of the sentence:",
    "sentence": "The student was not present yesterday because **the student was analyzing the plan** in the lab.",
    "options": [
      "the student is analyzing the plan",
      "the student analyzes the plan",
      "the student was analyzing the plan",
      "the student has analyzed the plan"
    ],
    "correctAnswer": "the student was analyzing the plan",
    "explanation": [
      "The past continuous tense is appropriate for an action that was in progress at a specific time in the past.",
      "The auxiliary 'was' matches the singular subject."
    ]
  },
  {
    "question_id": "SYN_79",
    "questionType": "SYNONYM",
    "question": "Choose the best replacement for the underlined part of the sentence:",
    "sentence": "The student was not present yesterday because **the student was analyzing the results** in the lab.",
    "options": [
      "the student is analyzing the results",
      "the student analyzes the results",
      "the student was analyzing the results",
      "the student has analyzed the results"
    ],
    "correctAnswer": "the student was analyzing the results",
    "explanation": [
      "The past continuous tense is appropriate for an action that was in progress at a specific time in the past.",
      "The auxiliary 'was' matches the singular subject."
    ]
  },
  {
    "question_id": "SYN_80",
    "questionType": "SYNONYM",
    "question": "Choose the best replacement for the underlined part of the sentence:",
    "sentence": "The student was not present yesterday because **the student was analyzing the system** in the lab.",
    "options": [
      "the student analyzes the system",
      "the student was analyzing the system",
      "the student is analyzing the system",
      "the student has analyzed the system"
    ],
    "correctAnswer": "the student was analyzing the system",
    "explanation": [
      "The past continuous tense is appropriate for an action that was in progress at a specific time in the past.",
      "The auxiliary 'was' matches the singular subject."
    ]
  },
  {
    "question_id": "SYN_81",
    "questionType": "SYNONYM",
    "question": "Choose the best replacement for the underlined part of the sentence:",
    "sentence": "The student was not present yesterday because **the student was analyzing the presentation** in the lab.",
    "options": [
      "the student was analyzing the presentation",
      "the student analyzes the presentation",
      "the student has analyzed the presentation",
      "the student is analyzing the presentation"
    ],
    "correctAnswer": "the student was analyzing the presentation",
    "explanation": [
      "The past continuous tense is appropriate for an action that was in progress at a specific time in the past.",
      "The auxiliary 'was' matches the singular subject."
    ]
  },
  {
    "question_id": "SYN_82",
    "questionType": "SYNONYM",
    "question": "Choose the best replacement for the underlined part of the sentence:",
    "sentence": "The student was not present yesterday because **the student was analyzing the contract** in the lab.",
    "options": [
      "the student was analyzing the contract",
      "the student analyzes the contract",
      "the student is analyzing the contract",
      "the student has analyzed the contract"
    ],
    "correctAnswer": "the student was analyzing the contract",
    "explanation": [
      "The past continuous tense is appropriate for an action that was in progress at a specific time in the past.",
      "The auxiliary 'was' matches the singular subject."
    ]
  },
  {
    "question_id": "SYN_83",
    "questionType": "SYNONYM",
    "question": "Choose the best replacement for the underlined part of the sentence:",
    "sentence": "The company was not present yesterday because **the company was analyzing the report** in the lab.",
    "options": [
      "the company was analyzing the report",
      "the company has analyzed the report",
      "the company analyzes the report",
      "the company is analyzing the report"
    ],
    "correctAnswer": "the company was analyzing the report",
    "explanation": [
      "The past continuous tense is appropriate for an action that was in progress at a specific time in the past.",
      "The auxiliary 'was' matches the singular subject."
    ]
  },
  {
    "question_id": "SYN_84",
    "questionType": "SYNONYM",
    "question": "Choose the best replacement for the underlined part of the sentence:",
    "sentence": "The company was not present yesterday because **the company was analyzing the project** in the lab.",
    "options": [
      "the company is analyzing the project",
      "the company has analyzed the project",
      "the company analyzes the project",
      "the company was analyzing the project"
    ],
    "correctAnswer": "the company was analyzing the project",
    "explanation": [
      "The past continuous tense is appropriate for an action that was in progress at a specific time in the past.",
      "The auxiliary 'was' matches the singular subject."
    ]
  },
  {
    "question_id": "SYN_85",
    "questionType": "SYNONYM",
    "question": "Choose the best replacement for the underlined part of the sentence:",
    "sentence": "The company was not present yesterday because **the company was analyzing the application** in the lab.",
    "options": [
      "the company has analyzed the application",
      "the company was analyzing the application",
      "the company is analyzing the application",
      "the company analyzes the application"
    ],
    "correctAnswer": "the company was analyzing the application",
    "explanation": [
      "The past continuous tense is appropriate for an action that was in progress at a specific time in the past.",
      "The auxiliary 'was' matches the singular subject."
    ]
  },
  {
    "question_id": "SYN_86",
    "questionType": "SYNONYM",
    "question": "Choose the best replacement for the underlined part of the sentence:",
    "sentence": "The company was not present yesterday because **the company was analyzing the data** in the lab.",
    "options": [
      "the company was analyzing the data",
      "the company is analyzing the data",
      "the company analyzes the data",
      "the company has analyzed the data"
    ],
    "correctAnswer": "the company was analyzing the data",
    "explanation": [
      "The past continuous tense is appropriate for an action that was in progress at a specific time in the past.",
      "The auxiliary 'was' matches the singular subject."
    ]
  },
  {
    "question_id": "SYN_87",
    "questionType": "SYNONYM",
    "question": "Choose the best replacement for the underlined part of the sentence:",
    "sentence": "The company was not present yesterday because **the company was analyzing the findings** in the lab.",
    "options": [
      "the company is analyzing the findings",
      "the company analyzes the findings",
      "the company was analyzing the findings",
      "the company has analyzed the findings"
    ],
    "correctAnswer": "the company was analyzing the findings",
    "explanation": [
      "The past continuous tense is appropriate for an action that was in progress at a specific time in the past.",
      "The auxiliary 'was' matches the singular subject."
    ]
  },
  {
    "question_id": "SYN_88",
    "questionType": "SYNONYM",
    "question": "Choose the best replacement for the underlined part of the sentence:",
    "sentence": "The company was not present yesterday because **the company was analyzing the document** in the lab.",
    "options": [
      "the company was analyzing the document",
      "the company is analyzing the document",
      "the company analyzes the document",
      "the company has analyzed the document"
    ],
    "correctAnswer": "the company was analyzing the document",
    "explanation": [
      "The past continuous tense is appropriate for an action that was in progress at a specific time in the past.",
      "The auxiliary 'was' matches the singular subject."
    ]
  },
  {
    "question_id": "SYN_89",
    "questionType": "SYNONYM",
    "question": "Choose the best replacement for the underlined part of the sentence:",
    "sentence": "The company was not present yesterday because **the company was analyzing the budget** in the lab.",
    "options": [
      "the company was analyzing the budget",
      "the company has analyzed the budget",
      "the company analyzes the budget",
      "the company is analyzing the budget"
    ],
    "correctAnswer": "the company was analyzing the budget",
    "explanation": [
      "The past continuous tense is appropriate for an action that was in progress at a specific time in the past.",
      "The auxiliary 'was' matches the singular subject."
    ]
  },
  {
    "question_id": "SYN_90",
    "questionType": "SYNONYM",
    "question": "Choose the best replacement for the underlined part of the sentence:",
    "sentence": "The company was not present yesterday because **the company was analyzing the schedule** in the lab.",
    "options": [
      "the company is analyzing the schedule",
      "the company analyzes the schedule",
      "the company has analyzed the schedule",
      "the company was analyzing the schedule"
    ],
    "correctAnswer": "the company was analyzing the schedule",
    "explanation": [
      "The past continuous tense is appropriate for an action that was in progress at a specific time in the past.",
      "The auxiliary 'was' matches the singular subject."
    ]
  },
  {
    "question_id": "SYN_91",
    "questionType": "SYNONYM",
    "question": "Choose the best replacement for the underlined part of the sentence:",
    "sentence": "The company was not present yesterday because **the company was analyzing the plan** in the lab.",
    "options": [
      "the company has analyzed the plan",
      "the company was analyzing the plan",
      "the company analyzes the plan",
      "the company is analyzing the plan"
    ],
    "correctAnswer": "the company was analyzing the plan",
    "explanation": [
      "The past continuous tense is appropriate for an action that was in progress at a specific time in the past.",
      "The auxiliary 'was' matches the singular subject."
    ]
  },
  {
    "question_id": "SYN_92",
    "questionType": "SYNONYM",
    "question": "Choose the best replacement for the underlined part of the sentence:",
    "sentence": "The company was not present yesterday because **the company was analyzing the results** in the lab.",
    "options": [
      "the company is analyzing the results",
      "the company has analyzed the results",
      "the company analyzes the results",
      "the company was analyzing the results"
    ],
    "correctAnswer": "the company was analyzing the results",
    "explanation": [
      "The past continuous tense is appropriate for an action that was in progress at a specific time in the past.",
      "The auxiliary 'was' matches the singular subject."
    ]
  },
  {
    "question_id": "SYN_93",
    "questionType": "SYNONYM",
    "question": "Choose the best replacement for the underlined part of the sentence:",
    "sentence": "The company was not present yesterday because **the company was analyzing the system** in the lab.",
    "options": [
      "the company was analyzing the system",
      "the company is analyzing the system",
      "the company has analyzed the system",
      "the company analyzes the system"
    ],
    "correctAnswer": "the company was analyzing the system",
    "explanation": [
      "The past continuous tense is appropriate for an action that was in progress at a specific time in the past.",
      "The auxiliary 'was' matches the singular subject."
    ]
  },
  {
    "question_id": "SYN_94",
    "questionType": "SYNONYM",
    "question": "Choose the best replacement for the underlined part of the sentence:",
    "sentence": "The company was not present yesterday because **the company was analyzing the presentation** in the lab.",
    "options": [
      "the company has analyzed the presentation",
      "the company is analyzing the presentation",
      "the company analyzes the presentation",
      "the company was analyzing the presentation"
    ],
    "correctAnswer": "the company was analyzing the presentation",
    "explanation": [
      "The past continuous tense is appropriate for an action that was in progress at a specific time in the past.",
      "The auxiliary 'was' matches the singular subject."
    ]
  },
  {
    "question_id": "SYN_95",
    "questionType": "SYNONYM",
    "question": "Choose the best replacement for the underlined part of the sentence:",
    "sentence": "The company was not present yesterday because **the company was analyzing the contract** in the lab.",
    "options": [
      "the company has analyzed the contract",
      "the company was analyzing the contract",
      "the company is analyzing the contract",
      "the company analyzes the contract"
    ],
    "correctAnswer": "the company was analyzing the contract",
    "explanation": [
      "The past continuous tense is appropriate for an action that was in progress at a specific time in the past.",
      "The auxiliary 'was' matches the singular subject."
    ]
  },
  {
    "question_id": "SYN_96",
    "questionType": "SYNONYM",
    "question": "Choose the best replacement for the underlined part of the sentence:",
    "sentence": "Michael was not present yesterday because **michael was analyzing the report** in the lab.",
    "options": [
      "michael was analyzing the report",
      "michael analyzes the report",
      "michael is analyzing the report",
      "michael has analyzed the report"
    ],
    "correctAnswer": "michael was analyzing the report",
    "explanation": [
      "The past continuous tense is appropriate for an action that was in progress at a specific time in the past.",
      "The auxiliary 'was' matches the singular subject."
    ]
  },
  {
    "question_id": "SYN_97",
    "questionType": "SYNONYM",
    "question": "Choose the best replacement for the underlined part of the sentence:",
    "sentence": "Michael was not present yesterday because **michael was analyzing the project** in the lab.",
    "options": [
      "michael analyzes the project",
      "michael was analyzing the project",
      "michael is analyzing the project",
      "michael has analyzed the project"
    ],
    "correctAnswer": "michael was analyzing the project",
    "explanation": [
      "The past continuous tense is appropriate for an action that was in progress at a specific time in the past.",
      "The auxiliary 'was' matches the singular subject."
    ]
  },
  {
    "question_id": "SYN_98",
    "questionType": "SYNONYM",
    "question": "Choose the best replacement for the underlined part of the sentence:",
    "sentence": "Michael was not present yesterday because **michael was analyzing the application** in the lab.",
    "options": [
      "michael has analyzed the application",
      "michael is analyzing the application",
      "michael analyzes the application",
      "michael was analyzing the application"
    ],
    "correctAnswer": "michael was analyzing the application",
    "explanation": [
      "The past continuous tense is appropriate for an action that was in progress at a specific time in the past.",
      "The auxiliary 'was' matches the singular subject."
    ]
  },
  {
    "question_id": "SYN_99",
    "questionType": "SYNONYM",
    "question": "Choose the best replacement for the underlined part of the sentence:",
    "sentence": "Michael was not present yesterday because **michael was analyzing the data** in the lab.",
    "options": [
      "michael was analyzing the data",
      "michael is analyzing the data",
      "michael has analyzed the data",
      "michael analyzes the data"
    ],
    "correctAnswer": "michael was analyzing the data",
    "explanation": [
      "The past continuous tense is appropriate for an action that was in progress at a specific time in the past.",
      "The auxiliary 'was' matches the singular subject."
    ]
  },
  {
    "question_id": "SYN_100",
    "questionType": "SYNONYM",
    "question": "Choose the best replacement for the underlined part of the sentence:",
    "sentence": "Michael was not present yesterday because **michael was analyzing the findings** in the lab.",
    "options": [
      "michael was analyzing the findings",
      "michael has analyzed the findings",
      "michael is analyzing the findings",
      "michael analyzes the findings"
    ],
    "correctAnswer": "michael was analyzing the findings",
    "explanation": [
      "The past continuous tense is appropriate for an action that was in progress at a specific time in the past.",
      "The auxiliary 'was' matches the singular subject."
    ]
  },
  {
    "question_id": "SYN_101",
    "questionType": "SYNONYM",
    "question": "Choose the best replacement for the underlined part of the sentence:",
    "sentence": "Michael was not present yesterday because **michael was analyzing the document** in the lab.",
    "options": [
      "michael is analyzing the document",
      "michael was analyzing the document",
      "michael has analyzed the document",
      "michael analyzes the document"
    ],
    "correctAnswer": "michael was analyzing the document",
    "explanation": [
      "The past continuous tense is appropriate for an action that was in progress at a specific time in the past.",
      "The auxiliary 'was' matches the singular subject."
    ]
  },
  {
    "question_id": "SYN_102",
    "questionType": "SYNONYM",
    "question": "Choose the best replacement for the underlined part of the sentence:",
    "sentence": "Michael was not present yesterday because **michael was analyzing the budget** in the lab.",
    "options": [
      "michael was analyzing the budget",
      "michael has analyzed the budget",
      "michael analyzes the budget",
      "michael is analyzing the budget"
    ],
    "correctAnswer": "michael was analyzing the budget",
    "explanation": [
      "The past continuous tense is appropriate for an action that was in progress at a specific time in the past.",
      "The auxiliary 'was' matches the singular subject."
    ]
  },
  {
    "question_id": "SYN_103",
    "questionType": "SYNONYM",
    "question": "Choose the best replacement for the underlined part of the sentence:",
    "sentence": "Michael was not present yesterday because **michael was analyzing the schedule** in the lab.",
    "options": [
      "michael analyzes the schedule",
      "michael has analyzed the schedule",
      "michael was analyzing the schedule",
      "michael is analyzing the schedule"
    ],
    "correctAnswer": "michael was analyzing the schedule",
    "explanation": [
      "The past continuous tense is appropriate for an action that was in progress at a specific time in the past.",
      "The auxiliary 'was' matches the singular subject."
    ]
  },
  {
    "question_id": "SYN_104",
    "questionType": "SYNONYM",
    "question": "Choose the best replacement for the underlined part of the sentence:",
    "sentence": "Michael was not present yesterday because **michael was analyzing the plan** in the lab.",
    "options": [
      "michael was analyzing the plan",
      "michael analyzes the plan",
      "michael is analyzing the plan",
      "michael has analyzed the plan"
    ],
    "correctAnswer": "michael was analyzing the plan",
    "explanation": [
      "The past continuous tense is appropriate for an action that was in progress at a specific time in the past.",
      "The auxiliary 'was' matches the singular subject."
    ]
  },
  {
    "question_id": "SYN_105",
    "questionType": "SYNONYM",
    "question": "Choose the best replacement for the underlined part of the sentence:",
    "sentence": "Michael was not present yesterday because **michael was analyzing the results** in the lab.",
    "options": [
      "michael was analyzing the results",
      "michael has analyzed the results",
      "michael analyzes the results",
      "michael is analyzing the results"
    ],
    "correctAnswer": "michael was analyzing the results",
    "explanation": [
      "The past continuous tense is appropriate for an action that was in progress at a specific time in the past.",
      "The auxiliary 'was' matches the singular subject."
    ]
  },
  {
    "question_id": "SYN_106",
    "questionType": "SYNONYM",
    "question": "Choose the best replacement for the underlined part of the sentence:",
    "sentence": "Michael was not present yesterday because **michael was analyzing the system** in the lab.",
    "options": [
      "michael was analyzing the system",
      "michael analyzes the system",
      "michael is analyzing the system",
      "michael has analyzed the system"
    ],
    "correctAnswer": "michael was analyzing the system",
    "explanation": [
      "The past continuous tense is appropriate for an action that was in progress at a specific time in the past.",
      "The auxiliary 'was' matches the singular subject."
    ]
  },
  {
    "question_id": "SYN_107",
    "questionType": "SYNONYM",
    "question": "Choose the best replacement for the underlined part of the sentence:",
    "sentence": "Michael was not present yesterday because **michael was analyzing the presentation** in the lab.",
    "options": [
      "michael analyzes the presentation",
      "michael is analyzing the presentation",
      "michael was analyzing the presentation",
      "michael has analyzed the presentation"
    ],
    "correctAnswer": "michael was analyzing the presentation",
    "explanation": [
      "The past continuous tense is appropriate for an action that was in progress at a specific time in the past.",
      "The auxiliary 'was' matches the singular subject."
    ]
  },
  {
    "question_id": "SYN_108",
    "questionType": "SYNONYM",
    "question": "Choose the best replacement for the underlined part of the sentence:",
    "sentence": "Michael was not present yesterday because **michael was analyzing the contract** in the lab.",
    "options": [
      "michael has analyzed the contract",
      "michael analyzes the contract",
      "michael is analyzing the contract",
      "michael was analyzing the contract"
    ],
    "correctAnswer": "michael was analyzing the contract",
    "explanation": [
      "The past continuous tense is appropriate for an action that was in progress at a specific time in the past.",
      "The auxiliary 'was' matches the singular subject."
    ]
  },
  {
    "question_id": "SYN_109",
    "questionType": "SYNONYM",
    "question": "Choose the best replacement for the underlined part of the sentence:",
    "sentence": "The organization was not present yesterday because **the organization was analyzing the report** in the lab.",
    "options": [
      "the organization analyzes the report",
      "the organization was analyzing the report",
      "the organization has analyzed the report",
      "the organization is analyzing the report"
    ],
    "correctAnswer": "the organization was analyzing the report",
    "explanation": [
      "The past continuous tense is appropriate for an action that was in progress at a specific time in the past.",
      "The auxiliary 'was' matches the singular subject."
    ]
  },
  {
    "question_id": "SYN_110",
    "questionType": "SYNONYM",
    "question": "Choose the best replacement for the underlined part of the sentence:",
    "sentence": "The organization was not present yesterday because **the organization was analyzing the project** in the lab.",
    "options": [
      "the organization was analyzing the project",
      "the organization analyzes the project",
      "the organization is analyzing the project",
      "the organization has analyzed the project"
    ],
    "correctAnswer": "the organization was analyzing the project",
    "explanation": [
      "The past continuous tense is appropriate for an action that was in progress at a specific time in the past.",
      "The auxiliary 'was' matches the singular subject."
    ]
  },
  {
    "question_id": "SYN_111",
    "questionType": "SYNONYM",
    "question": "Choose the best replacement for the underlined part of the sentence:",
    "sentence": "The organization was not present yesterday because **the organization was analyzing the application** in the lab.",
    "options": [
      "the organization was analyzing the application",
      "the organization analyzes the application",
      "the organization is analyzing the application",
      "the organization has analyzed the application"
    ],
    "correctAnswer": "the organization was analyzing the application",
    "explanation": [
      "The past continuous tense is appropriate for an action that was in progress at a specific time in the past.",
      "The auxiliary 'was' matches the singular subject."
    ]
  },
  {
    "question_id": "SYN_112",
    "questionType": "SYNONYM",
    "question": "Choose the best replacement for the underlined part of the sentence:",
    "sentence": "The organization was not present yesterday because **the organization was analyzing the data** in the lab.",
    "options": [
      "the organization was analyzing the data",
      "the organization analyzes the data",
      "the organization is analyzing the data",
      "the organization has analyzed the data"
    ],
    "correctAnswer": "the organization was analyzing the data",
    "explanation": [
      "The past continuous tense is appropriate for an action that was in progress at a specific time in the past.",
      "The auxiliary 'was' matches the singular subject."
    ]
  },
  {
    "question_id": "SYN_113",
    "questionType": "SYNONYM",
    "question": "Choose the best replacement for the underlined part of the sentence:",
    "sentence": "The organization was not present yesterday because **the organization was analyzing the findings** in the lab.",
    "options": [
      "the organization was analyzing the findings",
      "the organization analyzes the findings",
      "the organization is analyzing the findings",
      "the organization has analyzed the findings"
    ],
    "correctAnswer": "the organization was analyzing the findings",
    "explanation": [
      "The past continuous tense is appropriate for an action that was in progress at a specific time in the past.",
      "The auxiliary 'was' matches the singular subject."
    ]
  },
  {
    "question_id": "SYN_114",
    "questionType": "SYNONYM",
    "question": "Choose the best replacement for the underlined part of the sentence:",
    "sentence": "The organization was not present yesterday because **the organization was analyzing the document** in the lab.",
    "options": [
      "the organization analyzes the document",
      "the organization was analyzing the document",
      "the organization has analyzed the document",
      "the organization is analyzing the document"
    ],
    "correctAnswer": "the organization was analyzing the document",
    "explanation": [
      "The past continuous tense is appropriate for an action that was in progress at a specific time in the past.",
      "The auxiliary 'was' matches the singular subject."
    ]
  },
  {
    "question_id": "SYN_115",
    "questionType": "SYNONYM",
    "question": "Choose the best replacement for the underlined part of the sentence:",
    "sentence": "The organization was not present yesterday because **the organization was analyzing the budget** in the lab.",
    "options": [
      "the organization was analyzing the budget",
      "the organization is analyzing the budget",
      "the organization has analyzed the budget",
      "the organization analyzes the budget"
    ],
    "correctAnswer": "the organization was analyzing the budget",
    "explanation": [
      "The past continuous tense is appropriate for an action that was in progress at a specific time in the past.",
      "The auxiliary 'was' matches the singular subject."
    ]
  },
  {
    "question_id": "SYN_116",
    "questionType": "SYNONYM",
    "question": "Choose the best replacement for the underlined part of the sentence:",
    "sentence": "The organization was not present yesterday because **the organization was analyzing the schedule** in the lab.",
    "options": [
      "the organization was analyzing the schedule",
      "the organization analyzes the schedule",
      "the organization is analyzing the schedule",
      "the organization has analyzed the schedule"
    ],
    "correctAnswer": "the organization was analyzing the schedule",
    "explanation": [
      "The past continuous tense is appropriate for an action that was in progress at a specific time in the past.",
      "The auxiliary 'was' matches the singular subject."
    ]
  },
  {
    "question_id": "SYN_117",
    "questionType": "SYNONYM",
    "question": "Choose the best replacement for the underlined part of the sentence:",
    "sentence": "The organization was not present yesterday because **the organization was analyzing the plan** in the lab.",
    "options": [
      "the organization analyzes the plan",
      "the organization has analyzed the plan",
      "the organization was analyzing the plan",
      "the organization is analyzing the plan"
    ],
    "correctAnswer": "the organization was analyzing the plan",
    "explanation": [
      "The past continuous tense is appropriate for an action that was in progress at a specific time in the past.",
      "The auxiliary 'was' matches the singular subject."
    ]
  },
  {
    "question_id": "SYN_118",
    "questionType": "SYNONYM",
    "question": "Choose the best replacement for the underlined part of the sentence:",
    "sentence": "The organization was not present yesterday because **the organization was analyzing the results** in the lab.",
    "options": [
      "the organization was analyzing the results",
      "the organization has analyzed the results",
      "the organization analyzes the results",
      "the organization is analyzing the results"
    ],
    "correctAnswer": "the organization was analyzing the results",
    "explanation": [
      "The past continuous tense is appropriate for an action that was in progress at a specific time in the past.",
      "The auxiliary 'was' matches the singular subject."
    ]
  },
  {
    "question_id": "SYN_119",
    "questionType": "SYNONYM",
    "question": "Choose the best replacement for the underlined part of the sentence:",
    "sentence": "The organization was not present yesterday because **the organization was analyzing the system** in the lab.",
    "options": [
      "the organization was analyzing the system",
      "the organization analyzes the system",
      "the organization has analyzed the system",
      "the organization is analyzing the system"
    ],
    "correctAnswer": "the organization was analyzing the system",
    "explanation": [
      "The past continuous tense is appropriate for an action that was in progress at a specific time in the past.",
      "The auxiliary 'was' matches the singular subject."
    ]
  },
  {
    "question_id": "SYN_120",
    "questionType": "SYNONYM",
    "question": "Choose the best replacement for the underlined part of the sentence:",
    "sentence": "The organization was not present yesterday because **the organization was analyzing the presentation** in the lab.",
    "options": [
      "the organization has analyzed the presentation",
      "the organization analyzes the presentation",
      "the organization was analyzing the presentation",
      "the organization is analyzing the presentation"
    ],
    "correctAnswer": "the organization was analyzing the presentation",
    "explanation": [
      "The past continuous tense is appropriate for an action that was in progress at a specific time in the past.",
      "The auxiliary 'was' matches the singular subject."
    ]
  },
  {
    "question_id": "SYN_121",
    "questionType": "SYNONYM",
    "question": "Choose the best replacement for the underlined part of the sentence:",
    "sentence": "The organization was not present yesterday because **the organization was analyzing the contract** in the lab.",
    "options": [
      "the organization was analyzing the contract",
      "the organization is analyzing the contract",
      "the organization has analyzed the contract",
      "the organization analyzes the contract"
    ],
    "correctAnswer": "the organization was analyzing the contract",
    "explanation": [
      "The past continuous tense is appropriate for an action that was in progress at a specific time in the past.",
      "The auxiliary 'was' matches the singular subject."
    ]
  },
  {
    "question_id": "SYN_122",
    "questionType": "SYNONYM",
    "question": "Choose the best replacement for the underlined part of the sentence:",
    "sentence": "The scientist was not present yesterday because **the scientist was analyzing the report** in the lab.",
    "options": [
      "the scientist was analyzing the report",
      "the scientist analyzes the report",
      "the scientist is analyzing the report",
      "the scientist has analyzed the report"
    ],
    "correctAnswer": "the scientist was analyzing the report",
    "explanation": [
      "The past continuous tense is appropriate for an action that was in progress at a specific time in the past.",
      "The auxiliary 'was' matches the singular subject."
    ]
  },
  {
    "question_id": "SYN_123",
    "questionType": "SYNONYM",
    "question": "Choose the best replacement for the underlined part of the sentence:",
    "sentence": "The scientist was not present yesterday because **the scientist was analyzing the project** in the lab.",
    "options": [
      "the scientist was analyzing the project",
      "the scientist analyzes the project",
      "the scientist is analyzing the project",
      "the scientist has analyzed the project"
    ],
    "correctAnswer": "the scientist was analyzing the project",
    "explanation": [
      "The past continuous tense is appropriate for an action that was in progress at a specific time in the past.",
      "The auxiliary 'was' matches the singular subject."
    ]
  },
  {
    "question_id": "SYN_124",
    "questionType": "SYNONYM",
    "question": "Choose the best replacement for the underlined part of the sentence:",
    "sentence": "The scientist was not present yesterday because **the scientist was analyzing the application** in the lab.",
    "options": [
      "the scientist analyzes the application",
      "the scientist has analyzed the application",
      "the scientist was analyzing the application",
      "the scientist is analyzing the application"
    ],
    "correctAnswer": "the scientist was analyzing the application",
    "explanation": [
      "The past continuous tense is appropriate for an action that was in progress at a specific time in the past.",
      "The auxiliary 'was' matches the singular subject."
    ]
  },
  {
    "question_id": "SYN_125",
    "questionType": "SYNONYM",
    "question": "Choose the best replacement for the underlined part of the sentence:",
    "sentence": "The scientist was not present yesterday because **the scientist was analyzing the data** in the lab.",
    "options": [
      "the scientist was analyzing the data",
      "the scientist analyzes the data",
      "the scientist has analyzed the data",
      "the scientist is analyzing the data"
    ],
    "correctAnswer": "the scientist was analyzing the data",
    "explanation": [
      "The past continuous tense is appropriate for an action that was in progress at a specific time in the past.",
      "The auxiliary 'was' matches the singular subject."
    ]
  },
  {
    "question_id": "SYN_126",
    "questionType": "SYNONYM",
    "question": "Choose the best replacement for the underlined part of the sentence:",
    "sentence": "The scientist was not present yesterday because **the scientist was analyzing the findings** in the lab.",
    "options": [
      "the scientist was analyzing the findings",
      "the scientist analyzes the findings",
      "the scientist is analyzing the findings",
      "the scientist has analyzed the findings"
    ],
    "correctAnswer": "the scientist was analyzing the findings",
    "explanation": [
      "The past continuous tense is appropriate for an action that was in progress at a specific time in the past.",
      "The auxiliary 'was' matches the singular subject."
    ]
  },
  {
    "question_id": "SYN_127",
    "questionType": "SYNONYM",
    "question": "Choose the best replacement for the underlined part of the sentence:",
    "sentence": "The scientist was not present yesterday because **the scientist was analyzing the document** in the lab.",
    "options": [
      "the scientist was analyzing the document",
      "the scientist analyzes the document",
      "the scientist is analyzing the document",
      "the scientist has analyzed the document"
    ],
    "correctAnswer": "the scientist was analyzing the document",
    "explanation": [
      "The past continuous tense is appropriate for an action that was in progress at a specific time in the past.",
      "The auxiliary 'was' matches the singular subject."
    ]
  },
  {
    "question_id": "SYN_128",
    "questionType": "SYNONYM",
    "question": "Choose the best replacement for the underlined part of the sentence:",
    "sentence": "The scientist was not present yesterday because **the scientist was analyzing the budget** in the lab.",
    "options": [
      "the scientist has analyzed the budget",
      "the scientist was analyzing the budget",
      "the scientist analyzes the budget",
      "the scientist is analyzing the budget"
    ],
    "correctAnswer": "the scientist was analyzing the budget",
    "explanation": [
      "The past continuous tense is appropriate for an action that was in progress at a specific time in the past.",
      "The auxiliary 'was' matches the singular subject."
    ]
  },
  {
    "question_id": "SYN_129",
    "questionType": "SYNONYM",
    "question": "Choose the best replacement for the underlined part of the sentence:",
    "sentence": "The scientist was not present yesterday because **the scientist was analyzing the schedule** in the lab.",
    "options": [
      "the scientist has analyzed the schedule",
      "the scientist is analyzing the schedule",
      "the scientist analyzes the schedule",
      "the scientist was analyzing the schedule"
    ],
    "correctAnswer": "the scientist was analyzing the schedule",
    "explanation": [
      "The past continuous tense is appropriate for an action that was in progress at a specific time in the past.",
      "The auxiliary 'was' matches the singular subject."
    ]
  },
  {
    "question_id": "SYN_130",
    "questionType": "SYNONYM",
    "question": "Choose the best replacement for the underlined part of the sentence:",
    "sentence": "The scientist was not present yesterday because **the scientist was analyzing the plan** in the lab.",
    "options": [
      "the scientist has analyzed the plan",
      "the scientist is analyzing the plan",
      "the scientist analyzes the plan",
      "the scientist was analyzing the plan"
    ],
    "correctAnswer": "the scientist was analyzing the plan",
    "explanation": [
      "The past continuous tense is appropriate for an action that was in progress at a specific time in the past.",
      "The auxiliary 'was' matches the singular subject."
    ]
  },
  {
    "question_id": "SYN_131",
    "questionType": "SYNONYM",
    "question": "Choose the best replacement for the underlined part of the sentence:",
    "sentence": "The scientist was not present yesterday because **the scientist was analyzing the results** in the lab.",
    "options": [
      "the scientist has analyzed the results",
      "the scientist is analyzing the results",
      "the scientist analyzes the results",
      "the scientist was analyzing the results"
    ],
    "correctAnswer": "the scientist was analyzing the results",
    "explanation": [
      "The past continuous tense is appropriate for an action that was in progress at a specific time in the past.",
      "The auxiliary 'was' matches the singular subject."
    ]
  },
  {
    "question_id": "SYN_132",
    "questionType": "SYNONYM",
    "question": "Choose the best replacement for the underlined part of the sentence:",
    "sentence": "The scientist was not present yesterday because **the scientist was analyzing the system** in the lab.",
    "options": [
      "the scientist is analyzing the system",
      "the scientist analyzes the system",
      "the scientist was analyzing the system",
      "the scientist has analyzed the system"
    ],
    "correctAnswer": "the scientist was analyzing the system",
    "explanation": [
      "The past continuous tense is appropriate for an action that was in progress at a specific time in the past.",
      "The auxiliary 'was' matches the singular subject."
    ]
  },
  {
    "question_id": "SYN_133",
    "questionType": "SYNONYM",
    "question": "Choose the best replacement for the underlined part of the sentence:",
    "sentence": "The scientist was not present yesterday because **the scientist was analyzing the presentation** in the lab.",
    "options": [
      "the scientist is analyzing the presentation",
      "the scientist analyzes the presentation",
      "the scientist was analyzing the presentation",
      "the scientist has analyzed the presentation"
    ],
    "correctAnswer": "the scientist was analyzing the presentation",
    "explanation": [
      "The past continuous tense is appropriate for an action that was in progress at a specific time in the past.",
      "The auxiliary 'was' matches the singular subject."
    ]
  },
  {
    "question_id": "SYN_134",
    "questionType": "SYNONYM",
    "question": "Choose the best replacement for the underlined part of the sentence:",
    "sentence": "The scientist was not present yesterday because **the scientist was analyzing the contract** in the lab.",
    "options": [
      "the scientist has analyzed the contract",
      "the scientist is analyzing the contract",
      "the scientist analyzes the contract",
      "the scientist was analyzing the contract"
    ],
    "correctAnswer": "the scientist was analyzing the contract",
    "explanation": [
      "The past continuous tense is appropriate for an action that was in progress at a specific time in the past.",
      "The auxiliary 'was' matches the singular subject."
    ]
  },
  {
    "question_id": "SYN_135",
    "questionType": "SYNONYM",
    "question": "Choose the best replacement for the underlined part of the sentence:",
    "sentence": "The engineer was not present yesterday because **the engineer was analyzing the report** in the lab.",
    "options": [
      "the engineer was analyzing the report",
      "the engineer analyzes the report",
      "the engineer has analyzed the report",
      "the engineer is analyzing the report"
    ],
    "correctAnswer": "the engineer was analyzing the report",
    "explanation": [
      "The past continuous tense is appropriate for an action that was in progress at a specific time in the past.",
      "The auxiliary 'was' matches the singular subject."
    ]
  },
  {
    "question_id": "SYN_136",
    "questionType": "SYNONYM",
    "question": "Choose the best replacement for the underlined part of the sentence:",
    "sentence": "The engineer was not present yesterday because **the engineer was analyzing the project** in the lab.",
    "options": [
      "the engineer has analyzed the project",
      "the engineer is analyzing the project",
      "the engineer analyzes the project",
      "the engineer was analyzing the project"
    ],
    "correctAnswer": "the engineer was analyzing the project",
    "explanation": [
      "The past continuous tense is appropriate for an action that was in progress at a specific time in the past.",
      "The auxiliary 'was' matches the singular subject."
    ]
  },
  {
    "question_id": "SYN_137",
    "questionType": "SYNONYM",
    "question": "Choose the best replacement for the underlined part of the sentence:",
    "sentence": "The engineer was not present yesterday because **the engineer was analyzing the application** in the lab.",
    "options": [
      "the engineer analyzes the application",
      "the engineer was analyzing the application",
      "the engineer is analyzing the application",
      "the engineer has analyzed the application"
    ],
    "correctAnswer": "the engineer was analyzing the application",
    "explanation": [
      "The past continuous tense is appropriate for an action that was in progress at a specific time in the past.",
      "The auxiliary 'was' matches the singular subject."
    ]
  },
  {
    "question_id": "SYN_138",
    "questionType": "SYNONYM",
    "question": "Choose the best replacement for the underlined part of the sentence:",
    "sentence": "The engineer was not present yesterday because **the engineer was analyzing the data** in the lab.",
    "options": [
      "the engineer has analyzed the data",
      "the engineer was analyzing the data",
      "the engineer analyzes the data",
      "the engineer is analyzing the data"
    ],
    "correctAnswer": "the engineer was analyzing the data",
    "explanation": [
      "The past continuous tense is appropriate for an action that was in progress at a specific time in the past.",
      "The auxiliary 'was' matches the singular subject."
    ]
  },
  {
    "question_id": "SYN_139",
    "questionType": "SYNONYM",
    "question": "Choose the best replacement for the underlined part of the sentence:",
    "sentence": "The engineer was not present yesterday because **the engineer was analyzing the findings** in the lab.",
    "options": [
      "the engineer was analyzing the findings",
      "the engineer has analyzed the findings",
      "the engineer analyzes the findings",
      "the engineer is analyzing the findings"
    ],
    "correctAnswer": "the engineer was analyzing the findings",
    "explanation": [
      "The past continuous tense is appropriate for an action that was in progress at a specific time in the past.",
      "The auxiliary 'was' matches the singular subject."
    ]
  },
  {
    "question_id": "SYN_140",
    "questionType": "SYNONYM",
    "question": "Choose the best replacement for the underlined part of the sentence:",
    "sentence": "The engineer was not present yesterday because **the engineer was analyzing the document** in the lab.",
    "options": [
      "the engineer has analyzed the document",
      "the engineer is analyzing the document",
      "the engineer analyzes the document",
      "the engineer was analyzing the document"
    ],
    "correctAnswer": "the engineer was analyzing the document",
    "explanation": [
      "The past continuous tense is appropriate for an action that was in progress at a specific time in the past.",
      "The auxiliary 'was' matches the singular subject."
    ]
  },
  {
    "question_id": "SYN_141",
    "questionType": "SYNONYM",
    "question": "Choose the best replacement for the underlined part of the sentence:",
    "sentence": "The engineer was not present yesterday because **the engineer was analyzing the budget** in the lab.",
    "options": [
      "the engineer has analyzed the budget",
      "the engineer is analyzing the budget",
      "the engineer analyzes the budget",
      "the engineer was analyzing the budget"
    ],
    "correctAnswer": "the engineer was analyzing the budget",
    "explanation": [
      "The past continuous tense is appropriate for an action that was in progress at a specific time in the past.",
      "The auxiliary 'was' matches the singular subject."
    ]
  },
  {
    "question_id": "SYN_142",
    "questionType": "SYNONYM",
    "question": "Choose the best replacement for the underlined part of the sentence:",
    "sentence": "The engineer was not present yesterday because **the engineer was analyzing the schedule** in the lab.",
    "options": [
      "the engineer was analyzing the schedule",
      "the engineer analyzes the schedule",
      "the engineer is analyzing the schedule",
      "the engineer has analyzed the schedule"
    ],
    "correctAnswer": "the engineer was analyzing the schedule",
    "explanation": [
      "The past continuous tense is appropriate for an action that was in progress at a specific time in the past.",
      "The auxiliary 'was' matches the singular subject."
    ]
  },
  {
    "question_id": "SYN_143",
    "questionType": "SYNONYM",
    "question": "Choose the best replacement for the underlined part of the sentence:",
    "sentence": "The engineer was not present yesterday because **the engineer was analyzing the plan** in the lab.",
    "options": [
      "the engineer was analyzing the plan",
      "the engineer analyzes the plan",
      "the engineer is analyzing the plan",
      "the engineer has analyzed the plan"
    ],
    "correctAnswer": "the engineer was analyzing the plan",
    "explanation": [
      "The past continuous tense is appropriate for an action that was in progress at a specific time in the past.",
      "The auxiliary 'was' matches the singular subject."
    ]
  },
  {
    "question_id": "SYN_144",
    "questionType": "SYNONYM",
    "question": "Choose the best replacement for the underlined part of the sentence:",
    "sentence": "The engineer was not present yesterday because **the engineer was analyzing the results** in the lab.",
    "options": [
      "the engineer was analyzing the results",
      "the engineer has analyzed the results",
      "the engineer analyzes the results",
      "the engineer is analyzing the results"
    ],
    "correctAnswer": "the engineer was analyzing the results",
    "explanation": [
      "The past continuous tense is appropriate for an action that was in progress at a specific time in the past.",
      "The auxiliary 'was' matches the singular subject."
    ]
  },
  {
    "question_id": "SYN_145",
    "questionType": "SYNONYM",
    "question": "Choose the best replacement for the underlined part of the sentence:",
    "sentence": "The engineer was not present yesterday because **the engineer was analyzing the system** in the lab.",
    "options": [
      "the engineer analyzes the system",
      "the engineer is analyzing the system",
      "the engineer was analyzing the system",
      "the engineer has analyzed the system"
    ],
    "correctAnswer": "the engineer was analyzing the system",
    "explanation": [
      "The past continuous tense is appropriate for an action that was in progress at a specific time in the past.",
      "The auxiliary 'was' matches the singular subject."
    ]
  },
  {
    "question_id": "SYN_146",
    "questionType": "SYNONYM",
    "question": "Choose the best replacement for the underlined part of the sentence:",
    "sentence": "The engineer was not present yesterday because **the engineer was analyzing the presentation** in the lab.",
    "options": [
      "the engineer has analyzed the presentation",
      "the engineer analyzes the presentation",
      "the engineer is analyzing the presentation",
      "the engineer was analyzing the presentation"
    ],
    "correctAnswer": "the engineer was analyzing the presentation",
    "explanation": [
      "The past continuous tense is appropriate for an action that was in progress at a specific time in the past.",
      "The auxiliary 'was' matches the singular subject."
    ]
  },
  {
    "question_id": "SYN_147",
    "questionType": "SYNONYM",
    "question": "Choose the best replacement for the underlined part of the sentence:",
    "sentence": "The engineer was not present yesterday because **the engineer was analyzing the contract** in the lab.",
    "options": [
      "the engineer is analyzing the contract",
      "the engineer has analyzed the contract",
      "the engineer analyzes the contract",
      "the engineer was analyzing the contract"
    ],
    "correctAnswer": "the engineer was analyzing the contract",
    "explanation": [
      "The past continuous tense is appropriate for an action that was in progress at a specific time in the past.",
      "The auxiliary 'was' matches the singular subject."
    ]
  },
  {
    "question_id": "SYN_148",
    "questionType": "SYNONYM",
    "question": "Choose the best replacement for the underlined part of the sentence:",
    "sentence": "The designer was not present yesterday because **the designer was analyzing the report** in the lab.",
    "options": [
      "the designer has analyzed the report",
      "the designer is analyzing the report",
      "the designer analyzes the report",
      "the designer was analyzing the report"
    ],
    "correctAnswer": "the designer was analyzing the report",
    "explanation": [
      "The past continuous tense is appropriate for an action that was in progress at a specific time in the past.",
      "The auxiliary 'was' matches the singular subject."
    ]
  },
  {
    "question_id": "SYN_149",
    "questionType": "SYNONYM",
    "question": "Choose the best replacement for the underlined part of the sentence:",
    "sentence": "The designer was not present yesterday because **the designer was analyzing the project** in the lab.",
    "options": [
      "the designer is analyzing the project",
      "the designer was analyzing the project",
      "the designer has analyzed the project",
      "the designer analyzes the project"
    ],
    "correctAnswer": "the designer was analyzing the project",
    "explanation": [
      "The past continuous tense is appropriate for an action that was in progress at a specific time in the past.",
      "The auxiliary 'was' matches the singular subject."
    ]
  },
  {
    "question_id": "SYN_150",
    "questionType": "SYNONYM",
    "question": "Choose the best replacement for the underlined part of the sentence:",
    "sentence": "The designer was not present yesterday because **the designer was analyzing the application** in the lab.",
    "options": [
      "the designer was analyzing the application",
      "the designer analyzes the application",
      "the designer is analyzing the application",
      "the designer has analyzed the application"
    ],
    "correctAnswer": "the designer was analyzing the application",
    "explanation": [
      "The past continuous tense is appropriate for an action that was in progress at a specific time in the past.",
      "The auxiliary 'was' matches the singular subject."
    ]
  },
  {
    "question_id": "SYN_151",
    "questionType": "SYNONYM",
    "question": "Choose the best replacement for the underlined part of the sentence:",
    "sentence": "The designer was not present yesterday because **the designer was analyzing the data** in the lab.",
    "options": [
      "the designer has analyzed the data",
      "the designer is analyzing the data",
      "the designer was analyzing the data",
      "the designer analyzes the data"
    ],
    "correctAnswer": "the designer was analyzing the data",
    "explanation": [
      "The past continuous tense is appropriate for an action that was in progress at a specific time in the past.",
      "The auxiliary 'was' matches the singular subject."
    ]
  },
  {
    "question_id": "SYN_152",
    "questionType": "SYNONYM",
    "question": "Choose the best replacement for the underlined part of the sentence:",
    "sentence": "The designer was not present yesterday because **the designer was analyzing the findings** in the lab.",
    "options": [
      "the designer was analyzing the findings",
      "the designer analyzes the findings",
      "the designer is analyzing the findings",
      "the designer has analyzed the findings"
    ],
    "correctAnswer": "the designer was analyzing the findings",
    "explanation": [
      "The past continuous tense is appropriate for an action that was in progress at a specific time in the past.",
      "The auxiliary 'was' matches the singular subject."
    ]
  },
  {
    "question_id": "SYN_153",
    "questionType": "SYNONYM",
    "question": "Choose the best replacement for the underlined part of the sentence:",
    "sentence": "The designer was not present yesterday because **the designer was analyzing the document** in the lab.",
    "options": [
      "the designer analyzes the document",
      "the designer was analyzing the document",
      "the designer is analyzing the document",
      "the designer has analyzed the document"
    ],
    "correctAnswer": "the designer was analyzing the document",
    "explanation": [
      "The past continuous tense is appropriate for an action that was in progress at a specific time in the past.",
      "The auxiliary 'was' matches the singular subject."
    ]
  },
  {
    "question_id": "SYN_154",
    "questionType": "SYNONYM",
    "question": "Choose the best replacement for the underlined part of the sentence:",
    "sentence": "The designer was not present yesterday because **the designer was analyzing the budget** in the lab.",
    "options": [
      "the designer was analyzing the budget",
      "the designer analyzes the budget",
      "the designer is analyzing the budget",
      "the designer has analyzed the budget"
    ],
    "correctAnswer": "the designer was analyzing the budget",
    "explanation": [
      "The past continuous tense is appropriate for an action that was in progress at a specific time in the past.",
      "The auxiliary 'was' matches the singular subject."
    ]
  },
  {
    "question_id": "SYN_155",
    "questionType": "SYNONYM",
    "question": "Choose the best replacement for the underlined part of the sentence:",
    "sentence": "The designer was not present yesterday because **the designer was analyzing the schedule** in the lab.",
    "options": [
      "the designer analyzes the schedule",
      "the designer is analyzing the schedule",
      "the designer has analyzed the schedule",
      "the designer was analyzing the schedule"
    ],
    "correctAnswer": "the designer was analyzing the schedule",
    "explanation": [
      "The past continuous tense is appropriate for an action that was in progress at a specific time in the past.",
      "The auxiliary 'was' matches the singular subject."
    ]
  },
  {
    "question_id": "SYN_156",
    "questionType": "SYNONYM",
    "question": "Choose the best replacement for the underlined part of the sentence:",
    "sentence": "The designer was not present yesterday because **the designer was analyzing the plan** in the lab.",
    "options": [
      "the designer was analyzing the plan",
      "the designer analyzes the plan",
      "the designer is analyzing the plan",
      "the designer has analyzed the plan"
    ],
    "correctAnswer": "the designer was analyzing the plan",
    "explanation": [
      "The past continuous tense is appropriate for an action that was in progress at a specific time in the past.",
      "The auxiliary 'was' matches the singular subject."
    ]
  },
  {
    "question_id": "SYN_157",
    "questionType": "SYNONYM",
    "question": "Choose the best replacement for the underlined part of the sentence:",
    "sentence": "The designer was not present yesterday because **the designer was analyzing the results** in the lab.",
    "options": [
      "the designer was analyzing the results",
      "the designer has analyzed the results",
      "the designer analyzes the results",
      "the designer is analyzing the results"
    ],
    "correctAnswer": "the designer was analyzing the results",
    "explanation": [
      "The past continuous tense is appropriate for an action that was in progress at a specific time in the past.",
      "The auxiliary 'was' matches the singular subject."
    ]
  },
  {
    "question_id": "SYN_158",
    "questionType": "SYNONYM",
    "question": "Choose the best replacement for the underlined part of the sentence:",
    "sentence": "The designer was not present yesterday because **the designer was analyzing the system** in the lab.",
    "options": [
      "the designer analyzes the system",
      "the designer was analyzing the system",
      "the designer has analyzed the system",
      "the designer is analyzing the system"
    ],
    "correctAnswer": "the designer was analyzing the system",
    "explanation": [
      "The past continuous tense is appropriate for an action that was in progress at a specific time in the past.",
      "The auxiliary 'was' matches the singular subject."
    ]
  },
  {
    "question_id": "SYN_159",
    "questionType": "SYNONYM",
    "question": "Choose the best replacement for the underlined part of the sentence:",
    "sentence": "The designer was not present yesterday because **the designer was analyzing the presentation** in the lab.",
    "options": [
      "the designer is analyzing the presentation",
      "the designer was analyzing the presentation",
      "the designer has analyzed the presentation",
      "the designer analyzes the presentation"
    ],
    "correctAnswer": "the designer was analyzing the presentation",
    "explanation": [
      "The past continuous tense is appropriate for an action that was in progress at a specific time in the past.",
      "The auxiliary 'was' matches the singular subject."
    ]
  },
  {
    "question_id": "SYN_160",
    "questionType": "SYNONYM",
    "question": "Choose the best replacement for the underlined part of the sentence:",
    "sentence": "The designer was not present yesterday because **the designer was analyzing the contract** in the lab.",
    "options": [
      "the designer has analyzed the contract",
      "the designer was analyzing the contract",
      "the designer analyzes the contract",
      "the designer is analyzing the contract"
    ],
    "correctAnswer": "the designer was analyzing the contract",
    "explanation": [
      "The past continuous tense is appropriate for an action that was in progress at a specific time in the past.",
      "The auxiliary 'was' matches the singular subject."
    ]
  },
  {
    "question_id": "SYN_161",
    "questionType": "SYNONYM",
    "question": "Choose the best replacement for the underlined part of the sentence:",
    "sentence": "The auditor was not present yesterday because **the auditor was analyzing the report** in the lab.",
    "options": [
      "the auditor was analyzing the report",
      "the auditor has analyzed the report",
      "the auditor is analyzing the report",
      "the auditor analyzes the report"
    ],
    "correctAnswer": "the auditor was analyzing the report",
    "explanation": [
      "The past continuous tense is appropriate for an action that was in progress at a specific time in the past.",
      "The auxiliary 'was' matches the singular subject."
    ]
  },
  {
    "question_id": "SYN_162",
    "questionType": "SYNONYM",
    "question": "Choose the best replacement for the underlined part of the sentence:",
    "sentence": "The auditor was not present yesterday because **the auditor was analyzing the project** in the lab.",
    "options": [
      "the auditor analyzes the project",
      "the auditor was analyzing the project",
      "the auditor has analyzed the project",
      "the auditor is analyzing the project"
    ],
    "correctAnswer": "the auditor was analyzing the project",
    "explanation": [
      "The past continuous tense is appropriate for an action that was in progress at a specific time in the past.",
      "The auxiliary 'was' matches the singular subject."
    ]
  },
  {
    "question_id": "SYN_163",
    "questionType": "SYNONYM",
    "question": "Choose the best replacement for the underlined part of the sentence:",
    "sentence": "The auditor was not present yesterday because **the auditor was analyzing the application** in the lab.",
    "options": [
      "the auditor was analyzing the application",
      "the auditor analyzes the application",
      "the auditor is analyzing the application",
      "the auditor has analyzed the application"
    ],
    "correctAnswer": "the auditor was analyzing the application",
    "explanation": [
      "The past continuous tense is appropriate for an action that was in progress at a specific time in the past.",
      "The auxiliary 'was' matches the singular subject."
    ]
  },
  {
    "question_id": "SYN_164",
    "questionType": "SYNONYM",
    "question": "Choose the best replacement for the underlined part of the sentence:",
    "sentence": "The auditor was not present yesterday because **the auditor was analyzing the data** in the lab.",
    "options": [
      "the auditor analyzes the data",
      "the auditor has analyzed the data",
      "the auditor was analyzing the data",
      "the auditor is analyzing the data"
    ],
    "correctAnswer": "the auditor was analyzing the data",
    "explanation": [
      "The past continuous tense is appropriate for an action that was in progress at a specific time in the past.",
      "The auxiliary 'was' matches the singular subject."
    ]
  },
  {
    "question_id": "SYN_165",
    "questionType": "SYNONYM",
    "question": "Choose the best replacement for the underlined part of the sentence:",
    "sentence": "The auditor was not present yesterday because **the auditor was analyzing the findings** in the lab.",
    "options": [
      "the auditor is analyzing the findings",
      "the auditor analyzes the findings",
      "the auditor was analyzing the findings",
      "the auditor has analyzed the findings"
    ],
    "correctAnswer": "the auditor was analyzing the findings",
    "explanation": [
      "The past continuous tense is appropriate for an action that was in progress at a specific time in the past.",
      "The auxiliary 'was' matches the singular subject."
    ]
  },
  {
    "question_id": "SYN_166",
    "questionType": "SYNONYM",
    "question": "Choose the best replacement for the underlined part of the sentence:",
    "sentence": "The auditor was not present yesterday because **the auditor was analyzing the document** in the lab.",
    "options": [
      "the auditor has analyzed the document",
      "the auditor is analyzing the document",
      "the auditor analyzes the document",
      "the auditor was analyzing the document"
    ],
    "correctAnswer": "the auditor was analyzing the document",
    "explanation": [
      "The past continuous tense is appropriate for an action that was in progress at a specific time in the past.",
      "The auxiliary 'was' matches the singular subject."
    ]
  },
  {
    "question_id": "SYN_167",
    "questionType": "SYNONYM",
    "question": "Choose the best replacement for the underlined part of the sentence:",
    "sentence": "The auditor was not present yesterday because **the auditor was analyzing the budget** in the lab.",
    "options": [
      "the auditor has analyzed the budget",
      "the auditor was analyzing the budget",
      "the auditor analyzes the budget",
      "the auditor is analyzing the budget"
    ],
    "correctAnswer": "the auditor was analyzing the budget",
    "explanation": [
      "The past continuous tense is appropriate for an action that was in progress at a specific time in the past.",
      "The auxiliary 'was' matches the singular subject."
    ]
  },
  {
    "question_id": "SYN_168",
    "questionType": "SYNONYM",
    "question": "Choose the best replacement for the underlined part of the sentence:",
    "sentence": "The auditor was not present yesterday because **the auditor was analyzing the schedule** in the lab.",
    "options": [
      "the auditor is analyzing the schedule",
      "the auditor analyzes the schedule",
      "the auditor was analyzing the schedule",
      "the auditor has analyzed the schedule"
    ],
    "correctAnswer": "the auditor was analyzing the schedule",
    "explanation": [
      "The past continuous tense is appropriate for an action that was in progress at a specific time in the past.",
      "The auxiliary 'was' matches the singular subject."
    ]
  },
  {
    "question_id": "SYN_169",
    "questionType": "SYNONYM",
    "question": "Choose the best replacement for the underlined part of the sentence:",
    "sentence": "The auditor was not present yesterday because **the auditor was analyzing the plan** in the lab.",
    "options": [
      "the auditor is analyzing the plan",
      "the auditor analyzes the plan",
      "the auditor has analyzed the plan",
      "the auditor was analyzing the plan"
    ],
    "correctAnswer": "the auditor was analyzing the plan",
    "explanation": [
      "The past continuous tense is appropriate for an action that was in progress at a specific time in the past.",
      "The auxiliary 'was' matches the singular subject."
    ]
  },
  {
    "question_id": "SYN_170",
    "questionType": "SYNONYM",
    "question": "Choose the best replacement for the underlined part of the sentence:",
    "sentence": "The auditor was not present yesterday because **the auditor was analyzing the results** in the lab.",
    "options": [
      "the auditor is analyzing the results",
      "the auditor was analyzing the results",
      "the auditor has analyzed the results",
      "the auditor analyzes the results"
    ],
    "correctAnswer": "the auditor was analyzing the results",
    "explanation": [
      "The past continuous tense is appropriate for an action that was in progress at a specific time in the past.",
      "The auxiliary 'was' matches the singular subject."
    ]
  },
  {
    "question_id": "SYN_171",
    "questionType": "SYNONYM",
    "question": "Choose the best replacement for the underlined part of the sentence:",
    "sentence": "The auditor was not present yesterday because **the auditor was analyzing the system** in the lab.",
    "options": [
      "the auditor is analyzing the system",
      "the auditor was analyzing the system",
      "the auditor has analyzed the system",
      "the auditor analyzes the system"
    ],
    "correctAnswer": "the auditor was analyzing the system",
    "explanation": [
      "The past continuous tense is appropriate for an action that was in progress at a specific time in the past.",
      "The auxiliary 'was' matches the singular subject."
    ]
  },
  {
    "question_id": "SYN_172",
    "questionType": "SYNONYM",
    "question": "Choose the best replacement for the underlined part of the sentence:",
    "sentence": "The auditor was not present yesterday because **the auditor was analyzing the presentation** in the lab.",
    "options": [
      "the auditor has analyzed the presentation",
      "the auditor was analyzing the presentation",
      "the auditor analyzes the presentation",
      "the auditor is analyzing the presentation"
    ],
    "correctAnswer": "the auditor was analyzing the presentation",
    "explanation": [
      "The past continuous tense is appropriate for an action that was in progress at a specific time in the past.",
      "The auxiliary 'was' matches the singular subject."
    ]
  },
  {
    "question_id": "SYN_173",
    "questionType": "SYNONYM",
    "question": "Choose the best replacement for the underlined part of the sentence:",
    "sentence": "The auditor was not present yesterday because **the auditor was analyzing the contract** in the lab.",
    "options": [
      "the auditor has analyzed the contract",
      "the auditor is analyzing the contract",
      "the auditor analyzes the contract",
      "the auditor was analyzing the contract"
    ],
    "correctAnswer": "the auditor was analyzing the contract",
    "explanation": [
      "The past continuous tense is appropriate for an action that was in progress at a specific time in the past.",
      "The auxiliary 'was' matches the singular subject."
    ]
  },
  {
    "question_id": "SYN_174",
    "questionType": "SYNONYM",
    "question": "Choose the best replacement for the underlined part of the sentence:",
    "sentence": "The supervisor was not present yesterday because **the supervisor was analyzing the report** in the lab.",
    "options": [
      "the supervisor has analyzed the report",
      "the supervisor is analyzing the report",
      "the supervisor analyzes the report",
      "the supervisor was analyzing the report"
    ],
    "correctAnswer": "the supervisor was analyzing the report",
    "explanation": [
      "The past continuous tense is appropriate for an action that was in progress at a specific time in the past.",
      "The auxiliary 'was' matches the singular subject."
    ]
  },
  {
    "question_id": "SYN_175",
    "questionType": "SYNONYM",
    "question": "Choose the best replacement for the underlined part of the sentence:",
    "sentence": "The supervisor was not present yesterday because **the supervisor was analyzing the project** in the lab.",
    "options": [
      "the supervisor has analyzed the project",
      "the supervisor is analyzing the project",
      "the supervisor analyzes the project",
      "the supervisor was analyzing the project"
    ],
    "correctAnswer": "the supervisor was analyzing the project",
    "explanation": [
      "The past continuous tense is appropriate for an action that was in progress at a specific time in the past.",
      "The auxiliary 'was' matches the singular subject."
    ]
  },
  {
    "question_id": "SYN_176",
    "questionType": "SYNONYM",
    "question": "Choose the best replacement for the underlined part of the sentence:",
    "sentence": "The supervisor was not present yesterday because **the supervisor was analyzing the application** in the lab.",
    "options": [
      "the supervisor was analyzing the application",
      "the supervisor has analyzed the application",
      "the supervisor analyzes the application",
      "the supervisor is analyzing the application"
    ],
    "correctAnswer": "the supervisor was analyzing the application",
    "explanation": [
      "The past continuous tense is appropriate for an action that was in progress at a specific time in the past.",
      "The auxiliary 'was' matches the singular subject."
    ]
  },
  {
    "question_id": "SYN_177",
    "questionType": "SYNONYM",
    "question": "Choose the best replacement for the underlined part of the sentence:",
    "sentence": "The supervisor was not present yesterday because **the supervisor was analyzing the data** in the lab.",
    "options": [
      "the supervisor analyzes the data",
      "the supervisor has analyzed the data",
      "the supervisor is analyzing the data",
      "the supervisor was analyzing the data"
    ],
    "correctAnswer": "the supervisor was analyzing the data",
    "explanation": [
      "The past continuous tense is appropriate for an action that was in progress at a specific time in the past.",
      "The auxiliary 'was' matches the singular subject."
    ]
  },
  {
    "question_id": "SYN_178",
    "questionType": "SYNONYM",
    "question": "Choose the best replacement for the underlined part of the sentence:",
    "sentence": "The supervisor was not present yesterday because **the supervisor was analyzing the findings** in the lab.",
    "options": [
      "the supervisor analyzes the findings",
      "the supervisor was analyzing the findings",
      "the supervisor is analyzing the findings",
      "the supervisor has analyzed the findings"
    ],
    "correctAnswer": "the supervisor was analyzing the findings",
    "explanation": [
      "The past continuous tense is appropriate for an action that was in progress at a specific time in the past.",
      "The auxiliary 'was' matches the singular subject."
    ]
  },
  {
    "question_id": "SYN_179",
    "questionType": "SYNONYM",
    "question": "Choose the best replacement for the underlined part of the sentence:",
    "sentence": "The supervisor was not present yesterday because **the supervisor was analyzing the document** in the lab.",
    "options": [
      "the supervisor was analyzing the document",
      "the supervisor analyzes the document",
      "the supervisor is analyzing the document",
      "the supervisor has analyzed the document"
    ],
    "correctAnswer": "the supervisor was analyzing the document",
    "explanation": [
      "The past continuous tense is appropriate for an action that was in progress at a specific time in the past.",
      "The auxiliary 'was' matches the singular subject."
    ]
  },
  {
    "question_id": "SYN_180",
    "questionType": "SYNONYM",
    "question": "Choose the best replacement for the underlined part of the sentence:",
    "sentence": "The supervisor was not present yesterday because **the supervisor was analyzing the budget** in the lab.",
    "options": [
      "the supervisor analyzes the budget",
      "the supervisor was analyzing the budget",
      "the supervisor has analyzed the budget",
      "the supervisor is analyzing the budget"
    ],
    "correctAnswer": "the supervisor was analyzing the budget",
    "explanation": [
      "The past continuous tense is appropriate for an action that was in progress at a specific time in the past.",
      "The auxiliary 'was' matches the singular subject."
    ]
  },
  {
    "question_id": "SYN_181",
    "questionType": "SYNONYM",
    "question": "Choose the best replacement for the underlined part of the sentence:",
    "sentence": "The supervisor was not present yesterday because **the supervisor was analyzing the schedule** in the lab.",
    "options": [
      "the supervisor has analyzed the schedule",
      "the supervisor is analyzing the schedule",
      "the supervisor was analyzing the schedule",
      "the supervisor analyzes the schedule"
    ],
    "correctAnswer": "the supervisor was analyzing the schedule",
    "explanation": [
      "The past continuous tense is appropriate for an action that was in progress at a specific time in the past.",
      "The auxiliary 'was' matches the singular subject."
    ]
  },
  {
    "question_id": "SYN_182",
    "questionType": "SYNONYM",
    "question": "Choose the best replacement for the underlined part of the sentence:",
    "sentence": "The supervisor was not present yesterday because **the supervisor was analyzing the plan** in the lab.",
    "options": [
      "the supervisor has analyzed the plan",
      "the supervisor is analyzing the plan",
      "the supervisor analyzes the plan",
      "the supervisor was analyzing the plan"
    ],
    "correctAnswer": "the supervisor was analyzing the plan",
    "explanation": [
      "The past continuous tense is appropriate for an action that was in progress at a specific time in the past.",
      "The auxiliary 'was' matches the singular subject."
    ]
  },
  {
    "question_id": "SYN_183",
    "questionType": "SYNONYM",
    "question": "Choose the best replacement for the underlined part of the sentence:",
    "sentence": "The supervisor was not present yesterday because **the supervisor was analyzing the results** in the lab.",
    "options": [
      "the supervisor was analyzing the results",
      "the supervisor has analyzed the results",
      "the supervisor analyzes the results",
      "the supervisor is analyzing the results"
    ],
    "correctAnswer": "the supervisor was analyzing the results",
    "explanation": [
      "The past continuous tense is appropriate for an action that was in progress at a specific time in the past.",
      "The auxiliary 'was' matches the singular subject."
    ]
  },
  {
    "question_id": "SYN_184",
    "questionType": "SYNONYM",
    "question": "Choose the best replacement for the underlined part of the sentence:",
    "sentence": "The supervisor was not present yesterday because **the supervisor was analyzing the system** in the lab.",
    "options": [
      "the supervisor has analyzed the system",
      "the supervisor is analyzing the system",
      "the supervisor analyzes the system",
      "the supervisor was analyzing the system"
    ],
    "correctAnswer": "the supervisor was analyzing the system",
    "explanation": [
      "The past continuous tense is appropriate for an action that was in progress at a specific time in the past.",
      "The auxiliary 'was' matches the singular subject."
    ]
  },
  {
    "question_id": "SYN_185",
    "questionType": "SYNONYM",
    "question": "Choose the best replacement for the underlined part of the sentence:",
    "sentence": "The supervisor was not present yesterday because **the supervisor was analyzing the presentation** in the lab.",
    "options": [
      "the supervisor has analyzed the presentation",
      "the supervisor is analyzing the presentation",
      "the supervisor analyzes the presentation",
      "the supervisor was analyzing the presentation"
    ],
    "correctAnswer": "the supervisor was analyzing the presentation",
    "explanation": [
      "The past continuous tense is appropriate for an action that was in progress at a specific time in the past.",
      "The auxiliary 'was' matches the singular subject."
    ]
  },
  {
    "question_id": "SYN_186",
    "questionType": "SYNONYM",
    "question": "Choose the best replacement for the underlined part of the sentence:",
    "sentence": "The supervisor was not present yesterday because **the supervisor was analyzing the contract** in the lab.",
    "options": [
      "the supervisor is analyzing the contract",
      "the supervisor has analyzed the contract",
      "the supervisor analyzes the contract",
      "the supervisor was analyzing the contract"
    ],
    "correctAnswer": "the supervisor was analyzing the contract",
    "explanation": [
      "The past continuous tense is appropriate for an action that was in progress at a specific time in the past.",
      "The auxiliary 'was' matches the singular subject."
    ]
  },
  {
    "question_id": "SYN_187",
    "questionType": "SYNONYM",
    "question": "Choose the best replacement for the underlined part of the sentence:",
    "sentence": "The teacher was not available because **the teacher was preparing the report** at that time.",
    "options": [
      "the teacher had prepared the report",
      "the teacher is preparing the report",
      "the teacher prepared the report",
      "the teacher was preparing the report"
    ],
    "correctAnswer": "the teacher was preparing the report",
    "explanation": [
      "The past continuous describes an ongoing background action in the past.",
      "Consistency with the past context is required."
    ]
  },
  {
    "question_id": "SYN_188",
    "questionType": "SYNONYM",
    "question": "Choose the best replacement for the underlined part of the sentence:",
    "sentence": "The teacher was not available because **the teacher was preparing the report** at that time.",
    "options": [
      "the teacher had prepared the report",
      "the teacher is preparing the report",
      "the teacher prepared the report",
      "the teacher was preparing the report"
    ],
    "correctAnswer": "the teacher was preparing the report",
    "explanation": [
      "The past continuous describes an ongoing background action in the past.",
      "Consistency with the past context is required."
    ]
  },
  {
    "question_id": "SYN_189",
    "questionType": "SYNONYM",
    "question": "Choose the best replacement for the underlined part of the sentence:",
    "sentence": "The teacher was not available because **the teacher was preparing the report** at that time.",
    "options": [
      "the teacher is preparing the report",
      "the teacher had prepared the report",
      "the teacher prepared the report",
      "the teacher was preparing the report"
    ],
    "correctAnswer": "the teacher was preparing the report",
    "explanation": [
      "The past continuous describes an ongoing background action in the past.",
      "Consistency with the past context is required."
    ]
  },
  {
    "question_id": "SYN_190",
    "questionType": "SYNONYM",
    "question": "Choose the best replacement for the underlined part of the sentence:",
    "sentence": "The teacher was not available because **the teacher was preparing the report** at that time.",
    "options": [
      "the teacher was preparing the report",
      "the teacher prepared the report",
      "the teacher is preparing the report",
      "the teacher had prepared the report"
    ],
    "correctAnswer": "the teacher was preparing the report",
    "explanation": [
      "The past continuous describes an ongoing background action in the past.",
      "Consistency with the past context is required."
    ]
  },
  {
    "question_id": "SYN_191",
    "questionType": "SYNONYM",
    "question": "Choose the best replacement for the underlined part of the sentence:",
    "sentence": "The teacher was not available because **the teacher was preparing the report** at that time.",
    "options": [
      "the teacher prepared the report",
      "the teacher had prepared the report",
      "the teacher was preparing the report",
      "the teacher is preparing the report"
    ],
    "correctAnswer": "the teacher was preparing the report",
    "explanation": [
      "The past continuous describes an ongoing background action in the past.",
      "Consistency with the past context is required."
    ]
  },
  {
    "question_id": "SYN_192",
    "questionType": "SYNONYM",
    "question": "Choose the best replacement for the underlined part of the sentence:",
    "sentence": "The teacher was not available because **the teacher was preparing the report** at that time.",
    "options": [
      "the teacher is preparing the report",
      "the teacher prepared the report",
      "the teacher was preparing the report",
      "the teacher had prepared the report"
    ],
    "correctAnswer": "the teacher was preparing the report",
    "explanation": [
      "The past continuous describes an ongoing background action in the past.",
      "Consistency with the past context is required."
    ]
  },
  {
    "question_id": "SYN_193",
    "questionType": "SYNONYM",
    "question": "Choose the best replacement for the underlined part of the sentence:",
    "sentence": "The teacher was not available because **the teacher was preparing the report** at that time.",
    "options": [
      "the teacher had prepared the report",
      "the teacher was preparing the report",
      "the teacher is preparing the report",
      "the teacher prepared the report"
    ],
    "correctAnswer": "the teacher was preparing the report",
    "explanation": [
      "The past continuous describes an ongoing background action in the past.",
      "Consistency with the past context is required."
    ]
  },
  {
    "question_id": "SYN_194",
    "questionType": "SYNONYM",
    "question": "Choose the best replacement for the underlined part of the sentence:",
    "sentence": "The teacher was not available because **the teacher was preparing the report** at that time.",
    "options": [
      "the teacher is preparing the report",
      "the teacher prepared the report",
      "the teacher had prepared the report",
      "the teacher was preparing the report"
    ],
    "correctAnswer": "the teacher was preparing the report",
    "explanation": [
      "The past continuous describes an ongoing background action in the past.",
      "Consistency with the past context is required."
    ]
  },
  {
    "question_id": "SYN_195",
    "questionType": "SYNONYM",
    "question": "Choose the best replacement for the underlined part of the sentence:",
    "sentence": "The teacher was not available because **the teacher was preparing the report** at that time.",
    "options": [
      "the teacher was preparing the report",
      "the teacher had prepared the report",
      "the teacher prepared the report",
      "the teacher is preparing the report"
    ],
    "correctAnswer": "the teacher was preparing the report",
    "explanation": [
      "The past continuous describes an ongoing background action in the past.",
      "Consistency with the past context is required."
    ]
  },
  {
    "question_id": "SYN_196",
    "questionType": "SYNONYM",
    "question": "Choose the best replacement for the underlined part of the sentence:",
    "sentence": "The teacher was not available because **the teacher was preparing the report** at that time.",
    "options": [
      "the teacher was preparing the report",
      "the teacher prepared the report",
      "the teacher is preparing the report",
      "the teacher had prepared the report"
    ],
    "correctAnswer": "the teacher was preparing the report",
    "explanation": [
      "The past continuous describes an ongoing background action in the past.",
      "Consistency with the past context is required."
    ]
  },
  {
    "question_id": "SYN_197",
    "questionType": "SYNONYM",
    "question": "Choose the best replacement for the underlined part of the sentence:",
    "sentence": "The teacher was not available because **the teacher was preparing the report** at that time.",
    "options": [
      "the teacher had prepared the report",
      "the teacher is preparing the report",
      "the teacher prepared the report",
      "the teacher was preparing the report"
    ],
    "correctAnswer": "the teacher was preparing the report",
    "explanation": [
      "The past continuous describes an ongoing background action in the past.",
      "Consistency with the past context is required."
    ]
  },
  {
    "question_id": "SYN_198",
    "questionType": "SYNONYM",
    "question": "Choose the best replacement for the underlined part of the sentence:",
    "sentence": "The teacher was not available because **the teacher was preparing the report** at that time.",
    "options": [
      "the teacher prepared the report",
      "the teacher was preparing the report",
      "the teacher had prepared the report",
      "the teacher is preparing the report"
    ],
    "correctAnswer": "the teacher was preparing the report",
    "explanation": [
      "The past continuous describes an ongoing background action in the past.",
      "Consistency with the past context is required."
    ]
  },
  {
    "question_id": "SYN_199",
    "questionType": "SYNONYM",
    "question": "Choose the best replacement for the underlined part of the sentence:",
    "sentence": "The teacher was not available because **the teacher was preparing the report** at that time.",
    "options": [
      "the teacher was preparing the report",
      "the teacher had prepared the report",
      "the teacher prepared the report",
      "the teacher is preparing the report"
    ],
    "correctAnswer": "the teacher was preparing the report",
    "explanation": [
      "The past continuous describes an ongoing background action in the past.",
      "Consistency with the past context is required."
    ]
  },
  {
    "question_id": "SYN_200",
    "questionType": "SYNONYM",
    "question": "Choose the best replacement for the underlined part of the sentence:",
    "sentence": "The pilot was not available because **the pilot was preparing the report** at that time.",
    "options": [
      "the pilot is preparing the report",
      "the pilot prepared the report",
      "the pilot had prepared the report",
      "the pilot was preparing the report"
    ],
    "correctAnswer": "the pilot was preparing the report",
    "explanation": [
      "The past continuous describes an ongoing background action in the past.",
      "Consistency with the past context is required."
    ]
  }
];