import React, { useContext } from 'react'
import { MyStore } from '../context/MyContext';

const Contact = () => {
    console.log("contact rendering...");

    const {count, setCount} = useContext(MyStore);

    return (
      <div>
        I am contact {count}
      </div>
    )
}

export default Contact
