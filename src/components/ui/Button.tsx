import clsx from 'clsx';
import { ButtonHTMLAttributes, ReactNode } from 'react';
import { Loader2 } from 'lucide-react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
    size?: 'sm' | 'md' | 'lg';
    isLoading?: boolean;
    icon?: ReactNode;
}

export const Button = ({
    children,
    className,
    variant = 'primary',
    size = 'md',
    isLoading = false,
    icon,
    disabled,
    ...props
}: ButtonProps) => {
    const baseStyles = 'inline-flex items-center justify-center font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 disabled:opacity-50 disabled:cursor-not-allowed';

    const variants = {
        primary: 'bg-cyber-green text-black hover:bg-cyber-green/90 focus:ring-cyber-green',
        secondary: 'bg-cyber-blue text-black hover:bg-cyber-blue/90 focus:ring-cyber-blue',
        outline: 'bg-transparent border border-white/20 text-white hover:bg-white/10 focus:ring-white',
        ghost: 'bg-transparent text-gray-300 hover:text-white hover:bg-white/5 focus:ring-white',
        danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500',
    };

    const sizes = {
        sm: 'px-3 py-1.5 text-xs rounded-md',
        md: 'px-4 py-2 text-sm rounded-lg',
        lg: 'px-6 py-3 text-base rounded-xl',
    };

    return (
        <button
            className={clsx(baseStyles, variants[variant], sizes[size], className)}
            disabled={disabled || isLoading}
            {...props}
        >
            {isLoading ? (
                <Loader2 className="animate-spin -ml-1 mr-2 h-4 w-4" />
            ) : icon ? (
                <span className="mr-2 -ml-1">{icon}</span>
            ) : null}
            {children}
        </button>
    );
};
