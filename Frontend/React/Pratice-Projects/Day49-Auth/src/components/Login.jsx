import {React, useContext} from "react";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { MyStore } from "../context/AppContext";

const Login = () => {
    const { reset, register, formState: {errors}, handleSubmit } = useForm({
        mode: "all"
    });

    const navigate = useNavigate();
    const { setLoggedInUser, registeredUsers } = useContext(MyStore);
    
    function handleForm(data){

        const isUser = registeredUsers.find((u) => {
            return u.email === data.email && u.password === data.password;
        });

        if(!isUser) {
            return alert("Email or password incorrect");
        }

        setLoggedInUser(isUser);
        localStorage.setItem("user", JSON.stringify(isUser));
        console.log(data);
        reset();
        return navigate("/");
    }



    return (
        <div className="min-h-screen bg-[#0F0F0F] flex items-center justify-center px-6">
        <div className="w-full max-w-md bg-[#181818] border border-zinc-800 rounded-3xl p-8 shadow-2xl">
            <h1 className="text-4xl font-bold text-white">Welcome Back 👋</h1>
            <p className="text-zinc-400 mt-2">
            Login to continue shopping.
            </p>

            <form onSubmit={handleSubmit(handleForm)} className="mt-8 space-y-5">
            <div>
                <label className="text-sm text-zinc-300">Email</label>
                <input
                {...register("email", {
                    required: "Email is required"
                })}
                type="email"
                placeholder="Enter your email"
                className="w-full mt-2 px-4 py-3 rounded-xl bg-[#232323] border border-zinc-700 text-white placeholder-zinc-500 outline-none focus:border-red-500"
                />
                {errors.email && 
                    <p>{errors.email.message}</p>
                }
            </div>

            <div>
                <label className="text-sm text-zinc-300">Password</label>
                <input
                {...register("password", {
                    required: "pw is required", 
                    minLength: {
                        value: 6, 
                        message: "Minimum 6 length"
                    }, 
                    maxLength: {
                        value: 10, 
                        message: "max 10 length"
                    }
                })}
                type="password"
                placeholder="Enter your password"
                className="w-full mt-2 px-4 py-3 rounded-xl bg-[#232323] border border-zinc-700 text-white placeholder-zinc-500 outline-none focus:border-red-500"
                />
                {errors.password && 
                    <p>{errors.password.message}</p>
                }
            </div>

            <button className="w-full bg-red-600 hover:bg-red-500 transition py-3 rounded-xl text-white font-semibold">
                Login
            </button>
            </form>

            <p className="text-center text-zinc-400 mt-6 text-sm">
            Don't have an account?
            <span onClick={() => navigate("/register") } className="text-red-500 cursor-pointer ml-1">
                Register
            </span>
            </p>
        </div>
        </div>
    );
};

export default Login;