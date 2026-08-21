import axios from "axios";

const getProducts = async (limit, pageParam) => {
    try {
      const res = await axios.get(`https://dummyjson.com/products?limit=${limit}&skip=${pageParam}`);
      console.log("API CALLING...");
      return res.data;
    } catch (error) {
      console.error("Error in api", error);
    }
  };

export default getProducts;