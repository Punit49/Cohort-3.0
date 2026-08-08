const LoginPage = () => {

    return (
    <div className="w-full max-w-md px-10">
        <h2 className="text-4xl font-bold text-white">
        Welcome Back 👋
        </h2>

        <p className="text-neutral-400 mt-3">
        Login to continue shopping.
        </p>

        <form className="mt-10 space-y-6">
            <div>
                <label className="text-sm text-neutral-400">
                Email
                </label>

                <input
                type="email"
                placeholder="Enter your email"
                className="w-full mt-2 rounded-xl bg-neutral-900 border border-neutral-700 px-5 py-4 text-white outline-none focus:border-red-500 transition"
                />
            </div>

            <div>
                <label className="text-sm text-neutral-400">
                Password
                </label>

                <input
                type="password"
                placeholder="Enter your password"
                className="w-full mt-2 rounded-xl bg-neutral-900 border border-neutral-700 px-5 py-4 text-white outline-none focus:border-red-500 transition"
                />
            </div>

            <button
                type="submit"
                className="w-full py-4 rounded-xl bg-red-600 hover:bg-red-500 transition text-white font-semibold"
            >
                Login
            </button>

            <p className="text-center text-neutral-400">
                Don't have an account?
                <span className="text-red-500 ml-2 cursor-pointer hover:underline">
                Sign Up
                </span>
            </p>
        </form>
    </div>
    );
};

export default LoginPage;