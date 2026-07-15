import React from "react";
import {useForm} from "react-hook-form";

const Form = ({setIsFormVisible, setUsers, users}) => {

  const {register, formState: {errors}, reset, handleSubmit} = useForm({
    mode: "onTouched"
  });

  console.log(errors);

  function onSubmit(data){
    console.log(data);
    setIsFormVisible(false);
    let usersData = [...users, data];
    setUsers(usersData);
    localStorage.setItem("users", JSON.stringify(usersData));
    reset();
  }

  return (
    <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-2xl font-bold text-center mb-6">
        Create User
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">
            Name
          </label>
          <input
            {...register("name", {
              required: "Name field can't be empty", 
              pattern: {
                value: /\S/, 
                message: "Blank Spaces are not allowed"
              }
            } )}
            type="text"
            placeholder="Enter name"
            className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-indigo-500"
          />
          {errors.name && <p className="text-red-600 mt-2 font-semibold">{errors.name.message}</p>}
        </div>

        <div>
          <label className="block mb-1 font-medium">
            Email
          </label>
          <input
            {...register("email", {
              required: "Email field can'be empty",
              pattern: {
                value:  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 
                message: "Enter a valid email"
              }
            })}
            type="email"
            placeholder="Enter email"
            className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-indigo-500"
          />
          {errors.email && <p className="text-red-600 mt-2 font-semibold">{errors.email.message}</p>}
        </div>

        <div>
          <label className="block mb-1 font-medium">
            Phone Number
          </label>
          <input
            {...register("number", {
              required: "Number is required", 
              minLength: {
                value: 10, 
                message: "Number must be atleast of 10 digits"
              }, 
              maxLength: {
                value: 10, 
                message: "Number should not exceed 10 digits"
              }
            })}
            type="number"
            placeholder="Enter phone number"
            className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-indigo-500"
          />
          {errors.number && <p className="text-red-600 mt-2 font-semibold">{errors.number.message}</p>}
        </div>

        <div>
          <label className="block mb-1 font-medium">
            Image URL
          </label>
          <input
            {...register("image", {
              required: "Image is required"
            })}
            type="text"
            placeholder="Paste image url"
            className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-indigo-500"
          />
          {errors.image && <p className="text-red-600 mt-2 font-semibold">{errors.image.message}</p>}
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg font-semibold transition"
        >
          Create User
        </button>
      </form>
    </div>
  );
};

export default Form;