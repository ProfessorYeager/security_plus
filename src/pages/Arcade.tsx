import { useState, useEffect, useRef } from 'react';
import { MatchingQuestion } from '../components/pbq/MatchingQuestion';
import { Question } from '../types';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Play, RotateCcw, Trophy, Clock, AlertTriangle, Terminal } from 'lucide-react';
import { useStore } from '../store/useStore';
import { TerminalChallenge } from '../components/arcade/TerminalChallenge';
import { clsx } from 'clsx';

type GameMode = 'MENU' | 'PORT_BLITZ' | 'CLI_CHALLENGE';

// Common Port Data for Security+
const PORT_DATA = [
    { port: '20/21', protocol: 'FTP', desc: 'File Transfer Protocol' },
    { port: '22', protocol: 'SSH', desc: 'Secure Shell' },
    { port: '23', protocol: 'Telnet', desc: 'Unencrypted Remote Login' },
    { port: '25', protocol: 'SMTP', desc: 'Simple Mail Transfer Protocol' },
    { port: '53', protocol: 'DNS', desc: 'Domain Name System' },
    { port: '67/68', protocol: 'DHCP', desc: 'Dynamic Host Configuration Protocol' },
    { port: '80', protocol: 'HTTP', desc: 'Hypertext Transfer Protocol' },
    { port: '110', protocol: 'POP3', desc: 'Post Office Protocol v3' },
    { port: '143', protocol: 'IMAP', desc: 'Internet Message Access Protocol' },
    { port: '443', protocol: 'HTTPS', desc: 'HTTP Secure' },
    { port: '3389', protocol: 'RDP', desc: 'Remote Desktop Protocol' },
    { port: '445', protocol: 'SMB', desc: 'Server Message Block' },
    { port: '123', protocol: 'NTP', desc: 'Network Time Protocol' },
    { port: '161/162', protocol: 'SNMP', desc: 'Simple Network Management Protocol' }
];

const GAME_DURATION = 60; // 60 Seconds

