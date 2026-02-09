import { useStore } from '../store/useStore';
import { Card } from '../components/ui/Card';
import { ProgressBar } from '../components/ui/ProgressBar';
import { domains } from '../data';
import { getLevelProgress, getDomainPerformance, getAchievements } from '../utils/gamification';
import { BarChart3, TrendingUp, BookOpen, BrainCircuit, Shield, Trophy, Target, Award } from 'lucide-react';

export const Analytics = () => {
    const { quizHistory, completedConcepts, xp, streak } = useStore();

    // Gamification Stats
    const levelStats = getLevelProgress(xp);
    const domainStats = getDomainPerformance({ quizHistory, completedConcepts, xp, streak }, domains);
    const achievements = getAchievements({ quizHistory, completedConcepts, xp, streak });

    // Calculate generic stats
    const totalQuizzes = quizHistory.length;
    const averageScore = totalQuizzes > 0
        ? Math.round(quizHistory.reduce((acc, q) => acc + (q.score / q.total), 0) / totalQuizzes * 100)
        : 0;

    return (
        <div className="space-y-8 animate-fade-in">
            <header className="mb-8">
                <h1 className="text-4xl font-bold text-white mb-2">
                    <span className="text-cyber-green">Deep Dive Analytics</span>
                </h1>
                <p className="text-gray-400">Detailed performance metrics and knowledge coverage.</p>
            </header>

            {/* Level Progress */}
            <Card className="border-t-4 border-t-cyber-green p-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                    <Shield size={120} />
                </div>
                <div className="flex flex-col md:flex-row justify-between items-end gap-6 relative z-10">
                    <div>
                        <div className="flex items-center gap-3 mb-2">
                            <span className="bg-cyber-green/20 text-cyber-green px-3 py-1 rounded text-sm font-bold font-mono">
                                LEVEL {levelStats.currentLevel}
                            </span>
                            <span className="text-gray-400 text-sm">SECURITY CLEARANCE</span>
                        </div>
                        <h2 className="text-3xl font-bold text-white mb-2">
                            {Math.round(levelStats.xpNeededForLevel - levelStats.xpIntoLevel)} XP to Next Level
                        </h2>
                        <p className="text-gray-400 max-w-lg">
                            Keep completing learning modules and simulations to increase your clearance level.
                        </p>
                    </div>
                    <div className="w-full md:w-1/3">
                        <div className="flex justify-between text-xs text-gray-400 mb-2">
                            <span>{Math.round(levelStats.xpIntoLevel)} XP</span>
                            <span>{Math.round(levelStats.xpNeededForLevel)} XP Needed</span>
                        </div>
                        <ProgressBar value={levelStats.progressPercent} showValue={false} color="green" />
                    </div>
                </div>
            </Card>

            {/* Performance Overview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="border-t-4 border-t-purple-500">
                    <div className="flex items-center gap-3 mb-2">
                        <TrendingUp className="text-purple-500" />
                        <span className="text-gray-400 text-sm">AVERAGE SCORE</span>
                    </div>
                    <div className="text-3xl font-bold text-white">{averageScore}%</div>
                    <p className="text-xs text-gray-500">{totalQuizzes} simulations completed</p>
                </Card>

                <Card className="border-t-4 border-t-blue-500">
                    <div className="flex items-center gap-3 mb-2">
                        <BrainCircuit className="text-blue-500" />
                        <span className="text-gray-400 text-sm">KNOWLEDGE BASE</span>
                    </div>
                    <div className="text-3xl font-bold text-white">{completedConcepts.length}</div>
                    <p className="text-xs text-gray-500">Concepts mastered</p>
                </Card>

                <Card className="border-t-4 border-t-orange-500">
                    <div className="flex items-center gap-3 mb-2">
                        <BookOpen className="text-orange-500" />
                        <span className="text-gray-400 text-sm">DOMAINS ACTIVE</span>
                    </div>
                    <div className="text-3xl font-bold text-white">{domains.length}</div>
                    <p className="text-xs text-gray-500">Total curriculum areas</p>
                </Card>
            </div>

            {/* Domain Heat Map */}
            <section>
                <div className="flex items-center gap-2 mb-6">
                    <BarChart3 className="text-cyber-green" />
                    <h2 className="text-2xl font-bold text-white">Domain Heat Map</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {domainStats.map((stat) => {
                        // Determine color based on status
                        let statusColor = "border-gray-700 bg-gray-800/50";
                        let textColor = "text-gray-400";
                        if (stat.status === 'mastered') {
                            statusColor = "border-green-500/50 bg-green-500/10";
                            textColor = "text-green-400";
                        } else if (stat.status === 'learning') {
                            statusColor = "border-yellow-500/50 bg-yellow-500/10";
                            textColor = "text-yellow-400";
                        } else if (stat.status === 'needs_focus') {
                            statusColor = "border-red-500/50 bg-red-500/10";
                            textColor = "text-red-400";
                        }

                        return (
                            <Card key={stat.domainId} className={`transition-all hover:scale-[1.02] border ${statusColor}`}>
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className={`text-lg font-bold ${textColor}`}>
                                        {stat.domainId} {stat.domainTitle}
                                    </h3>
                                </div>

                                <div className="space-y-4">
                                    {/* Score Progress */}
                                    <div>
                                        <div className="flex justify-between text-xs text-gray-400 mb-1">
                                            <span>Proficiency</span>
                                            <span>{stat.scorePercentage}%</span>
                                        </div>
                                        <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                                            <div
                                                className={`h-full rounded-full ${stat.status === 'mastered' ? 'bg-green-500' :
                                                    stat.status === 'learning' ? 'bg-yellow-500' :
                                                        stat.status === 'needs_focus' ? 'bg-red-500' : 'bg-gray-600'
                                                    }`}
                                                style={{ width: `${stat.scorePercentage}%` }}
                                            />
                                        </div>
                                    </div>

                                    {/* Coverage Progress */}
                                    <div>
                                        <div className="flex justify-between text-xs text-gray-400 mb-1">
                                            <span>Coverage</span>
                                            <span>{stat.conceptCoverage}%</span>
                                        </div>
                                        <div className="h-1 bg-gray-700 rounded-full overflow-hidden">
                                            <div
                                                className="h-full bg-blue-500 rounded-full"
                                                style={{ width: `${stat.conceptCoverage}%` }}
                                            />
                                        </div>
                                    </div>

                                    <div className="pt-2 border-t border-white/5 flex gap-4 text-xs text-gray-500">
                                        <div className="flex items-center gap-1">
                                            <Target size={12} />
                                            {stat.totalQuestions} Questions
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <BrainCircuit size={12} />
                                            {stat.conceptCoverage}% Concepts
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        );
                    })}
                </div>
            </section>

            {/* Achievements */}
            <section>
                <div className="flex items-center gap-2 mb-6">
                    <Trophy className="text-yellow-500" />
                    <h2 className="text-2xl font-bold text-white">Achievements</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {achievements.map((badge) => (
                        <Card
                            key={badge.id}
                            className={`flex flex-col items-center text-center p-6 border transition-all ${badge.unlocked
                                ? 'border-yellow-500/50 bg-yellow-500/5'
                                : 'border-white/5 bg-white/5 opacity-50 grayscale'
                                }`}
                        >
                            <div className="text-4xl mb-4">{badge.icon}</div>
                            <h3 className={`font-bold mb-1 ${badge.unlocked ? 'text-white' : 'text-gray-500'}`}>
                                {badge.title}
                            </h3>
                            <p className="text-xs text-gray-400 mb-3">{badge.description}</p>

                            {badge.unlocked ? (
                                <span className="text-xs bg-yellow-500/20 text-yellow-300 px-2 py-1 rounded flex items-center gap-1">
                                    <Award size={10} /> Unlocked
                                </span>
                            ) : (
                                <span className="text-xs bg-gray-700/50 text-gray-500 px-2 py-1 rounded">
                                    Locked
                                </span>
                            )}
                        </Card>
                    ))}
                </div>
            </section>
        </div>
    );
};
