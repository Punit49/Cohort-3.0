import React, { useEffect } from 'react'

const Contact = ({count}) => {
    console.log("Contact is rendering");

    // useEffect(() => {
    //   console.log("useEffect of contact");
    // }, [count]); 
        
    return (
      <h1>
          I am Contact
      </h1>
    )
}

export default Contact
