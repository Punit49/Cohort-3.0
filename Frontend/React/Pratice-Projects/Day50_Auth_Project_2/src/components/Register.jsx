import {React} from "react";
import { NavLink } from "react-router";
import { useAuth } from "../hooks/useAuth";

const Register = () => {

  const { handleSubmit, handleSignUp, register, errors } = useAuth();

  return (
    <div className="min-h-screen bg-[#0F0F0F] flex items-center justify-center px-6">
      <div className="w-full max-w-md bg-[#181818] border border-zinc-800 rounded-3xl p-8 shadow-2xl">
        <h1 className="text-4xl font-bold text-white">Create Account ✨</h1>
        <p className="text-zinc-400 mt-2">
          Join us and start your fashion journey.
        </p>

        <form onSubmit={handleSubmit(handleSignUp)} className="mt-8 space-y-5">
          <div>
            <label className="text-sm text-zinc-300">Full Name</label>
            <input
            {...register("name", {
              required: "Name chahiye hoga"
            })}
              type="text"
              placeholder="Enter your name"
              className="w-full mt-2 px-4 py-3 rounded-xl bg-[#232323] border border-zinc-700 text-white placeholder-zinc-500 outline-none focus:border-red-500"
            />
            {
              errors.name && <p className="text-red-600 text-sm">{errors.name.message}</p>
            }
          </div>

          <div>
            <label className="text-sm text-zinc-300">Email</label>
            <input
            {...register("email", {
              required: "Email de bhai"
            })}
              type="email"
              placeholder="Enter your email"
              className="w-full mt-2 px-4 py-3 rounded-xl bg-[#232323] border border-zinc-700 text-white placeholder-zinc-500 outline-none focus:border-red-500"
            />
            {
              errors.email && <p className="text-red-600 text-sm">{errors.email.message}</p>
            }
          </div>

          <div>
            <label className="text-sm text-zinc-300">Password</label>
            <input
            {...register("password", {
              required: "Password mat bhool beta"
            })}
              type="password"
              placeholder="Create a password"
              className="w-full mt-2 px-4 py-3 rounded-xl bg-[#232323] border border-zinc-700 text-white placeholder-zinc-500 outline-none focus:border-red-500"
            />
            {
              errors.password && <p className="text-red-600 text-sm">{errors.password.message}</p>
            }
          </div>

          <button className="w-full bg-red-600 hover:bg-red-500 transition py-3 rounded-xl text-white font-semibold">
            Create Account
          </button>
        </form>

        <p className="text-center text-zinc-400 mt-6 text-sm">
          Already have an account?
          <NavLink to={"/"} className="text-red-500 cursor-pointer ml-1">
            Login
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default Register;