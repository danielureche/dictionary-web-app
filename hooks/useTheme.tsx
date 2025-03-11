import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTheme } from '@/store/slices/themeSlice';
import { RootState } from '@/store/store';

export function useTheme() {
    const dispatch = useDispatch();
    const { theme } = useSelector((state: RootState) => state.theme);

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            dispatch(setTheme(savedTheme === 'dark' ? 'dark' : 'light'));
        } else {
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            if (prefersDark) {
                dispatch(setTheme('dark'));
            }
        }

        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const handleChange = (e: MediaQueryListEvent) => {
            dispatch(setTheme(e.matches ? 'dark' : 'light'));
        };

        mediaQuery.addEventListener('change', handleChange);
        return () => mediaQuery.removeEventListener('change', handleChange);
    }, [dispatch]);

    useEffect(() => {
        if (!theme) return;
        localStorage.setItem('theme', theme);

        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [theme]);

    const toggleTheme = () => {
        dispatch(setTheme(theme === 'light' ? 'dark' : 'light'));
    };

    return { theme, toggleTheme };
}