import React from 'react';
import ThemeToggle from './ThemeToggle';
import FontSelector from './FontSelector';
import { BiBook } from "react-icons/bi";

const Header: React.FC = () => {
    return (
        <header className="flex justify-between items-center py-6">
            <div className="text-xl font-bold">
                <BiBook className="w-12 h-12 text-gray-600 dark:text-gray-300" />
            </div>
            <div className="flex items-center space-x-4">
                <FontSelector />
                <div className="w-px h-8 bg-gray-400 dark:bg-gray-700" />
                <ThemeToggle />
            </div>
        </header>
    );
};

export default Header;