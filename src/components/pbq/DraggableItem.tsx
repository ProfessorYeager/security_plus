import { useDraggable } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';
import clsx from 'clsx';
import { DraggableItem as TopLevelDraggableItem } from '../../types';

interface Props {
    item: TopLevelDraggableItem;
    isOverlay?: boolean;
}

export const DraggableItem = ({ item, isOverlay }: Props) => {
    const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({
        id: item.id,
        data: item // Pass item data for drag events
    });

    const style = {
        transform: CSS.Translate.toString(transform),
    };

    return (
        <div
            ref={setNodeRef}
            style={style}
            {...listeners}
            {...attributes}
            className={clsx(
                "p-3 rounded-lg border-2 cursor-grab active:cursor-grabbing shadow-sm transition-colors touch-manipulation",
                isDragging ? "opacity-30 border-dashed border-gray-500 bg-gray-800" : "bg-gray-700/50 border-gray-600 hover:border-cyber-blue hover:text-white text-gray-200",
                isOverlay && "bg-gray-800 border-cyber-blue opacity-90 shadow-xl scale-105 z-50 cursor-grabbing"
            )}
        >
            <div className="flex items-center gap-2">
                <span className="text-gray-400">::</span>
                <span>{item.text}</span>
            </div>
        </div>
    );
};
