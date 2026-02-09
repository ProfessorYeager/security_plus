import { Link, useLocation } from 'react-router-dom';
import { Shield, BookOpen, Target, BarChart2, Menu, X, Terminal } from 'lucide-react';
import { useState } from 'react';
import clsx from 'clsx';

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const navItems = [
        { name: 'Mission Control', path: '/', icon: Shield },
        { name: 'Briefing Room', path: '/study', icon: BookOpen },
        { name: 'Live Fire', path: '/live-fire', icon: Target },
        { name: 'Arcade', path: '/arcade', icon: Terminal },
        { name: 'Analytics', path: '/stats', icon: BarChart2 },
    ];

    return (
        <nav className="bg-cyber-black border-b border-white/10 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <Link to="/" className="flex-shrink-0">
                            <span className="text-cyber-green font-bold text-xl tracking-wider uppercase">Security+ Protocol</span>
                        </Link>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            {navItems.map((item) => {
                                const isActive = location.pathname === item.path;
                                const Icon = item.icon;
                                return (
                                    <Link
                                        key={item.name}
                                        to={item.path}
                                        className={clsx(
                                            'px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 flex items-center gap-2',
                                            isActive
                                                ? 'bg-cyber-green/10 text-cyber-green border border-cyber-green/20'
                                                : 'text-gray-300 hover:text-white hover:bg-white/5'
                                        )}
                                    >
                                        <Icon size={16} />
                                        {item.name}
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                to={item.path}
                                onClick={() => setIsOpen(false)}
                                className={clsx(
                                    'block px-3 py-2 rounded-md text-base font-medium',
                                    location.pathname === item.path
                                        ? 'bg-gray-900 text-white'
                                        : 'text-gray-300 hover:text-white hover:bg-gray-700'
                                )}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};
