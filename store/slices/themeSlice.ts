import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ThemeType } from '@/types/dictionary';

interface ThemeState {
  theme: ThemeType;
}

const initialState: ThemeState = {
  theme: null, 
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<ThemeType>) => {
      state.theme = action.payload;
    },
    toggleTheme: (state) => {
      state.theme = state.theme === 'light' ? 'dark' : 'light';
    }
  },
});

export const { setTheme, toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;

