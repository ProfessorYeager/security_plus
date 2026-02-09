import { useState } from 'react';
import { TerminalChallenge } from '../components/arcade/TerminalChallenge';
import { Card } from '../components/ui/Card';
import { Target, Terminal } from 'lucide-react';
import { Button } from '../components/ui/Button';

export const LiveFire = () => {
    const [mode, setMode] = useState<'MENU' | 'TERMINAL'>('MENU');

    if (mode === 'TERMINAL') {
        return <TerminalChallenge onBack={() => setMode('MENU')} />;
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-8rem)] space-y-8 animate-fade-in">
            <div className="text-center space-y-4">
                <div className="inline-flex items-center justify-center p-4 bg-red-500/10 rounded-full mb-4 ring-1 ring-red-500/50">
                    <Target className="w-12 h-12 text-red-500" />
                </div>
                <h1 className="text-4xl font-bold text-white tracking-widest uppercase">
                    Live <span className="text-red-500">Fire</span> Range
                </h1>
                <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                    Engage in realistic simulation exercises. Apply your knowledge in active scenarios.
                    Warning: These systems are monitored.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl w-full px-4">
                {/* Terminal Ops - Active */}
                <Card
                    className="group relative overflow-hidden border-t-4 border-t-cyber-green hover:border-cyber-green/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(16,185,129,0.2)] cursor-pointer"
                    onClick={() => setMode('TERMINAL')}
                >
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                        <Terminal size={120} />
                    </div>

                    <div className="relative z-10 space-y-4 p-4">
                        <div className="flex items-center justify-between">
                            <div className="p-3 bg-cyber-green/10 rounded-lg">
                                <Terminal className="w-8 h-8 text-cyber-green" />
                            </div>
                            <span className="px-2 py-1 bg-cyber-green/20 text-cyber-green text-xs font-mono rounded border border-cyber-green/30">
                                ACTIVE
                            </span>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-white mb-2">Terminal Ops</h3>
                            <p className="text-sm text-gray-400">
                                Command line proficiency check. Execute standardized security protocols in a simulated shell environment.
                            </p>
                        </div>

                        <div className="pt-4">
                            <Button className="w-full group-hover:bg-cyber-green group-hover:text-black transition-colors">
                                Initialize System
                            </Button>
                        </div>
                    </div>
                </Card>

                {/* Coming Soon: Log Analysis */}
                <Card className="group relative overflow-hidden border-t-4 border-t-gray-700 opacity-75 grayscale hover:grayscale-0 transition-all duration-500">
                    <div className="absolute top-0 right-0 p-4 opacity-5">
                        <Target size={120} />
                    </div>
                    <div className="relative z-10 space-y-4 p-4">
                        <div className="flex items-center justify-between">
                            <div className="p-3 bg-gray-800 rounded-lg">
                                <Target className="w-8 h-8 text-gray-400" />
                            </div>
                            <span className="px-2 py-1 bg-gray-800 text-gray-400 text-xs font-mono rounded border border-gray-700">
                                LOCKED
                            </span>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-gray-300 mb-2">Log Hunter</h3>
                            <p className="text-sm text-gray-500">
                                Analyze SIEM logs to identify indicators of compromise (IOCs).
                            </p>
                        </div>
                        <div className="pt-4">
                            <Button variant="outline" disabled className="w-full cursor-not-allowed">
                                Clearance Required
                            </Button>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    );
};
