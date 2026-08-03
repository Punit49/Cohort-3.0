import { createSlice } from "@reduxjs/toolkit"

const counterSlice = createSlice({
    name: "counter",
    initialState: {
        count: 0
    },
    reducers: {
        increment: (state, actions) => {
            console.log(actions);
            state.count++;
        },
        decrement: (state) => {
            state.count--;
        }
    }
});

export const {increment, decrement} = counterSlice.actions;
export default counterSlice.reducer;
