import React from 'react'

const Home = ({greet}) => {
    console.log("Home Rendering...");
    // greet();
    return (
        <>
            <h2>Home Count</h2>
        </>
    )
}

export default React.memo(Home);
