import { createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../../../config/api";
import toast from "react-hot-toast";

export const loginUserAction = createAsyncThunk(
    "auth/login",
    async (credentials, thunkAPI) => {
        try {
            console.log("Thunk Triggered...");
            const res = await API.post("/auth/login", credentials);
            localStorage.setItem("accessToken", res.data.accessToken);
            toast.success("Logged in");
            return res.data;
        } catch (err) {
            toast.error("Log in failed");
            return thunkAPI.rejectWithValue("Login Failed!", err);
        }
    }
)

export const hydrateUserAction = createAsyncThunk(
    "auth/hydrate",
    async (_, thunkAPI) => {
        try {
            console.log(101)
            const res = await API.get("/auth/me", {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("accessToken")}`
                }
            });
            return res.data;
        } catch (error) {
            return thunkAPI.rejectWithValue("Hydration Failed Hai!", error);
        }
    }
)