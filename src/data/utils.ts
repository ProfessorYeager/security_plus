import { domains } from './domains';
import { questions as extraQuestions } from './questions';
import { questionBank } from './questions_bank';
import { Question } from '../types';

export const getAllQuestions = (): Question[] => {
    const allQuestions: Question[] = [];

    // 1. Get questions from Domains (Inline)
    domains.forEach(domain => {
        domain.objectives.forEach(objective => {
            objective.concepts.forEach(concept => {
                if (concept.quizQuestions) {
                    allQuestions.push(...concept.quizQuestions);
                }
            });
        });
    });

    // 2. Get questions from standalone file (PBQs)
    allQuestions.push(...extraQuestions);

    // 3. Get questions from the new large bank
    allQuestions.push(...questionBank);

    return allQuestions;
};

export const getQuestionsByDomain = (domainId: string): Question[] => {
    return getAllQuestions().filter(q => q.domainId === domainId);
};
