import { configureStore } from '@reduxjs/toolkit';
import historyReducer from './slices/historySlice';
import themeReducer from './slices/themeSlice';
import dictionaryReducer from './slices/dictionarySlice';
import fontReducer from './slices/fontSlice';

export const store = configureStore({
    reducer: {
        history: historyReducer,
        theme: themeReducer,
        dictionary: dictionaryReducer,
        font: fontReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;