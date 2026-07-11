import React from "react";
import { useForm } from "react-hook-form";

const Form = ({ setUsers, setIsFormVisible }) => {

  console.log("Form Rendering...");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onTouched"
  });

  const onSubmit = (data) => {
    console.log(data);
    reset();
    setUsers(prev => [...prev, data]);
    setIsFormVisible(prev => !prev);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="text-black flex flex-col gap-3 w-80 p-4 border border-black rounded-2xl m-auto mt-10">
      <input
        {...register("name", {
          required: "Naam dena zaruri hai", 
          validate: (value) => value.trim() !== "" || "Bhai Space mat de", 
          pattern: {
            value: /\S/, 
            message: "Blank Spaces are not allowed"
          },
        })}
        className="border p-1 border-black rounded"
        type="text"
        placeholder="Name"
      />
      { errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p> }

      <input
        {...register("email", {
          required: "Email Deni Zaruri Hai", 
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, 
            message: "Enter a valid email"
          }
        })}
        className="border p-1 border-black rounded"
        type="text"
        placeholder="Email"
      />
      { errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p> }

      <input
        {...register("mobile", {
          required: "Number De Bhai", 
          minLength: {
            value: 10, 
            message: "Number must be at least of 10 digits"
          }, 
          maxLength: {
            value: 10, 
            message: "Number should not be more than 10"
          }
        })}
        className="border p-1 border-black rounded"
        type="number"
        placeholder="Mobile Number"
      />
       { errors.mobile && <p className="text-red-500 text-sm">{errors.mobile.message}</p> }

      <input
        {...register("image", {
          required: "Image URL Chahiye"
        })}
        className="border p-1 border-black rounded"
        type="url"
        placeholder="Image"
      />
       { errors.image && <p className="text-red-500 text-sm">{errors.image.message}</p> }

      <button
        className="bg-blue-400 rounded-sm"
      >
        Submit
      </button>
    </form>
  );
};

export default Form;
