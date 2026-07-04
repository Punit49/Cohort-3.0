import React, { useState } from "react";

const Register = ({ setIsLogin }) => {
    const [formData, setFormData] = useState({
      name: "John Doe",
      email: "JohnDoe@gmail.com",
      password: "123456789",
    });

    const [users, setUsers] = useState([]);
    const [val, setVal] = useState("");

    const handleChange = (e) => {
      const {name, value} = e.target;
      setFormData({...formData, [name]: value});
    }

    const handleSubmit = (e) => {
      e.preventDefault();
      users.push(formData);
      console.log(users);
      setFormData({
        name: "", email: "", password: ""
      })
    }

    return (
      <div className="border p-4 rounded-xl">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            value={formData.name}
            onChange={handleChange}
            className="border p-2 rounded"
            type="text"
            name="name"
            placeholder="Name"
            required
          />
          <input
            value={formData.email}
            onChange={handleChange}
            className="border p-2 rounded"
            type="text"
            name="email"
            placeholder="email"
            required
          />
          <input
            value={formData.password}
            onChange={handleChange}
            className="border p-2 rounded"
            type="password"
            name="password"
            placeholder="password"
            required
          />
          <button className="bg-blue-800 rounded">Register</button>

          <span className="text-[10px] text-center">
            Already Have an Account?{" "}
            <a
              href="#"
              onClick={() => setIsLogin((prev) => !prev)}
              className="text-blue-400 cursor-pointer"
            >
              Login Here
            </a>{" "}
          </span>
        </form>
      </div>
    );
};

export default Register;
