export interface VideoResource {
    title: string;
    url: string;
    duration?: string; // "90s" or similar if known
}

export interface Concept {
    id: string;
    title: string;
    summary: string;
    details?: string; // More in-depth explanation
    video?: VideoResource | null;
    quizQuestions?: Question[]; // Mini-quizzes per concept
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

export type QuestionType = 'MULTIPLE_CHOICE' | 'MATCHING' | 'ORDERING';

export interface QuestionOption {
    id: string;
    text: string;
}

export interface DraggableItem {
    id: string;
    text: string;
    // For matching: the ID of the zone it belongs to (correct answer)
    matchId?: string;
}

export interface DropZone {
    id: string;
    label: string;
}

export interface Question {
    id: string;
    domainId: string;
    objectiveId: string;
    type: QuestionType; // default to 'MULTIPLE_CHOICE' if undefined for backward compat
    text: string;
    options?: QuestionOption[]; // For Multiple Choice
    correctOptionId?: string;   // For Multiple Choice

    // For PBQs
    draggableItems?: DraggableItem[];
    dropZones?: DropZone[]; // For Matching (buckets)
    correctOrder?: string[]; // For Ordering (list of item IDs in correct order)

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
