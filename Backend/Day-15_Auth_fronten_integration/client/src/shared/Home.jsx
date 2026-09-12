import React from 'react'
import Navbar from './Navbar'

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-200 font-sans">
        <Navbar />
        <main className="max-w-5xl mx-auto px-6 py-20 text-center flex flex-col items-center justify-center">
            <h1 className="text-5xl font-extrabold text-white mb-6 tracking-tight">Welcome to the App</h1>
            <p className="text-lg text-gray-400 max-w-2xl leading-relaxed">
                This is a minimal home page designed with Tailwind CSS in dark mode. 
                It's clean, simple, and focuses on typography and spacing.
            </p>
            <div className="mt-10 flex gap-4">
                <button className="bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
                    Get Started
                </button>
                <button className="bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors border border-gray-700">
                    Learn More
                </button>
            </div>
        </main>
    </div>
  )
}

export default Home