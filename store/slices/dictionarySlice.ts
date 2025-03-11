import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { DictionaryEntry } from '@/types/dictionary';

interface DictionaryState {
    data: DictionaryEntry | null;
    loading: boolean;
    error: string | null;
}

const initialState: DictionaryState = {
    data: null,
    loading: false,
    error: null,
};

export const fetchDictionaryData = createAsyncThunk(
    'dictionary/fetchData',
    async (word: string, { rejectWithValue }) => {
        try {
            const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);

            if (!response.ok) {
                throw new Error('No definitions found');
            }

            const data = await response.json();
            return data[0] as DictionaryEntry;
        } catch (error) {
            return rejectWithValue(error instanceof Error ? error.message : 'Failed to fetch dictionary data');
        }
    }
);

export const dictionarySlice = createSlice({
    name: 'dictionary',
    initialState,
    reducers: {
        clearData: (state) => {
            state.data = null;
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchDictionaryData.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchDictionaryData.fulfilled, (state, action: PayloadAction<DictionaryEntry>) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchDictionaryData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            });
    },
});

export const { clearData } = dictionarySlice.actions;
export default dictionarySlice.reducer;