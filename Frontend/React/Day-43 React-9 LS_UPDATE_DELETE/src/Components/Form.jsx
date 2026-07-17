import React from "react";
import { useForm } from "react-hook-form";

const Form = ({setIsFormVisible}) => {

  const { reset, register, handleSubmit, formState: {errors} } = useForm({
    mode: "onTouched"
  });
  
  console.log(errors);

  const onSubmit = (data) => {
    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="text-black flex flex-col gap-3 w-80 p-4 border border-black rounded-2xl m-auto mt-10">
      <input
      { ...register("name", {
        required: "Name field can't be empty", 
        pattern: {
          value: /\S/, 
          message: "Blank Spaces are not allowed"
        }
      })}
        className="border p-1 border-black rounded"
        type="text"
        placeholder="Name"
      />  
      {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p> }

      <input
        {...register("email", {
          required: "Email field can't be Empty", 
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: "Enter an valid email"
          }
        })}
        className="border p-1 border-black rounded"
        type="text"
        placeholder="Email"
      />
      { errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p> }

      <input
        {...register("number", {
          required: "Number is required", 
          minLength: {
            value: 10, 
            message: "Minimum 10 digits are required", 
          }, 
          maxLength: {
            value: 10, 
            message: "Maximum only 10 digits are required"
          }
        })}
        className="border p-1 border-black rounded"
        type="number"
        placeholder="Mobile Number"
      />
      { errors.number && <p className="text-red-500 text-sm">{errors.number.message}</p> }

      <input
        {...register("image", {
          required: "Image URL is needed"
        })}
        className="border p-1 border-black rounded"
        type="url"
        placeholder="Image"
      />
      { errors.image && <p className="text-red-500 text-sm">{errors.image.message}</p> }

      <button onClick={handleSubmit} className="bg-blue-400 rounded-sm" >
        Submit
      </button>
    </form>
  );
};

export default Form;
