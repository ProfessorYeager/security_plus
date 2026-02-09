import { UserProgress, Domain } from '../types';

export const calculateLevel = (xp: number): number => {
    // Simple formula: Level = sqrt(xp / 100) + 1
    // 0 XP = Level 1
    // 100 XP = Level 2
    // 400 XP = Level 3
    // 900 XP = Level 4
    return Math.floor(Math.sqrt(xp / 100)) + 1;
};

export const getLevelProgress = (xp: number) => {
    const currentLevel = calculateLevel(xp);
    const nextLevel = currentLevel + 1;

    // XP needed for current level
    // (L-1)^2 * 100
    const currentLevelBaseXP = Math.pow(currentLevel - 1, 2) * 100;

    // XP needed for next level
    // (L)^2 * 100
    const nextLevelBaseXP = Math.pow(currentLevel, 2) * 100;

    const xpIntoLevel = xp - currentLevelBaseXP;
    const xpNeededForLevel = nextLevelBaseXP - currentLevelBaseXP;

    const progressPercent = Math.min(100, Math.max(0, (xpIntoLevel / xpNeededForLevel) * 100));

    return {
        currentLevel,
        nextLevel,
        progressPercent,
        xpIntoLevel,
        xpNeededForLevel,
        totalXp: xp
    };
};

export interface DomainPerformance {
    domainId: string;
    domainTitle: string;
    totalQuestions: number;
    correctAnswers: number;
    scorePercentage: number;
    status: 'mastered' | 'learning' | 'needs_focus' | 'unattempted';
    conceptCoverage: number; // Percentage of concepts completed
}

export const getDomainPerformance = (
    userProgress: UserProgress,
    allDomains: Domain[]
): DomainPerformance[] => {
    return allDomains.map(domain => {
        // Filter quiz history for this domain
        // defined loosely by checking if the quiz result tags match or just aggregating all logic
        // For now, let's assume quizHistory has domainId if it was a domain-specific quiz
        // OR we can't easily track per domain unless we stored it.
        // Looking at types/index.ts, quizHistory has optional domainId.

        const domainQuizzes = userProgress.quizHistory.filter(q => q.domainId === domain.id);

        // If we want to be more robust, we might need to change how we track stats, 
        // but for now let's rely on explicit domain quizzes

        let totalQuestions = 0;
        let totalScore = 0;

        domainQuizzes.forEach(q => {
            totalQuestions += q.total;
            totalScore += q.score;
        });

        const scorePercentage = totalQuestions > 0 ? (totalScore / totalQuestions) * 100 : 0;

        // Status logic
        let status: DomainPerformance['status'] = 'unattempted';
        if (totalQuestions > 0) {
            if (scorePercentage >= 80) status = 'mastered';
            else if (scorePercentage >= 60) status = 'learning';
            else status = 'needs_focus';
        }

        // Concept coverage
        const domainConceptIds = domain.objectives.flatMap(obj => obj.concepts.map(c => c.id));
        const completedCount = domainConceptIds.filter(id => userProgress.completedConcepts.includes(id)).length;
        const conceptCoverage = domainConceptIds.length > 0 ? (completedCount / domainConceptIds.length) * 100 : 0;

        return {
            domainId: domain.id,
            domainTitle: domain.title,
            totalQuestions,
            correctAnswers: totalScore,
            scorePercentage: Math.round(scorePercentage),
            status,
            conceptCoverage: Math.round(conceptCoverage)
        };
    });
};

export interface Achievement {
    id: string;
    title: string;
    description: string;
    icon: string; // Lucide icon name or emoji
    unlocked: boolean;
    progress?: string; // e.g. "3/5"
}

export const getAchievements = (userProgress: UserProgress): Achievement[] => {
    return [
        {
            id: 'streak_master',
            title: 'Streak Master',
            description: 'Maintain a 3-day login streak',
            icon: '🔥',
            unlocked: userProgress.streak.current >= 3,
            progress: `${Math.min(3, userProgress.streak.current)}/3 Days`
        },
        {
            id: 'quiz_whiz',
            title: 'Quiz Whiz',
            description: 'Score 100% on any quiz',
            icon: '🎯',
            unlocked: userProgress.quizHistory.some(q => q.score === q.total && q.total > 0),
        },
        {
            id: 'dedicated',
            title: 'Dedicated Agent',
            description: 'Earn 1000 XP',
            icon: '⭐',
            unlocked: userProgress.xp >= 1000,
            progress: `${Math.min(1000, userProgress.xp)}/1000 XP`
        },
        {
            id: 'scholar',
            title: 'Scholar',
            description: 'Complete 5 learning concepts',
            icon: '📚',
            unlocked: userProgress.completedConcepts.length >= 5,
            progress: `${Math.min(5, userProgress.completedConcepts.length)}/5 Concepts`
        },
        {
            id: 'veteran',
            title: 'Veteran',
            description: 'Complete 10 Simulation Quizzes',
            icon: '🎖️',
            unlocked: userProgress.quizHistory.length >= 10,
            progress: `${Math.min(10, userProgress.quizHistory.length)}/10 Quizzes`
        }
    ];
};
