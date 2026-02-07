export interface VideoResource {
    title: string;
    url: string;
    duration?: string; // "90s" or similar if known
}

export interface Concept {
    id: string;
    title: string;
    summary: string;
    video?: VideoResource | null;
}

export interface Objective {
    id: string; // e.g., "1.1"
    domainId: string;
    title: string;
    concepts: Concept[];
}

export interface Domain {
    id: string; // e.g., "1.0"
    title: string;
    weight: number; // percentage
    objectives: Objective[];
}

export interface QuestionOption {
    id: string;
    text: string;
}

export interface Question {
    id: string;
    domainId: string;
    objectiveId: string; // The specific objective this tests
    text: string;
    options: QuestionOption[];
    correctOptionId: string;
    explanation: string;
}

export interface UserProgress {
    completedConcepts: string[]; // IDs of concepts marked as read
    quizHistory: {
        quizId: string;
        score: number;
        total: number;
        timestamp: number;
        domainId?: string;
    }[];
    streak: {
        current: number;
        lastLoginDate: string; // ISO date string
    };
    xp: number;
}
