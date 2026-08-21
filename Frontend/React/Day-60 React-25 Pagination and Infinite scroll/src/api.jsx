import axios from "axios";

const getProducts = async (page, limit) => {
    try {
      const res = await axios.get(`https://dummyjson.com/products?limit=${limit}&skip=${(page - 1) * limit}`);
      console.log("API CALLING...");
      return res.data;
    } catch (error) {
      console.error("Error in api", error);
    }
  };

export default getProducts;