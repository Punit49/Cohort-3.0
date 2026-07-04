import React, { useState } from "react";

const Form = () => {
    console.log("App rendering...");
    // * Bruteforce approach - 
    // const [name, setName] = useState("");
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");

    // * Better Approach - 
    const [formData, setFormData] = useState({});
    console.log(formData);

    // Optimized appraoch -
    const handleData = (e) => {
      const {name, value} = e.target;
      setFormData({...formData, [name]: value})
    }

  return (
    <div className="p-10 flex flex-col gap-4">
      <h1>Form Handling - </h1>

      <form action="" className="flex rounded-2xl flex-col border p-2 w-70 gap-3">

        {/* Better Approach -  */}
        {/* <input
            onChange={(e) => {
                setFormData({...formData, name: e.target.value});
            }}
          className="border p-3 rounded-xl"
          type="text"
          name="name"
          placeholder="Name"
        />

        <input
            onChange={(e) => {
                setFormData({...formData, email: e.target.value})
            }}
          className="border p-3 rounded-xl"
          type="text"
          name="email"
          placeholder="email"
        />

        <input
            onChange={(e) => {
              setFormData({...formData, password: e.target.value})
            }}
          className="border p-3 rounded-xl"
          type="password"
          name="password"
          placeholder="password"
        /> */}

        {/* Brute force approach */}
        {/* <input
            onChange={(e) => {
                setName(e.target.value)
                console.log(name)
            }}
          className="border p-3 rounded-xl"
          type="text"
          name="name"
          placeholder="Name"
        />

        <input
            onChange={(e) => {setEmail(e.target.value)}}
          className="border p-3 rounded-xl"
          type="text"
          name="email"
          placeholder="email"
        />

        <input
            onChange={(e) => {setPassword(e.target.value)}}
          className="border p-3 rounded-xl"
          type="password"
          name="password"
          placeholder="password"
        /> */}

      {/* Optimized appraoch */}
      <input
            onChange={handleData}
          className="border p-3 rounded-xl"
          type="text"
          name="name"
          placeholder="Name"
        />

        <input
            onChange={handleData}
          className="border p-3 rounded-xl"
          type="text"
          name="email"
          placeholder="email"
        />

        <input
            onChange={handleData}
          className="border p-3 rounded-xl"
          type="password"
          name="password"
          placeholder="password"
        />


        <button>Submit</button>
      </form>
        
        {/* Brute force approach */}
        <div className="result border mt-5 p-2">
            <h1>Name - {formData.name}</h1>
            <h1>Email - {formData.email}</h1>
            <h1>Password - {formData.password}</h1>
        </div>


    </div>
  );
};

export default Form;
