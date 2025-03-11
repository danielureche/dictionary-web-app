import { useState } from 'react';
import { DictionaryEntry } from '../types/dictionary';

export const useDictionary = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [data, setData] = useState<DictionaryEntry[] | null>(null);

    const searchWord = async (word: string) => {
        if (!word.trim()) {
            setError('Please enter a word');
            return;
        }

        try {
            setLoading(true);
            setError(null);

            const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word.trim()}`);

            if (!response.ok) {
                if (response.status === 404) {
                    setError(`No definitions found for "${word}"`);
                } else {
                    setError('Failed to fetch data. Please try again.');
                }
                setData(null);
                return;
            }

            const data: DictionaryEntry[] = await response.json();
            setData(data);
        } catch (err) {
            setError('An error occurred. Please try again.');
            setData(null);
        } finally {
            setLoading(false);
        }
    };

    return { loading, error, data, searchWord };
};