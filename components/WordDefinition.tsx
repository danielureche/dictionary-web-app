import React from 'react';
import { DictionaryEntry } from '../types/dictionary';
import AudioPlayer from './AudioPlayer';
import { useTheme } from '@/hooks/useTheme';
import { FiExternalLink } from "react-icons/fi";

interface WordDefinitionProps {
    data: DictionaryEntry;
}

const WordDefinition: React.FC<WordDefinitionProps> = ({ data }) => {
    const audioUrl = data.phonetics.find(p => p.audio)?.audio || '';
    const { theme } = useTheme();

    return (
        <div className="mt-8">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className={`text-4xl font-bold mb-2 
                        ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{data.word}</h1>
                    <p className={`text-lg
                        ${theme === 'dark' ? 'text-purple-300' : 'text-purple-700'}`}>
                        {data.phonetic || data.phonetics.find(p => p.text)?.text || ''}
                    </p>
                </div>
                {audioUrl && (
                    <AudioPlayer audioUrl={audioUrl} word={data.word} />
                )}
            </div>

            {data.meanings.map((meaning, index) => (
                <div key={index} className="mt-8">
                    <div className="flex items-center mb-4">
                        <h2 className={`text-lg font-bold italic mr-4 
                            ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                                {meaning.partOfSpeech}
                            </h2>
                        <div className={`flex-grow h-px 
                            ${theme === 'dark' ? 'bg-gray-600' : 'bg-gray-400'}`}></div>
                    </div>

                    <div className="mt-4">
                        <h3 className={`text-lg mb-4 
                            ${theme === 'dark' ? 'text-gray-300' : 'text-gray-400'}`}>Meaning</h3>
                        <ul className="list-disc list-outside pl-6 space-y-3">
                            {meaning.definitions.map((def, defIndex) => (
                                <li key={defIndex} className="text-base">
                                    <p>{def.definition}</p>
                                    {def.example && (
                                        <p className={`mt-2 italic 
                                            ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                                            "{def.example}"
                                        </p>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {meaning.synonyms.length > 0 && (
                        <div className="mt-6 flex items-center gap-2 flex-wrap">
                            <h3 className={`text-lg
                                ${theme === 'dark' ? 'text-gray-300' : 'text-gray-400'}`}>
                                Synonyms
                            </h3>
                            <div className="inline-flex flex-wrap gap-2">
                                {meaning.synonyms.map((synonym, synIndex) => (
                                    <span key={synIndex} className={`font-bold 
                                        ${theme === 'dark' ? 'text-purple-300' : 'text-purple-700'}`}>
                                        {synonym}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}

                    {meaning.antonyms.length > 0 && (
                        <div className="mt-6">
                            <h3 className={`text-lg inline mr-4 
                                ${theme === 'dark' ? 'text-gray-300' : 'text-gray-400'}`}>
                                Antonyms
                            </h3>
                            <div className="inline-flex flex-wrap gap-2">
                                {meaning.antonyms.map((antonym, antIndex) => (
                                    <span key={antIndex} className={`font-bold 
                                        ${theme === 'dark' ? 'text-purple-300' : 'text-purple-700'}`}>
                                        {antonym}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            ))}

            {data.sourceUrls.length > 0 && (
                <div className={`flex items-center gap-2 mt-8 pt-4 border-t 
                    ${theme === 'dark' ? 'border-gray-600' : 'border-gray-400'}`}>
                    <p className={`text-sm font-medium
                        ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                        Source
                    </p>
                    {data.sourceUrls.map((url, urlIndex) => (
                        <a
                            key={urlIndex}
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`text-xs underline flex items-center
                                ${theme === 'dark' ? 'text-white' : 'text-gray-700'}`}
                        >
                            {url}
                            <FiExternalLink className="ml-1 w-4 h-3" />
                        </a>
                    ))}
                </div>
            )}
        </div>
    );
};

export default WordDefinition;

