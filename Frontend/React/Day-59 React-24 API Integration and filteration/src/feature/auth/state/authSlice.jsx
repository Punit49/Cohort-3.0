import { createSlice } from "@reduxjs/toolkit";
import { hydrateUserAction, loginUserAction } from "./authAction";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: null,
        isAuthenticated: false,
        isLoading: true,
    },
    // reducers: {
    //     login: (state, action) => {
    //         console.log(action);
    //         state.user = action.payload;
    //         state.isAuthenticated = true;
    //         state.isLoading = false;
    //     },
    //     logout: (state) => {
    //         state.user = null;
    //         state.isLoading = false;
    //         state.isAuthenticated = false;
    //     }
    // },
    extraReducers: (builder) => {
        builder
            .addCase(loginUserAction.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(loginUserAction.fulfilled, (state, action) => {
                state.isAuthenticated = true;
                state.user = action.payload;
                state.isLoading = false;
            })
            .addCase(loginUserAction.rejected, (state) => {
                state.isLoading = false;
            })
            .addCase(hydrateUserAction.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(hydrateUserAction.fulfilled, (state, action) => {
                state.user = action.payload;
                state.isAuthenticated = true;
                state.isLoading = false;
            })
            .addCase(hydrateUserAction.rejected, (state) => {
                state.isLoading = false;
            })
    }
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;