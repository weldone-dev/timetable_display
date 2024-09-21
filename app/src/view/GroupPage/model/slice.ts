import type {PayloadAction} from "@reduxjs/toolkit";
import {createSlice} from "@reduxjs/toolkit";

type IMode = "today" | "semester";

export interface InitialState {
    mode: IMode;
    isInputFocus: boolean;
    inputValue: string;
}

const initialState: InitialState = {
    mode: "today",
    isInputFocus: false,
    inputValue: ""
};


export const groupSlice = createSlice({
    name: "group",
    initialState,
    reducers: {
        setMode: (state, action: PayloadAction<IMode>) => {
            state.mode = action.payload;
        },
        setSearchFocus: (state, action: PayloadAction<boolean>) => {
            state.isInputFocus = action.payload;
        },
        setSearchValue: (state, action: PayloadAction<string>) => {
            state.inputValue = action.payload
        }
    },
});

export const {
    setMode,
    setSearchFocus,
    setSearchValue
} = groupSlice.actions;
export const groupReducer = groupSlice.reducer;
