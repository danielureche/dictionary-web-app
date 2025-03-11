import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ThemeType } from '@/types/dictionary';

interface ThemeState {
  theme: ThemeType;
}

const getInitialTheme = (): ThemeType => {
  if (typeof window !== 'undefined') {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme as ThemeType;
    }

    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
  }
  
  return 'light';
};

const initialState: ThemeState = {
  theme: getInitialTheme(), 
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<ThemeType>) => {
      state.theme = action.payload;
      if (typeof window !== 'undefined') {
        localStorage.setItem('theme', action.payload);
      }
    },
    toggleTheme: (state) => {
      state.theme = state.theme === 'light' ? 'dark' : 'light';
      if (typeof window !== 'undefined') {
        localStorage.setItem('theme', state.theme);
      }
    }
  },
});

export const { setTheme, toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;