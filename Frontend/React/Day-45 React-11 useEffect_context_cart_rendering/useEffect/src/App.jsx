import React, { useEffect, useState } from 'react'
import About from "./About"
import Contact from './Contact';
import axios from "axios";

const App = () => {

  const [count, setCount] = useState(0);
  const [togle, settogle] = useState(true);
  const [name, setName] = useState("punit");

  // useEffect(() => {
  //   console.log("App is rendering");
  // }); // runs on every re render of comp 

  // useEffect(() => {
  //   console.log("Me sirf ek baar chalunga..")
  // }, []); // runs only when component mounts

  // useEffect(() => {
  //   console.log("App UseEffect runs... ");
  // }, []);

  const [products, setProducts] = useState(null);

  async function getData(){
    let res = await axios.get("https://fakestoreapi.com/products");
    setProducts(res.data);
    console.log(res.data);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h1>Count - {count}</h1>
      <h1>Name - {name}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button> <br /> <br />
      <button onClick={() => settogle(prev => !prev)}>Change toggle</button> <br /><br />
      <button onClick={() => setName( prev => prev + " Sahu")}>Change Name</button>

      {togle ? <About count={count} /> : <Contact count={count}/> }
    </div>
  )
}

export default App;
