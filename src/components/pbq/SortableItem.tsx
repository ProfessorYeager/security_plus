import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Card } from '../ui/Card';
import { GripVertical } from 'lucide-react';
import { clsx } from 'clsx';

interface Props {
    id: string;
    text: string;
    isOverlay?: boolean;
}

export const SortableItem = ({ id, text, isOverlay }: Props) => {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
        isDragging
    } = useSortable({ id });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
        zIndex: isDragging ? 50 : 'auto',
        opacity: isDragging ? 0.3 : 1
    };

    return (
        <div ref={setNodeRef} style={style} className={clsx("touch-none", isOverlay && "opacity-100 z-50")}>
            <Card
                className={clsx(
                    "p-4 flex items-center gap-4 border cursor-grab active:cursor-grabbing hover:border-cyber-green/50 transition-colors",
                    isDragging ? "border-cyber-green bg-gray-800" : "border-white/10 bg-gray-900/50",
                    isOverlay && "bg-gray-800 border-cyber-green shadow-xl rotate-2"
                )}
            >
                <div {...attributes} {...listeners} className="text-gray-500 hover:text-white cursor-grab">
                    <GripVertical size={20} />
                </div>
                <span className="text-gray-200 font-medium select-none flex-1">
                    {text}
                </span>
            </Card>
        </div>
    );
};
