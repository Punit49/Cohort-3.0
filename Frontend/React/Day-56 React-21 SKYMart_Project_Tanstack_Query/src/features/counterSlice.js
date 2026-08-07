import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: "counter",
    initialState: {
        count: 0
    },
    reducers: {
        increment: (state) => {
            state.count++
        },
        decrement: (state) => {
            state.count--
        },
        incrementByAmount: (state, actions) => {
            state.count += actions.payload
        }
    }
})

export const {increment, decrement, incrementByAmount} = counterSlice.actions;
export default counterSlice.reducer;
