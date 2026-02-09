import { useNavigate } from 'react-router-dom';
import { useStore } from '../store/useStore';
import { Card } from '../components/ui/Card';
import { ProgressBar } from '../components/ui/ProgressBar';
import { Button } from '../components/ui/Button';
import { domains } from '../data';
import { getLevelProgress } from '../utils/gamification';
import { Shield, Zap, ArrowRight, PlayCircle } from 'lucide-react';

export const Dashboard = () => {
    const { xp, streak, completedConcepts } = useStore();
    const navigate = useNavigate();

    // Calculate level based on XP
    const levelStats = getLevelProgress(xp);

    // Smart Suggestion: Find first uncompleted concept
    const findNextMission = () => {
        for (const domain of domains) {
            for (const objective of domain.objectives) {
                for (const concept of objective.concepts) {
                    if (!completedConcepts.includes(concept.id)) {
                        return { domain, objective, concept };
                    }
                }
            }
        }
        return null;
    };

    const nextMission = findNextMission();

    return (
        <div className="space-y-8 animate-fade-in">
            <header className="mb-4">
                <h1 className="text-4xl font-bold text-white mb-2">
                    <span className="text-cyber-green">Mission Control</span>
                </h1>
                <p className="text-gray-400">Welcome back, Agent. Status report for today.</p>
            </header>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="border-l-4 border-l-cyber-green flex items-center justify-between p-6">
                    <div>
                        <div className="text-xs font-mono text-gray-500 mb-1">SECURITY CLEARANCE</div>
                        <div className="text-3xl font-bold text-white mb-1">LEVEL {levelStats.currentLevel}</div>
                        <div className="text-sm text-gray-400">{Math.round(levelStats.xpIntoLevel)} / {Math.round(levelStats.xpNeededForLevel)} XP to next rank</div>
                    </div>
                    <div className="p-3 bg-cyber-green/10 rounded-full">
                        <Shield className="text-cyber-green" size={32} />
                    </div>
                </Card>

                <Card className="border-l-4 border-l-cyber-blue flex items-center justify-between p-6">
                    <div>
                        <div className="text-xs font-mono text-gray-500 mb-1">ACTIVE STREAK</div>
                        <div className="text-3xl font-bold text-white mb-1">{streak.current} DAYS</div>
                        <div className="text-sm text-gray-400">Consistency is key to security</div>
                    </div>
                    <div className="p-3 bg-cyber-blue/10 rounded-full">
                        <Zap className="text-cyber-blue" size={32} />
                    </div>
                </Card>
            </div>

            {/* Next Mission Card */}
            <Card className="p-8 border-t-2 border-t-white/20 bg-gradient-to-br from-gray-900 to-gray-800">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                    <div className="space-y-4 max-w-2xl">
                        <div className="flex items-center gap-2 text-cyber-green font-mono text-sm tracking-wider">
                            <span className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyber-green opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-cyber-green"></span>
                            </span>
                            PRIORITY MISSION DETECTED
                        </div>

                        {nextMission ? (
                            <div>
                                <h2 className="text-2xl font-bold text-white mb-2">
                                    {nextMission.concept.title}
                                </h2>
                                <p className="text-gray-300 leading-relaxed mb-4">
                                    {nextMission.concept.summary}
                                </p>
                                <div className="flex gap-3 text-sm text-gray-400 font-mono">
                                    <span>Domain {nextMission.domain.id}</span>
                                    <span>•</span>
                                    <span>{nextMission.objective.title}</span>
                                </div>
                            </div>
                        ) : (
                            <div>
                                <h2 className="text-2xl font-bold text-white mb-2">All Missions Complete!</h2>
                                <p className="text-gray-300">You have mastered all current objectives. Proceed to Live Fire exercises to maintain readiness.</p>
                            </div>
                        )}
                    </div>

                    <div className="flex flex-col gap-3 min-w-[200px]">
                        {nextMission ? (
                            <Button size="lg" onClick={() => navigate('/study')} icon={<PlayCircle />}>
                                Engage Objective
                            </Button>
                        ) : (
                            <Button size="lg" onClick={() => navigate('/quiz')} icon={<PlayCircle />}>
                                Start Simulation
                            </Button>
                        )}
                        <Button variant="outline" onClick={() => navigate('/stats')} icon={<ArrowRight />}>
                            View Analytics
                        </Button>
                    </div>
                </div>
            </Card>

            {/* Recent Comms / Tips */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                    <h3 className="text-lg font-bold text-white mb-4">Tactical Advice</h3>
                    <p className="text-gray-400 italic">"Security is not a product, but a process. Always allow for the Principle of Least Privilege when assigning user rights."</p>
                </Card>
                <Card>
                    <h3 className="text-lg font-bold text-white mb-4">System Status</h3>
                    <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                            <span className="text-gray-400">Database</span>
                            <span className="text-cyber-green">ONLINE</span>
                        </div>
                        <div className="flex justify-between text-sm">
                            <span className="text-gray-400">Simulation Engine</span>
                            <span className="text-cyber-green">READY</span>
                        </div>
                        <div className="flex justify-between text-sm">
                            <span className="text-gray-400">Persistence</span>
                            <span className="text-yellow-500">LOCAL (Device Only)</span>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    );
};
