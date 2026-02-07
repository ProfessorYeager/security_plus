import clsx from 'clsx';

interface ProgressBarProps {
    value: number; // 0 to 100
    max?: number;
    label?: string;
    showValue?: boolean;
    className?: string;
    color?: 'green' | 'blue' | 'red';
}

export const ProgressBar = ({
    value,
    max = 100,
    label,
    showValue = false,
    className,
    color = 'green',
}: ProgressBarProps) => {
    const percentage = Math.min(100, Math.max(0, (value / max) * 100));

    const colorStyles = {
        green: 'bg-cyber-green',
        blue: 'bg-cyber-blue',
        red: 'bg-red-500',
    };

    return (
        <div className={clsx('w-full', className)}>
            {(label || showValue) && (
                <div className="flex justify-between mb-1 text-sm font-medium text-gray-300">
                    {label && <span>{label}</span>}
                    {showValue && <span>{Math.round(percentage)}%</span>}
                </div>
            )}
            <div className="w-full bg-gray-700/50 rounded-full h-2.5 overflow-hidden">
                <div
                    className={clsx('h-2.5 rounded-full transition-all duration-500', colorStyles[color])}
                    style={{ width: `${percentage}%` }}
                ></div>
            </div>
        </div>
    );
};
