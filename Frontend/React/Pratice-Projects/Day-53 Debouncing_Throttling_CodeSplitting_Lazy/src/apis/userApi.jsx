import axios from "axios";

export const getUsers = async () => {
    console.log("User API function is running...");
    const res = await axios.get("https://fakestoreapi.com/users")
    console.log(res.data);
}