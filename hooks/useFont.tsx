import { useEffect, useState } from 'react';

type Font = 'serif' | 'sans' | 'mono';

export const useFont = () => {
    const [font, setFont] = useState<Font>('sans');

    useEffect(() => {
        const savedFont = localStorage.getItem('font') as Font | null;
        if (savedFont) {
            setFont(savedFont);
        }
    }, []);

    useEffect(() => {
        const root = window.document.documentElement;
        root.classList.remove('font-serif', 'font-sans', 'font-mono');

        switch (font) {
            case 'serif':
                root.classList.add('font-serif');
                break;
            case 'sans':
                root.classList.add('font-sans');
                break;
            case 'mono':
                root.classList.add('font-mono');
                break;
        }

        localStorage.setItem('font', font);
    }, [font]);

    return { font, setFont };
};