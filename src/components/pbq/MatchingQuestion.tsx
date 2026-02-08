import { useState, useEffect } from 'react';
import {
    DndContext,
    DragOverlay,
    useSensor,
    useSensors,
    PointerSensor,
    TouchSensor,
    DragStartEvent,
    DragEndEvent
} from '@dnd-kit/core';
import { DraggableItem } from './DraggableItem';
import { DroppableZone } from './DroppableZone';
import { Question, DraggableItem as DraggableItemType } from '../../types';
import clsx from 'clsx';

interface Props {
    question: Question;
    onAnswer: (userMatches: Record<string, string[]>) => void; // zoneId -> itemIds[]
    isAnswered: boolean;
    userState?: Record<string, string[]>; // If reviewing, show previous state
}

export const MatchingQuestion = ({ question, onAnswer, isAnswered, userState }: Props) => {
    // Items that are not yet dropped (in the "bank")
    const [bankItems, setBankItems] = useState<DraggableItemType[]>([]);

    // Items grouped by zoneId
    const [zoneItems, setZoneItems] = useState<Record<string, DraggableItemType[]>>({});

    // Active item for drag overlay
    const [activeItem, setActiveItem] = useState<DraggableItemType | null>(null);

    const sensors = useSensors(
        useSensor(PointerSensor, { activationConstraint: { distance: 8 } }),
        useSensor(TouchSensor) // Better mobile support
    );

    // Initialize state
    useEffect(() => {
        if (question.draggableItems) {
            if (userState) {
                // Restore state if available
                const usedItemIds = new Set<string>();
                const newZoneItems: Record<string, DraggableItemType[]> = {};

                Object.entries(userState).forEach(([zId, itemIds]) => {
                    newZoneItems[zId] = question.draggableItems!.filter(i => itemIds.includes(i.id));
                    itemIds.forEach(id => usedItemIds.add(id));
                });

                setZoneItems(newZoneItems);
                setBankItems(question.draggableItems.filter(i => !usedItemIds.has(i.id)));
            } else {
                // Initial state: all items in bank
                // Shuffle bank items for better challenge
                const shuffled = [...question.draggableItems].sort(() => 0.5 - Math.random());
                setBankItems(shuffled);
                setZoneItems({});
            }
        }
    }, [question.id, userState]); // Re-run if question changes

    const handleDragStart = (event: DragStartEvent) => {
        if (isAnswered) return;
        const { active } = event;
        const item = question.draggableItems?.find(i => i.id === active.id);
        if (item) setActiveItem(item);
    };

    const handleDragEnd = (event: DragEndEvent) => {
        if (isAnswered) return;
        const { active, over } = event;
        setActiveItem(null);

        if (!over) return; // Dropped outside

        const itemId = active.id as string;
        const targetId = over.id as string; // 'bank' or zoneId

        const item = question.draggableItems?.find(i => i.id === itemId);
        if (!item) return;

        // Helper to remove item from wherever it currently is
        const removeFromSource = () => {
            // Check bank
            if (bankItems.find(i => i.id === itemId)) {
                setBankItems(prev => prev.filter(i => i.id !== itemId));
                return;
            }
            // Check zones
            for (const zId in zoneItems) {
                if (zoneItems[zId].find(i => i.id === itemId)) {
                    setZoneItems(prev => ({
                        ...prev,
                        [zId]: prev[zId].filter(i => i.id !== itemId)
                    }));
                    return;
                }
            }
        };

        // 1. Drop into Bank
        if (targetId === 'bank') {
            removeFromSource();
            setBankItems(prev => [...prev, item]);
        }
        // 2. Drop into a Zone
        else if (question.dropZones?.find(z => z.id === targetId)) {
            removeFromSource();
            setZoneItems(prev => ({
                ...prev,
                [targetId]: [...(prev[targetId] || []), item]
            }));
        }

    };

    // Notify parent of changes whenever state updates
    useEffect(() => {
        if (!isAnswered) {
            // Convert state to simplified format for parent
            const result: Record<string, string[]> = {};
            Object.entries(zoneItems).forEach(([zId, items]) => {
                result[zId] = items.map(i => i.id);
            });
            onAnswer(result);
        }
    }, [zoneItems, isAnswered]);

    return (
        <DndContext
            sensors={sensors}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
        >
            <div className="flex flex-col gap-8">
                {/* Zones Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {question.dropZones?.map(zone => {
                        // Check correctness if answered
                        let isCorrect = false;
                        let isWrong = false;
                        if (isAnswered) {
                            // In this simple model, we check if ALL items in the zone belong there
                            // and if ALL correct items are present. 
                            // Or simplier: just visually mark the zone container?
                            // Let's mark individual items or the zone itself.
                            // For Security+, usually creating a mapping.
                            // Let's assume strict matching for now for the zone border.
                            const itemsInZone = zoneItems[zone.id] || [];
                            const correctItems = question.draggableItems?.filter(i => i.matchId === zone.id) || [];

                            // It's correct if every item in here belongs here
                            const allCorrect = itemsInZone.every(i => i.matchId === zone.id);
                            // And maybe we need strictly all of them? No, partial credit exists in PBQ but let's keep it simple.
                            // Let's mark it green if it has at least one correct item and no wrong items.

                            isCorrect = itemsInZone.length > 0 && allCorrect;
                            isWrong = itemsInZone.some(i => i.matchId !== zone.id);
                        }

                        return (
                            <DroppableZone
                                key={zone.id}
                                zone={zone}
                                items={zoneItems[zone.id] || []}
                                isCorrect={isCorrect}
                                isWrong={isWrong}
                            />
                        );
                    })}
                </div>

                {/* Bank / Source Area */}
                <div className="bg-gray-800/50 p-6 rounded-xl border border-white/5">
                    <h3 className="text-sm font-bold text-gray-400 mb-4 uppercase tracking-wider">Available Items</h3>
                    <DroppableZone
                        zone={{ id: 'bank', label: '' }}
                        items={bankItems}
                    />
                </div>
            </div>

            <DragOverlay>
                {activeItem ? <DraggableItem item={activeItem} isOverlay /> : null}
            </DragOverlay>
        </DndContext>
    );
};
