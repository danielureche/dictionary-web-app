import React from 'react';
import { useTheme } from '../hooks/useTheme';
import { IoSunnyOutline, IoMoon } from "react-icons/io5";

const ThemeToggle: React.FC = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={() => {
                toggleTheme();
            }}
            className="flex items-center focus:outline-none"
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
        >
            <div className={`w-12 h-6 flex items-center rounded-full p-1 relative transition-colors duration-300
                ${theme === 'dark' ? 'bg-purple-600' : 'bg-gray-500'}`}>
                <div
                    className={`bg-white dark:bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 
                        ${theme === 'dark' ? 'translate-x-6' : ''}`}
                />
            </div>
            <div className="ml-2 text-xl" suppressHydrationWarning>
            {theme === "dark" ? (
                <IoMoon className="w-6 h-6 text-yellow-400" />
            ) : (
                <IoSunnyOutline className="w-6 h-6 text-gray-600" />
            )}
            </div>
        </button>
    );
};

export default ThemeToggle;



