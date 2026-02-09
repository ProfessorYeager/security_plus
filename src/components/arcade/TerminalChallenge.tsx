import { useState, useEffect, useRef } from 'react';
import { cliChallenges, CliChallenge } from '../../data/cli_challenges';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';
import { Terminal, Lightbulb, ChevronRight, CheckCircle, AlertTriangle } from 'lucide-react';
import { useStore } from '../../store/useStore';

interface TerminalChallengeProps {
    onBack: () => void;
}

export const TerminalChallenge = ({ onBack }: TerminalChallengeProps) => {
    const { addXP } = useStore();
    const [currentLevelIndex, setCurrentLevelIndex] = useState(0);
    const [input, setInput] = useState('');
    const [history, setHistory] = useState<string[]>([]);
    const [hintUsed, setHintUsed] = useState(false);
    const [feedback, setFeedback] = useState<string | null>(null);
    const [isComplete, setIsComplete] = useState(false);

    const inputRef = useRef<HTMLInputElement>(null);
    const bottomRef = useRef<HTMLDivElement>(null);

    const currentChallenge = cliChallenges[currentLevelIndex];

    useEffect(() => {
        if (bottomRef.current) {
            bottomRef.current.scrollIntoView({ behavior: 'smooth' });
        }
        // Auto-focus input
        inputRef.current?.focus();
    }, [history, currentLevelIndex]);

    const handleCommand = (e: React.FormEvent) => {
        e.preventDefault();
        const command = input.trim();

        if (!command) return;

        // Add to history
        setHistory(prev => [...prev, `$ ${command}`]);
        setInput('');

        // Validate
        const isValid = currentChallenge.validCommands.some(regex => regex.test(command));

        if (isValid) {
            setHistory(prev => [...prev, `> ${currentChallenge.explanation}`, `> CORRECT! access granted.`]);
            setFeedback('CORRECT');

            // Award XP
            const xp = hintUsed ? Math.floor(currentChallenge.baseXP / 2) : currentChallenge.baseXP;
            addXP(xp);

            setTimeout(() => {
                if (currentLevelIndex < cliChallenges.length - 1) {
                    setCurrentLevelIndex(prev => prev + 1);
                    setFeedback(null);
                    setHintUsed(false);
                    setHistory([]);
                } else {
                    setIsComplete(true);
                }
            }, 1500);
        } else {
            setHistory(prev => [...prev, `> Command not recognized or incorrect for this scenario.`]);
            setFeedback('WRONG');
            setTimeout(() => setFeedback(null), 1000);
        }
    };

    if (isComplete) {
        return (
            <div className="flex flex-col items-center justify-center p-6 h-full animate-fade-in">
                <Card className="max-w-md w-full text-center p-8 space-y-6 border-green-500/50">
                    <Terminal className="w-16 h-16 mx-auto text-green-500 mb-4" />
                    <h2 className="text-3xl font-bold text-white">SYSTEM OVERRIDE COMPLETE</h2>

                    <p className="text-gray-400">
                        You have successfully navigated all 10 security scenarios.
                        Your command line proficiency is improving, Agent.
                    </p>

                    <Button onClick={onBack} variant="primary" className="w-full">
                        Return to Arcade
                    </Button>
                </Card>
            </div>
        );
    }

    return (
        <div className="w-full max-w-4xl mx-auto p-4 space-y-4 animate-fade-in">
            {/* Header / Mission Brief */}
            <Card className="border-l-4 border-l-cyber-green">
                <div className="flex justify-between items-start">
                    <div>
                        <div className="text-xs font-mono text-cyber-green mb-1">
                            SCENARIO {currentLevelIndex + 1}/{cliChallenges.length} • {currentChallenge.platform.toUpperCase()}
                        </div>
                        <h2 className="text-xl font-bold text-white mb-2">{currentChallenge.title}</h2>
                        <p className="text-gray-300">{currentChallenge.scenario}</p>
                    </div>
                </div>

                <div className="mt-4 bg-gray-800/50 p-3 rounded border border-white/5 flex items-start gap-3">
                    <CheckCircle className="text-cyber-green shrink-0 mt-0.5" size={18} />
                    <p className="text-sm text-white font-medium">Objective: {currentChallenge.description}</p>
                </div>
            </Card>

            {/* Terminal Window */}
            <div className="bg-black rounded-lg border border-gray-700 shadow-2xl overflow-hidden font-mono text-sm md:text-base min-h-[400px] flex flex-col"
                onClick={() => inputRef.current?.focus()}>

                {/* Terminal Bar */}
                <div className="bg-gray-800 px-4 py-2 flex gap-2 items-center border-b border-gray-700">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <span className="ml-2 text-gray-400 text-xs">secure_terminal -- -bash -- 80x24</span>
                </div>

                {/* Content */}
                <div className="p-4 flex-1 text-green-400 space-y-1 overflow-y-auto max-h-[500px]">
                    <div className="text-gray-500 mb-4">
                        Last login: {new Date().toTimeString()} on ttys001<br />
                        Security Level: {currentChallenge.id}<br />
                        Type your command below to execute.
                    </div>

                    {history.map((line, i) => (
                        <div key={i} className={line.startsWith('>') ? 'text-white/80' : 'text-green-400'}>
                            {line}
                        </div>
                    ))}

                    <form onSubmit={handleCommand} className="flex items-center gap-2 mt-2">
                        <span className="text-green-500 select-none">$</span>
                        <input
                            ref={inputRef}
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            className="bg-transparent border-none outline-none text-green-400 w-full caret-green-400"
                            autoComplete="off"
                            autoFocus
                        />
                    </form>
                    <div ref={bottomRef}></div>
                </div>
            </div>

            {/* Controls / Hint */}
            <div className="flex justify-between items-center">
                <Button variant="outline" onClick={onBack} size="sm">
                    Exit Simulation
                </Button>

                <div className="flex items-center gap-4">
                    {feedback === 'WRONG' && (
                        <span className="text-red-500 font-bold animate-pulse flex items-center gap-2">
                            <AlertTriangle size={16} /> ACCESS DENIED
                        </span>
                    )}

                    {!hintUsed ? (
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => setHintUsed(true)}
                            className="text-yellow-500 hover:text-yellow-400 hover:bg-yellow-500/10"
                        >
                            <Lightbulb size={16} className="mr-2" />
                            Need Hint? (-50% XP)
                        </Button>
                    ) : (
                        <div className="text-yellow-500 text-sm bg-yellow-500/10 px-3 py-1 rounded border border-yellow-500/20">
                            <strong>HINT:</strong> {currentChallenge.hint}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
