import axios from "axios"
import { useContext } from "react";
import { MyStore } from "../../../context/ContextProvider";


const useApi = () => {
    const API = axios.create({
        baseURL: "http://localhost:5173",
        withCredentials: true
    })

    const { accessToken } = useContext(MyStore);
    
    API.interceptors.request.use(
        (config) => {
            config.headers.Authorization = `Bearer ${accessToken}`;
            return config;
        },
        (error) => {
            console.log(error);
        }
    )

    return API;
}

export default useApi;