import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router";

const Register = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    mode: "onTouched",
  });

  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center px-4 font-sans text-gray-200">
      <div className="w-full max-w-md bg-gray-900 border border-gray-800 rounded-2xl shadow-xl p-8">
        <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-2">Create an account</h2>
            <p className="text-gray-400 text-sm">Enter your details to get started.</p>
        </div>
        <form className="space-y-5">
            <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Name</label>
                <input
                {...register("name", {
                    required: "Name is required",
                    minLength: { value: 3, message: "minimum 3 length required" },
                })}
                type="text"
                placeholder="Enter Name"
                className="w-full bg-gray-950 border border-gray-800 rounded-lg px-4 py-2.5 text-white placeholder-gray-600 focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500 transition-colors"
                />
                {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>}
            </div>
            
            <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Email</label>
                <input
                {...register("email", {
                    required: "Email is required",
                })}
                type="email"
                placeholder="Enter Email"
                className="w-full bg-gray-950 border border-gray-800 rounded-lg px-4 py-2.5 text-white placeholder-gray-600 focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500 transition-colors"
                />
                {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>}
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Password</label>
                <input
                {...register("password", { required: "Password is required" })}
                type="password"
                placeholder="Enter Password"
                className="w-full bg-gray-950 border border-gray-800 rounded-lg px-4 py-2.5 text-white placeholder-gray-600 focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500 transition-colors"
                />
                {errors.password && <p className="text-red-400 text-xs mt-1">{errors.password.message}</p>}
            </div>

            <button type="submit" className="w-full bg-white text-gray-900 rounded-lg py-3 font-semibold hover:bg-gray-200 transition-colors mt-4">
                Register
            </button>
        </form>
        <p className="mt-6 text-center text-sm text-gray-500">
            Already have an account? <Link to="/auth/login" className="text-white font-medium hover:underline">Log in</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
