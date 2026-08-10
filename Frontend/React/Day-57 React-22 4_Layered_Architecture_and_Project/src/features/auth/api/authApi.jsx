import { API } from "../../../config/api";

export const loginAPI = async (credentials) => {
    try {
        const res = await API.post("/auth/login", credentials);
        localStorage.setItem("accessToken", res.data.accessToken);
        return res.data;
    } catch (error) {   
        console.error("Error in LoginAPI - ", error);
    }
}

export const hydrateUser = async () => {
    try {
        const res = await API.get("/auth/me", {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("accessToken")}`
            }
        });
        console.log(res);
        return res.data;
    } catch (error) {
        console.error("Error in hydration api -> ", error);
    }
}

