import React, { useState } from 'react';
import { useTheme } from '@/hooks/useTheme';
import { BiSearch } from "react-icons/bi"; 

interface SearchBarProps {
    onSearch: (word: string) => void;
    loading: boolean;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, loading }) => {
    const [word, setWord] = useState('');
    const [error, setError] = useState('');
    const { theme } = useTheme();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!word.trim()) {
            setError('Whoops, can not be empty...');
            return;
        }

        setError('');
        onSearch(word);
    };

    return (
        <form onSubmit={handleSubmit} className="w-full mt-8">
            <div className="relative">
                <input
                    type="text"
                    value={word}
                    onChange={(e) => setWord(e.target.value)}
                    className={`
                        w-full py-4 pl-6 pr-12 rounded-2xl 
                        ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-gray-100 text-black'}
                        focus:outline-none focus:ring-2 focus:ring-purple-500 font-bold
                        ${error ? 'border border-red-500' : ''}
                    `}
                    placeholder="Search for any word..."
                    aria-label="Search for a word"
                    disabled={loading}
                />
                <button
                    type="submit"
                    className="absolute right-6 top-1/2 transform -translate-y-1/2 text-purple-600"
                    disabled={loading}
                    aria-label="Search"
                >
                    <BiSearch size={20} className="text-purple-500" />
                </button>
            </div>
            {error && (
                <p className="mt-2 text-red-500">{error}</p>
            )}
        </form>
    );
};

export default SearchBar;