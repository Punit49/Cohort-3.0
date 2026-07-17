import React, { useEffect } from 'react'

const About = ({count}) => {
    console.log("About is rendering");

    // useEffect(() => {
    //   console.log("useEffect of about");
    // }, [count]); // runs when count changes

    // const aboutInterval = setInterval(() => {
    //   console.log("About interval")
    // }, 1000);

    useEffect(() => {
      console.log(10);
      return () => {
        console.log("About unmounted and interval cleared..");
      }
    }, []); // jab dependency array nahi denge to pehle cleanup hoga fir re render hoga
    
    return (
      <h1>
        I am ABout
      </h1>
    )
}

export default About
