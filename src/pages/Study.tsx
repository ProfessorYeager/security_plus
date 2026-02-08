import { useState, useMemo } from 'react';
import Markdown from 'react-markdown';
import { clsx } from 'clsx';
import { domains } from '../data';
import { Concept } from '../types';
import { useStore } from '../store/useStore';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { CheckCircle, Circle, Play, ChevronRight, ChevronDown, GraduationCap, BookOpen } from 'lucide-react';
import { StudyQuiz } from '../components/StudyQuiz';

export const Study = () => {
    const [selectedDomainId, setSelectedDomainId] = useState<string | null>(domains[0].id);
    const [selectedObjectiveId, setSelectedObjectiveId] = useState<string | null>(domains[0].objectives[0].id);
    const [selectedConcept, setSelectedConcept] = useState<Concept | null>(domains[0].objectives[0].concepts[0]);
    const [activeTab, setActiveTab] = useState<'CONTENT' | 'QUIZ'>('CONTENT');

    const { completedConcepts, toggleConceptComplete } = useStore();

    const activeDomain = domains.find(d => d.id === selectedDomainId);
    const activeObjective = activeDomain?.objectives.find(o => o.id === selectedObjectiveId);

    const isCompleted = selectedConcept ? completedConcepts.includes(selectedConcept.id) : false;

    const handleConceptSelect = (concept: Concept, objectiveId: string) => {
        setSelectedObjectiveId(objectiveId);
        setSelectedConcept(concept);
        setActiveTab('CONTENT');
    };

    return (
        <div className="h-[calc(100vh-8rem)] flex gap-6">
            {/* Sidebar Navigation */}
            <div className={clsx(
                "w-full md:w-1/3 flex flex-col gap-4 overflow-hidden",
                selectedConcept ? "hidden md:flex" : "flex"
            )}>
                <h2 className="text-xl font-bold text-white px-2">Mission Parameters</h2>
                <div className="flex-1 overflow-y-auto pr-2 space-y-4">
                    {domains.map(domain => (
                        <div key={domain.id} className="space-y-2">
                            <button
                                onClick={() => setSelectedDomainId(domain.id === selectedDomainId ? null : domain.id)}
                                className={clsx(
                                    "w-full flex items-center justify-between p-3 rounded-lg text-left transition-colors",
                                    selectedDomainId === domain.id ? "bg-white/10 text-white" : "text-gray-400 hover:bg-white/5"
                                )}
                            >
                                <span className="font-medium">{domain.id} {domain.title}</span>
                                {selectedDomainId === domain.id ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                            </button>

                            {selectedDomainId === domain.id && (
                                <div className="pl-4 space-y-2">
                                    {domain.objectives.map(objective => (
                                        <div key={objective.id}>
                                            <div className="text-sm font-semibold text-gray-500 mb-1 px-2">{objective.id} {objective.title}</div>
                                            <div className="space-y-1 ml-2 border-l border-white/10 pl-2">
                                                {objective.concepts.map(concept => {
                                                    const isDone = completedConcepts.includes(concept.id);
                                                    return (
                                                        <button
                                                            key={concept.id}
                                                            onClick={() => handleConceptSelect(concept, objective.id)}
                                                            className={clsx(
                                                                "w-full flex items-center gap-2 px-2 py-1.5 rounded text-sm text-left transition-colors",
                                                                selectedConcept?.id === concept.id
                                                                    ? "bg-cyber-green/20 text-cyber-green"
                                                                    : "text-gray-400 hover:text-white"
                                                            )}
                                                        >
                                                            {isDone ? <CheckCircle size={14} className="text-cyber-green" /> : <Circle size={14} />}
                                                            <span className="truncate">{concept.title}</span>
                                                        </button>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Main Content Area */}
            <div className={clsx(
                "flex-1 flex flex-col overflow-hidden",
                selectedConcept ? "flex" : "hidden md:flex"
            )}>
                {selectedConcept ? (
                    <Card
                        className="h-full flex flex-col overflow-hidden"
                        contentClassName="flex-1 flex flex-col min-h-0"
                    >
                        {/* Header */}
                        <div className="flex flex-col gap-4 mb-6 shrink-0">
                            <div className="flex justify-between items-start">
                                <div>
                                    <button
                                        onClick={() => setSelectedConcept(null)}
                                        className="md:hidden flex items-center gap-1 text-gray-400 hover:text-white mb-2 text-sm"
                                    >
                                        <ChevronRight className="rotate-180" size={14} />
                                        Back to Missions
                                    </button>
                                    <h1 className="text-2xl font-bold text-white mb-2">{selectedConcept.title}</h1>
                                    <div className="flex items-center gap-2 text-sm text-gray-400">
                                        <span>{activeDomain?.title}</span>
                                        <ChevronRight size={14} />
                                        <span>{activeObjective?.title}</span>
                                    </div>
                                </div>
                                <Button
                                    variant={isCompleted ? "outline" : "primary"}
                                    onClick={() => toggleConceptComplete(selectedConcept.id)}
                                    icon={isCompleted ? <CheckCircle size={18} /> : <Circle size={18} />}
                                >
                                    {isCompleted ? "Mark Incomplete" : "Mark Complete"}
                                </Button>
                            </div>
                        </div>

                        {/* Tabs */}
                        <div className="flex gap-4 border-b border-white/10 mb-6 shrink-0">
                            <button
                                onClick={() => setActiveTab('CONTENT')}
                                className={clsx(
                                    "pb-2 px-1 text-sm font-medium transition-colors border-b-2",
                                    activeTab === 'CONTENT' ? "border-cyber-green text-cyber-green" : "border-transparent text-gray-400 hover:text-white"
                                )}
                            >
                                <div className="flex items-center gap-2">
                                    <BookOpen size={16} />
                                    Intelligence Brief
                                </div>
                            </button>
                            {selectedConcept.quizQuestions && selectedConcept.quizQuestions.length > 0 && (
                                <button
                                    onClick={() => setActiveTab('QUIZ')}
                                    className={clsx(
                                        "pb-2 px-1 text-sm font-medium transition-colors border-b-2",
                                        activeTab === 'QUIZ' ? "border-cyber-green text-cyber-green" : "border-transparent text-gray-400 hover:text-white"
                                    )}
                                >
                                    <div className="flex items-center gap-2">
                                        <GraduationCap size={16} />
                                        Knowledge Check
                                    </div>
                                </button>
                            )}
                        </div>

                        {/* Content Area */}
                        <div className="flex-1 overflow-y-auto space-y-6 pr-2">
                            {activeTab === 'CONTENT' ? (
                                <>
                                    {/* Video Embed */}
                                    {selectedConcept.video ? (
                                        <div className="aspect-video w-full bg-black rounded-xl overflow-hidden border border-white/10 relative group shrink-0">
                                            <iframe
                                                src={selectedConcept.video.url.replace("share", "embed")}
                                                className="w-full h-full"
                                                frameBorder="0"
                                                allowFullScreen
                                                title={selectedConcept.video.title}
                                            ></iframe>
                                        </div>
                                    ) : (
                                        <div className="aspect-video w-full bg-gray-900/50 rounded-xl border border-white/10 flex flex-col items-center justify-center text-gray-500 gap-4 shrink-0">
                                            <Play size={48} className="opacity-20" />
                                            <p>Video Intelligence Unavailable</p>
                                            <Button variant="ghost" size="sm">Request Briefing</Button>
                                        </div>
                                    )}

                                    {/* Text Summary */}
                                    <div className="prose prose-invert max-w-none">
                                        <p className="text-cyber-green font-mono text-xs uppercase tracking-widest mb-2 font-bold">Concept Overview</p>
                                        <p className="text-gray-300 leading-relaxed text-lg mb-6">
                                            {selectedConcept.summary}
                                        </p>

                                        {selectedConcept.details && (
                                            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                                                <p className="text-cyber-blue font-mono text-xs uppercase tracking-widest mb-4 font-bold">Deep Dive Analysis</p>
                                                <div className="text-gray-300 leading-relaxed">
                                                    <Markdown
                                                        components={{
                                                            h3: ({ node, ...props }) => <h3 className="text-lg font-bold text-white mt-6 mb-2" {...props} />,
                                                            h4: ({ node, ...props }) => <h4 className="text-base font-bold text-cyber-green mt-4 mb-1" {...props} />,
                                                            ul: ({ node, ...props }) => <ul className="list-disc pl-5 space-y-2 my-2" {...props} />,
                                                            li: ({ node, ...props }) => <li className="pl-1" {...props} />,
                                                            strong: ({ node, ...props }) => <strong className="text-white font-bold" {...props} />,
                                                            p: ({ node, ...props }) => <p className="mb-4 last:mb-0" {...props} />,
                                                        }}
                                                    >
                                                        {selectedConcept.details}
                                                    </Markdown>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </>
                            ) : (
                                <StudyQuiz
                                    questions={selectedConcept.quizQuestions!}
                                    onComplete={() => {
                                        if (!isCompleted) toggleConceptComplete(selectedConcept.id);
                                        setActiveTab('CONTENT');
                                    }}
                                />
                            )}
                        </div>
                    </Card>
                ) : (
                    <div className="flex items-center justify-center h-full text-gray-500">
                        Select a concept to begin briefing.
                    </div>
                )}
            </div>
        </div>
    );
};
