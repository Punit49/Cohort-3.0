import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "https://fakestoreapi.com"
});

axiosInstance.interceptors.response.use(
    (response) => {
        console.log(response);
        return response;
    }, (error) => {
        console.error(error);
    }
)

axiosInstance.interceptors.request.use(
    (config) => {
        console.log(config);
    }, (error) => {
        console.error(error);
    }
)

