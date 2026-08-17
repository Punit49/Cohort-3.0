import { API } from "../../../configure/api"

export const getAllProducts = async (search) => {
    try {
        const URL = search ? `/products/search?q=${search}` : '/products';
        const res = await API.get(URL);
        return res.data;
    } catch (error) {
        console.error("Error in products API - ", error);
    }
}

export const getProductsCategories = async () => {
    try {
        const res = await API.get("/products/categories");
        return res.data;
    } catch (error) {
        console.error("Error in products categories API - ", error);
    }
}

export const getProductsByCategory = async (category) => {
    try {
        const res = await API.get(`products/category/${category}`);
        return res.data;
    } catch (error) {
        console.error("Error in products by category API - ", error);
    }
}

