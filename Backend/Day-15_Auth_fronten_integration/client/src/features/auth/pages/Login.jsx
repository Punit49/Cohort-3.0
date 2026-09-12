import React from 'react'
import { Link } from 'react-router'

const Login = () => {
  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center px-4 font-sans text-gray-200">
      <div className="w-full max-w-md bg-gray-900 border border-gray-800 rounded-2xl shadow-xl p-8">
        <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-2">Welcome back</h2>
            <p className="text-gray-400 text-sm">Please enter your details to sign in.</p>
        </div>
        <form className="space-y-5">
            <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Email</label>
                <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="w-full bg-gray-950 border border-gray-800 rounded-lg px-4 py-2.5 text-white placeholder-gray-600 focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500 transition-colors"
                />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Password</label>
                <input 
                    type="password" 
                    placeholder="••••••••" 
                    className="w-full bg-gray-950 border border-gray-800 rounded-lg px-4 py-2.5 text-white placeholder-gray-600 focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500 transition-colors"
                />
            </div>
            <div className="flex items-center justify-between text-sm">
                <label className="flex items-center text-gray-400">
                    <input type="checkbox" className="mr-2 rounded border-gray-700 bg-gray-800 text-white focus:ring-0 focus:ring-offset-0" />
                    Remember me
                </label>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Forgot password?</a>
            </div>
            <button className="w-full bg-white text-gray-900 rounded-lg py-3 font-semibold hover:bg-gray-200 transition-colors mt-2">
                Sign In
            </button>
        </form>
        <p className="mt-6 text-center text-sm text-gray-500">
            Don't have an account? <Link to="/auth/register" className="text-white font-medium hover:underline">Sign up</Link>
        </p>
      </div>
    </div>
  )
}

export default Login