import React, { useState } from 'react';
import { useFont } from '../hooks/useFont';
import { useTheme } from '@/hooks/useTheme';
import { IoChevronDownSharp } from "react-icons/io5";

const FontSelector: React.FC = () => {
    const { font, setFont } = useFont();
    const [isOpen, setIsOpen] = useState(false);
    const { theme } = useTheme();

    const fontOptions = [
        { value: 'sans', label: 'Sans Serif' },
        { value: 'serif', label: 'Serif' },
        { value: 'mono', label: 'Mono' },
    ];

    const fontLabel = fontOptions.find(option => option.value === font)?.label;

    return (
        <div className="relative">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`flex items-center gap-x-3 px-3 py-2 w-40 rounded-md transition-all duration-200
                    ${theme === "dark"
                        ? " text-white"
                        : " text-gray-80"}
                        hover:scale-102`}
                aria-expanded={isOpen}
                aria-haspopup="listbox"
            >
                <span className="font-medium ml-auto">{fontLabel}</span>
                <IoChevronDownSharp
                    className={`w-4 h-4 text-purple-600 transition-transform ${isOpen ? "rotate-180" : ""}`}
                />
            </button>

            {isOpen && (
                <div className={`absolute right-0 mt-2 w-40 rounded-md shadow-lg z-10 transition-opacity 
                    ${theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-gray-900"}`}>
                    <ul
                        className="py-1"
                        role="listbox"
                        aria-labelledby="font-selector"
                    >
                        {fontOptions.map((option) => (
                            <li
                                key={option.value}
                                className={`px-4 py-2 cursor-pointer transition-colors
                                    ${theme === "dark"
                                        ? "hover:bg-gray-700"
                                        : "hover:bg-gray-200"}
                                    ${font === option.value ? "text-purple-600 dark:text-purple-400 font-bold" : ""}`}
                                onClick={() => {
                                    setFont(option.value as 'serif' | 'sans' | 'mono');
                                    setIsOpen(false);
                                }}
                                role="option"
                                aria-selected={font === option.value}
                            >
                                {option.label}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default FontSelector;