import { Question } from '../types';

export const questions: Question[] = [
    {
        id: "q_1",
        domainId: "1.0",
        objectiveId: "1.2",
        text: "Which of the following concepts guarantees that data has not been altered during transmission?",
        options: [
            { id: "opt_1", text: "Confidentiality" },
            { id: "opt_2", text: "Integrity" },
            { id: "opt_3", text: "Availability" },
            { id: "opt_4", text: "Non-repudiation" }
        ],
        correctOptionId: "opt_2",
        explanation: "Integrity ensures that data remains accurate and consistent and has not been altered, whether during transmission (data in transit) or storage (data at rest). Hashing is a common method to enforce integrity."
    },
    {
        id: "q_2",
        domainId: "1.0",
        objectiveId: "aaa-framework",
        text: "A user is logging into a system using a smart card and a PIN. Which factor of authentication does the PIN represent?",
        options: [
            { id: "opt_1", text: "Something you are" },
            { id: "opt_2", text: "Something you have" },
            { id: "opt_3", text: "Something you know" },
            { id: "opt_4", text: "Somewhere you are" }
        ],
        correctOptionId: "opt_3",
        explanation: "The PIN is 'Something you know'. The smart card is 'Something you have'. Combining them creates Multi-Factor Authentication."
    },
    {
        id: "q_3",
        domainId: "3.0",
        objectiveId: "dmz",
        text: "Which network zone allows external users to access specific services like web or email servers while protecting the internal network?",
        options: [
            { id: "opt_1", text: "Intranet" },
            { id: "opt_2", text: "DMZ / Screened Subnet" },
            { id: "opt_3", text: "VLAN" },
            { id: "opt_4", text: "VPN" }
        ],
        correctOptionId: "opt_2",
        explanation: "A DMZ (Demilitarized Zone) or Screened Subnet acts as a buffer zone between the public internet and the private internal network."
    }
];
