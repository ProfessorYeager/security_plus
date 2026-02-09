import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../store/useStore';
import { getAllQuestions } from '../data/utils';
import { Question } from '../types';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { ProgressBar } from '../components/ui/ProgressBar';
import { CheckCircle, XCircle, Clock, ArrowRight, RotateCcw, BarChart3, Flag, LayoutGrid, FileCheck, Target, BrainCircuit, Gamepad2 } from 'lucide-react';
import { MatchingQuestion } from '../components/pbq/MatchingQuestion';
import clsx from 'clsx';

type QuizState = 'MENU' | 'PLAYING' | 'RESULTS';

export const Quiz = () => {
    const [gameState, setGameState] = useState<QuizState>('MENU');
    const [currentQuestions, setCurrentQuestions] = useState<Question[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [score, setScore] = useState(0);

    // State for MC answers: questionId -> optionId
    const [mcAnswers, setMcAnswers] = useState<Record<string, string>>({});

    // State for PBQ answers: questionId -> { zoneId: [itemIds] }
    const [pbqAnswers, setPbqAnswers] = useState<Record<string, Record<string, string[]>>>({});

    const [isAnswered, setIsAnswered] = useState(false); // For "Show Answer" immediate mode (Quick Skirmish)
    const [timer, setTimer] = useState(0); // seconds
    const [timeLeft, setTimeLeft] = useState(90 * 60); // 90 minutes for full exam
    const [gameMode, setGameMode] = useState<'QUICK' | 'FULL'>('QUICK');
    const [flaggedQuestions, setFlaggedQuestions] = useState<Set<string>>(new Set());
    const [showNavigator, setShowNavigator] = useState(false);

    // Track correct answers by domain for detailed analytics
    const [domainScores, setDomainScores] = useState<Record<string, { correct: number; total: number }>>({});

    const { addQuizResult, addXP } = useStore();

    const startQuiz = (mode: 'QUICK' | 'FULL') => {
        const allQ = getAllQuestions();
        const count = mode === 'QUICK' ? 10 : 90;
        // Shuffle and slice
        const shuffled = [...allQ].sort(() => 0.5 - Math.random()).slice(0, count);

        setCurrentQuestions(shuffled);
        setCurrentIndex(0);
        setScore(0);
        setDomainScores({});
        setMcAnswers({});
        setPbqAnswers({});
        setFlaggedQuestions(new Set());
        setGameState('PLAYING');
        setGameMode(mode);
        setTimer(0);
        setTimeLeft(90 * 60);
        setIsAnswered(false);
        setShowNavigator(false);
    };

    // Timer Logic
    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (gameState === 'PLAYING') {
            interval = setInterval(() => {
                setTimer(t => t + 1);
                if (gameMode === 'FULL') {
                    setTimeLeft(t => {
                        if (t <= 1) {
                            finishQuiz();
                            return 0;
                        }
                        return t - 1;
                    });
                }
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [gameState, gameMode]);

    const handleMcSelect = (optionId: string) => {
        if (gameMode === 'QUICK' && isAnswered) return;
        setMcAnswers(prev => ({ ...prev, [currentQuestions[currentIndex].id]: optionId }));
    };

    const handlePbqUpdate = (data: Record<string, string[]>) => {
        if (gameMode === 'QUICK' && isAnswered) return;
        setPbqAnswers(prev => ({ ...prev, [currentQuestions[currentIndex].id]: data }));
    };

    const handleConfirmAnswer = () => {
        // Only for Quick Mode immediate feedback
        if (gameMode === 'QUICK') {
            const currentQ = currentQuestions[currentIndex];
            let isCorrect = false;

            if (currentQ.type === 'MATCHING') {
                // Grade matching PBQ
                const userAns = pbqAnswers[currentQ.id];
                if (!userAns) return;

                // Assume strictly correct for now: every item must be in correct zone
                const allItems = currentQ.draggableItems || [];
                // Check if every item is in the correct zone
                isCorrect = allItems.every(item => {
                    // Find which zone user put it in
                    const userZone = Object.keys(userAns).find(zId => userAns[zId].includes(item.id));
                    return userZone === item.matchId;
                });
            } else {
                // Multiple Choice
                const userAns = mcAnswers[currentQ.id];
                if (!userAns) return;
                isCorrect = userAns === currentQ.correctOptionId;
            }

            if (isCorrect) setScore(s => s + 1);

            // Update stats
            setDomainScores(prev => {
                const domainId = currentQ.domainId;
                const stats = prev[domainId] || { correct: 0, total: 0 };
                return {
                    ...prev,
                    [domainId]: { correct: stats.correct + (isCorrect ? 1 : 0), total: stats.total + 1 }
                };
            });

            setIsAnswered(true);
        } else {
            // Full Mode: Just move next
            nextQuestion();
        }
    };

    const toggleFlag = () => {
        const qId = currentQuestions[currentIndex].id;
        setFlaggedQuestions(prev => {
            const next = new Set(prev);
            if (next.has(qId)) next.delete(qId);
            else next.add(qId);
            return next;
        });
    };

    const nextQuestion = () => {
        if (currentIndex < currentQuestions.length - 1) {
            setCurrentIndex(i => i + 1);
            setIsAnswered(false);
        } else {
            finishQuiz();
        }
    };

    const finishQuiz = () => {
        // Calculate score for Full Mode since we didn't do it incrementally
        let finalScore = score;
        const finalDomainScores = { ...domainScores };

        if (gameMode === 'FULL') {
            currentQuestions.forEach(q => {
                let isCorrect = false;
                if (q.type === 'MATCHING') {
                    const userAns = pbqAnswers[q.id];
                    if (userAns) {
                        const allItems = q.draggableItems || [];
                        isCorrect = allItems.every(item => {
                            const userZone = Object.keys(userAns).find(zId => userAns[zId].includes(item.id));
                            return userZone === item.matchId;
                        });
                    }
                } else {
                    if (mcAnswers[q.id] === q.correctOptionId) isCorrect = true;
                }

                if (isCorrect) finalScore++;

                const stats = finalDomainScores[q.domainId] || { correct: 0, total: 0 };
                finalDomainScores[q.domainId] = { correct: stats.correct + (isCorrect ? 1 : 0), total: stats.total + 1 };
            });
            setScore(finalScore);
            setDomainScores(finalDomainScores);
        }

        setGameState('RESULTS');
        addQuizResult({
            quizId: Date.now().toString(),
            score: finalScore,
            total: currentQuestions.length,
            timestamp: Date.now()
        });
        addXP((finalScore * 10) + (gameMode === 'FULL' ? 100 : 20));
    };

    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    };

    // --- RENDERERS ---

    if (gameState === 'MENU') {
        const navigate = useNavigate();
        const availableQuestionCount = getAllQuestions().length;

        return (
            <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-white mb-2">Exam Simulations</h1>
                    <p className="text-gray-400">Engage in simulation drills and full exam practice.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Exam Simulation Section */}
                    <Card className="p-6 border-t-4 border-t-cyber-green h-full flex flex-col">
                        <div className="mb-6 flex-1">
                            <h2 className="text-2xl font-bold mb-2 text-white flex items-center gap-2">
                                <FileCheck size={24} className="text-cyber-green" />
                                Exam Simulation
                            </h2>
                            <p className="text-gray-400 text-sm">
                                Realistic test environment. 90 minutes, 90 questions (Full), or a quick 10-question skirmish.
                            </p>
                        </div>

                        <div className="space-y-3">
                            <Button variant="primary" className="w-full justify-between" onClick={() => startQuiz('QUICK')}>
                                <span>Quick Skirmish</span>
                                <span className="text-xs bg-black/30 px-2 py-1 rounded">10 Qs</span>
                            </Button>
                            <Button variant="outline" className="w-full justify-between" onClick={() => startQuiz('FULL')} disabled={availableQuestionCount < 10}>
                                <span>Full Mock Exam</span>
                                <span className="text-xs bg-white/10 px-2 py-1 rounded">90 Mins</span>
                            </Button>
                        </div>
                    </Card>

                    {/* Training Drills Section */}
                    <Card className="p-6 border-t-4 border-t-cyber-blue h-full flex flex-col">
                        <div className="mb-6 flex-1">
                            <h2 className="text-2xl font-bold mb-2 text-white flex items-center gap-2">
                                <Target size={24} className="text-cyber-blue" />
                                Training Drills
                            </h2>
                            <p className="text-gray-400 text-sm">
                                Targeted mini-games and tools to build muscle memory for specific domains.
                            </p>
                        </div>

                        <div className="space-y-3">
                            <Button variant="ghost" className="w-full justify-between border border-white/10 hover:bg-white/5" onClick={() => navigate('/flashcards')}>
                                <span className="flex items-center gap-2"><BrainCircuit size={16} /> Flashcards</span>
                                <span className="text-xs bg-cyber-blue/20 text-cyber-blue px-2 py-1 rounded">Study</span>
                            </Button>
                            <Button variant="ghost" className="w-full justify-between border border-white/10 hover:bg-white/5" onClick={() => navigate('/arcade')}>
                                <span className="flex items-center gap-2"><Gamepad2 size={16} /> Port Blitz</span>
                                <span className="text-xs bg-purple-500/20 text-purple-300 px-2 py-1 rounded">Arcade</span>
                            </Button>
                        </div>
                    </Card>
                </div>
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
                        </div>
                    </Card>
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
                        </div>
                    </Card>
                </div>
                <div className="flex justify-center">
                    <Button variant="primary" size="lg" onClick={() => setGameState('MENU')} icon={<RotateCcw />}>Return to Base</Button>
                </div>
            </div>
        );
    }

    const currentQ = currentQuestions[currentIndex];
    const isTagged = flaggedQuestions.has(currentQ.id);

    return (
        <div className="max-w-4xl mx-auto space-y-6 animate-fade-in relative">
            {/* Header */}
            <div className="flex justify-between items-center text-sm text-gray-400 bg-gray-900/50 p-4 rounded-lg border border-white/5 sticky top-2 z-40 backdrop-blur-md">
                <div className="flex items-center gap-4">
                    <span className="font-bold text-white">Q {currentIndex + 1} / {currentQuestions.length}</span>
                    {gameMode === 'FULL' && (
                        <button
                            onClick={() => setShowNavigator(!showNavigator)}
                            className="p-1 hover:bg-white/10 rounded"
                        >
                            <LayoutGrid size={18} />
                        </button>
                    )}
                </div>

                <div className="flex items-center gap-2 font-mono text-lg text-cyber-blue">
                    <Clock size={20} />
                    {gameMode === 'FULL' ? formatTime(timeLeft) : formatTime(timer)}
                </div>

                <div className="flex items-center gap-2">
                    <button
                        onClick={toggleFlag}
                        className={clsx("flex items-center gap-1 px-3 py-1 rounded transition-colors", isTagged ? "bg-yellow-500/20 text-yellow-500" : "hover:bg-white/10")}
                    >
                        <Flag size={16} fill={isTagged ? "currentColor" : "none"} />
                        <span className="hidden sm:inline">Flag</span>
                    </button>
                </div>
            </div>

            {/* Question Navigator (Overlay) */}
            {showNavigator && (
                <Card className="absolute top-16 right-0 z-50 p-4 w-64 shadow-2xl border-cyber-blue/50">
                    <div className="grid grid-cols-5 gap-2">
                        {currentQuestions.map((q, idx) => {
                            const isDone = mcAnswers[q.id] || pbqAnswers[q.id];
                            const isFlag = flaggedQuestions.has(q.id);
                            const isCurrent = idx === currentIndex;
                            return (
                                <button
                                    key={q.id}
                                    onClick={() => { setCurrentIndex(idx); setShowNavigator(false); }}
                                    className={clsx(
                                        "h-8 w-8 text-xs font-bold rounded flex items-center justify-center relative",
                                        isCurrent ? "bg-white text-black" : isDone ? "bg-cyber-blue/20 text-cyber-blue" : "bg-gray-800 text-gray-500",
                                        isFlag && "ring-1 ring-yellow-500"
                                    )}
                                >
                                    {idx + 1}
                                    {isFlag && <div className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-500 rounded-full" />}
                                </button>
                            );
                        })}
                    </div>
                </Card>
            )}

            <ProgressBar value={(currentIndex / currentQuestions.length) * 100} color="blue" className="h-1" />

            {/* Question Card */}
            <Card className="p-6 md:p-8 min-h-[400px]">
                <div className="mb-6">
                    <span className="text-xs font-bold text-cyber-green uppercase tracking-wider mb-2 block">
                        {currentQ.type === 'MATCHING' ? 'Performance Based Question' : 'Multiple Choice'}
                    </span>
                    <h2 className="text-xl font-bold text-white leading-relaxed">{currentQ.text}</h2>
                </div>

                {/* Question Body */}
                <div className="mb-8">
                    {currentQ.type === 'MATCHING' ? (
                        <MatchingQuestion
                            question={currentQ}
                            isAnswered={isAnswered}
                            onAnswer={handlePbqUpdate}
                            userState={pbqAnswers[currentQ.id]}
                        />
                    ) : (
                        <div className="space-y-3">
                            {currentQ.options?.map(option => {
                                const isSelected = mcAnswers[currentQ.id] === option.id;
                                const isCorrect = option.id === currentQ.correctOptionId;
                                const showCorrect = isAnswered && isCorrect;
                                const showWrong = isAnswered && isSelected && !isCorrect;

                                return (
                                    <button
                                        key={option.id}
                                        onClick={() => !isAnswered && handleMcSelect(option.id)}
                                        disabled={isAnswered}
                                        className={clsx(
                                            "w-full text-left p-4 rounded-lg border transition-all duration-200 flex justify-between items-center group",
                                            showCorrect ? "bg-cyber-green/10 border-cyber-green text-cyber-green" :
                                                showWrong ? "bg-red-500/10 border-red-500 text-red-400" :
                                                    isSelected ? "bg-cyber-blue/10 border-cyber-blue text-white" :
                                                        "border-white/10 hover:bg-white/5 text-gray-300"
                                        )}
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className={clsx("w-4 h-4 rounded-full border flex items-center justify-center", isSelected ? "border-cyber-blue" : "border-gray-600")}>
                                                {isSelected && <div className="w-2 h-2 rounded-full bg-cyber-blue" />}
                                            </div>
                                            <span>{option.text}</span>
                                        </div>
                                        {showCorrect && <CheckCircle size={20} />}
                                        {showWrong && <XCircle size={20} />}
                                    </button>
                                );
                            })}
                        </div>
                    )}
                </div>

                {/* Explanation (Quick Mode only) */}
                {isAnswered && gameMode === 'QUICK' && (
                    <div className="mt-6 pt-6 border-t border-white/10 animate-fade-in bg-blue-900/10 -mx-6 -mb-6 p-6 rounded-b-xl">
                        <h3 className="font-bold text-white mb-2 flex items-center gap-2">
                            <div className="w-1 h-4 bg-cyber-blue rounded-full" />
                            Intel Analysis
                        </h3>
                        <p className="text-gray-300 leading-relaxed mb-4">{currentQ.explanation}</p>
                        <div className="flex justify-end">
                            <Button onClick={nextQuestion} icon={<ArrowRight />}>
                                {currentIndex < currentQuestions.length - 1 ? "Next Objective" : "Finish Debrief"}
                            </Button>
                        </div>
                    </div>
                )}

                {/* Action Buttons */}
                {!isAnswered && (
                    <div className="flex justify-between items-center pt-8 border-t border-white/5">
                        <Button
                            variant="ghost"
                            disabled={currentIndex === 0}
                            onClick={() => setCurrentIndex(i => i - 1)}
                        >
                            Previous
                        </Button>

                        {gameMode === 'QUICK' ? (
                            <Button onClick={handleConfirmAnswer} disabled={currentQ.type === 'MATCHING' ? !pbqAnswers[currentQ.id] : !mcAnswers[currentQ.id]}>
                                Confirm Selection
                            </Button>
                        ) : (
                            <Button onClick={nextQuestion} icon={<ArrowRight />}>
                                {currentIndex < currentQuestions.length - 1 ? "Next" : "Submit Exam"}
                            </Button>
                        )}
                    </div>
                )}
            </Card>
        </div>
    );
};
