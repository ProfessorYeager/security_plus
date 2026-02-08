import { domains } from './domains';
import { Question } from '../types';

export const getAllQuestions = (): Question[] => {
    const allQuestions: Question[] = [];

    domains.forEach(domain => {
        domain.objectives.forEach(objective => {
            objective.concepts.forEach(concept => {
                if (concept.quizQuestions) {
                    allQuestions.push(...concept.quizQuestions);
                }
            });
        });
    });

    return allQuestions;
};

export const getQuestionsByDomain = (domainId: string): Question[] => {
    return getAllQuestions().filter(q => q.domainId === domainId);
};
