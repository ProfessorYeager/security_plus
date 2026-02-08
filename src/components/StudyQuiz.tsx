import React, { useState } from 'react';
import { Question } from '../types';
import { Button } from './ui/Button';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X, ArrowRight, RotateCcw } from 'lucide-react';

interface StudyQuizProps {
    questions: Question[];
    onComplete: () => void;
}

export const StudyQuiz: React.FC<StudyQuizProps> = ({ questions, onComplete }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [score, setScore] = useState(0);
    const [showResults, setShowResults] = useState(false);

    const currentQuestion = questions[currentIndex];

    const handleSelectAction = (optionId: string) => {
        if (isSubmitted) return;
        setSelectedOptionId(optionId);
    };

    const handleSubmit = () => {
        if (!selectedOptionId) return;
        setIsSubmitted(true);
        if (selectedOptionId === currentQuestion.correctOptionId) {
            setScore(s => s + 1);
        }
    };

    const handleNext = () => {
        if (currentIndex < questions.length - 1) {
            setCurrentIndex(i => i + 1);
            setSelectedOptionId(null);
            setIsSubmitted(false);
        } else {
            setShowResults(true);
        }
    };

    const handleReset = () => {
        setCurrentIndex(0);
        setSelectedOptionId(null);
        setIsSubmitted(false);
        setScore(0);
        setShowResults(false);
    };

    if (showResults) {
        return (
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center space-y-4">
                <h3 className="text-xl font-bold text-white">Knowledge Check Complete</h3>
                <div className="text-4xl font-bold text-cyber-green">
                    {score} / {questions.length}
                </div>
                <p className="text-gray-400">
                    {score === questions.length
                        ? "Perfect! You've mastered this concept."
                        : "Good effort. Review the content and try again for a perfect score."}
                </p>
                <div className="flex gap-3 justify-center pt-2">
                    <Button variant="outline" onClick={handleReset} icon={<RotateCcw size={18} />}>
                        Retry
                    </Button>
                    <Button variant="primary" onClick={onComplete}>
                        Continue Mission
                    </Button>
                </div>
            </div>
        );
    }

    return (
        <div className="space-y-6 py-4">
            <div className="flex justify-between items-center text-sm mb-2">
                <span className="text-cyber-green font-mono">QUESTION {currentIndex + 1} OF {questions.length}</span>
                <span className="text-gray-500">{Math.round(((currentIndex + 1) / questions.length) * 100)}% Complete</span>
            </div>

            <h3 className="text-lg font-medium text-white leading-relaxed">
                {currentQuestion.text}
            </h3>

            <div className="grid grid-cols-1 gap-3">
                {currentQuestion.options.map((option) => {
                    const isSelected = selectedOptionId === option.id;
                    const isCorrect = isSubmitted && option.id === currentQuestion.correctOptionId;
                    const isWrong = isSubmitted && isSelected && option.id !== currentQuestion.correctOptionId;

                    return (
                        <button
                            key={option.id}
                            onClick={() => handleSelectAction(option.id)}
                            disabled={isSubmitted}
                            className={`p-4 rounded-lg border text-left transition-all duration-200 ${isCorrect
                                    ? 'bg-cyber-green/20 border-cyber-green text-cyber-green'
                                    : isWrong
                                        ? 'bg-red-500/20 border-red-500 text-red-500'
                                        : isSelected
                                            ? 'bg-cyber-blue/20 border-cyber-blue text-cyber-blue'
                                            : 'bg-white/5 border-white/10 text-gray-300 hover:bg-white/10'
                                }`}
                        >
                            <div className="flex items-center gap-3">
                                <span className="w-6 h-6 rounded-full border border-current flex items-center justify-center text-xs font-bold shrink-0">
                                    {option.id.toUpperCase()}
                                </span>
                                <span className="flex-grow">{option.text}</span>
                                {isCorrect && <Check size={18} />}
                                {isWrong && <X size={18} />}
                            </div>
                        </button>
                    );
                })}
            </div>

            <AnimatePresence>
                {isSubmitted && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`p-4 rounded-lg ${selectedOptionId === currentQuestion.correctOptionId
                                ? 'bg-cyber-green/10 text-cyber-green/90'
                                : 'bg-red-500/10 text-red-400'
                            }`}
                    >
                        <p className="text-sm">
                            <span className="font-bold uppercase mr-2">
                                {selectedOptionId === currentQuestion.correctOptionId ? 'Correct' : 'Incorrect'}
                            </span>
                            {currentQuestion.explanation}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="flex justify-end pt-2">
                {!isSubmitted ? (
                    <Button
                        variant="primary"
                        disabled={!selectedOptionId}
                        onClick={handleSubmit}
                    >
                        Check Answer
                    </Button>
                ) : (
                    <Button
                        variant="primary"
                        onClick={handleNext}
                        icon={<ArrowRight size={18} />}
                    >
                        {currentIndex < questions.length - 1 ? 'Next Question' : 'Finish Quiz'}
                    </Button>
                )}
            </div>
        </div>
    );
};
