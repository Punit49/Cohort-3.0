import React, { useContext } from 'react'
import { MyStore } from '../context/MyContext';

const About = () => {
  console.log("about rendering...");

  const {count, setCount} = useContext(MyStore);

  return (
    <div className='bg-gray-300 p-5'>
        <h1>{count}</h1>
        <button className='bg-red-500 p-2 rounded' onClick={() => {
          setCount(count + 1);
        }}>
          Increase
        </button>
    </div>
  )
}

export default About
