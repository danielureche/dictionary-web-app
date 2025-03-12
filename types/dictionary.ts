export interface Phonetic {
    text: string;
    audio?: string;
    sourceUrl?: string;
}

export interface Definition {
    definition: string;
    example?: string;
    synonyms: string[];
    antonyms: string[];
}

export interface Meaning {
    partOfSpeech: string;
    definitions: Definition[];
    synonyms: string[];
    antonyms: string[];
}

export interface DictionaryEntry {
    word: string;
    phonetic?: string;
    phonetics: Phonetic[];
    meanings: Meaning[];
    sourceUrls: string[];
}

export interface HistoryItem {
    word: string;
    timestamp: string;
}

export type FontType = 'serif' | 'sans' | 'mono';
export type ThemeType = 'light' | 'dark' | null;