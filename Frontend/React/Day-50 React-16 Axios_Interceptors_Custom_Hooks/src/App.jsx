import React, { useEffect } from 'react'
import { axiosInstance } from './config/axiosInstance';

const App = () => {

  async function getProducts(){
    try {
      const res = await axiosInstance.get("/products");
      console.log("Products - ", res);
    } catch (error) {
      console.error("Error in products api - ", error);
    }
  }
  
  async function getUsers(){
    try {
      const res = await axiosInstance.get("/users");
      console.log("Users - ", res);
    } catch (error) {
      console.error("Error in users api - ", error);
    }
  }

  useEffect(() => {
    getProducts();
    getUsers();
  }, []);

  return (
    <div>
      App RUnning 
    </div>
  )
}

export default App
