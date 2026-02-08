import { useState, useEffect } from 'react';
import {
    DndContext,
    closestCenter,
    KeyboardSensor,
    PointerSensor,
    useSensor,
    useSensors,
    DragEndEvent,
    TouchSensor
} from '@dnd-kit/core';
import {
    arrayMove,
    SortableContext,
    sortableKeyboardCoordinates,
    verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { Question, QuestionOption } from '../../types';
import { SortableItem } from './SortableItem';

interface Props {
    question: Question;
    onAnswer: (orderedIds: string[]) => void;
    isAnswered: boolean;
    userState?: string[]; // If reviewing, show previous order
}

export const OrderingQuestion = ({ question, onAnswer, isAnswered, userState }: Props) => {
    // Local state for the list items
    const [items, setItems] = useState<QuestionOption[]>([]);

    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(TouchSensor), // Mobile
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates,
        })
    );

    useEffect(() => {
        if (question.options) {
            if (userState && userState.length > 0) {
                // Restore user's order
                const ordered = userState.map(id => question.options!.find(o => o.id === id)).filter(Boolean) as QuestionOption[];
                // Add any missing items (just in case) at the end
                const missing = question.options.filter(o => !userState.includes(o.id));
                setItems([...ordered, ...missing]);
            } else {
                // Initial state: Randomize or take question.options as provided (usually pre-shuffled in data)
                setItems(question.options);
            }
        }
    }, [question.id, userState]);

    const handleDragEnd = (event: DragEndEvent) => {
        if (isAnswered) return; // Lock if answered

        const { active, over } = event;

        if (active.id !== over?.id) {
            setItems((items) => {
                const oldIndex = items.findIndex(i => i.id === active.id);
                const newIndex = items.findIndex(i => i.id === over?.id);

                const newOrder = arrayMove(items, oldIndex, newIndex);

                // Notify parent
                onAnswer(newOrder.map(i => i.id));

                return newOrder;
            });
        }
    };

    return (
        <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
        >
            <div className="flex flex-col gap-3 max-w-xl mx-auto">
                <SortableContext
                    items={items.map(i => i.id)}
                    strategy={verticalListSortingStrategy}
                >
                    {items.map((item, index) => (
                        <div key={item.id} className="relative group">
                            {/* Sequence Number Indicator */}
                            <div className="absolute -left-12 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-full bg-gray-800 text-gray-500 font-mono text-sm border border-white/5">
                                {index + 1}
                            </div>

                            <SortableItem id={item.id} text={item.text} />

                            {/* Feedback Overlay (only when answered) */}
                            {isAnswered && (
                                <div className="absolute right-4 top-1/2 -translate-y-1/2">
                                    {question.correctOrder?.[index] === item.id ? (
                                        <div className="text-green-500 font-bold text-sm bg-green-900/20 px-2 py-1 rounded">CORRECT POS</div>
                                    ) : (
                                        <div className="text-red-500 font-bold text-sm bg-red-900/20 px-2 py-1 rounded">WRONG POS</div>
                                    )}
                                </div>
                            )}
                        </div>
                    ))}
                </SortableContext>
            </div>

            {/* Show Correct Order if Wrong & Answered? */}
            {isAnswered && (
                <div className="mt-6 p-4 bg-gray-900/50 rounded-lg border border-white/10 text-sm text-gray-400">
                    <p className="font-bold text-white mb-2">Correct Sequence:</p>
                    <ol className="list-decimal list-inside space-y-1 ml-2">
                        {question.correctOrder?.map(id => {
                            const opt = question.options?.find(o => o.id === id);
                            return <li key={id}>{opt?.text}</li>;
                        })}
                    </ol>
                </div>
            )}
        </DndContext>
    );
};
