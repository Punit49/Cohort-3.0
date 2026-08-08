const RegisterPage = () => {

    return (
        <div className="w-full max-w-md px-10">
            <h2 className="text-4xl font-bold text-white">
            Create Account 🚀
            </h2>

            <p className="text-neutral-400 mt-3">
                Join Trendzy today.
            </p>

            <form className="mt-10 space-y-5">
                <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full rounded-xl bg-neutral-900 border border-neutral-700 px-5 py-4 text-white outline-none focus:border-red-500"
                />

                <input
                    type="email"
                    placeholder="Email"
                    className="w-full rounded-xl bg-neutral-900 border border-neutral-700 px-5 py-4 text-white outline-none focus:border-red-500"
                />

                <input
                    type="password"
                    placeholder="Password"
                    className="w-full rounded-xl bg-neutral-900 border border-neutral-700 px-5 py-4 text-white outline-none focus:border-red-500"
                />

                <input
                    type="password"
                    placeholder="Confirm Password"
                    className="w-full rounded-xl bg-neutral-900 border border-neutral-700 px-5 py-4 text-white outline-none focus:border-red-500"
                />
                
                <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-red-600 hover:bg-red-500 transition text-white font-semibold"
                >
                    Create Account
                </button>

                <p className="text-center text-neutral-400">
                    Already have an account?
                    <span className="text-red-500 ml-2 cursor-pointer hover:underline">
                    Login
                    </span>
                </p>
            </form>
        </div>
    );
};

export default RegisterPage;