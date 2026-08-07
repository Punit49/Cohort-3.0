import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount } from '../features/counterSlice';

const Home = () => {

  const { count } = useSelector((store) => store.count);
  const [inputVal, setInputVal] = useState(null);
  const dispatch = useDispatch();

  return (
    <div className='flex flex-col items-start gap-6'>
      <p>Home Page</p>
      
      <p>Count - {count}</p>

      <button onClick={() => dispatch(increment())} className='bg-red-500 p-2 rounded-lg'>Increment</button>
      <button onClick={() => dispatch(decrement())} className='bg-red-500 p-2 rounded-lg'>Decrement</button>
      <input onChange={(e) => setInputVal(+e.target.value)} type="text" className='border p-2' placeholder='Enter Count Amount' />
      <button onClick={() => dispatch(incrementByAmount(inputVal))} className='bg-red-500 p-2 rounded-lg'>Increment By amount</button>
    </div>
  )
}

export default Home
