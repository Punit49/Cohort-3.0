import React, { useState } from "react";

const Register = ({setUsers, setIsRegistered}) => {

    const [formData, setFormData] = useState({
        name: "Punit",
        email: "the", 
        password: "123",
        accountnumber: "78", 
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6xH3fMrbHCpIZC1iCaJxmhswGlpRks1entHXJtZlGpg&s=10"
    });

    // console.log(formData);

    const handleChange = (e) => {
        let {name, value} = e.target;
        setFormData({...formData, [name]: value});
    } 

    const handleSubmit = (e) => {
        e.preventDefault();
        setUsers(prev => [...prev, formData]);
        setIsRegistered(true);
    }

    return (
        <div className="bg-white text-black w-70 border p-4 rounded-xl flex flex-col gap-4">
            <h1>Create your bank profile</h1>
            <form onSubmit={handleSubmit} className="pb-3 flex flex-col gap-3 mt-4" action="">
                <input className="py-1 px-2 border rounded"
                    onChange={handleChange}
                    value={formData.name}
                    type="text" 
                    placeholder="Name" 
                    name="name" />
                <input className="py-1 px-2 border rounded" 
                    onChange={handleChange}
                    value={formData.email}
                    type="text" 
                    placeholder="Email" 
                    name="email" />
                <input  className="py-1 px-2 border rounded"
                    onChange={handleChange}
                    value={formData.password}
                    type="password" 
                    placeholder="Password" 
                    name="password" />
                <input  className="py-1 px-2 border rounded"
                    onChange={handleChange}
                    value={formData.accountnumber}
                    type="number"
                    placeholder="Account Number"
                    name="accountnumber"
                />
                <input  className="py-1 px-2 border rounded"
                    onChange={handleChange}
                    value={formData.image}
                    type="url" 
                    name="image"
                    placeholder="Image URL" />

                <button className="mt-3 bg-blue-900 p-1 rounded text-white">Submit Details</button>
            </form>
        </div>
    );
};

export default Register;
