import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { UserProgress } from '../types';

interface StoreState extends UserProgress {
    // Actions
    toggleConceptComplete: (conceptId: string) => void;
    addQuizResult: (result: UserProgress['quizHistory'][0]) => void;
    updateStreak: () => void;
    addXP: (amount: number) => void;
}

const INITIAL_STATE: UserProgress = {
    completedConcepts: [],
    quizHistory: [],
    streak: {
        current: 0,
        lastLoginDate: '',
    },
    xp: 0,
};

export const useStore = create<StoreState>()(
    persist(
        (set, get) => ({
            ...INITIAL_STATE,

            toggleConceptComplete: (conceptId) => set((state) => {
                const isCompleted = state.completedConcepts.includes(conceptId);
                const newCompleted = isCompleted
                    ? state.completedConcepts.filter(id => id !== conceptId)
                    : [...state.completedConcepts, conceptId];

                // Award XP for learning
                const xpGain = isCompleted ? -10 : 10;

                return {
                    completedConcepts: newCompleted,
                    xp: Math.max(0, state.xp + xpGain)
                };
            }),

            addQuizResult: (result) => set((state) => ({
                quizHistory: [...state.quizHistory, result],
                xp: state.xp + (result.score * 10) // 10 XP per correct point equivalent? Or just custom logic
            })),

            addXP: (amount) => set((state) => ({
                xp: state.xp + amount
            })),

            updateStreak: () => set((state) => {
                const today = new Date().toISOString().split('T')[0];
                const lastLogin = state.streak.lastLoginDate;

                if (lastLogin === today) return state; // Already logged in today

                const yesterday = new Date();
                yesterday.setDate(yesterday.getDate() - 1);
                const yesterdayStr = yesterday.toISOString().split('T')[0];

                if (lastLogin === yesterdayStr) {
                    // Continue streak
                    return {
                        streak: {
                            current: state.streak.current + 1,
                            lastLoginDate: today
                        }
                    };
                } else {
                    // Reset streak
                    return {
                        streak: {
                            current: 1,
                            lastLoginDate: today
                        }
                    };
                }
            }),
        }),
        {
            name: 'security-plus-storage',
        }
    )
);
