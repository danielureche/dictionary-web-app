import React, { useState } from 'react';
import { HistoryItem } from '../types/dictionary';
import { useTheme } from '../hooks/useTheme';
import { useHistory } from '../hooks/useHistory';

interface SearchHistoryProps {
    onSelectWord: (word: string) => void;
}

const SearchHistory: React.FC<SearchHistoryProps> = ({ onSelectWord }) => {
    const [isOpen, setIsOpen] = useState(false);
    const { historyItems, clearAllHistory } = useHistory();
    const { theme } = useTheme();

    if (historyItems.length === 0) {
        return null;
    }

    const formatDate = (timestamp: string) => {
        const date = new Date(timestamp);
        return new Intl.DateTimeFormat('default', {
            day: '2-digit',
            month: 'short',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
        }).format(date);
    };

    return (
        <div className="relative">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`mt-4 text-sm ${theme === 'dark' ? 'text-purple-400' : 'text-purple-600'} hover:underline`}
            >
                {isOpen ? 'Hide search history' : 'Show search history'}
            </button>

            {isOpen && (
                <div className={`absolute left-0 mt-2 w-64 md:w-80 rounded-md shadow-lg z-10 p-4
                    ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
                    <div className="flex justify-between items-center mb-3">
                        <h3 className="font-bold">Recent searches</h3>
                        <button
                            onClick={clearAllHistory}
                            className={`text-xs ${theme == 'dark' ? 'text-purple-400 hover:underline' : 'text-purple-600  hover:underline'}`}
                        >
                            Clear all
                        </button>
                    </div>

                    <ul className="space-y-2 max-h-60 overflow-y-auto">
                        {historyItems.map((item: HistoryItem, index: number) => (
                            <li
                                key={index}
                                className={`p-2 rounded cursor-pointer transition-colors duration-200
                                    ${theme === 'dark' ? 'bg-gray-800 hover:bg-gray-700 text-white' : 'bg-white hover:bg-gray-100 text-black'}`}
                                onClick={() => {
                                    onSelectWord(item.word);
                                    setIsOpen(false);
                                }}
                            >
                                <div className="font-medium">{item.word}</div>
                                <div className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                                    {formatDate(item.timestamp)}
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default SearchHistory;