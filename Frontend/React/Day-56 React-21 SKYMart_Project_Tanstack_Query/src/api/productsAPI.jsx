import { axiosInstance } from "../config/axiosInstance";

export const getProducts = async () => {
    try {
        const res = await axiosInstance.get("/products");
        return res.data.products;
    } catch (error) {
        console.error("Error in products API - ", error);
    }
}
