import { useStore } from '../store/useStore';
import { Card } from '../components/ui/Card';
import { ProgressBar } from '../components/ui/ProgressBar';
import { domains } from '../data';
import { Shield, Zap, Target, Award } from 'lucide-react';

export const Dashboard = () => {
    const { xp, streak, completedConcepts } = useStore();

    // Calculate simple level based on XP (e.g., 100 XP per level)
    const level = Math.floor(xp / 100) + 1;
    const xpProgress = xp % 100;

    // Calculate total progress
    const totalConcepts = domains.reduce((acc, domain) =>
        acc + domain.objectives.reduce((objAcc, obj) => objAcc + obj.concepts.length, 0), 0
    );
    const progressPercentage = totalConcepts > 0 ? (completedConcepts.length / totalConcepts) * 100 : 0;

    return (
        <div className="space-y-8 animate-fade-in">
            <header className="mb-8">
                <h1 className="text-4xl font-bold text-white mb-2">
                    <span className="text-cyber-green">Mission Control</span>
                </h1>
                <p className="text-gray-400">Welcome back, Agent. Status report for today.</p>
            </header>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="border-l-4 border-l-cyber-green">
                    <div className="flex items-center justify-between mb-4">
                        <div className="p-2 bg-cyber-green/10 rounded-lg">
                            <Shield className="text-cyber-green" size={24} />
                        </div>
                        <span className="text-xs font-mono text-gray-500">LEVEL {level}</span>
                    </div>
                    <div className="text-2xl font-bold text-white mb-2">Security Clearance</div>
                    <ProgressBar value={xpProgress} max={100} label={`${xp} XP`} className="mt-2" />
                </Card>

                <Card className="border-l-4 border-l-cyber-blue">
                    <div className="flex items-center justify-between mb-4">
                        <div className="p-2 bg-cyber-blue/10 rounded-lg">
                            <Zap className="text-cyber-blue" size={24} />
                        </div>
                        <span className="text-xs font-mono text-gray-500">STREAK</span>
                    </div>
                    <div className="text-2xl font-bold text-white mb-2">{streak.current} Days</div>
                    <p className="text-xs text-gray-400">Keep the momentum going!</p>
                </Card>

                <Card className="border-l-4 border-l-purple-500">
                    <div className="flex items-center justify-between mb-4">
                        <div className="p-2 bg-purple-500/10 rounded-lg">
                            <Target className="text-purple-500" size={24} />
                        </div>
                        <span className="text-xs font-mono text-gray-500">ACCURACY</span>
                    </div>
                    <div className="text-2xl font-bold text-white mb-2">--%</div>
                    <p className="text-xs text-gray-400">Based on recent simulations</p>
                </Card>

                <Card className="border-l-4 border-l-orange-500">
                    <div className="flex items-center justify-between mb-4">
                        <div className="p-2 bg-orange-500/10 rounded-lg">
                            <Award className="text-orange-500" size={24} />
                        </div>
                        <span className="text-xs font-mono text-gray-500">MASTERY</span>
                    </div>
                    <div className="text-2xl font-bold text-white mb-2">{Math.round(progressPercentage)}%</div>
                    <ProgressBar value={progressPercentage} color="blue" className="mt-2" />
                </Card>
            </div>

            {/* Domain Progress Section */}
            <section>
                <h2 className="text-2xl font-bold text-white mb-6">Domain Status</h2>
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
