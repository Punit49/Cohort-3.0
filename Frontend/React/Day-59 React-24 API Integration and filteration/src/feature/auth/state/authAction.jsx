import { createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../../../configure/api";

export const loginUserAction = createAsyncThunk(
    "auth/login",
    async (credentials, thunkAPI) => {
        try {
            const res = await API.post("/auth/login", credentials);
            // console.log("thunkAPI - ", thunkAPI);
            localStorage.setItem("accessToken", res.data.accessToken);
            return res.data;
        } catch (error) {
            console.error("Error in login api - ", error);
            return thunkAPI.rejectWithValue("Error in login api - ", error);
        }
    }
)

export const hydrateUserAction = createAsyncThunk(
    "auth/hydrate",
    async (_, thunkAPI) => {
        try {
            const res = await API.get("/auth/me", {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("accessToken")}`
                }
            });
            return res.data;
        } catch (error) {
            console.error("Error in hydration api - ", error);
            return thunkAPI.rejectWithValue("Error in hydration api - ", error);
        }
    }
)
