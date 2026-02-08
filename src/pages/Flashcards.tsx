import { useState, useEffect } from 'react';
import { glossaryTerms, GlossaryTerm } from '../data/glossary';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { RefreshCw, Check, X, RotateCcw } from 'lucide-react';
import { clsx } from 'clsx';
import { useStore } from '../store/useStore';

export const Flashcards = () => {
    const [currentTermIndex, setCurrentTermIndex] = useState(0);
    const [isFlipped, setIsFlipped] = useState(false);
    const [shuffledTerms, setShuffledTerms] = useState<GlossaryTerm[]>([]);
    const { addXP } = useStore();

    // Shuffle terms on mount
    useEffect(() => {
        setShuffledTerms([...glossaryTerms].sort(() => 0.5 - Math.random()));
    }, []);

    const currentTerm = shuffledTerms[currentTermIndex];

    const handleNext = (correct: boolean) => {
        if (correct) {
            addXP(10); // Small XP reward for studying
        }
        setIsFlipped(false);
        setTimeout(() => {
            setCurrentTermIndex((prev) => (prev + 1) % shuffledTerms.length);
        }, 150);
    };

    const handleReset = () => {
        setShuffledTerms([...glossaryTerms].sort(() => 0.5 - Math.random()));
        setCurrentTermIndex(0);
        setIsFlipped(false);
    };

    if (!currentTerm) return <div>Loading...</div>;

    return (
        <div className="flex flex-col items-center justify-center p-6 h-[calc(100vh-8rem)]">
            <h1 className="text-3xl font-bold text-white mb-8 tracking-tight">
                <span className="text-cyber-green">GLOSSARY</span> FLASHCARDS
            </h1>

            {/* Flashcard Container */}
            <div
                className="relative w-full max-w-2xl aspect-video cursor-pointer perspective-1000 group"
                onClick={() => setIsFlipped(!isFlipped)}
            >
                <div className={clsx(
                    "w-full h-full transition-all duration-500 preserve-3d relative",
                    isFlipped && "rotate-y-180"
                )}>
                    {/* Front (Term) */}
                    <div className="absolute inset-0 backface-hidden">
                        <Card className="w-full h-full flex flex-col items-center justify-center border-cyber-green/30 bg-gray-900/80 backdrop-blur-sm hover:border-cyber-green/60 transition-colors">
                            <span className="text-cyber-blue font-mono text-sm uppercase tracking-widest mb-4">
                                {currentTerm.category}
                            </span>
                            <h2 className="text-4xl md:text-5xl font-bold text-white text-center px-8">
                                {currentTerm.term}
                            </h2>
                            <p className="absolute bottom-6 text-gray-500 text-sm animate-pulse">
                                Click to Flip
                            </p>
                        </Card>
                    </div>

                    {/* Back (Definition) */}
                    <div className="absolute inset-0 backface-hidden rotate-y-180">
                        <Card className="w-full h-full flex flex-col items-center justify-center border-white/20 bg-gray-800/90">
                            <h3 className="text-xl md:text-2xl text-gray-200 text-center px-8 leading-relaxed font-light">
                                {currentTerm.definition}
                            </h3>
                        </Card>
                    </div>
                </div>
            </div>

            {/* Controls */}
            <div className="flex gap-4 mt-8">
                <Button
                    variant="outline"
                    className="border-red-500/50 text-red-400 hover:bg-red-500/10 hover:text-red-300 w-32"
                    onClick={(e) => { e.stopPropagation(); handleNext(false); }}
                >
                    <X size={20} />
                    Missed
                </Button>

                <Button
                    variant="outline"
                    className="border-gray-600 text-gray-400 hover:text-white"
                    onClick={handleReset}
                >
                    <RotateCcw size={20} />
                </Button>

                <Button
                    variant="primary"
                    className="w-32"
                    onClick={(e) => { e.stopPropagation(); handleNext(true); }}
                >
                    <Check size={20} />
                    Got It
                </Button>
            </div>

            <div className="mt-6 text-gray-500 font-mono text-sm">
                Card {currentTermIndex + 1} of {shuffledTerms.length}
            </div>
        </div>
    );
};
