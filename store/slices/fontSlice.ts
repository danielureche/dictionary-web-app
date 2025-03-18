import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FontType } from "@/types/dictionary";

interface FontState {
    font: FontType;
}

const initialState: FontState = {
    font: "sans",
};

const fontSlice = createSlice({
    name: "font",
    initialState,
    reducers: {
        setFont: (state, action: PayloadAction<FontType>) => {
            state.font = action.payload;
        }
    }
})

export const { setFont } = fontSlice.actions;
export default fontSlice.reducer;