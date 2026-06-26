import React from 'react'

// * Props Destructure -
// const About = ({width, age}) => {
//     console.log(width, age);

//     return (
//         <div>
//         <h1>I am about</h1>
//         </div>
//     )
// }

const About = ({width, children}) => {
    console.log(width, children);
    return (
        <div>
            <h1>I am about</h1>
            {children}
        </div>
    )
}

export default About