export const Arcade = () => {
    const [gameMode, setGameMode] = useState<GameMode>('MENU');

    // Port Blitz State
    const [pbState, setPbState] = useState<'MENU' | 'PLAYING' | 'GAME_OVER'>('MENU');
    const [score, setScore] = useState(0);
    const [timeLeft, setTimeLeft] = useState(GAME_DURATION);
    const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
    const [feedback, setFeedback] = useState<'CORRECT' | 'WRONG' | null>(null);
    const { addXP } = useStore();

    // Refs for timer
    const timerRef = useRef<NodeJS.Timeout | null>(null);

    const generateQuestion = () => {
        // Pick a random target port
        const target = PORT_DATA[Math.floor(Math.random() * PORT_DATA.length)];

        // Pick 3 distractors (ensure unique and not the target)
        const distractors: typeof PORT_DATA[0][] = [];
        while (distractors.length < 3) {
            const d = PORT_DATA[Math.floor(Math.random() * PORT_DATA.length)];
            if (d.port !== target.port && !distractors.find(x => x.port === d.port)) {
                distractors.push(d);
            }
        }

        const options = [target, ...distractors].sort(() => 0.5 - Math.random());

        const q: Question = {
            id: `arcade_${Date.now()}`,
            domainId: 'ARCADE',
            objectiveId: 'PORTS',
            type: 'MATCHING',
            text: `Drag Port ${target.port} to the correct Protocol!`,
            dropZones: options.map(opt => ({
                id: opt.protocol,
                label: `${opt.protocol} (${opt.desc})`
            })),
            draggableItems: [
                { id: `item_${target.port}`, text: `Port ${target.port}`, matchId: target.protocol }
            ],
            explanation: '',
            options: [], // Not used for PBQ
            correctOptionId: '' // Not used for PBQ
        };

        setCurrentQuestion(q);
        setFeedback(null);
    };

    const startGame = () => {
        setScore(0);
        setTimeLeft(GAME_DURATION);
        setPbState('PLAYING');
        generateQuestion();

        if (timerRef.current) clearInterval(timerRef.current);
        timerRef.current = setInterval(() => {
            setTimeLeft(prev => {
                if (prev <= 1) {
                    endGame();
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);
    };

    const endGame = () => {
        if (timerRef.current) clearInterval(timerRef.current);
        setPbState('GAME_OVER');
        addXP(score); // 1 XP per point
    };

    const handleAnswer = (userMatches: Record<string, string[]>) => {
        // Check if the item has been dropped
        // In our case, we only have 1 item.
        const targetItem = currentQuestion?.draggableItems?.[0];
        if (!targetItem) return;

        // Find which zone has the item
        let droppedZoneId: string | null = null;
        Object.entries(userMatches).forEach(([zoneId, items]) => {
            if (items.includes(targetItem.id)) {
                droppedZoneId = zoneId;
            }
        });

        if (droppedZoneId) {
            // Item dropped. Check correctness immediately?
            // Yes, for arcade speed.
            if (droppedZoneId === targetItem.matchId) {
                // Correct!
                setScore(prev => prev + 10);
                setFeedback('CORRECT');
                // Brief delay then next question
                setTimeout(() => {
                    generateQuestion();
                }, 500);
            } else {
                // Wrong!
                setFeedback('WRONG');
                // Penalty? Time deduction?
                setScore(prev => Math.max(0, prev - 5));
                setTimeLeft(prev => Math.max(0, prev - 2)); // Time penalty

                // Allow them to try again or generate new?
                // Let's generate new to keep flow
                setTimeout(() => {
                    generateQuestion();
                }, 500);
            }
        }
    };

    // Cleanup
    useEffect(() => {
        return () => {
            if (timerRef.current) clearInterval(timerRef.current);
        };
    }, []);

    if (gameMode === 'CLI_CHALLENGE') {
        return <TerminalChallenge onBack={() => setGameMode('MENU')} />;
    }

    return (
        <div className="flex flex-col items-center justify-center p-6 min-h-[calc(100vh-8rem)]">

            {gameMode === 'MENU' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl w-full">
                    <Card className="flex flex-col items-center text-center p-8 space-y-6 hover:scale-105 transition-transform cursor-pointer border-t-4 border-t-cyber-blue"
                        onClick={() => { setGameMode('PORT_BLITZ'); setPbState('MENU'); }}>
                        <div className="p-4 bg-cyber-blue/20 rounded-full mb-2">
                            <Clock size={48} className="text-cyber-blue" />
                        </div>
                        <h2 className="text-3xl font-bold text-white">PORT BLITZ</h2>
                        <p className="text-gray-400">
                            Fast-paced port matching. Race against the clock to match protocols to port numbers.
                        </p>
                        <Button className="w-full">Play Now</Button>
                    </Card>

                    <Card className="flex flex-col items-center text-center p-8 space-y-6 hover:scale-105 transition-transform cursor-pointer border-t-4 border-t-cyber-green"
                        onClick={() => setGameMode('CLI_CHALLENGE')}>
                        <div className="p-4 bg-cyber-green/20 rounded-full mb-2">
                            <Terminal size={48} className="text-cyber-green" />
                        </div>
                        <h2 className="text-3xl font-bold text-white">TERMINAL OPS</h2>
                        <p className="text-gray-400">
                            Test your command line skills. Solve security scenarios using real CLI commands.
                        </p>
                        <Button className="w-full">Initialize</Button>
                    </Card>
                </div>
            )}

            {gameMode === 'PORT_BLITZ' && pbState === 'MENU' && (
                <Card className="max-w-md w-full text-center p-8 space-y-6 bg-gray-900/90 border-cyber-green/30 relative">
                    <Button
                        variant="ghost"
                        size="sm"
                        className="absolute top-4 left-4"
                        onClick={() => setGameMode('MENU')}
                    >
                        &larr; Back
                    </Button>
                    <h1 className="text-4xl font-bold text-white tracking-tighter pt-4">
                        PORT <span className="text-cyber-green">BLITZ</span>
                    </h1>
                    <p className="text-gray-400">
                        Match as many Ports to Protocols as you can in 60 seconds.
                        <br />
                        <span className="text-sm text-cyber-blue mt-2 block">Speed is key. Accuracy is critical.</span>
                    </p>

                    <div className="grid grid-cols-2 gap-4 text-sm font-mono mb-4">
                        <div className="bg-white/5 p-3 rounded">
                            <span className="block text-green-400">+10 PTS</span>
                            Correct Match
                        </div>
                        <div className="bg-white/5 p-3 rounded">
                            <span className="block text-red-400">-2 SEC</span>
                            Time Penalty
                        </div>
                    </div>

                    <Button onClick={startGame} className="w-full py-4 text-lg font-bold" variant="primary">
                        <Play className="mr-2 fill-current" /> START BLITZ
                    </Button>
                </Card>
            )}

            {gameMode === 'PORT_BLITZ' && pbState === 'PLAYING' && currentQuestion && (
                <div className="w-full max-w-4xl space-y-6">
                    {/* Header */}
                    <div className="flex justify-between items-center bg-gray-900/80 p-4 rounded-xl border border-white/10 backdrop-blur-md">
                        <div className="flex items-center gap-2">
                            <Trophy className="text-yellow-400" />
                            <span className="text-2xl font-bold text-white">{score}</span>
                        </div>
                        <div className={clsx(
                            "flex items-center gap-2 text-2xl font-mono font-bold",
                            timeLeft < 10 ? "text-red-500 animate-pulse" : "text-cyber-green"
                        )}>
                            <Clock />
                            <span>{timeLeft}s</span>
                        </div>
                    </div>

                    {/* Feedback Overlay */}
                    {feedback && (
                        <div className={clsx(
                            "fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm pointer-events-none animate-in fade-in zoom-in duration-200"
                        )}>
                            <div className={clsx(
                                "text-6xl font-black transform -rotate-6 px-12 py-6 border-4 rounded-xl shadow-2xl",
                                feedback === 'CORRECT' ? "bg-green-500 text-white border-white scale-110" : "bg-red-500 text-white border-white"
                            )}>
                                {feedback === 'CORRECT' ? 'NICE!' : 'MISS!'}
                            </div>
                        </div>
                    )}

                    {/* Game Area */}
                    <div className="relative">
                        {/* We use key to force full re-render of matching component on new question */}
                        <MatchingQuestion
                            key={currentQuestion.id}
                            question={currentQuestion}
                            onAnswer={handleAnswer}
                            isAnswered={!!feedback}
                        />
                    </div>
                </div>
            )}

            {gameMode === 'PORT_BLITZ' && pbState === 'GAME_OVER' && (
                <Card className="max-w-md w-full text-center p-8 space-y-6 animate-in zoom-in duration-300">
                    <Trophy className="w-16 h-16 mx-auto text-yellow-400 mb-4" />
                    <h2 className="text-3xl font-bold text-white">TIME'S UP!</h2>

                    <div className="space-y-1">
                        <p className="text-gray-400 text-lg">Final Score</p>
                        <p className="text-6xl font-black text-cyber-green tracking-tighter">{score}</p>
                    </div>

                    <div className="bg-white/5 p-4 rounded-lg">
                        <p className="text-sm text-gray-400">XP Earned</p>
                        <p className="text-xl font-bold text-white">+{score} XP</p>
                    </div>

                    <div className="flex gap-4">
                        <Button onClick={() => setPbState('MENU')} variant="outline" className="flex-1">
                            Main Menu
                        </Button>
                        <Button onClick={startGame} variant="primary" className="flex-1">
                            <RotateCcw size={18} className="mr-2" />
                            Play Again
                        </Button>
                    </div>
                </Card>
            )}
        </div>
    );
};
