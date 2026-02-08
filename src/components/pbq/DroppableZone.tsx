import { useDroppable } from '@dnd-kit/core';
import clsx from 'clsx';
import { DropZone as TopLevelDropZone, DraggableItem as DraggableItemType } from '../../types';
import { DraggableItem } from './DraggableItem';

interface Props {
    zone: TopLevelDropZone;
    items: DraggableItemType[]; // Items currently in this zone
    isCorrect?: boolean; // For results view
    isWrong?: boolean; // For results view
}

export const DroppableZone = ({ zone, items, isCorrect, isWrong }: Props) => {
    const { isOver, setNodeRef } = useDroppable({
        id: zone.id,
    });

    return (
        <div
            ref={setNodeRef}
            className={clsx(
                "min-h-[120px] p-4 rounded-xl border-2 transition-colors flex flex-col gap-2 relative",
                isOver ? "bg-cyber-blue/10 border-cyber-blue" : "bg-black/20 border-white/10",
                isCorrect && "border-cyber-green bg-cyber-green/5",
                isWrong && "border-red-500 bg-red-500/5"
            )}
        >
            <div className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2 flex justify-between">
                <span>{zone.label}</span>
                {items.length > 0 && <span className="text-xs bg-gray-700 px-2 py-0.5 rounded-full">{items.length}</span>}
            </div>

            <div className="flex flex-col gap-2">
                {items.map(item => (
                    <DraggableItem key={item.id} item={item} />
                ))}
            </div>

            {items.length === 0 && !isOver && (
                <div className="absolute inset-0 flex items-center justify-center text-gray-600 text-sm pointer-events-none italic">
                    Drop items here
                </div>
            )}
        </div>
    );
};
