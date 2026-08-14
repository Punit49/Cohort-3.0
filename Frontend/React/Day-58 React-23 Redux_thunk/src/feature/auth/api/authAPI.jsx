import React from 'react'
import { API } from '../../../config/api'

export const loginAPI = async (userData) => {
    try {
        const res = await API.post("/auth/login", userData);
        return res.data;
    } catch (error) {
        console.error("Error in Login API - ", error);
    }
}

export const hydrateUser = async () => {
    try {
        const res = await API.get("/auth/me", {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("accessToken")}`
            }
        });
        return res.data;
    } catch (error) {   
        console.error("Error in hydrate user - ", error);
    }
}