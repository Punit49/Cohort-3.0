import React from 'react'

const Login = ({setIsLogin}) => {
    const handleSubmit = (e) => {
      e.preventDefault();
    }
    
    return (
      <div className="border p-4 rounded-xl">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input className="border p-2 rounded" type="text" name="email" placeholder='email' />
          <input className="border p-2 rounded" type="password" name="password" placeholder='password' />
          <button className='bg-blue-800 rounded'>Login</button>

          <span className='text-[10px] text-center'>Didn't Have an Account? 
            <a href="#" onClick={() => setIsLogin(prev => !prev)}  className='text-blue-400 cursor-pointer'>Register Here</a> 
          </span>
        </form>
      </div>
    )
}

export default Login
