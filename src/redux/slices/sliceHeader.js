import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    search: false,
}

const sliceHeader = createSlice({
    name: 'header',
    initialState,
    reducers: {
        timKiem: (state) => {
            state.search = true;
        },
        nonTimKiem: (state) => {
            state.search = false;
        }
    },
})

export const { timKiem, nonTimKiem } = sliceHeader.actions;

export default sliceHeader.reducer;