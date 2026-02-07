import { useState } from 'react';
import { clsx } from 'clsx';
import { domains } from '../data';
import { Concept, Objective } from '../types';
import { useStore } from '../store/useStore';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { CheckCircle, Circle, Play, ChevronRight, ChevronDown } from 'lucide-react';

export const Study = () => {
    const [selectedDomainId, setSelectedDomainId] = useState<string | null>(domains[0].id);
    const [selectedObjectiveId, setSelectedObjectiveId] = useState<string | null>(domains[0].objectives[0].id);
    const [selectedConcept, setSelectedConcept] = useState<Concept | null>(domains[0].objectives[0].concepts[0]);

    const { completedConcepts, toggleConceptComplete } = useStore();

    const activeDomain = domains.find(d => d.id === selectedDomainId);
    const activeObjective = activeDomain?.objectives.find(o => o.id === selectedObjectiveId);

    const isCompleted = selectedConcept ? completedConcepts.includes(selectedConcept.id) : false;

    return (
        <div className="h-[calc(100vh-8rem)] flex gap-6">
            {/* Sidebar Navigation */}
            <div className="w-1/3 flex flex-col gap-4 overflow-hidden">
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
                                                            onClick={() => {
                                                                setSelectedObjectiveId(objective.id);
                                                                setSelectedConcept(concept);
                                                            }}
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
            <div className="flex-1 flex flex-col overflow-hidden">
                {selectedConcept ? (
                    <Card className="h-full flex flex-col overflow-hidden">
                        {/* Header */}
                        <div className="flex justify-between items-start mb-6">
                            <div>
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

                        {/* Content */}
                        <div className="flex-1 overflow-y-auto space-y-6 pr-2">

                            {/* Video Embed */}
                            {selectedConcept.video ? (
                                <div className="aspect-video w-full bg-black rounded-xl overflow-hidden border border-white/10 relative group">
                                    <iframe
                                        src={selectedConcept.video.url.replace("share", "embed")}
                                        className="w-full h-full"
                                        frameBorder="0"
                                        allowFullScreen
                                        title={selectedConcept.video.title}
                                    ></iframe>
                                </div>
                            ) : (
                                <div className="aspect-video w-full bg-gray-900/50 rounded-xl border border-white/10 flex flex-col items-center justify-center text-gray-500 gap-4">
                                    <Play size={48} className="opacity-20" />
                                    <p>Video Intelligence Unavailable</p>
                                    <Button variant="ghost" size="sm">Request Briefing</Button>
                                </div>
                            )}

                            {/* Text Summary */}
                            <div className="prose prose-invert max-w-none">
                                <h3 className="text-lg font-bold text-white">Intelligence Brief</h3>
                                <p className="text-gray-300 leading-relaxed text-lg">
                                    {selectedConcept.summary}
                                </p>
                            </div>

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
