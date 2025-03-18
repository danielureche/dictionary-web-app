import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { HistoryItem } from '../../types/dictionary';

interface HistoryState {
    items: HistoryItem[];
}

const initialState: HistoryState = {
    items: [],
};

export const historySlice = createSlice({
    name: 'history',
    initialState,
    reducers: {
        addToHistory: (state, action: PayloadAction<string>) => {
            const newItem: HistoryItem = {
                word: action.payload,
                timestamp: new Date().toISOString(),
            };

            const existingIndex = state.items.findIndex(item => item.word === action.payload);
            if(existingIndex !== -1){
                state.items.splice(existingIndex, 1);
            }
            state.items.unshift(newItem);

            if (state.items.length > 10) {
                state.items = state.items.splice(0, 10);
            }
        },
        clearHistory: (state) => {
            state.items = [];
        },
    },
});

export const { addToHistory, clearHistory } = historySlice.actions;

export default historySlice.reducer;