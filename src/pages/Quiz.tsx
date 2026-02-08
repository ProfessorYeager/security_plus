import { useState, useEffect, useMemo } from 'react';
import { useStore } from '../store/useStore';
import { getAllQuestions } from '../data/utils';
import { Question } from '../types';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { ProgressBar } from '../components/ui/ProgressBar';
import { CheckCircle, XCircle, Clock, ArrowRight, RotateCcw, BarChart3 } from 'lucide-react';
import clsx from 'clsx';

type QuizState = 'MENU' | 'PLAYING' | 'RESULTS';

export const Quiz = () => {
    const [gameState, setGameState] = useState<QuizState>('MENU');
    const [currentQuestions, setCurrentQuestions] = useState<Question[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const [isAnswered, setIsAnswered] = useState(false);
    const [timer, setTimer] = useState(0); // seconds
    // Track correct answers by domain for detailed analytics
    const [domainScores, setDomainScores] = useState<Record<string, { correct: number; total: number }>>({});

    const { addQuizResult, addXp } = useStore();

    const startQuiz = (mode: 'QUICK' | 'FULL') => {
        const allQ = getAllQuestions();
        const count = mode === 'QUICK' ? 10 : 90;
        // Shuffle and slice
        const shuffled = [...allQ].sort(() => 0.5 - Math.random()).slice(0, count);

        setCurrentQuestions(shuffled);
        setCurrentIndex(0);
        setScore(0);
        setDomainScores({});
        setGameState('PLAYING');
        setTimer(0);
        setIsAnswered(false);
        setSelectedOption(null);
    };

    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (gameState === 'PLAYING') {
            interval = setInterval(() => setTimer(t => t + 1), 1000);
        }
        return () => clearInterval(interval);
    }, [gameState]);

    const handleAnswer = () => {
        if (!selectedOption || isAnswered) return;

        const currentQ = currentQuestions[currentIndex];
        const isCorrect = selectedOption === currentQ.correctOptionId;

        if (isCorrect) {
            setScore(s => s + 1);
        }

        // Update domain stats
        setDomainScores(prev => {
            const domainId = currentQ.domainId;
            const currentStats = prev[domainId] || { correct: 0, total: 0 };
            return {
                ...prev,
                [domainId]: {
                    correct: currentStats.correct + (isCorrect ? 1 : 0),
                    total: currentStats.total + 1
                }
            };
        });

        setIsAnswered(true);
    };

    const nextQuestion = () => {
        if (currentIndex < currentQuestions.length - 1) {
            setCurrentIndex(i => i + 1);
            setIsAnswered(false);
            setSelectedOption(null);
        } else {
            finishQuiz();
        }
    };

    const finishQuiz = () => {
        setGameState('RESULTS');
        addQuizResult({
            quizId: Date.now().toString(),
            score,
            total: currentQuestions.length,
            timestamp: Date.now()
        });
        // XP reward (10 per correct, plus bonus for completion)
        addXp((score * 10) + 50);
    };

    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    };

    if (gameState === 'MENU') {
        const availableQuestionCount = getAllQuestions().length;

        return (
            <div className="max-w-2xl mx-auto space-y-8 animate-fade-in text-center">
                <h1 className="text-4xl font-bold text-white mb-4">Live Fire Exercise</h1>
                <Card className="p-8 border-t-4 border-t-cyber-green">
                    <h2 className="text-2xl font-bold mb-4 text-white">Select Simulation Protocol</h2>
                    <p className="text-gray-400 mb-8">Choose your engagement parameters. <br /> <span className="text-xs text-gray-500">Total Intel Available: {availableQuestionCount} Questions</span></p>

                    <div className="flex flex-col gap-4 sm:flex-row justify-center">
                        <Button variant="primary" size="lg" onClick={() => startQuiz('QUICK')}>
                            Quick Skirmish (10 Qs)
                        </Button>
                        <Button variant="outline" size="lg" onClick={() => startQuiz('FULL')} disabled={availableQuestionCount < 10}>
                            Full Simulation (90 Qs)
                        </Button>
                    </div>
                    {availableQuestionCount < 90 && (
                        <p className="mt-4 text-xs text-yellow-500/80">
                            * Note: Full Simulation will use all {availableQuestionCount} available questions until database is fully populated.
                        </p>
                    )}
                </Card>
            </div>
        );
    }

    if (gameState === 'RESULTS') {
        const percentage = Math.round((score / currentQuestions.length) * 100);

        return (
            <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-white mb-4">Mission Debrief</h1>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Main Score Card */}
                    <Card className="p-8 border-t-4 border-t-cyber-blue md:col-span-1 text-center flex flex-col justify-center">
                        <div className="text-6xl font-bold text-white mb-2">{percentage}%</div>
                        <div className="text-gray-400 mb-6">Accuracy Rating</div>

                        <div className="flex flex-col gap-4 text-sm">
                            <div className="flex justify-between border-b border-gray-700/50 pb-2">
                                <span className="text-gray-500">Correct</span>
                                <span className="font-bold text-cyber-green">{score}</span>
                            </div>
                            <div className="flex justify-between border-b border-gray-700/50 pb-2">
                                <span className="text-gray-500">Total</span>
                                <span className="font-bold text-white">{currentQuestions.length}</span>
                            </div>
                            <div className="flex justify-between border-b border-gray-700/50 pb-2">
                                <span className="text-gray-500">Time</span>
                                <span className="font-bold text-white">{formatTime(timer)}</span>
                            </div>
                        </div>
                    </Card>

                    {/* Domain Breakdown */}
                    <Card className="p-8 md:col-span-2">
                        <div className="flex items-center gap-2 mb-6">
                            <BarChart3 className="text-cyber-green" />
                            <h3 className="text-xl font-bold text-white">Domain Performance</h3>
                        </div>

                        <div className="space-y-4">
                            {Object.entries(domainScores).map(([domainId, stats]) => {
                                const domainPercent = Math.round((stats.correct / stats.total) * 100);
                                return (
                                    <div key={domainId} className="space-y-1">
                                        <div className="flex justify-between text-sm">
                                            <span className="text-gray-300">Domain {domainId}</span>
                                            <span className={clsx("font-bold", domainPercent >= 80 ? "text-cyber-green" : domainPercent >= 70 ? "text-yellow-400" : "text-red-400")}>
                                                {domainPercent}% ({stats.correct}/{stats.total})
                                            </span>
                                        </div>
                                        <ProgressBar value={domainPercent} color={domainPercent >= 80 ? "green" : domainPercent >= 70 ? "yellow" : "red"} className="h-2" />
                                    </div>
                                );
                            })}
                            {Object.keys(domainScores).length === 0 && (
                                <p className="text-gray-500 text-sm">No domain data available.</p>
                            )}
                        </div>
                    </Card>
                </div>

                <div className="flex justify-center">
                    <Button variant="primary" size="lg" onClick={() => setGameState('MENU')} icon={<RotateCcw />}>
                        Return to Base
                    </Button>
                </div>
            </div>
        );
    }

    const currentQ = currentQuestions[currentIndex];

    return (
        <div className="max-w-3xl mx-auto space-y-6 animate-fade-in">
            {/* Header Info */}
            <div className="flex justify-between items-center text-sm text-gray-400">
                <div>Question {currentIndex + 1} of {currentQuestions.length}</div>
                <div className="flex items-center gap-2 font-mono">
                    <Clock size={16} />
                    {formatTime(timer)}
                </div>
            </div>

            <ProgressBar
                value={(currentIndex / currentQuestions.length) * 100}
                color="blue"
                className="h-1"
            />

            <Card className="p-6 md:p-8">
                <h2 className="text-xl font-bold text-white mb-6 leading-relaxed">
                    {currentQ.text}
                </h2>

                <div className="space-y-3">
                    {currentQ.options.map(option => {
                        const isSelected = selectedOption === option.id;
                        const isCorrect = option.id === currentQ.correctOptionId;
                        const showCorrect = isAnswered && isCorrect;
                        const showWrong = isAnswered && isSelected && !isCorrect;

                        let variant = "outline";
                        if (showCorrect) variant = "success"; // Will use primary/green style
                        if (showWrong) variant = "danger";
                        if (isSelected && !isAnswered) variant = "primary"; // Selected state

                        return (
                            <button
                                key={option.id}
                                onClick={() => !isAnswered && setSelectedOption(option.id)}
                                disabled={isAnswered}
                                className={clsx(
                                    "w-full text-left p-4 rounded-lg border transition-all duration-200 flex justify-between items-center",
                                    showCorrect
                                        ? "bg-cyber-green/10 border-cyber-green text-cyber-green"
                                        : showWrong
                                            ? "bg-red-500/10 border-red-500 text-red-400"
                                            : isSelected
                                                ? "bg-cyber-blue/10 border-cyber-blue text-white"
                                                : "border-white/10 hover:bg-white/5 text-gray-300"
                                )}
                            >
                                <span>{option.text}</span>
                                {showCorrect && <CheckCircle size={20} />}
                                {showWrong && <XCircle size={20} />}
                            </button>
                        );
                    })}
                </div>

                {isAnswered && (
                    <div className="mt-6 pt-6 border-t border-white/10 animate-fade-in">
                        <h3 className="font-bold text-white mb-2">Intel Analysis</h3>
                        <p className="text-gray-400 leading-relaxed mb-4">
                            {currentQ.explanation}
                        </p>
                        <div className="flex justify-end">
                            <Button onClick={nextQuestion} icon={<ArrowRight />}>
                                {currentIndex < currentQuestions.length - 1 ? "Next Objective" : "Finish Debrief"}
                            </Button>
                        </div>
                    </div>
                )}

                {!isAnswered && (
                    <div className="mt-8 flex justify-end">
                        <Button
                            onClick={handleAnswer}
                            disabled={!selectedOption}
                            size="lg"
                        >
                            Confirm Selection
                        </Button>
                    </div>
                )}
            </Card>
        </div>
    );
};
