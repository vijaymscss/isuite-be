export interface Question {
    question_id: string;
    questionType: string;
    activeSentence: string;
    question: string;
    options: string[];
    correctAnswer: string;
    explanation: string[];
}

export const activeToPassiveQuestions: Question[] = [
    {
        "question_id": "A2P_1",
        "questionType": "A2P",
        "activeSentence": "The committee will approve the proposal tomorrow.",
        "question": "Which option is the grammatically correct passive voice form?",
        "options": [
            "The proposal will be approved by the committee tomorrow.",
            "The proposal will approved by the committee tomorrow.",
            "The proposal is being approved by the committee tomorrow.",
            "The proposal will have been approved by the committee tomorrow."
        ],
        "correctAnswer": "The proposal will be approved by the committee tomorrow.",
        "explanation": [
            "The future tense 'will' changes to 'will be' in passive voice.",
            "The object 'the proposal' becomes the subject, and the verb 'approve' takes its past participle form."
        ]
    },
    {
        "question_id": "A2P_2",
        "questionType": "A2P",
        "activeSentence": "The manager will reject the application tomorrow.",
        "question": "Which option is the grammatically correct passive voice form?",
        "options": [
            "The application will be rejected by the manager tomorrow.",
            "The application will rejected by the manager tomorrow.",
            "The application is being rejected by the manager tomorrow.",
            "The application will have been rejected by the manager tomorrow."
        ],
        "correctAnswer": "The application will be rejected by the manager tomorrow.",
        "explanation": [
            "The future tense 'will' changes to 'will be' in passive voice.",
            "The object 'the application' becomes the subject, and the verb 'reject' takes its past participle form."
        ]
    },
    {
        "question_id": "A2P_3",
        "questionType": "A2P",
        "activeSentence": "The board will announce the policy tomorrow.",
        "question": "Which option is the grammatically correct passive voice form?",
        "options": [
            "The policy will be announced by the board tomorrow.",
            "The policy will announced by the board tomorrow.",
            "The policy is being announced by the board tomorrow.",
            "The policy will have been announced by the board tomorrow."
        ],
        "correctAnswer": "The policy will be announced by the board tomorrow.",
        "explanation": [
            "The future tense 'will' changes to 'will be' in passive voice.",
            "The object 'the policy' becomes the subject, and the verb 'announce' takes its past participle form."
        ]
    },
    {
        "question_id": "A2P_4",
        "questionType": "A2P",
        "activeSentence": "The authority will implement the report tomorrow.",
        "question": "Which option is the grammatically correct passive voice form?",
        "options": [
            "The report will be implemented by the authority tomorrow.",
            "The report will implemented by the authority tomorrow.",
            "The report is being implemented by the authority tomorrow.",
            "The report will have been implemented by the authority tomorrow."
        ],
        "correctAnswer": "The report will be implemented by the authority tomorrow.",
        "explanation": [
            "The future tense 'will' changes to 'will be' in passive voice.",
            "The object 'the report' becomes the subject, and the verb 'implement' takes its past participle form."
        ]
    },
    {
        "question_id": "A2P_5",
        "questionType": "A2P",
        "activeSentence": "The department will review the schedule tomorrow.",
        "question": "Which option is the grammatically correct passive voice form?",
        "options": [
            "The schedule will be reviewed by the department tomorrow.",
            "The schedule will reviewed by the department tomorrow.",
            "The schedule is being reviewed by the department tomorrow.",
            "The schedule will have been reviewed by the department tomorrow."
        ],
        "correctAnswer": "The schedule will be reviewed by the department tomorrow.",
        "explanation": [
            "The future tense 'will' changes to 'will be' in passive voice.",
            "The object 'the schedule' becomes the subject, and the verb 'review' takes its past participle form."
        ]
    },
    {
        "question_id": "A2P_6",
        "questionType": "A2P",
        "activeSentence": "The supervisor will prepare the guidelines tomorrow.",
        "question": "Which option is the grammatically correct passive voice form?",
        "options": [
            "The guidelines will be prepared by the supervisor tomorrow.",
            "The guidelines will prepared by the supervisor tomorrow.",
            "The guidelines is being prepared by the supervisor tomorrow.",
            "The guidelines will have been prepared by the supervisor tomorrow."
        ],
        "correctAnswer": "The guidelines will be prepared by the supervisor tomorrow.",
        "explanation": [
            "The future tense 'will' changes to 'will be' in passive voice.",
            "The object 'the guidelines' becomes the subject, and the verb 'prepare' takes its past participle form."
        ]
    },
    {
        "question_id": "A2P_7",
        "questionType": "A2P",
        "activeSentence": "The officer will submit the complaint tomorrow.",
        "question": "Which option is the grammatically correct passive voice form?",
        "options": [
            "The complaint will be submitted by the officer tomorrow.",
            "The complaint will submitted by the officer tomorrow.",
            "The complaint is being submitted by the officer tomorrow.",
            "The complaint will have been submitted by the officer tomorrow."
        ],
        "correctAnswer": "The complaint will be submitted by the officer tomorrow.",
        "explanation": [
            "The future tense 'will' changes to 'will be' in passive voice.",
            "The object 'the complaint' becomes the subject, and the verb 'submit' takes its past participle form."
        ]
    },
    {
        "question_id": "A2P_8",
        "questionType": "A2P",
        "activeSentence": "The administration will circulate the request tomorrow.",
        "question": "Which option is the grammatically correct passive voice form?",
        "options": [
            "The request will be circulated by the administration tomorrow.",
            "The request will circulated by the administration tomorrow.",
            "The request is being circulated by the administration tomorrow.",
            "The request will have been circulated by the administration tomorrow."
        ],
        "correctAnswer": "The request will be circulated by the administration tomorrow.",
        "explanation": [
            "The future tense 'will' changes to 'will be' in passive voice.",
            "The object 'the request' becomes the subject, and the verb 'circulate' takes its past participle form."
        ]
    },
    {
        "question_id": "A2P_9",
        "questionType": "A2P",
        "activeSentence": "The panel will publish the plan tomorrow.",
        "question": "Which option is the grammatically correct passive voice form?",
        "options": [
            "The plan will be published by the panel tomorrow.",
            "The plan will published by the panel tomorrow.",
            "The plan is being published by the panel tomorrow.",
            "The plan will have been published by the panel tomorrow."
        ],
        "correctAnswer": "The plan will be published by the panel tomorrow.",
        "explanation": [
            "The future tense 'will' changes to 'will be' in passive voice.",
            "The object 'the plan' becomes the subject, and the verb 'publish' takes its past participle form."
        ]
    },
    {
        "question_id": "A2P_10",
        "questionType": "A2P",
        "activeSentence": "The director will verify the findings tomorrow.",
        "question": "Which option is the grammatically correct passive voice form?",
        "options": [
            "The findings will be verified by the director tomorrow.",
            "The findings will verified by the director tomorrow.",
            "The findings is being verified by the director tomorrow.",
            "The findings will have been verified by the director tomorrow."
        ],
        "correctAnswer": "The findings will be verified by the director tomorrow.",
        "explanation": [
            "The future tense 'will' changes to 'will be' in passive voice.",
            "The object 'the findings' becomes the subject, and the verb 'verify' takes its past participle form."
        ]
    },
    {
        "question_id": "A2P_11",
        "questionType": "A2P",
        "activeSentence": "The committee will audit the proposal tomorrow.",
        "question": "Which option is the grammatically correct passive voice form?",
        "options": [
            "The proposal will be audited by the committee tomorrow.",
            "The proposal will audited by the committee tomorrow.",
            "The proposal is being audited by the committee tomorrow.",
            "The proposal will have been audited by the committee tomorrow."
        ],
        "correctAnswer": "The proposal will be audited by the committee tomorrow.",
        "explanation": [
            "The future tense 'will' changes to 'will be' in passive voice.",
            "The object 'the proposal' becomes the subject, and the verb 'audit' takes its past participle form."
        ]
    },
    {
        "question_id": "A2P_12",
        "questionType": "A2P",
        "activeSentence": "The manager will schedule the application tomorrow.",
        "question": "Which option is the grammatically correct passive voice form?",
        "options": [
            "The application will be scheduled by the manager tomorrow.",
            "The application will scheduled by the manager tomorrow.",
            "The application is being scheduled by the manager tomorrow.",
            "The application will have been scheduled by the manager tomorrow."
        ],
        "correctAnswer": "The application will be scheduled by the manager tomorrow.",
        "explanation": [
            "The future tense 'will' changes to 'will be' in passive voice.",
            "The object 'the application' becomes the subject, and the verb 'schedule' takes its past participle form."
        ]
    },
    {
        "question_id": "A2P_13",
        "questionType": "A2P",
        "activeSentence": "The board will postpone the policy tomorrow.",
        "question": "Which option is the grammatically correct passive voice form?",
        "options": [
            "The policy will be postponed by the board tomorrow.",
            "The policy will postponed by the board tomorrow.",
            "The policy is being postponed by the board tomorrow.",
            "The policy will have been postponed by the board tomorrow."
        ],
        "correctAnswer": "The policy will be postponed by the board tomorrow.",
        "explanation": [
            "The future tense 'will' changes to 'will be' in passive voice.",
            "The object 'the policy' becomes the subject, and the verb 'postpone' takes its past participle form."
        ]
    },
    {
        "question_id": "A2P_14",
        "questionType": "A2P",
        "activeSentence": "The authority will conduct the report tomorrow.",
        "question": "Which option is the grammatically correct passive voice form?",
        "options": [
            "The report will be conducted by the authority tomorrow.",
            "The report will conducted by the authority tomorrow.",
            "The report is being conducted by the authority tomorrow.",
            "The report will have been conducted by the authority tomorrow."
        ],
        "correctAnswer": "The report will be conducted by the authority tomorrow.",
        "explanation": [
            "The future tense 'will' changes to 'will be' in passive voice.",
            "The object 'the report' becomes the subject, and the verb 'conduct' takes its past participle form."
        ]
    },
    {
        "question_id": "A2P_15",
        "questionType": "A2P",
        "activeSentence": "The department will organize the schedule tomorrow.",
        "question": "Which option is the grammatically correct passive voice form?",
        "options": [
            "The schedule will be organized by the department tomorrow.",
            "The schedule will organized by the department tomorrow.",
            "The schedule is being organized by the department tomorrow.",
            "The schedule will have been organized by the department tomorrow."
        ],
        "correctAnswer": "The schedule will be organized by the department tomorrow.",
        "explanation": [
            "The future tense 'will' changes to 'will be' in passive voice.",
            "The object 'the schedule' becomes the subject, and the verb 'organize' takes its past participle form."
        ]
    },
    {
        "question_id": "A2P_16",
        "questionType": "A2P",
        "activeSentence": "The supervisor will allocate the guidelines tomorrow.",
        "question": "Which option is the grammatically correct passive voice form?",
        "options": [
            "The guidelines will be allocated by the supervisor tomorrow.",
            "The guidelines will allocated by the supervisor tomorrow.",
            "The guidelines is being allocated by the supervisor tomorrow.",
            "The guidelines will have been allocated by the supervisor tomorrow."
        ],
        "correctAnswer": "The guidelines will be allocated by the supervisor tomorrow.",
        "explanation": [
            "The future tense 'will' changes to 'will be' in passive voice.",
            "The object 'the guidelines' becomes the subject, and the verb 'allocate' takes its past participle form."
        ]
    },
    {
        "question_id": "A2P_17",
        "questionType": "A2P",
        "activeSentence": "The officer will release the complaint tomorrow.",
        "question": "Which option is the grammatically correct passive voice form?",
        "options": [
            "The complaint will be released by the officer tomorrow.",
            "The complaint will released by the officer tomorrow.",
            "The complaint is being released by the officer tomorrow.",
            "The complaint will have been released by the officer tomorrow."
        ],
        "correctAnswer": "The complaint will be released by the officer tomorrow.",
        "explanation": [
            "The future tense 'will' changes to 'will be' in passive voice.",
            "The object 'the complaint' becomes the subject, and the verb 'release' takes its past participle form."
        ]
    },
    {
        "question_id": "A2P_18",
        "questionType": "A2P",
        "activeSentence": "The administration will inspect the request tomorrow.",
        "question": "Which option is the grammatically correct passive voice form?",
        "options": [
            "The request will be inspected by the administration tomorrow.",
            "The request will inspected by the administration tomorrow.",
            "The request is being inspected by the administration tomorrow.",
            "The request will have been inspected by the administration tomorrow."
        ],
        "correctAnswer": "The request will be inspected by the administration tomorrow.",
        "explanation": [
            "The future tense 'will' changes to 'will be' in passive voice.",
            "The object 'the request' becomes the subject, and the verb 'inspect' takes its past participle form."
        ]
    },
    {
        "question_id": "A2P_19",
        "questionType": "A2P",
        "activeSentence": "The panel will recommend the plan tomorrow.",
        "question": "Which option is the grammatically correct passive voice form?",
        "options": [
            "The plan will be recommended by the panel tomorrow.",
            "The plan will recommended by the panel tomorrow.",
            "The plan is being recommended by the panel tomorrow.",
            "The plan will have been recommended by the panel tomorrow."
        ],
        "correctAnswer": "The plan will be recommended by the panel tomorrow.",
        "explanation": [
            "The future tense 'will' changes to 'will be' in passive voice.",
            "The object 'the plan' becomes the subject, and the verb 'recommend' takes its past participle form."
        ]
    },
    {
        "question_id": "A2P_20",
        "questionType": "A2P",
        "activeSentence": "The director will finalize the findings tomorrow.",
        "question": "Which option is the grammatically correct passive voice form?",
        "options": [
            "The findings will be finalized by the director tomorrow.",
            "The findings will finalized by the director tomorrow.",
            "The findings is being finalized by the director tomorrow.",
            "The findings will have been finalized by the director tomorrow."
        ],
        "correctAnswer": "The findings will be finalized by the director tomorrow.",
        "explanation": [
            "The future tense 'will' changes to 'will be' in passive voice.",
            "The object 'the findings' becomes the subject, and the verb 'finalize' takes its past participle form."
        ]
    },
    {
        "question_id": "A2P_21",
        "questionType": "A2P",
        "activeSentence": "The committee will monitor the proposal tomorrow.",
        "question": "Which option is the grammatically correct passive voice form?",
        "options": [
            "The proposal will be monitored by the committee tomorrow.",
            "The proposal will monitored by the committee tomorrow.",
            "The proposal is being monitored by the committee tomorrow.",
            "The proposal will have been monitored by the committee tomorrow."
        ],
        "correctAnswer": "The proposal will be monitored by the committee tomorrow.",
        "explanation": [
            "The future tense 'will' changes to 'will be' in passive voice.",
            "The object 'the proposal' becomes the subject, and the verb 'monitor' takes its past participle form."
        ]
    },
    {
        "question_id": "A2P_22",
        "questionType": "A2P",
        "activeSentence": "The manager will evaluate the application tomorrow.",
        "question": "Which option is the grammatically correct passive voice form?",
        "options": [
            "The application will be evaluated by the manager tomorrow.",
            "The application will evaluated by the manager tomorrow.",
            "The application is being evaluated by the manager tomorrow.",
            "The application will have been evaluated by the manager tomorrow."
        ],
        "correctAnswer": "The application will be evaluated by the manager tomorrow.",
        "explanation": [
            "The future tense 'will' changes to 'will be' in passive voice.",
            "The object 'the application' becomes the subject, and the verb 'evaluate' takes its past participle form."
        ]
    },
    {
        "question_id": "A2P_23",
        "questionType": "A2P",
        "activeSentence": "The board will authorize the policy tomorrow.",
        "question": "Which option is the grammatically correct passive voice form?",
        "options": [
            "The policy will be authorized by the board tomorrow.",
            "The policy will authorized by the board tomorrow.",
            "The policy is being authorized by the board tomorrow.",
            "The policy will have been authorized by the board tomorrow."
        ],
        "correctAnswer": "The policy will be authorized by the board tomorrow.",
        "explanation": [
            "The future tense 'will' changes to 'will be' in passive voice.",
            "The object 'the policy' becomes the subject, and the verb 'authorize' takes its past participle form."
        ]
    },
    {
        "question_id": "A2P_24",
        "questionType": "A2P",
        "activeSentence": "The authority will draft the report tomorrow.",
        "question": "Which option is the grammatically correct passive voice form?",
        "options": [
            "The report will be drafted by the authority tomorrow.",
            "The report will drafted by the authority tomorrow.",
            "The report is being drafted by the authority tomorrow.",
            "The report will have been drafted by the authority tomorrow."
        ],
        "correctAnswer": "The report will be drafted by the authority tomorrow.",
        "explanation": [
            "The future tense 'will' changes to 'will be' in passive voice.",
            "The object 'the report' becomes the subject, and the verb 'draft' takes its past participle form."
        ]
    },
    {
        "question_id": "A2P_25",
        "questionType": "A2P",
        "activeSentence": "The department will distribute the schedule tomorrow.",
        "question": "Which option is the grammatically correct passive voice form?",
        "options": [
            "The schedule will be distributed by the department tomorrow.",
            "The schedule will distributed by the department tomorrow.",
            "The schedule is being distributed by the department tomorrow.",
            "The schedule will have been distributed by the department tomorrow."
        ],
        "correctAnswer": "The schedule will be distributed by the department tomorrow.",
        "explanation": [
            "The future tense 'will' changes to 'will be' in passive voice.",
            "The object 'the schedule' becomes the subject, and the verb 'distribute' takes its past participle form."
        ]
    },
    {
        "question_id": "A2P_26",
        "questionType": "A2P",
        "activeSentence": "The supervisor will compile the guidelines tomorrow.",
        "question": "Which option is the grammatically correct passive voice form?",
        "options": [
            "The guidelines will be compiled by the supervisor tomorrow.",
            "The guidelines will compiled by the supervisor tomorrow.",
            "The guidelines is being compiled by the supervisor tomorrow.",
            "The guidelines will have been compiled by the supervisor tomorrow."
        ],
        "correctAnswer": "The guidelines will be compiled by the supervisor tomorrow.",
        "explanation": [
            "The future tense 'will' changes to 'will be' in passive voice.",
            "The object 'the guidelines' becomes the subject, and the verb 'compile' takes its past participle form."
        ]
    },
    {
        "question_id": "A2P_27",
        "questionType": "A2P",
        "activeSentence": "The officer will amend the complaint tomorrow.",
        "question": "Which option is the grammatically correct passive voice form?",
        "options": [
            "The complaint will be amended by the officer tomorrow.",
            "The complaint will amended by the officer tomorrow.",
            "The complaint is being amended by the officer tomorrow.",
            "The complaint will have been amended by the officer tomorrow."
        ],
        "correctAnswer": "The complaint will be amended by the officer tomorrow.",
        "explanation": [
            "The future tense 'will' changes to 'will be' in passive voice.",
            "The object 'the complaint' becomes the subject, and the verb 'amend' takes its past participle form."
        ]
    },
    {
        "question_id": "A2P_28",
        "questionType": "A2P",
        "activeSentence": "The administration will notify the request tomorrow.",
        "question": "Which option is the grammatically correct passive voice form?",
        "options": [
            "The request will be notified by the administration tomorrow.",
            "The request will notified by the administration tomorrow.",
            "The request is being notified by the administration tomorrow.",
            "The request will have been notified by the administration tomorrow."
        ],
        "correctAnswer": "The request will be notified by the administration tomorrow.",
        "explanation": [
            "The future tense 'will' changes to 'will be' in passive voice.",
            "The object 'the request' becomes the subject, and the verb 'notify' takes its past participle form."
        ]
    },
    {
        "question_id": "A2P_29",
        "questionType": "A2P",
        "activeSentence": "The panel will clarify the plan tomorrow.",
        "question": "Which option is the grammatically correct passive voice form?",
        "options": [
            "The plan will be clarified by the panel tomorrow.",
            "The plan will clarified by the panel tomorrow.",
            "The plan is being clarified by the panel tomorrow.",
            "The plan will have been clarified by the panel tomorrow."
        ],
        "correctAnswer": "The plan will be clarified by the panel tomorrow.",
        "explanation": [
            "The future tense 'will' changes to 'will be' in passive voice.",
            "The object 'the plan' becomes the subject, and the verb 'clarify' takes its past participle form."
        ]
    },
    {
        "question_id": "A2P_30",
        "questionType": "A2P",
        "activeSentence": "The director will resolve the findings tomorrow.",
        "question": "Which option is the grammatically correct passive voice form?",
        "options": [
            "The findings will be resolved by the director tomorrow.",
            "The findings will resolved by the director tomorrow.",
            "The findings is being resolved by the director tomorrow.",
            "The findings will have been resolved by the director tomorrow."
        ],
        "correctAnswer": "The findings will be resolved by the director tomorrow.",
        "explanation": [
            "The future tense 'will' changes to 'will be' in passive voice.",
            "The object 'the findings' becomes the subject, and the verb 'resolve' takes its past participle form."
        ]
    },
    {
        "question_id": "A2P_31",
        "questionType": "A2P",
        "activeSentence": "The committee will investigate the proposal tomorrow.",
        "question": "Which option is the grammatically correct passive voice form?",
        "options": [
            "The proposal will be investigated by the committee tomorrow.",
            "The proposal will investigated by the committee tomorrow.",
            "The proposal is being investigated by the committee tomorrow.",
            "The proposal will have been investigated by the committee tomorrow."
        ],
        "correctAnswer": "The proposal will be investigated by the committee tomorrow.",
        "explanation": [
            "The future tense 'will' changes to 'will be' in passive voice.",
            "The object 'the proposal' becomes the subject, and the verb 'investigate' takes its past participle form."
        ]
    },
    {
        "question_id": "A2P_32",
        "questionType": "A2P",
        "activeSentence": "The manager will document the application tomorrow.",
        "question": "Which option is the grammatically correct passive voice form?",
        "options": [
            "The application will be documented by the manager tomorrow.",
            "The application will documented by the manager tomorrow.",
            "The application is being documented by the manager tomorrow.",
            "The application will have been documented by the manager tomorrow."
        ],
        "correctAnswer": "The application will be documented by the manager tomorrow.",
        "explanation": [
            "The future tense 'will' changes to 'will be' in passive voice.",
            "The object 'the application' becomes the subject, and the verb 'document' takes its past participle form."
        ]
    },
    {
        "question_id": "A2P_33",
        "questionType": "A2P",
        "activeSentence": "The board will confirm the policy tomorrow.",
        "question": "Which option is the grammatically correct passive voice form?",
        "options": [
            "The policy will be confirmed by the board tomorrow.",
            "The policy will confirmed by the board tomorrow.",
            "The policy is being confirmed by the board tomorrow.",
            "The policy will have been confirmed by the board tomorrow."
        ],
        "correctAnswer": "The policy will be confirmed by the board tomorrow.",
        "explanation": [
            "The future tense 'will' changes to 'will be' in passive voice.",
            "The object 'the policy' becomes the subject, and the verb 'confirm' takes its past participle form."
        ]
    },
    {
        "question_id": "A2P_34",
        "questionType": "A2P",
        "activeSentence": "The authority will record the report tomorrow.",
        "question": "Which option is the grammatically correct passive voice form?",
        "options": [
            "The report will be recorded by the authority tomorrow.",
            "The report will recorded by the authority tomorrow.",
            "The report is being recorded by the authority tomorrow.",
            "The report will have been recorded by the authority tomorrow."
        ],
        "correctAnswer": "The report will be recorded by the authority tomorrow.",
        "explanation": [
            "The future tense 'will' changes to 'will be' in passive voice.",
            "The object 'the report' becomes the subject, and the verb 'record' takes its past participle form."
        ]
    },
    {
        "question_id": "A2P_35",
        "questionType": "A2P",
        "activeSentence": "The department will process the schedule tomorrow.",
        "question": "Which option is the grammatically correct passive voice form?",
        "options": [
            "The schedule will be processed by the department tomorrow.",
            "The schedule will processed by the department tomorrow.",
            "The schedule is being processed by the department tomorrow.",
            "The schedule will have been processed by the department tomorrow."
        ],
        "correctAnswer": "The schedule will be processed by the department tomorrow.",
        "explanation": [
            "The future tense 'will' changes to 'will be' in passive voice.",
            "The object 'the schedule' becomes the subject, and the verb 'process' takes its past participle form."
        ]
    },
    {
        "question_id": "A2P_36",
        "questionType": "A2P",
        "activeSentence": "The supervisor will validate the guidelines tomorrow.",
        "question": "Which option is the grammatically correct passive voice form?",
        "options": [
            "The guidelines will be validated by the supervisor tomorrow.",
            "The guidelines will validated by the supervisor tomorrow.",
            "The guidelines is being validated by the supervisor tomorrow.",
            "The guidelines will have been validated by the supervisor tomorrow."
        ],
        "correctAnswer": "The guidelines will be validated by the supervisor tomorrow.",
        "explanation": [
            "The future tense 'will' changes to 'will be' in passive voice.",
            "The object 'the guidelines' becomes the subject, and the verb 'validate' takes its past participle form."
        ]
    },
    {
        "question_id": "A2P_37",
        "questionType": "A2P",
        "activeSentence": "The officer will update the complaint tomorrow.",
        "question": "Which option is the grammatically correct passive voice form?",
        "options": [
            "The complaint will be updated by the officer tomorrow.",
            "The complaint will updated by the officer tomorrow.",
            "The complaint is being updated by the officer tomorrow.",
            "The complaint will have been updated by the officer tomorrow."
        ],
        "correctAnswer": "The complaint will be updated by the officer tomorrow.",
        "explanation": [
            "The future tense 'will' changes to 'will be' in passive voice.",
            "The object 'the complaint' becomes the subject, and the verb 'update' takes its past participle form."
        ]
    },
    {
        "question_id": "A2P_38",
        "questionType": "A2P",
        "activeSentence": "The administration will enforce the request tomorrow.",
        "question": "Which option is the grammatically correct passive voice form?",
        "options": [
            "The request will be enforced by the administration tomorrow.",
            "The request will enforced by the administration tomorrow.",
            "The request is being enforced by the administration tomorrow.",
            "The request will have been enforced by the administration tomorrow."
        ],
        "correctAnswer": "The request will be enforced by the administration tomorrow.",
        "explanation": [
            "The future tense 'will' changes to 'will be' in passive voice.",
            "The object 'the request' becomes the subject, and the verb 'enforce' takes its past participle form."
        ]
    },
    {
        "question_id": "A2P_39",
        "questionType": "A2P",
        "activeSentence": "The panel will regulate the plan tomorrow.",
        "question": "Which option is the grammatically correct passive voice form?",
        "options": [
            "The plan will be regulated by the panel tomorrow.",
            "The plan will regulated by the panel tomorrow.",
            "The plan is being regulated by the panel tomorrow.",
            "The plan will have been regulated by the panel tomorrow."
        ],
        "correctAnswer": "The plan will be regulated by the panel tomorrow.",
        "explanation": [
            "The future tense 'will' changes to 'will be' in passive voice.",
            "The object 'the plan' becomes the subject, and the verb 'regulate' takes its past participle form."
        ]
    },
    {
        "question_id": "A2P_40",
        "questionType": "A2P",
        "activeSentence": "The director will coordinate the findings tomorrow.",
        "question": "Which option is the grammatically correct passive voice form?",
        "options": [
            "The findings will be coordinated by the director tomorrow.",
            "The findings will coordinated by the director tomorrow.",
            "The findings is being coordinated by the director tomorrow.",
            "The findings will have been coordinated by the director tomorrow."
        ],
        "correctAnswer": "The findings will be coordinated by the director tomorrow.",
        "explanation": [
            "The future tense 'will' changes to 'will be' in passive voice.",
            "The object 'the findings' becomes the subject, and the verb 'coordinate' takes its past participle form."
        ]
    },
    {
        "question_id": "A2P_41",
        "questionType": "A2P",
        "activeSentence": "The committee will supervise the proposal tomorrow.",
        "question": "Which option is the grammatically correct passive voice form?",
        "options": [
            "The proposal will be supervised by the committee tomorrow.",
            "The proposal will supervised by the committee tomorrow.",
            "The proposal is being supervised by the committee tomorrow.",
            "The proposal will have been supervised by the committee tomorrow."
        ],
        "correctAnswer": "The proposal will be supervised by the committee tomorrow.",
        "explanation": [
            "The future tense 'will' changes to 'will be' in passive voice.",
            "The object 'the proposal' becomes the subject, and the verb 'supervise' takes its past participle form."
        ]
    },
    {
        "question_id": "A2P_42",
        "questionType": "A2P",
        "activeSentence": "The manager will assign the application tomorrow.",
        "question": "Which option is the grammatically correct passive voice form?",
        "options": [
            "The application will be assigned by the manager tomorrow.",
            "The application will assigned by the manager tomorrow.",
            "The application is being assigned by the manager tomorrow.",
            "The application will have been assigned by the manager tomorrow."
        ],
        "correctAnswer": "The application will be assigned by the manager tomorrow.",
        "explanation": [
            "The future tense 'will' changes to 'will be' in passive voice.",
            "The object 'the application' becomes the subject, and the verb 'assign' takes its past participle form."
        ]
    },
    {
        "question_id": "A2P_43",
        "questionType": "A2P",
        "activeSentence": "The board will brief the policy tomorrow.",
        "question": "Which option is the grammatically correct passive voice form?",
        "options": [
            "The policy will be briefed by the board tomorrow.",
            "The policy will briefed by the board tomorrow.",
            "The policy is being briefed by the board tomorrow.",
            "The policy will have been briefed by the board tomorrow."
        ],
        "correctAnswer": "The policy will be briefed by the board tomorrow.",
        "explanation": [
            "The future tense 'will' changes to 'will be' in passive voice.",
            "The object 'the policy' becomes the subject, and the verb 'brief' takes its past participle form."
        ]
    },
    {
        "question_id": "A2P_44",
        "questionType": "A2P",
        "activeSentence": "The authority will train the report tomorrow.",
        "question": "Which option is the grammatically correct passive voice form?",
        "options": [
            "The report will be trained by the authority tomorrow.",
            "The report will trained by the authority tomorrow.",
            "The report is being trained by the authority tomorrow.",
            "The report will have been trained by the authority tomorrow."
        ],
        "correctAnswer": "The report will be trained by the authority tomorrow.",
        "explanation": [
            "The future tense 'will' changes to 'will be' in passive voice.",
            "The object 'the report' becomes the subject, and the verb 'train' takes its past participle form."
        ]
    },
    {
        "question_id": "A2P_45",
        "questionType": "A2P",
        "activeSentence": "The department will appoint the schedule tomorrow.",
        "question": "Which option is the grammatically correct passive voice form?",
        "options": [
            "The schedule will be appointed by the department tomorrow.",
            "The schedule will appointed by the department tomorrow.",
            "The schedule is being appointed by the department tomorrow.",
            "The schedule will have been appointed by the department tomorrow."
        ],
        "correctAnswer": "The schedule will be appointed by the department tomorrow.",
        "explanation": [
            "The future tense 'will' changes to 'will be' in passive voice.",
            "The object 'the schedule' becomes the subject, and the verb 'appoint' takes its past participle form."
        ]
    },
    {
        "question_id": "A2P_46",
        "questionType": "A2P",
        "activeSentence": "The supervisor will promote the guidelines tomorrow.",
        "question": "Which option is the grammatically correct passive voice form?",
        "options": [
            "The guidelines will be promoted by the supervisor tomorrow.",
            "The guidelines will promoted by the supervisor tomorrow.",
            "The guidelines is being promoted by the supervisor tomorrow.",
            "The guidelines will have been promoted by the supervisor tomorrow."
        ],
        "correctAnswer": "The guidelines will be promoted by the supervisor tomorrow.",
        "explanation": [
            "The future tense 'will' changes to 'will be' in passive voice.",
            "The object 'the guidelines' becomes the subject, and the verb 'promote' takes its past participle form."
        ]
    },
    {
        "question_id": "A2P_47",
        "questionType": "A2P",
        "activeSentence": "The officer will transfer the complaint tomorrow.",
        "question": "Which option is the grammatically correct passive voice form?",
        "options": [
            "The complaint will be transferred by the officer tomorrow.",
            "The complaint will transferred by the officer tomorrow.",
            "The complaint is being transferred by the officer tomorrow.",
            "The complaint will have been transferred by the officer tomorrow."
        ],
        "correctAnswer": "The complaint will be transferred by the officer tomorrow.",
        "explanation": [
            "The future tense 'will' changes to 'will be' in passive voice.",
            "The object 'the complaint' becomes the subject, and the verb 'transfer' takes its past participle form."
        ]
    },
    {
        "question_id": "A2P_48",
        "questionType": "A2P",
        "activeSentence": "The administration will suspend the request tomorrow.",
        "question": "Which option is the grammatically correct passive voice form?",
        "options": [
            "The request will be suspended by the administration tomorrow.",
            "The request will suspended by the administration tomorrow.",
            "The request is being suspended by the administration tomorrow.",
            "The request will have been suspended by the administration tomorrow."
        ],
        "correctAnswer": "The request will be suspended by the administration tomorrow.",
        "explanation": [
            "The future tense 'will' changes to 'will be' in passive voice.",
            "The object 'the request' becomes the subject, and the verb 'suspend' takes its past participle form."
        ]
    },
    {
        "question_id": "A2P_49",
        "questionType": "A2P",
        "activeSentence": "The panel will resume the plan tomorrow.",
        "question": "Which option is the grammatically correct passive voice form?",
        "options": [
            "The plan will be resumed by the panel tomorrow.",
            "The plan will resumed by the panel tomorrow.",
            "The plan is being resumed by the panel tomorrow.",
            "The plan will have been resumed by the panel tomorrow."
        ],
        "correctAnswer": "The plan will be resumed by the panel tomorrow.",
        "explanation": [
            "The future tense 'will' changes to 'will be' in passive voice.",
            "The object 'the plan' becomes the subject, and the verb 'resume' takes its past participle form."
        ]
    },
    {
        "question_id": "A2P_50",
        "questionType": "A2P",
        "activeSentence": "The director will close the findings tomorrow.",
        "question": "Which option is the grammatically correct passive voice form?",
        "options": [
            "The findings will be closed by the director tomorrow.",
            "The findings will closed by the director tomorrow.",
            "The findings is being closed by the director tomorrow.",
            "The findings will have been closed by the director tomorrow."
        ],
        "correctAnswer": "The findings will be closed by the director tomorrow.",
        "explanation": [
            "The future tense 'will' changes to 'will be' in passive voice.",
            "The object 'the findings' becomes the subject, and the verb 'close' takes its past participle form."
        ]
    },
    {
        "question_id": "A2P_51",
        "questionType": "A2P",
        "activeSentence": "The committee approves the proposal.",
        "question": "Which option is the grammatically correct passive voice form?",
        "options": [
            "The proposal is approved by the committee.",
            "The proposal was approved by the committee.",
            "The proposal is approving by the committee.",
            "The proposal is approv by the committee."
        ],
        "correctAnswer": "The proposal is approved by the committee.",
        "explanation": [
            "The tense and auxiliary verb of the active sentence are correctly retained in the passive form.",
            "The object of the active sentence becomes the subject, and the main verb changes to its past participle."
        ]
    },
    {
        "question_id": "A2P_52",
        "questionType": "A2P",
        "activeSentence": "The manager approved the application yesterday.",
        "question": "Which option is the grammatically correct passive voice form?",
        "options": [
            "The application was approving by the manager yesterday.",
            "The application was approv by the manager yesterday.",
            "The application is approved by the manager yesterday.",
            "The application was approved by the manager yesterday."
        ],
        "correctAnswer": "The application was approved by the manager yesterday.",
        "explanation": [
            "The tense and auxiliary verb of the active sentence are correctly retained in the passive form.",
            "The object of the active sentence becomes the subject, and the main verb changes to its past participle."
        ]
    },
    {
        "question_id": "A2P_53",
        "questionType": "A2P",
        "activeSentence": "The board is reviewing the policy.",
        "question": "Which option is the grammatically correct passive voice form?",
        "options": [
            "The policy is being reviewed by the board.",
            "The policy was being reviewed by the board.",
            "The policy is being review by the board.",
            "The policy is being reviewing by the board."
        ],
        "correctAnswer": "The policy is being reviewed by the board.",
        "explanation": [
            "The tense and auxiliary verb of the active sentence are correctly retained in the passive form.",
            "The object of the active sentence becomes the subject, and the main verb changes to its past participle."
        ]
    },
    {
        "question_id": "A2P_54",
        "questionType": "A2P",
        "activeSentence": "The authority was preparing the report.",
        "question": "Which option is the grammatically correct passive voice form?",
        "options": [
            "The report was being preparing by the authority.",
            "The report was being prepar by the authority.",
            "The report was being prepared by the authority.",
            "The report is being prepared by the authority."
        ],
        "correctAnswer": "The report was being prepared by the authority.",
        "explanation": [
            "The tense and auxiliary verb of the active sentence are correctly retained in the passive form.",
            "The object of the active sentence becomes the subject, and the main verb changes to its past participle."
        ]
    },
    {
        "question_id": "A2P_55",
        "questionType": "A2P",
        "activeSentence": "The department has finalized the schedule.",
        "question": "Which option is the grammatically correct passive voice form?",
        "options": [
            "The schedule has been finalizing by the department.",
            "The schedule has finalized by the department.",
            "The schedule was finalized by the department.",
            "The schedule has been finalized by the department."
        ],
        "correctAnswer": "The schedule has been finalized by the department.",
        "explanation": [
            "The tense and auxiliary verb of the active sentence are correctly retained in the passive form.",
            "The object of the active sentence becomes the subject, and the main verb changes to its past participle."
        ]
    },
    {
        "question_id": "A2P_56",
        "questionType": "A2P",
        "activeSentence": "The supervisor must submit the guidelines.",
        "question": "Which option is the grammatically correct passive voice form?",
        "options": [
            "The guidelines must be submitted by the supervisor.",
            "The guidelines must submitted by the supervisor.",
            "The guidelines must be submitting by the supervisor.",
            "The guidelines must be submitt by the supervisor."
        ],
        "correctAnswer": "The guidelines must be submitted by the supervisor.",
        "explanation": [
            "The tense and auxiliary verb of the active sentence are correctly retained in the passive form.",
            "The object of the active sentence becomes the subject, and the main verb changes to its past participle."
        ]
    },
    {
        "question_id": "A2P_57",
        "questionType": "A2P",
        "activeSentence": "The officer can amend the complaint.",
        "question": "Which option is the grammatically correct passive voice form?",
        "options": [
            "The complaint can be amended by the officer.",
            "The complaint can be amend by the officer.",
            "The complaint can amended by the officer.",
            "The complaint can be amending by the officer."
        ],
        "correctAnswer": "The complaint can be amended by the officer.",
        "explanation": [
            "The tense and auxiliary verb of the active sentence are correctly retained in the passive form.",
            "The object of the active sentence becomes the subject, and the main verb changes to its past participle."
        ]
    },
    {
        "question_id": "A2P_58",
        "questionType": "A2P",
        "activeSentence": "The administration will have completed the request by tomorrow.",
        "question": "Which option is the grammatically correct passive voice form?",
        "options": [
            "The request will have been completed by the administration by tomorrow.",
            "The request will have completed by the administration by tomorrow.",
            "The request will have been complet by the administration by tomorrow.",
            "The request will have been completing by the administration by tomorrow."
        ],
        "correctAnswer": "The request will have been completed by the administration by tomorrow.",
        "explanation": [
            "The tense and auxiliary verb of the active sentence are correctly retained in the passive form.",
            "The object of the active sentence becomes the subject, and the main verb changes to its past participle."
        ]
    },
    {
        "question_id": "A2P_59",
        "questionType": "A2P",
        "activeSentence": "The panel approves the plan.",
        "question": "Which option is the grammatically correct passive voice form?",
        "options": [
            "The plan is approv by the panel.",
            "The plan is approving by the panel.",
            "The plan was approved by the panel.",
            "The plan is approved by the panel."
        ],
        "correctAnswer": "The plan is approved by the panel.",
        "explanation": [
            "The tense and auxiliary verb of the active sentence are correctly retained in the passive form.",
            "The object of the active sentence becomes the subject, and the main verb changes to its past participle."
        ]
    },
    {
        "question_id": "A2P_60",
        "questionType": "A2P",
        "activeSentence": "The director approved the findings yesterday.",
        "question": "Which option is the grammatically correct passive voice form?",
        "options": [
            "The findings was approv by the director yesterday.",
            "The findings was approved by the director yesterday.",
            "The findings is approved by the director yesterday.",
            "The findings was approving by the director yesterday."
        ],
        "correctAnswer": "The findings was approved by the director yesterday.",
        "explanation": [
            "The tense and auxiliary verb of the active sentence are correctly retained in the passive form.",
            "The object of the active sentence becomes the subject, and the main verb changes to its past participle."
        ]
    },
    {
        "question_id": "A2P_61",
        "questionType": "A2P",
        "activeSentence": "The committee is reviewing the proposal.",
        "question": "Which option is the grammatically correct passive voice form?",
        "options": [
            "The proposal is being reviewed by the committee.",
            "The proposal was being reviewed by the committee.",
            "The proposal is being reviewing by the committee.",
            "The proposal is being review by the committee."
        ],
        "correctAnswer": "The proposal is being reviewed by the committee.",
        "explanation": [
            "The tense and auxiliary verb of the active sentence are correctly retained in the passive form.",
            "The object of the active sentence becomes the subject, and the main verb changes to its past participle."
        ]
    },
    {
        "question_id": "A2P_62",
        "questionType": "A2P",
        "activeSentence": "The manager was preparing the application.",
        "question": "Which option is the grammatically correct passive voice form?",
        "options": [
            "The application is being prepared by the manager.",
            "The application was being prepared by the manager.",
            "The application was being preparing by the manager.",
            "The application was being prepar by the manager."
        ],
        "correctAnswer": "The application was being prepared by the manager.",
        "explanation": [
            "The tense and auxiliary verb of the active sentence are correctly retained in the passive form.",
            "The object of the active sentence becomes the subject, and the main verb changes to its past participle."
        ]
    },
    {
        "question_id": "A2P_63",
        "questionType": "A2P",
        "activeSentence": "The board has finalized the policy.",
        "question": "Which option is the grammatically correct passive voice form?",
        "options": [
            "The policy has been finalized by the board.",
            "The policy has finalized by the board.",
            "The policy was finalized by the board.",
            "The policy has been finalizing by the board."
        ],
        "correctAnswer": "The policy has been finalized by the board.",
        "explanation": [
            "The tense and auxiliary verb of the active sentence are correctly retained in the passive form.",
            "The object of the active sentence becomes the subject, and the main verb changes to its past participle."
        ]
    },
    {
        "question_id": "A2P_64",
        "questionType": "A2P",
        "activeSentence": "The authority must submit the report.",
        "question": "Which option is the grammatically correct passive voice form?",
        "options": [
            "The report must be submitt by the authority.",
            "The report must be submitted by the authority.",
            "The report must submitted by the authority.",
            "The report must be submitting by the authority."
        ],
        "correctAnswer": "The report must be submitted by the authority.",
        "explanation": [
            "The tense and auxiliary verb of the active sentence are correctly retained in the passive form.",
            "The object of the active sentence becomes the subject, and the main verb changes to its past participle."
        ]
    },
    {
        "question_id": "A2P_65",
        "questionType": "A2P",
        "activeSentence": "The department can amend the schedule.",
        "question": "Which option is the grammatically correct passive voice form?",
        "options": [
            "The schedule can be amend by the department.",
            "The schedule can be amending by the department.",
            "The schedule can amended by the department.",
            "The schedule can be amended by the department."
        ],
        "correctAnswer": "The schedule can be amended by the department.",
        "explanation": [
            "The tense and auxiliary verb of the active sentence are correctly retained in the passive form.",
            "The object of the active sentence becomes the subject, and the main verb changes to its past participle."
        ]
    },
    {
        "question_id": "A2P_66",
        "questionType": "A2P",
        "activeSentence": "The supervisor will have completed the guidelines by tomorrow.",
        "question": "Which option is the grammatically correct passive voice form?",
        "options": [
            "The guidelines will have been completed by the supervisor by tomorrow.",
            "The guidelines will have been complet by the supervisor by tomorrow.",
            "The guidelines will have completed by the supervisor by tomorrow.",
            "The guidelines will have been completing by the supervisor by tomorrow."
        ],
        "correctAnswer": "The guidelines will have been completed by the supervisor by tomorrow.",
        "explanation": [
            "The tense and auxiliary verb of the active sentence are correctly retained in the passive form.",
            "The object of the active sentence becomes the subject, and the main verb changes to its past participle."
        ]
    },
    {
        "question_id": "A2P_67",
        "questionType": "A2P",
        "activeSentence": "The officer approves the complaint.",
        "question": "Which option is the grammatically correct passive voice form?",
        "options": [
            "The complaint is approving by the officer.",
            "The complaint was approved by the officer.",
            "The complaint is approved by the officer.",
            "The complaint is approv by the officer."
        ],
        "correctAnswer": "The complaint is approved by the officer.",
        "explanation": [
            "The tense and auxiliary verb of the active sentence are correctly retained in the passive form.",
            "The object of the active sentence becomes the subject, and the main verb changes to its past participle."
        ]
    },
    {
        "question_id": "A2P_68",
        "questionType": "A2P",
        "activeSentence": "The administration approved the request yesterday.",
        "question": "Which option is the grammatically correct passive voice form?",
        "options": [
            "The request was approved by the administration yesterday.",
            "The request is approved by the administration yesterday.",
            "The request was approving by the administration yesterday.",
            "The request was approv by the administration yesterday."
        ],
        "correctAnswer": "The request was approved by the administration yesterday.",
        "explanation": [
            "The tense and auxiliary verb of the active sentence are correctly retained in the passive form.",
            "The object of the active sentence becomes the subject, and the main verb changes to its past participle."
        ]
    },
    {
        "question_id": "A2P_69",
        "questionType": "A2P",
        "activeSentence": "The panel is reviewing the plan.",
        "question": "Which option is the grammatically correct passive voice form?",
        "options": [
            "The plan is being review by the panel.",
            "The plan is being reviewed by the panel.",
            "The plan was being reviewed by the panel.",
            "The plan is being reviewing by the panel."
        ],
        "correctAnswer": "The plan is being reviewed by the panel.",
        "explanation": [
            "The tense and auxiliary verb of the active sentence are correctly retained in the passive form.",
            "The object of the active sentence becomes the subject, and the main verb changes to its past participle."
        ]
    },
    {
        "question_id": "A2P_70",
        "questionType": "A2P",
        "activeSentence": "The director was preparing the findings.",
        "question": "Which option is the grammatically correct passive voice form?",
        "options": [
            "The findings is being prepared by the director.",
            "The findings was being prepar by the director.",
            "The findings was being preparing by the director.",
            "The findings was being prepared by the director."
        ],
        "correctAnswer": "The findings was being prepared by the director.",
        "explanation": [
            "The tense and auxiliary verb of the active sentence are correctly retained in the passive form.",
            "The object of the active sentence becomes the subject, and the main verb changes to its past participle."
        ]
    },
    {
        "question_id": "A2P_71",
        "questionType": "A2P",
        "activeSentence": "The committee has finalized the proposal.",
        "question": "Which option is the grammatically correct passive voice form?",
        "options": [
            "The proposal has been finalized by the committee.",
            "The proposal has finalized by the committee.",
            "The proposal was finalized by the committee.",
            "The proposal has been finalizing by the committee."
        ],
        "correctAnswer": "The proposal has been finalized by the committee.",
        "explanation": [
            "The tense and auxiliary verb of the active sentence are correctly retained in the passive form.",
            "The object of the active sentence becomes the subject, and the main verb changes to its past participle."
        ]
    },
    {
        "question_id": "A2P_72",
        "questionType": "A2P",
        "activeSentence": "The manager must submit the application.",
        "question": "Which option is the grammatically correct passive voice form?",
        "options": [
            "The application must submitted by the manager.",
            "The application must be submitted by the manager.",
            "The application must be submitt by the manager.",
            "The application must be submitting by the manager."
        ],
        "correctAnswer": "The application must be submitted by the manager.",
        "explanation": [
            "The tense and auxiliary verb of the active sentence are correctly retained in the passive form.",
            "The object of the active sentence becomes the subject, and the main verb changes to its past participle."
        ]
    },
    {
        "question_id": "A2P_73",
        "questionType": "A2P",
        "activeSentence": "The board can amend the policy.",
        "question": "Which option is the grammatically correct passive voice form?",
        "options": [
            "The policy can be amending by the board.",
            "The policy can be amend by the board.",
            "The policy can amended by the board.",
            "The policy can be amended by the board."
        ],
        "correctAnswer": "The policy can be amended by the board.",
        "explanation": [
            "The tense and auxiliary verb of the active sentence are correctly retained in the passive form.",
            "The object of the active sentence becomes the subject, and the main verb changes to its past participle."
        ]
    },
    {
        "question_id": "A2P_74",
        "questionType": "A2P",
        "activeSentence": "The authority will have completed the report by tomorrow.",
        "question": "Which option is the grammatically correct passive voice form?",
        "options": [
            "The report will have been completing by the authority by tomorrow.",
            "The report will have completed by the authority by tomorrow.",
            "The report will have been complet by the authority by tomorrow.",
            "The report will have been completed by the authority by tomorrow."
        ],
        "correctAnswer": "The report will have been completed by the authority by tomorrow.",
        "explanation": [
            "The tense and auxiliary verb of the active sentence are correctly retained in the passive form.",
            "The object of the active sentence becomes the subject, and the main verb changes to its past participle."
        ]
    },
    {
        "question_id": "A2P_75",
        "questionType": "A2P",
        "activeSentence": "The department approves the schedule.",
        "question": "Which option is the grammatically correct passive voice form?",
        "options": [
            "The schedule is approved by the department.",
            "The schedule was approved by the department.",
            "The schedule is approving by the department.",
            "The schedule is approv by the department."
        ],
        "correctAnswer": "The schedule is approved by the department.",
        "explanation": [
            "The tense and auxiliary verb of the active sentence are correctly retained in the passive form.",
            "The object of the active sentence becomes the subject, and the main verb changes to its past participle."
        ]
    },
    {
        "question_id": "A2P_76",
        "questionType": "A2P",
        "activeSentence": "The supervisor approved the guidelines yesterday.",
        "question": "Which option is the grammatically correct passive voice form?",
        "options": [
            "The guidelines was approved by the supervisor yesterday.",
            "The guidelines is approved by the supervisor yesterday.",
            "The guidelines was approving by the supervisor yesterday.",
            "The guidelines was approv by the supervisor yesterday."
        ],
        "correctAnswer": "The guidelines was approved by the supervisor yesterday.",
        "explanation": [
            "The tense and auxiliary verb of the active sentence are correctly retained in the passive form.",
            "The object of the active sentence becomes the subject, and the main verb changes to its past participle."
        ]
    },
    {
        "question_id": "A2P_77",
        "questionType": "A2P",
        "activeSentence": "The officer is reviewing the complaint.",
        "question": "Which option is the grammatically correct passive voice form?",
        "options": [
            "The complaint is being reviewed by the officer.",
            "The complaint is being review by the officer.",
            "The complaint was being reviewed by the officer.",
            "The complaint is being reviewing by the officer."
        ],
        "correctAnswer": "The complaint is being reviewed by the officer.",
        "explanation": [
            "The tense and auxiliary verb of the active sentence are correctly retained in the passive form.",
            "The object of the active sentence becomes the subject, and the main verb changes to its past participle."
        ]
    },
    {
        "question_id": "A2P_78",
        "questionType": "A2P",
        "activeSentence": "The administration was preparing the request.",
        "question": "Which option is the grammatically correct passive voice form?",
        "options": [
            "The request was being preparing by the administration.",
            "The request was being prepar by the administration.",
            "The request was being prepared by the administration.",
            "The request is being prepared by the administration."
        ],
        "correctAnswer": "The request was being prepared by the administration.",
        "explanation": [
            "The tense and auxiliary verb of the active sentence are correctly retained in the passive form.",
            "The object of the active sentence becomes the subject, and the main verb changes to its past participle."
        ]
    },
    {
        "question_id": "A2P_79",
        "questionType": "A2P",
        "activeSentence": "The panel has finalized the plan.",
        "question": "Which option is the grammatically correct passive voice form?",
        "options": [
            "The plan has been finalized by the panel.",
            "The plan was finalized by the panel.",
            "The plan has finalized by the panel.",
            "The plan has been finalizing by the panel."
        ],
        "correctAnswer": "The plan has been finalized by the panel.",
        "explanation": [
            "The tense and auxiliary verb of the active sentence are correctly retained in the passive form.",
            "The object of the active sentence becomes the subject, and the main verb changes to its past participle."
        ]
    },
    {
        "question_id": "A2P_80",
        "questionType": "A2P",
        "activeSentence": "The director must submit the findings.",
        "question": "Which option is the grammatically correct passive voice form?",
        "options": [
            "The findings must be submitted by the director.",
            "The findings must be submitt by the director.",
            "The findings must submitted by the director.",
            "The findings must be submitting by the director."
        ],
        "correctAnswer": "The findings must be submitted by the director.",
        "explanation": [
            "The tense and auxiliary verb of the active sentence are correctly retained in the passive form.",
            "The object of the active sentence becomes the subject, and the main verb changes to its past participle."
        ]
    },
    {
        "question_id": "A2P_81",
        "questionType": "A2P",
        "activeSentence": "The committee can amend the proposal.",
        "question": "Which option is the grammatically correct passive voice form?",
        "options": [
            "The proposal can be amending by the committee.",
            "The proposal can be amended by the committee.",
            "The proposal can be amend by the committee.",
            "The proposal can amended by the committee."
        ],
        "correctAnswer": "The proposal can be amended by the committee.",
        "explanation": [
            "The tense and auxiliary verb of the active sentence are correctly retained in the passive form.",
            "The object of the active sentence becomes the subject, and the main verb changes to its past participle."
        ]
    },
    {
        "question_id": "A2P_82",
        "questionType": "A2P",
        "activeSentence": "The manager will have completed the application by tomorrow.",
        "question": "Which option is the grammatically correct passive voice form?",
        "options": [
            "The application will have completed by the manager by tomorrow.",
            "The application will have been complet by the manager by tomorrow.",
            "The application will have been completing by the manager by tomorrow.",
            "The application will have been completed by the manager by tomorrow."
        ],
        "correctAnswer": "The application will have been completed by the manager by tomorrow.",
        "explanation": [
            "The tense and auxiliary verb of the active sentence are correctly retained in the passive form.",
            "The object of the active sentence becomes the subject, and the main verb changes to its past participle."
        ]
    },
    {
        "question_id": "A2P_83",
        "questionType": "A2P",
        "activeSentence": "The board approves the policy.",
        "question": "Which option is the grammatically correct passive voice form?",
        "options": [
            "The policy is approv by the board.",
            "The policy is approving by the board.",
            "The policy was approved by the board.",
            "The policy is approved by the board."
        ],
        "correctAnswer": "The policy is approved by the board.",
        "explanation": [
            "The tense and auxiliary verb of the active sentence are correctly retained in the passive form.",
            "The object of the active sentence becomes the subject, and the main verb changes to its past participle."
        ]
    },
    {
        "question_id": "A2P_84",
        "questionType": "A2P",
        "activeSentence": "The authority approved the report yesterday.",
        "question": "Which option is the grammatically correct passive voice form?",
        "options": [
            "The report was approv by the authority yesterday.",
            "The report was approved by the authority yesterday.",
            "The report was approving by the authority yesterday.",
            "The report is approved by the authority yesterday."
        ],
        "correctAnswer": "The report was approved by the authority yesterday.",
        "explanation": [
            "The tense and auxiliary verb of the active sentence are correctly retained in the passive form.",
            "The object of the active sentence becomes the subject, and the main verb changes to its past participle."
        ]
    },
    {
        "question_id": "A2P_85",
        "questionType": "A2P",
        "activeSentence": "The department is reviewing the schedule.",
        "question": "Which option is the grammatically correct passive voice form?",
        "options": [
            "The schedule is being reviewing by the department.",
            "The schedule is being review by the department.",
            "The schedule was being reviewed by the department.",
            "The schedule is being reviewed by the department."
        ],
        "correctAnswer": "The schedule is being reviewed by the department.",
        "explanation": [
            "The tense and auxiliary verb of the active sentence are correctly retained in the passive form.",
            "The object of the active sentence becomes the subject, and the main verb changes to its past participle."
        ]
    },
    {
        "question_id": "A2P_86",
        "questionType": "A2P",
        "activeSentence": "The supervisor was preparing the guidelines.",
        "question": "Which option is the grammatically correct passive voice form?",
        "options": [
            "The guidelines was being prepar by the supervisor.",
            "The guidelines was being prepared by the supervisor.",
            "The guidelines is being prepared by the supervisor.",
            "The guidelines was being preparing by the supervisor."
        ],
        "correctAnswer": "The guidelines was being prepared by the supervisor.",
        "explanation": [
            "The tense and auxiliary verb of the active sentence are correctly retained in the passive form.",
            "The object of the active sentence becomes the subject, and the main verb changes to its past participle."
        ]
    },
    {
        "question_id": "A2P_87",
        "questionType": "A2P",
        "activeSentence": "The officer has finalized the complaint.",
        "question": "Which option is the grammatically correct passive voice form?",
        "options": [
            "The complaint was finalized by the officer.",
            "The complaint has been finalized by the officer.",
            "The complaint has finalized by the officer.",
            "The complaint has been finalizing by the officer."
        ],
        "correctAnswer": "The complaint has been finalized by the officer.",
        "explanation": [
            "The tense and auxiliary verb of the active sentence are correctly retained in the passive form.",
            "The object of the active sentence becomes the subject, and the main verb changes to its past participle."
        ]
    },
    {
        "question_id": "A2P_88",
        "questionType": "A2P",
        "activeSentence": "The administration must submit the request.",
        "question": "Which option is the grammatically correct passive voice form?",
        "options": [
            "The request must be submitted by the administration.",
            "The request must submitted by the administration.",
            "The request must be submitting by the administration.",
            "The request must be submitt by the administration."
        ],
        "correctAnswer": "The request must be submitted by the administration.",
        "explanation": [
            "The tense and auxiliary verb of the active sentence are correctly retained in the passive form.",
            "The object of the active sentence becomes the subject, and the main verb changes to its past participle."
        ]
    },
    {
        "question_id": "A2P_89",
        "questionType": "A2P",
        "activeSentence": "The panel can amend the plan.",
        "question": "Which option is the grammatically correct passive voice form?",
        "options": [
            "The plan can be amend by the panel.",
            "The plan can be amended by the panel.",
            "The plan can amended by the panel.",
            "The plan can be amending by the panel."
        ],
        "correctAnswer": "The plan can be amended by the panel.",
        "explanation": [
            "The tense and auxiliary verb of the active sentence are correctly retained in the passive form.",
            "The object of the active sentence becomes the subject, and the main verb changes to its past participle."
        ]
    },
    {
        "question_id": "A2P_90",
        "questionType": "A2P",
        "activeSentence": "The director will have completed the findings by tomorrow.",
        "question": "Which option is the grammatically correct passive voice form?",
        "options": [
            "The findings will have been completed by the director by tomorrow.",
            "The findings will have completed by the director by tomorrow.",
            "The findings will have been complet by the director by tomorrow.",
            "The findings will have been completing by the director by tomorrow."
        ],
        "correctAnswer": "The findings will have been completed by the director by tomorrow.",
        "explanation": [
            "The tense and auxiliary verb of the active sentence are correctly retained in the passive form.",
            "The object of the active sentence becomes the subject, and the main verb changes to its past participle."
        ]
    },
    {
        "question_id": "A2P_91",
        "questionType": "A2P",
        "activeSentence": "The manager has been monitoring the report closely.",
        "question": "Which option is the grammatically correct passive voice form?",
        "options": [
            "The report has been being monitored closely by the manager.",
            "The report has monitored closely by the manager.",
            "The report is being monitored closely by the manager.",
            "The report has been monitored closely by the manager."
        ],
        "correctAnswer": "The report has been being monitored closely by the manager.",
        "explanation": [
            "The present perfect continuous tense uses 'has been + verb-ing' in active voice.",
            "In passive voice, it becomes 'has been being + past participle', which is grammatically correct though less common."
        ]
    },
    {
        "question_id": "A2P_92",
        "questionType": "A2P",
        "activeSentence": "The supervisor announced that the policy was revised.",
        "question": "Which option is the grammatically correct passive voice form?",
        "options": [
            "It was announced by the supervisor that the policy was revised.",
            "It has announced by the supervisor that the policy was revised.",
            "That the policy was revised was announced by the supervisor.",
            "The policy was revised and announced by the supervisor."
        ],
        "correctAnswer": "It was announced by the supervisor that the policy was revised.",
        "explanation": [
            "Reporting verbs like 'announce' can form impersonal passive constructions.",
            "The structure 'It was announced that…' is commonly used in formal English."
        ]
    },
    {
        "question_id": "A2P_93",
        "questionType": "A2P",
        "activeSentence": "The committee got the technician to repair the staff.",
        "question": "Which option is the grammatically correct passive voice form?",
        "options": [
            "The staff was got repaired by the technician on instructions from the committee.",
            "The staff was repaired by the technician for the committee.",
            "The staff got repaired the technician by the committee.",
            "The staff was repairing by the technician for the committee."
        ],
        "correctAnswer": "The staff was got repaired by the technician on instructions from the committee.",
        "explanation": [
            "Causative structures show that someone causes an action to happen.",
            "In passive voice, the focus shifts to the object receiving the action."
        ]
    },
    {
        "question_id": "A2P_94",
        "questionType": "A2P",
        "activeSentence": "The director instructed the staff to complete the document.",
        "question": "Which option is the grammatically correct passive voice form?",
        "options": [
            "The staff were instructed by the director to complete the document.",
            "The staff was instructed by the director to complete the document.",
            "The staff instructed by the director completed the document.",
            "The staff were instructing by the director to complete the document."
        ],
        "correctAnswer": "The staff were instructed by the director to complete the document.",
        "explanation": [
            "Complex object constructions use 'object + to-infinitive'.",
            "In passive voice, the object becomes the subject while the infinitive remains unchanged."
        ]
    },
    {
        "question_id": "A2P_95",
        "questionType": "A2P",
        "activeSentence": "The authority has been monitoring the process closely.",
        "question": "Which option is the grammatically correct passive voice form?",
        "options": [
            "The process has been being monitored closely by the authority.",
            "The process has monitored closely by the authority.",
            "The process is being monitored closely by the authority.",
            "The process has been monitored closely by the authority."
        ],
        "correctAnswer": "The process has been being monitored closely by the authority.",
        "explanation": [
            "The present perfect continuous tense uses 'has been + verb-ing' in active voice.",
            "In passive voice, it becomes 'has been being + past participle', which is grammatically correct though less common."
        ]
    },
    {
        "question_id": "A2P_96",
        "questionType": "A2P",
        "activeSentence": "The officer announced that the policy was revised.",
        "question": "Which option is the grammatically correct passive voice form?",
        "options": [
            "It was announced by the officer that the policy was revised.",
            "It has announced by the officer that the policy was revised.",
            "That the policy was revised was announced by the officer.",
            "The policy was revised and announced by the officer."
        ],
        "correctAnswer": "It was announced by the officer that the policy was revised.",
        "explanation": [
            "Reporting verbs like 'announce' can form impersonal passive constructions.",
            "The structure 'It was announced that…' is commonly used in formal English."
        ]
    },
    {
        "question_id": "A2P_97",
        "questionType": "A2P",
        "activeSentence": "The administration got the technician to repair the machine.",
        "question": "Which option is the grammatically correct passive voice form?",
        "options": [
            "The machine was got repaired by the technician on instructions from the administration.",
            "The machine was repaired by the technician for the administration.",
            "The machine got repaired the technician by the administration.",
            "The machine was repairing by the technician for the administration."
        ],
        "correctAnswer": "The machine was got repaired by the technician on instructions from the administration.",
        "explanation": [
            "Causative structures show that someone causes an action to happen.",
            "In passive voice, the focus shifts to the object receiving the action."
        ]
    },
    {
        "question_id": "A2P_98",
        "questionType": "A2P",
        "activeSentence": "The panel instructed the staff to complete the employees.",
        "question": "Which option is the grammatically correct passive voice form?",
        "options": [
            "The staff were instructed by the panel to complete the employees.",
            "The staff was instructed by the panel to complete the employees.",
            "The staff instructed by the panel completed the employees.",
            "The staff were instructing by the panel to complete the employees."
        ],
        "correctAnswer": "The staff were instructed by the panel to complete the employees.",
        "explanation": [
            "Complex object constructions use 'object + to-infinitive'.",
            "In passive voice, the object becomes the subject while the infinitive remains unchanged."
        ]
    },
    {
        "question_id": "A2P_99",
        "questionType": "A2P",
        "activeSentence": "The board has been monitoring the records closely.",
        "question": "Which option is the grammatically correct passive voice form?",
        "options": [
            "The records has been being monitored closely by the board.",
            "The records has monitored closely by the board.",
            "The records is being monitored closely by the board.",
            "The records has been monitored closely by the board."
        ],
        "correctAnswer": "The records has been being monitored closely by the board.",
        "explanation": [
            "The present perfect continuous tense uses 'has been + verb-ing' in active voice.",
            "In passive voice, it becomes 'has been being + past participle', which is grammatically correct though less common."
        ]
    },
    {
        "question_id": "A2P_100",
        "questionType": "A2P",
        "activeSentence": "The principal announced that the policy was revised.",
        "question": "Which option is the grammatically correct passive voice form?",
        "options": [
            "It was announced by the principal that the policy was revised.",
            "It has announced by the principal that the policy was revised.",
            "That the policy was revised was announced by the principal.",
            "The policy was revised and announced by the principal."
        ],
        "correctAnswer": "It was announced by the principal that the policy was revised.",
        "explanation": [
            "Reporting verbs like 'announce' can form impersonal passive constructions.",
            "The structure 'It was announced that…' is commonly used in formal English."
        ]
    },
    {
        "question_id": "A2P_101",
        "questionType": "A2P",
        "activeSentence": "The manager got the technician to repair the report.",
        "question": "Which option is the grammatically correct passive voice form?",
        "options": [
            "The report was got repaired by the technician on instructions from the manager.",
            "The report was repaired by the technician for the manager.",
            "The report got repaired the technician by the manager.",
            "The report was repairing by the technician for the manager."
        ],
        "correctAnswer": "The report was got repaired by the technician on instructions from the manager.",
        "explanation": [
            "Causative structures show that someone causes an action to happen.",
            "In passive voice, the focus shifts to the object receiving the action."
        ]
    },
    {
        "question_id": "A2P_102",
        "questionType": "A2P",
        "activeSentence": "The supervisor instructed the staff to complete the system.",
        "question": "Which option is the grammatically correct passive voice form?",
        "options": [
            "The staff were instructed by the supervisor to complete the system.",
            "The staff was instructed by the supervisor to complete the system.",
            "The staff instructed by the supervisor completed the system.",
            "The staff were instructing by the supervisor to complete the system."
        ],
        "correctAnswer": "The staff were instructed by the supervisor to complete the system.",
        "explanation": [
            "Complex object constructions use 'object + to-infinitive'.",
            "In passive voice, the object becomes the subject while the infinitive remains unchanged."
        ]
    },
    {
        "question_id": "A2P_103",
        "questionType": "A2P",
        "activeSentence": "The committee has been monitoring the staff closely.",
        "question": "Which option is the grammatically correct passive voice form?",
        "options": [
            "The staff has been being monitored closely by the committee.",
            "The staff has monitored closely by the committee.",
            "The staff is being monitored closely by the committee.",
            "The staff has been monitored closely by the committee."
        ],
        "correctAnswer": "The staff has been being monitored closely by the committee.",
        "explanation": [
            "The present perfect continuous tense uses 'has been + verb-ing' in active voice.",
            "In passive voice, it becomes 'has been being + past participle', which is grammatically correct though less common."
        ]
    },
    {
        "question_id": "A2P_104",
        "questionType": "A2P",
        "activeSentence": "The director announced that the policy was revised.",
        "question": "Which option is the grammatically correct passive voice form?",
        "options": [
            "It was announced by the director that the policy was revised.",
            "It has announced by the director that the policy was revised.",
            "That the policy was revised was announced by the director.",
            "The policy was revised and announced by the director."
        ],
        "correctAnswer": "It was announced by the director that the policy was revised.",
        "explanation": [
            "Reporting verbs like 'announce' can form impersonal passive constructions.",
            "The structure 'It was announced that…' is commonly used in formal English."
        ]
    },
    {
        "question_id": "A2P_105",
        "questionType": "A2P",
        "activeSentence": "The authority got the technician to repair the process.",
        "question": "Which option is the grammatically correct passive voice form?",
        "options": [
            "The process was got repaired by the technician on instructions from the authority.",
            "The process was repaired by the technician for the authority.",
            "The process got repaired the technician by the authority.",
            "The process was repairing by the technician for the authority."
        ],
        "correctAnswer": "The process was got repaired by the technician on instructions from the authority.",
        "explanation": [
            "Causative structures show that someone causes an action to happen.",
            "In passive voice, the focus shifts to the object receiving the action."
        ]
    },
    {
        "question_id": "A2P_106",
        "questionType": "A2P",
        "activeSentence": "The officer instructed the staff to complete the application.",
        "question": "Which option is the grammatically correct passive voice form?",
        "options": [
            "The staff were instructed by the officer to complete the application.",
            "The staff was instructed by the officer to complete the application.",
            "The staff instructed by the officer completed the application.",
            "The staff were instructing by the officer to complete the application."
        ],
        "correctAnswer": "The staff were instructed by the officer to complete the application.",
        "explanation": [
            "Complex object constructions use 'object + to-infinitive'.",
            "In passive voice, the object becomes the subject while the infinitive remains unchanged."
        ]
    },
    {
        "question_id": "A2P_107",
        "questionType": "A2P",
        "activeSentence": "The administration has been monitoring the machine closely.",
        "question": "Which option is the grammatically correct passive voice form?",
        "options": [
            "The machine has been being monitored closely by the administration.",
            "The machine has monitored closely by the administration.",
            "The machine is being monitored closely by the administration.",
            "The machine has been monitored closely by the administration."
        ],
        "correctAnswer": "The machine has been being monitored closely by the administration.",
        "explanation": [
            "The present perfect continuous tense uses 'has been + verb-ing' in active voice.",
            "In passive voice, it becomes 'has been being + past participle', which is grammatically correct though less common."
        ]
    },
    {
        "question_id": "A2P_108",
        "questionType": "A2P",
        "activeSentence": "The panel announced that the policy was revised.",
        "question": "Which option is the grammatically correct passive voice form?",
        "options": [
            "It was announced by the panel that the policy was revised.",
            "It has announced by the panel that the policy was revised.",
            "That the policy was revised was announced by the panel.",
            "The policy was revised and announced by the panel."
        ],
        "correctAnswer": "It was announced by the panel that the policy was revised.",
        "explanation": [
            "Reporting verbs like 'announce' can form impersonal passive constructions.",
            "The structure 'It was announced that…' is commonly used in formal English."
        ]
    },
    {
        "question_id": "A2P_109",
        "questionType": "A2P",
        "activeSentence": "The board got the technician to repair the records.",
        "question": "Which option is the grammatically correct passive voice form?",
        "options": [
            "The records was got repaired by the technician on instructions from the board.",
            "The records was repaired by the technician for the board.",
            "The records got repaired the technician by the board.",
            "The records was repairing by the technician for the board."
        ],
        "correctAnswer": "The records was got repaired by the technician on instructions from the board.",
        "explanation": [
            "Causative structures show that someone causes an action to happen.",
            "In passive voice, the focus shifts to the object receiving the action."
        ]
    },
    {
        "question_id": "A2P_110",
        "questionType": "A2P",
        "activeSentence": "The principal instructed the staff to complete the files.",
        "question": "Which option is the grammatically correct passive voice form?",
        "options": [
            "The staff were instructed by the principal to complete the files.",
            "The staff was instructed by the principal to complete the files.",
            "The staff instructed by the principal completed the files.",
            "The staff were instructing by the principal to complete the files."
        ],
        "correctAnswer": "The staff were instructed by the principal to complete the files.",
        "explanation": [
            "Complex object constructions use 'object + to-infinitive'.",
            "In passive voice, the object becomes the subject while the infinitive remains unchanged."
        ]
    },
    {
        "question_id": "A2P_111",
        "questionType": "A2P",
        "activeSentence": "The manager gave the employees a bonus.",
        "question": "Which option is the grammatically correct passive voice form?",
        "options": [
            "The employees were given a bonus by the manager.",
            "A bonus was given the employees by the manager.",
            "The employees was given a bonus by the manager.",
            "The employees were giving a bonus by the manager."
        ],
        "correctAnswer": "The employees were given a bonus by the manager.",
        "explanation": [
            "Sentences with two objects can form passive voice using either object as the subject.",
            "Here, the indirect object 'the employees' becomes the subject in passive voice."
        ]
    },
    {
        "question_id": "A2P_112",
        "questionType": "A2P",
        "activeSentence": "The teacher looked into the matter carefully.",
        "question": "Which option is the grammatically correct passive voice form?",
        "options": [
            "The matter was looked into carefully by the teacher.",
            "The matter was looked carefully into by the teacher.",
            "The matter is looked into carefully by the teacher.",
            "The matter was looking into carefully by the teacher."
        ],
        "correctAnswer": "The matter was looked into carefully by the teacher.",
        "explanation": [
            "In prepositional passives, the preposition stays with the verb.",
            "The object of the preposition becomes the subject in passive voice."
        ]
    },
    {
        "question_id": "A2P_113",
        "questionType": "A2P",
        "activeSentence": "The officer advised the staff to follow the rules.",
        "question": "Which option is the grammatically correct passive voice form?",
        "options": [
            "The staff were advised by the officer to follow the rules.",
            "The staff was advised by the officer to follow the rules.",
            "The staff were advising by the officer to follow the rules.",
            "The staff were advised by the officer following the rules."
        ],
        "correctAnswer": "The staff were advised by the officer to follow the rules.",
        "explanation": [
            "When an active sentence has an object + infinitive, the infinitive remains unchanged in passive.",
            "The object becomes the subject in passive voice."
        ]
    },
    {
        "question_id": "A2P_114",
        "questionType": "A2P",
        "activeSentence": "The committee would approve the proposal if required.",
        "question": "Which option is the grammatically correct passive voice form?",
        "options": [
            "The proposal would be approved by the committee if required.",
            "The proposal will be approved by the committee if required.",
            "The proposal would approved by the committee if required.",
            "The proposal is approved by the committee if required."
        ],
        "correctAnswer": "The proposal would be approved by the committee if required.",
        "explanation": [
            "Conditional sentences retain the modal 'would' in passive voice.",
            "Only the verb form changes to 'would be + past participle'."
        ]
    },
    {
        "question_id": "A2P_115",
        "questionType": "A2P",
        "activeSentence": "The director gave the employees a bonus.",
        "question": "Which option is the grammatically correct passive voice form?",
        "options": [
            "The employees were given a bonus by the director.",
            "A bonus was given the employees by the director.",
            "The employees was given a bonus by the director.",
            "The employees were giving a bonus by the director."
        ],
        "correctAnswer": "The employees were given a bonus by the director.",
        "explanation": [
            "Sentences with two objects can form passive voice using either object as the subject.",
            "Here, the indirect object 'the employees' becomes the subject in passive voice."
        ]
    },
    {
        "question_id": "A2P_116",
        "questionType": "A2P",
        "activeSentence": "The supervisor looked into the matter carefully.",
        "question": "Which option is the grammatically correct passive voice form?",
        "options": [
            "The matter was looked into carefully by the supervisor.",
            "The matter was looked carefully into by the supervisor.",
            "The matter is looked into carefully by the supervisor.",
            "The matter was looking into carefully by the supervisor."
        ],
        "correctAnswer": "The matter was looked into carefully by the supervisor.",
        "explanation": [
            "In prepositional passives, the preposition stays with the verb.",
            "The object of the preposition becomes the subject in passive voice."
        ]
    },
    {
        "question_id": "A2P_117",
        "questionType": "A2P",
        "activeSentence": "The authority advised the staff to follow the rules.",
        "question": "Which option is the grammatically correct passive voice form?",
        "options": [
            "The staff were advised by the authority to follow the rules.",
            "The staff was advised by the authority to follow the rules.",
            "The staff were advising by the authority to follow the rules.",
            "The staff were advised by the authority following the rules."
        ],
        "correctAnswer": "The staff were advised by the authority to follow the rules.",
        "explanation": [
            "When an active sentence has an object + infinitive, the infinitive remains unchanged in passive.",
            "The object becomes the subject in passive voice."
        ]
    },
    {
        "question_id": "A2P_118",
        "questionType": "A2P",
        "activeSentence": "The administration would approve the proposal if required.",
        "question": "Which option is the grammatically correct passive voice form?",
        "options": [
            "The proposal would be approved by the administration if required.",
            "The proposal will be approved by the administration if required.",
            "The proposal would approved by the administration if required.",
            "The proposal is approved by the administration if required."
        ],
        "correctAnswer": "The proposal would be approved by the administration if required.",
        "explanation": [
            "Conditional sentences retain the modal 'would' in passive voice.",
            "Only the verb form changes to 'would be + past participle'."
        ]
    },
    {
        "question_id": "A2P_119",
        "questionType": "A2P",
        "activeSentence": "The panel gave the employees a bonus.",
        "question": "Which option is the grammatically correct passive voice form?",
        "options": [
            "The employees were given a bonus by the panel.",
            "A bonus was given the employees by the panel.",
            "The employees was given a bonus by the panel.",
            "The employees were giving a bonus by the panel."
        ],
        "correctAnswer": "The employees were given a bonus by the panel.",
        "explanation": [
            "Sentences with two objects can form passive voice using either object as the subject.",
            "Here, the indirect object 'the employees' becomes the subject in passive voice."
        ]
    },
    {
        "question_id": "A2P_120",
        "questionType": "A2P",
        "activeSentence": "The principal looked into the matter carefully.",
        "question": "Which option is the grammatically correct passive voice form?",
        "options": [
            "The matter was looked into carefully by the principal.",
            "The matter was looked carefully into by the principal.",
            "The matter is looked into carefully by the principal.",
            "The matter was looking into carefully by the principal."
        ],
        "correctAnswer": "The matter was looked into carefully by the principal.",
        "explanation": [
            "In prepositional passives, the preposition stays with the verb.",
            "The object of the preposition becomes the subject in passive voice."
        ]
    },
    {
        "question_id": "A2P_121",
        "questionType": "A2P",
        "activeSentence": "The manager advised the staff to follow the rules.",
        "question": "Which option is the grammatically correct passive voice form?",
        "options": [
            "The staff were advised by the manager to follow the rules.",
            "The staff was advised by the manager to follow the rules.",
            "The staff were advising by the manager to follow the rules.",
            "The staff were advised by the manager following the rules."
        ],
        "correctAnswer": "The staff were advised by the manager to follow the rules.",
        "explanation": [
            "When an active sentence has an object + infinitive, the infinitive remains unchanged in passive.",
            "The object becomes the subject in passive voice."
        ]
    },
    {
        "question_id": "A2P_122",
        "questionType": "A2P",
        "activeSentence": "The teacher would approve the proposal if required.",
        "question": "Which option is the grammatically correct passive voice form?",
        "options": [
            "The proposal would be approved by the teacher if required.",
            "The proposal will be approved by the teacher if required.",
            "The proposal would approved by the teacher if required.",
            "The proposal is approved by the teacher if required."
        ],
        "correctAnswer": "The proposal would be approved by the teacher if required.",
        "explanation": [
            "Conditional sentences retain the modal 'would' in passive voice.",
            "Only the verb form changes to 'would be + past participle'."
        ]
    },
    {
        "question_id": "A2P_123",
        "questionType": "A2P",
        "activeSentence": "The officer gave the employees a bonus.",
        "question": "Which option is the grammatically correct passive voice form?",
        "options": [
            "The employees were given a bonus by the officer.",
            "A bonus was given the employees by the officer.",
            "The employees was given a bonus by the officer.",
            "The employees were giving a bonus by the officer."
        ],
        "correctAnswer": "The employees were given a bonus by the officer.",
        "explanation": [
            "Sentences with two objects can form passive voice using either object as the subject.",
            "Here, the indirect object 'the employees' becomes the subject in passive voice."
        ]
    },
    {
        "question_id": "A2P_124",
        "questionType": "A2P",
        "activeSentence": "The committee looked into the matter carefully.",
        "question": "Which option is the grammatically correct passive voice form?",
        "options": [
            "The matter was looked into carefully by the committee.",
            "The matter was looked carefully into by the committee.",
            "The matter is looked into carefully by the committee.",
            "The matter was looking into carefully by the committee."
        ],
        "correctAnswer": "The matter was looked into carefully by the committee.",
        "explanation": [
            "In prepositional passives, the preposition stays with the verb.",
            "The object of the preposition becomes the subject in passive voice."
        ]
    },
    {
        "question_id": "A2P_125",
        "questionType": "A2P",
        "activeSentence": "The director advised the staff to follow the rules.",
        "question": "Which option is the grammatically correct passive voice form?",
        "options": [
            "The staff were advised by the director to follow the rules.",
            "The staff was advised by the director to follow the rules.",
            "The staff were advising by the director to follow the rules.",
            "The staff were advised by the director following the rules."
        ],
        "correctAnswer": "The staff were advised by the director to follow the rules.",
        "explanation": [
            "When an active sentence has an object + infinitive, the infinitive remains unchanged in passive.",
            "The object becomes the subject in passive voice."
        ]
    },
    {
        "question_id": "A2P_126",
        "questionType": "A2P",
        "activeSentence": "The supervisor would approve the proposal if required.",
        "question": "Which option is the grammatically correct passive voice form?",
        "options": [
            "The proposal would be approved by the supervisor if required.",
            "The proposal will be approved by the supervisor if required.",
            "The proposal would approved by the supervisor if required.",
            "The proposal is approved by the supervisor if required."
        ],
        "correctAnswer": "The proposal would be approved by the supervisor if required.",
        "explanation": [
            "Conditional sentences retain the modal 'would' in passive voice.",
            "Only the verb form changes to 'would be + past participle'."
        ]
    },
    {
        "question_id": "A2P_127",
        "questionType": "A2P",
        "activeSentence": "The authority gave the employees a bonus.",
        "question": "Which option is the grammatically correct passive voice form?",
        "options": [
            "The employees were given a bonus by the authority.",
            "A bonus was given the employees by the authority.",
            "The employees was given a bonus by the authority.",
            "The employees were giving a bonus by the authority."
        ],
        "correctAnswer": "The employees were given a bonus by the authority.",
        "explanation": [
            "Sentences with two objects can form passive voice using either object as the subject.",
            "Here, the indirect object 'the employees' becomes the subject in passive voice."
        ]
    },
    {
        "question_id": "A2P_128",
        "questionType": "A2P",
        "activeSentence": "The administration looked into the matter carefully.",
        "question": "Which option is the grammatically correct passive voice form?",
        "options": [
            "The matter was looked into carefully by the administration.",
            "The matter was looked carefully into by the administration.",
            "The matter is looked into carefully by the administration.",
            "The matter was looking into carefully by the administration."
        ],
        "correctAnswer": "The matter was looked into carefully by the administration.",
        "explanation": [
            "In prepositional passives, the preposition stays with the verb.",
            "The object of the preposition becomes the subject in passive voice."
        ]
    },
    {
        "question_id": "A2P_129",
        "questionType": "A2P",
        "activeSentence": "The panel advised the staff to follow the rules.",
        "question": "Which option is the grammatically correct passive voice form?",
        "options": [
            "The staff were advised by the panel to follow the rules.",
            "The staff was advised by the panel to follow the rules.",
            "The staff were advising by the panel to follow the rules.",
            "The staff were advised by the panel following the rules."
        ],
        "correctAnswer": "The staff were advised by the panel to follow the rules.",
        "explanation": [
            "When an active sentence has an object + infinitive, the infinitive remains unchanged in passive.",
            "The object becomes the subject in passive voice."
        ]
    },
    {
        "question_id": "A2P_130",
        "questionType": "A2P",
        "activeSentence": "The principal would approve the proposal if required.",
        "question": "Which option is the grammatically correct passive voice form?",
        "options": [
            "The proposal would be approved by the principal if required.",
            "The proposal will be approved by the principal if required.",
            "The proposal would approved by the principal if required.",
            "The proposal is approved by the principal if required."
        ],
        "correctAnswer": "The proposal would be approved by the principal if required.",
        "explanation": [
            "Conditional sentences retain the modal 'would' in passive voice.",
            "Only the verb form changes to 'would be + past participle'."
        ]
    },
    {
        "question_id": "A2P_131",
        "questionType": "A2P",
        "activeSentence": "The committee announced the policy officially.",
        "question": "Which option is the grammatically correct passive voice form?",
        "options": [
            "The policy was announced officially.",
            "The policy has announced officially.",
            "The policy was being announced officially by the committee.",
            "The policy is announced officially."
        ],
        "correctAnswer": "The policy was announced officially.",
        "explanation": [
            "In passive voice, the agent can be omitted when it is unknown or unimportant.",
            "The simple past tense is correctly formed as 'was + past participle'."
        ]
    },
    {
        "question_id": "A2P_132",
        "questionType": "A2P",
        "activeSentence": "The manager saw the employee commit the error.",
        "question": "Which option is the grammatically correct passive voice form?",
        "options": [
            "The employee was seen to commit the error.",
            "The employee was seen commit the error.",
            "The employee is seen to commit the error.",
            "The employee was seeing to commit the error."
        ],
        "correctAnswer": "The employee was seen to commit the error.",
        "explanation": [
            "With verbs of perception, the infinitive 'to' is added in passive voice.",
            "The structure changes from 'saw someone do' to 'was seen to do'."
        ]
    },
    {
        "question_id": "A2P_133",
        "questionType": "A2P",
        "activeSentence": "The officer repaired the complaint quickly.",
        "question": "Which option is the grammatically correct passive voice form?",
        "options": [
            "The complaint got repaired quickly.",
            "The complaint was got repaired quickly.",
            "The complaint got repairing quickly.",
            "The complaint was repaired getting quickly."
        ],
        "correctAnswer": "The complaint got repaired quickly.",
        "explanation": [
            "The 'get' passive is an informal alternative to 'be' passive.",
            "'Got + past participle' correctly forms the passive structure."
        ]
    },
    {
        "question_id": "A2P_134",
        "questionType": "A2P",
        "activeSentence": "The supervisor expects the staff to complete the proposal.",
        "question": "Which option is the grammatically correct passive voice form?",
        "options": [
            "The staff are expected to complete the proposal.",
            "The staff is expected to complete the proposal.",
            "The staff were expected completing the proposal.",
            "The staff are expected completing the proposal."
        ],
        "correctAnswer": "The staff are expected to complete the proposal.",
        "explanation": [
            "Verbs like 'expect' form passive structures without mentioning the agent.",
            "The infinitive 'to complete' remains unchanged in passive voice."
        ]
    },
    {
        "question_id": "A2P_135",
        "questionType": "A2P",
        "activeSentence": "The authority announced the decision officially.",
        "question": "Which option is the grammatically correct passive voice form?",
        "options": [
            "The decision was announced officially.",
            "The decision has announced officially.",
            "The decision was being announced officially by the authority.",
            "The decision is announced officially."
        ],
        "correctAnswer": "The decision was announced officially.",
        "explanation": [
            "In passive voice, the agent can be omitted when it is unknown or unimportant.",
            "The simple past tense is correctly formed as 'was + past participle'."
        ]
    },
    {
        "question_id": "A2P_136",
        "questionType": "A2P",
        "activeSentence": "The board saw the employee commit the error.",
        "question": "Which option is the grammatically correct passive voice form?",
        "options": [
            "The employee was seen to commit the error.",
            "The employee was seen commit the error.",
            "The employee is seen to commit the error.",
            "The employee was seeing to commit the error."
        ],
        "correctAnswer": "The employee was seen to commit the error.",
        "explanation": [
            "With verbs of perception, the infinitive 'to' is added in passive voice.",
            "The structure changes from 'saw someone do' to 'was seen to do'."
        ]
    },
    {
        "question_id": "A2P_137",
        "questionType": "A2P",
        "activeSentence": "The administration repaired the issue quickly.",
        "question": "Which option is the grammatically correct passive voice form?",
        "options": [
            "The issue got repaired quickly.",
            "The issue was got repaired quickly.",
            "The issue got repairing quickly.",
            "The issue was repaired getting quickly."
        ],
        "correctAnswer": "The issue got repaired quickly.",
        "explanation": [
            "The 'get' passive is an informal alternative to 'be' passive.",
            "'Got + past participle' correctly forms the passive structure."
        ]
    },
    {
        "question_id": "A2P_138",
        "questionType": "A2P",
        "activeSentence": "The panel expects the staff to complete the matter.",
        "question": "Which option is the grammatically correct passive voice form?",
        "options": [
            "The staff are expected to complete the matter.",
            "The staff is expected to complete the matter.",
            "The staff were expected completing the matter.",
            "The staff are expected completing the matter."
        ],
        "correctAnswer": "The staff are expected to complete the matter.",
        "explanation": [
            "Verbs like 'expect' form passive structures without mentioning the agent.",
            "The infinitive 'to complete' remains unchanged in passive voice."
        ]
    },
    {
        "question_id": "A2P_139",
        "questionType": "A2P",
        "activeSentence": "The director announced the document officially.",
        "question": "Which option is the grammatically correct passive voice form?",
        "options": [
            "The document was announced officially.",
            "The document has announced officially.",
            "The document was being announced officially by the director.",
            "The document is announced officially."
        ],
        "correctAnswer": "The document was announced officially.",
        "explanation": [
            "In passive voice, the agent can be omitted when it is unknown or unimportant.",
            "The simple past tense is correctly formed as 'was + past participle'."
        ]
    },
    {
        "question_id": "A2P_140",
        "questionType": "A2P",
        "activeSentence": "The principal saw the employee commit the error.",
        "question": "Which option is the grammatically correct passive voice form?",
        "options": [
            "The employee was seen to commit the error.",
            "The employee was seen commit the error.",
            "The employee is seen to commit the error.",
            "The employee was seeing to commit the error."
        ],
        "correctAnswer": "The employee was seen to commit the error.",
        "explanation": [
            "With verbs of perception, the infinitive 'to' is added in passive voice.",
            "The structure changes from 'saw someone do' to 'was seen to do'."
        ]
    },
    {
        "question_id": "A2P_141",
        "questionType": "A2P",
        "activeSentence": "The committee repaired the policy quickly.",
        "question": "Which option is the grammatically correct passive voice form?",
        "options": [
            "The policy got repaired quickly.",
            "The policy was got repaired quickly.",
            "The policy got repairing quickly.",
            "The policy was repaired getting quickly."
        ],
        "correctAnswer": "The policy got repaired quickly.",
        "explanation": [
            "The 'get' passive is an informal alternative to 'be' passive.",
            "'Got + past participle' correctly forms the passive structure."
        ]
    },
    {
        "question_id": "A2P_142",
        "questionType": "A2P",
        "activeSentence": "The manager expects the staff to complete the report.",
        "question": "Which option is the grammatically correct passive voice form?",
        "options": [
            "The staff are expected to complete the report.",
            "The staff is expected to complete the report.",
            "The staff were expected completing the report.",
            "The staff are expected completing the report."
        ],
        "correctAnswer": "The staff are expected to complete the report.",
        "explanation": [
            "Verbs like 'expect' form passive structures without mentioning the agent.",
            "The infinitive 'to complete' remains unchanged in passive voice."
        ]
    },
    {
        "question_id": "A2P_143",
        "questionType": "A2P",
        "activeSentence": "The officer announced the complaint officially.",
        "question": "Which option is the grammatically correct passive voice form?",
        "options": [
            "The complaint was announced officially.",
            "The complaint has announced officially.",
            "The complaint was being announced officially by the officer.",
            "The complaint is announced officially."
        ],
        "correctAnswer": "The complaint was announced officially.",
        "explanation": [
            "In passive voice, the agent can be omitted when it is unknown or unimportant.",
            "The simple past tense is correctly formed as 'was + past participle'."
        ]
    },
    {
        "question_id": "A2P_144",
        "questionType": "A2P",
        "activeSentence": "The supervisor saw the employee commit the error.",
        "question": "Which option is the grammatically correct passive voice form?",
        "options": [
            "The employee was seen to commit the error.",
            "The employee was seen commit the error.",
            "The employee is seen to commit the error.",
            "The employee was seeing to commit the error."
        ],
        "correctAnswer": "The employee was seen to commit the error.",
        "explanation": [
            "With verbs of perception, the infinitive 'to' is added in passive voice.",
            "The structure changes from 'saw someone do' to 'was seen to do'."
        ]
    },
    {
        "question_id": "A2P_145",
        "questionType": "A2P",
        "activeSentence": "The authority repaired the decision quickly.",
        "question": "Which option is the grammatically correct passive voice form?",
        "options": [
            "The decision got repaired quickly.",
            "The decision was got repaired quickly.",
            "The decision got repairing quickly.",
            "The decision was repaired getting quickly."
        ],
        "correctAnswer": "The decision got repaired quickly.",
        "explanation": [
            "The 'get' passive is an informal alternative to 'be' passive.",
            "'Got + past participle' correctly forms the passive structure."
        ]
    },
    {
        "question_id": "A2P_146",
        "questionType": "A2P",
        "activeSentence": "The board expects the staff to complete the instructions.",
        "question": "Which option is the grammatically correct passive voice form?",
        "options": [
            "The staff are expected to complete the instructions.",
            "The staff is expected to complete the instructions.",
            "The staff were expected completing the instructions.",
            "The staff are expected completing the instructions."
        ],
        "correctAnswer": "The staff are expected to complete the instructions.",
        "explanation": [
            "Verbs like 'expect' form passive structures without mentioning the agent.",
            "The infinitive 'to complete' remains unchanged in passive voice."
        ]
    },
    {
        "question_id": "A2P_147",
        "questionType": "A2P",
        "activeSentence": "The administration announced the issue officially.",
        "question": "Which option is the grammatically correct passive voice form?",
        "options": [
            "The issue was announced officially.",
            "The issue has announced officially.",
            "The issue was being announced officially by the administration.",
            "The issue is announced officially."
        ],
        "correctAnswer": "The issue was announced officially.",
        "explanation": [
            "In passive voice, the agent can be omitted when it is unknown or unimportant.",
            "The simple past tense is correctly formed as 'was + past participle'."
        ]
    },
    {
        "question_id": "A2P_148",
        "questionType": "A2P",
        "activeSentence": "The panel saw the employee commit the error.",
        "question": "Which option is the grammatically correct passive voice form?",
        "options": [
            "The employee was seen to commit the error.",
            "The employee was seen commit the error.",
            "The employee is seen to commit the error.",
            "The employee was seeing to commit the error."
        ],
        "correctAnswer": "The employee was seen to commit the error.",
        "explanation": [
            "With verbs of perception, the infinitive 'to' is added in passive voice.",
            "The structure changes from 'saw someone do' to 'was seen to do'."
        ]
    },
    {
        "question_id": "A2P_149",
        "questionType": "A2P",
        "activeSentence": "The director repaired the document quickly.",
        "question": "Which option is the grammatically correct passive voice form?",
        "options": [
            "The document got repaired quickly.",
            "The document was got repaired quickly.",
            "The document got repairing quickly.",
            "The document was repaired getting quickly."
        ],
        "correctAnswer": "The document got repaired quickly.",
        "explanation": [
            "The 'get' passive is an informal alternative to 'be' passive.",
            "'Got + past participle' correctly forms the passive structure."
        ]
    },
    {
        "question_id": "A2P_150",
        "questionType": "A2P",
        "activeSentence": "The principal expects the staff to complete the notice.",
        "question": "Which option is the grammatically correct passive voice form?",
        "options": [
            "The staff are expected to complete the notice.",
            "The staff is expected to complete the notice.",
            "The staff were expected completing the notice.",
            "The staff are expected completing the notice."
        ],
        "correctAnswer": "The staff are expected to complete the notice.",
        "explanation": [
            "Verbs like 'expect' form passive structures without mentioning the agent.",
            "The infinitive 'to complete' remains unchanged in passive voice."
        ]
    }
]