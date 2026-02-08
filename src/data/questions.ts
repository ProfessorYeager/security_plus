import { Question } from '../types';

export const questions: Question[] = [
    {
        id: "q_1",
        domainId: "1.0",
        objectiveId: "1.2",
        type: "MULTIPLE_CHOICE",
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
        type: "MULTIPLE_CHOICE",
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
        type: "MULTIPLE_CHOICE",
        text: "Which network zone allows external users to access specific services like web or email servers while protecting the internal network?",
        options: [
            { id: "opt_1", text: "Intranet" },
            { id: "opt_2", text: "DMZ / Screened Subnet" },
            { id: "opt_3", text: "VLAN" },
            { id: "opt_4", text: "VPN" }
        ],
        correctOptionId: "opt_2",
        explanation: "A DMZ (Demilitarized Zone) or Screened Subnet acts as a buffer zone between the public internet and the private internal network."
    },
    {
        id: "q_pbq_1",
        domainId: "3.0",
        objectiveId: "ports",
        type: "MATCHING",
        text: "Match the following Port Numbers to their correct Protocols.",
        dropZones: [
            { id: "zone_http", label: "HTTP" },
            { id: "zone_https", label: "HTTPS" },
            { id: "zone_ssh", label: "SSH" },
            { id: "zone_rdp", label: "RDP" }
        ],
        draggableItems: [
            { id: "item_80", text: "Port 80", matchId: "zone_http" },
            { id: "item_443", text: "Port 443", matchId: "zone_https" },
            { id: "item_22", text: "Port 22", matchId: "zone_ssh" },
            { id: "item_3389", text: "Port 3389", matchId: "zone_rdp" }
        ],
        correctOptionId: "CORRECT",
        explanation: "HTTP = 80, HTTPS = 443, SSH = 22, RDP = 3389. Memorizing these common ports is essential for the exam."
    },
    {
        id: "q_pbq_2",
        domainId: "4.0",
        objectiveId: "incident_response",
        type: "ORDERING",
        text: "Place the steps of the Incident Response Process (PICERL) in the correct order.",
        options: [
            { id: "p2", text: "Identification" },
            { id: "p4", text: "Eradication" },
            { id: "p1", text: "Preparation" },
            { id: "p6", text: "Lessons Learned" },
            { id: "p3", text: "Containment" },
            { id: "p5", text: "Recovery" }
        ],
        correctOrder: ["p1", "p2", "p3", "p4", "p5", "p6"],
        correctOptionId: "CORRECT",
        explanation: "The correct order is Preparation, Identification, Containment, Eradication, Recovery, and Lessons Learned (PICERL)."
    }
];
