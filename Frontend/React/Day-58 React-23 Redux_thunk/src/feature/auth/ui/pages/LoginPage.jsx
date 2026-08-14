import useAuthHook from "../../hooks/useAuthHook";

const LoginPage = () => {

    const { navigate, register, errors, handleSubmit, handleLogin } = useAuthHook();
    
    return (
    <div className="w-full max-w-md px-10">
        <h2 className="text-4xl font-bold text-white">
        Welcome Back 👋
        </h2>

        <p className="text-neutral-400 mt-3">
        Login to continue shopping.
        </p>

        <form onSubmit={handleSubmit(handleLogin)} className="mt-10 space-y-6">
            <div>
                <label className="text-sm text-neutral-400">
                    Username
                </label>

                <input
                {...register("username", {
                    required: "username is required"
                })}
                type="text"
                placeholder="Enter your username"
                className="w-full mt-2 rounded-xl bg-neutral-900 border border-neutral-700 px-5 py-4 text-white outline-none focus:border-red-500 transition"
                />
                {
                    errors.username && <p className="text-red-500">{errors.username.message}</p>
                }
            </div>

            <div>
                <label className="text-sm text-neutral-400">
                Password
                </label>

                <input
                {...register("password", {
                    required: "Password is required",
                    minLength: {
                        value: 3,
                        message: "Minimum 3 characters are required"
                    }
                })}
                type="password"
                placeholder="Enter your password"
                className="w-full mt-2 rounded-xl bg-neutral-900 border border-neutral-700 px-5 py-4 text-white outline-none focus:border-red-500 transition"
                />
                {
                    errors.password && <p className="text-red-500">{errors.password.message}</p>
                }
            </div>

            <button
                type="submit"
                className="w-full py-4 rounded-xl bg-red-600 hover:bg-red-500 transition text-white font-semibold"
            >
                Login
            </button>

            <p className="text-center text-neutral-400">
                Don't have an account?
                <span onClick={() => navigate("/auth/register") } className="text-red-500 ml-2 cursor-pointer hover:underline">
                Sign Up
                </span>
            </p>
        </form>
    </div>
    );
};

export default LoginPage;