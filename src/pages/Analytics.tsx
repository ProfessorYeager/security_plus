import { useStore } from '../store/useStore';
import { Card } from '../components/ui/Card';
import { ProgressBar } from '../components/ui/ProgressBar';
import { domains } from '../data';
import { BarChart3, TrendingUp, BookOpen, BrainCircuit } from 'lucide-react';

export const Analytics = () => {
    const { quizHistory, completedConcepts } = useStore();

    // Calculate quiz stats
    const totalQuizzes = quizHistory.length;
    const averageScore = totalQuizzes > 0
        ? Math.round(quizHistory.reduce((acc, q) => acc + (q.score / q.total), 0) / totalQuizzes * 100)
        : 0;

    // Sort quiz history for trend line (last 10)
    const recentQuizzes = [...quizHistory].sort((a, b) => a.timestamp - b.timestamp).slice(-10);

    return (
        <div className="space-y-8 animate-fade-in">
            <header className="mb-8">
                <h1 className="text-4xl font-bold text-white mb-2">
                    <span className="text-cyber-green">Deep Dive Analytics</span>
                </h1>
                <p className="text-gray-400">Detailed performance metrics and knowledge coverage.</p>
            </header>

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

            {/* Domain Progress Section (Moved from Dashboard) */}
            <section>
                <div className="flex items-center gap-2 mb-6">
                    <BarChart3 className="text-cyber-green" />
                    <h2 className="text-2xl font-bold text-white">Domain Mastery</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {domains.map((domain) => {
                        const domainConcepts = domain.objectives.flatMap(obj => obj.concepts);
                        const completedCount = domainConcepts.filter(c => completedConcepts.includes(c.id)).length;
                        const percentage = (completedCount / domainConcepts.length) * 100;

                        return (
                            <Card key={domain.id} className="hover:bg-white/5 transition-colors cursor-pointer group">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <h3 className="text-lg font-bold text-white group-hover:text-cyber-green transition-colors">
                                            {domain.id} {domain.title}
                                        </h3>
                                        <p className="text-sm text-gray-400 mt-1">{domain.objectives.length} Objectives • {domainConcepts.length} Concepts</p>
                                    </div>
                                    <span className="px-2 py-1 bg-gray-800 rounded text-xs font-mono text-gray-300">{domain.weight}% Weight</span>
                                </div>
                                <ProgressBar value={percentage} color={percentage === 100 ? 'green' : 'blue'} showValue />
                            </Card>
                        );
                    })}
                </div>
            </section>
        </div>
    );
};
