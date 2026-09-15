import axios from "axios";
import { useContext } from "react";
import { MyStore } from "../../../context/ContextProvider";

const useAPI = () => {
    const {accessToken, setAccessToken} = useContext(MyStore);

    const api = axios.create({
        baseURL: "http://localhost:5173/api",
        withCredentials: true
    })

    api.interceptors.request.use(
        (config) => {
            if(accessToken){
                config.headers.Authorization = `Bearer ${accessToken}`;
            }
            return config
        }, 
        (error) => {
            return Promise.reject("Error in API");
        }
    )

    api.interceptors.response.use(
        (response) => response,
        async (error) => {
            const originalRequest = error.config;
            
            if(!originalRequest._retry && error.response?.status == 401){
                originalRequest._retry = true;

                try {
                    const response = await axios.post("/api/auth/refresh");
                    const token = response.data.accessToken;
                    setAccessToken(token);
                    originalRequest.headers.Authorization = `Bearer ${token}`;
                    return axios(originalRequest);
                } catch (refreshError) {
                    return Promise.reject(refreshError);
                }
            }

            return Promise.reject(error);
        }
    )
    
    return api;
}

export default useAPI;