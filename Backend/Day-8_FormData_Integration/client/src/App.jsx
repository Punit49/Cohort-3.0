import React from 'react'
import {useForm} from "react-hook-form"
import axios from "axios";

const App = () => {

  const { register, handleSubmit } = useForm({mode: "onBlur"});
  
  const submitHandler = async (data) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("profilePic", data.profilePic[0]);
    await axios.post("http://localhost:3000/file", formData);
  }

  return (
    <div className='mt-20'>
      <form onSubmit={handleSubmit(submitHandler)} className='bg-blue-950 p-6 m-auto w-[50%] flex flex-col gap-5'>
        <h1 className='text-2xl mb-5'>Register User</h1>
        <input {...register("name")} className='p-2 border' type="text" placeholder='Enter Your name' />
        <input {...register("email")} className='p-2 border' type="email" placeholder='Enter Your email' />
        <label htmlFor="profilePic">Select your profile picture</label>
        <input type="file" {...register("profilePic")} className='p-2 border'  placeholder='Select your profile picture' />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default App
