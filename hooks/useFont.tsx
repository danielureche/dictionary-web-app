import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { RootState } from '@/store/store';
import { setFont } from '@/store/slices/fontSlice';
import { FontType } from '@/types/dictionary';

export const useFont = () => {
    const dispatch = useDispatch();
    const font = useSelector((state: RootState) => state.font.font);

    useEffect(() => {
        const savedFont = localStorage.getItem('font') as FontType | null;
        if (savedFont) {
            setFont(savedFont);
        }
    }, [dispatch]);

    useEffect(() => {
        const root = window.document.documentElement;
        root.classList.remove('font-serif', 'font-sans', 'font-mono');
        root.classList.add(`font-${font}`);
        localStorage.setItem("font", font);
    }, [font]);

    const changeFont = (newFont: FontType) => {
        dispatch(setFont(newFont));
    };

    return { font, changeFont };
};