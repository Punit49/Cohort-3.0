import { createSlice } from "@reduxjs/toolkit";

const hydrateUser = () => {
    try {
        const user = localStorage.getItem("user");
        return user ? JSON.parse(user) : null
    } catch {
        return null;
    }
}

const storedUser = hydrateUser();

const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: storedUser,
        isAuthenticated: !!storedUser // false hai to false, true hai to true
    },
    reducers: {
        login: (state, action) => {
            state.user = action.payload;
            state.isAuthenticated = true;
        },
        logout: (state) => {
            state.user = null;
            state.isAuthenticated = false;
        }
    }
})

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;