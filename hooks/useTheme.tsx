import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTheme } from '@/store/slices/themeSlice';
import { RootState } from '@/store/store';

export function useTheme() {
    const dispatch = useDispatch();
    const { theme } = useSelector((state: RootState) => state.theme);

    useEffect(() => {
        if (theme !== null) return;
        
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            dispatch(setTheme(savedTheme === 'dark' ? 'dark' : 'light'));
        } else {
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            dispatch(setTheme(prefersDark ? 'dark' : 'light'));
        }
    }, [dispatch, theme]);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const handleChange = (e: MediaQueryListEvent) => {
            dispatch(setTheme(e.matches ? 'dark' : 'light'));
        };

        mediaQuery.addEventListener('change', handleChange);
        return () => mediaQuery.removeEventListener('change', handleChange);
    }, [dispatch]);

    useEffect(() => {
        if (theme === null) return;
        
        localStorage.setItem('theme', theme);
        document.documentElement.classList.toggle('dark', theme === 'dark');
    }, [theme]);

    const toggleTheme = () => {
        dispatch(setTheme(theme === 'light' ? 'dark' : 'light'));
    };

    return { theme, toggleTheme };
}