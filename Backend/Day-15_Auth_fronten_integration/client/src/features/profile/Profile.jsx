import React from 'react'
import Navbar from '../../shared/Navbar'

const Profile = () => {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-200 font-sans">
      <Navbar />
      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden shadow-lg">
            <div className="h-48 bg-gradient-to-r from-gray-800 to-gray-700"></div>
            <div className="px-8 pb-8 relative">
                <div className="w-32 h-32 rounded-full border-4 border-gray-900 bg-gray-800 overflow-hidden absolute -top-16 left-8 shadow-md">
                    <img src="../assets/image.png" alt="Profile" className="w-full h-full object-cover" />
                </div>
                <div className="mt-20 flex justify-between items-start">
                    <div>
                        <h1 className="text-3xl font-bold text-white">John Doe</h1>
                        <p className="text-gray-400 mt-1">@johndoe • Developer</p>
                        <p className="text-gray-300 mt-4 max-w-2xl leading-relaxed">
                            Passionate software engineer building web applications with modern technologies. 
                            Love to explore new design patterns and UI components.
                        </p>
                    </div>
                    <button className="bg-white text-gray-900 px-5 py-2 rounded-lg font-semibold hover:bg-gray-200 transition-colors text-sm">
                        Edit Profile
                    </button>
                </div>
                
                <div className="mt-10 border-t border-gray-800 pt-8 grid grid-cols-3 gap-6 text-center">
                    <div className="bg-gray-950 p-4 rounded-xl border border-gray-800">
                        <div className="text-2xl font-bold text-white">142</div>
                        <div className="text-sm text-gray-500 mt-1">Posts</div>
                    </div>
                    <div className="bg-gray-950 p-4 rounded-xl border border-gray-800">
                        <div className="text-2xl font-bold text-white">12.5k</div>
                        <div className="text-sm text-gray-500 mt-1">Followers</div>
                    </div>
                    <div className="bg-gray-950 p-4 rounded-xl border border-gray-800">
                        <div className="text-2xl font-bold text-white">450</div>
                        <div className="text-sm text-gray-500 mt-1">Following</div>
                    </div>
                </div>
            </div>
        </div>
      </main>
    </div>
  )
}

export default Profile