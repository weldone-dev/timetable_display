import type {PayloadAction} from "@reduxjs/toolkit";
import {createSlice} from "@reduxjs/toolkit";

type IMode = "today" | "semester";

export interface InitialState {
    mode: IMode;
    isInputFocus: boolean
    inputValue: string;
}

const initialState: InitialState = {
    mode: "today",
    isInputFocus: false,
    inputValue: "",
};


export const teacherSlice = createSlice({
    name: "teacher",
    initialState,
    reducers: {
        setMode: (state, action: PayloadAction<IMode>) => {
            state.mode = action.payload;
        },
        setInputFocus: (state, action: PayloadAction<boolean>) => {
            state.isInputFocus = action.payload;
        },
        setInputValue: (state, action: PayloadAction<string>) => {
            state.inputValue = action.payload
        },
    },
});

export const {
    setMode,
    setInputFocus,
    setInputValue
} = teacherSlice.actions;
export const teacherReducer = teacherSlice.reducer;
