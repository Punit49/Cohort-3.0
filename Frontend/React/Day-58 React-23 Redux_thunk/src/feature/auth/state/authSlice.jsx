import { createSlice } from "@reduxjs/toolkit"
import { hydrateUserAction, loginUserAction } from "./authAction";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: null,
        isAuthenticated: false,
        isLoading: false
    },
    reducers: {
        login: (state, action) => {
            state.user = action.payload;
            state.isAuthenticated = true;
            state.isLoading = false;
        },
        logout: (state) => {
            state.user = null;
            state.isAuthenticated = false
        }
    },
    extraReducers: (builder) => { // builder is thunk action -
        builder
            .addCase(loginUserAction.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(loginUserAction.fulfilled, (state, action) => {
                state.user = action.payload;
                state.isAuthenticated = true;
                state.isLoading = false;
            })
            .addCase(loginUserAction.rejected, (state) => {
                state.isLoading = false;
            })
            .addCase(hydrateUserAction.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(hydrateUserAction.fulfilled, (state, action) => {
                state.isAuthenticated = true;
                state.isLoading = false;
                state.user = action.payload;
            })
            .addCase(hydrateUserAction.rejected, (state) => {
                state.isLoading = false;
            })
    }
})

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;

