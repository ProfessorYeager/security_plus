import clsx from 'clsx';
import { ReactNode } from 'react';

interface CardProps {
    children: ReactNode;
    className?: string;
    contentClassName?: string;
    title?: ReactNode;
    action?: ReactNode;
    onClick?: () => void;
}

export const Card = ({ children, className, contentClassName, title, action, onClick }: CardProps) => {
    return (
        <div
            onClick={onClick}
            className={clsx(
                'bg-gray-900/50 backdrop-blur-sm border border-white/5 rounded-xl shadow-xl overflow-hidden',
                className
            )}
        >
            {(title || action) && (
                <div className="px-6 py-4 border-b border-white/5 flex items-center justify-between">
                    {title && <h3 className="text-lg font-medium text-white">{title}</h3>}
                    {action && <div>{action}</div>}
                </div>
            )}
            <div className={clsx("px-6 py-4", contentClassName)}>{children}</div>
        </div>
    );
};
