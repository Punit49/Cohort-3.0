import React from 'react'

const Home = ({name}) => {
    console.log("Home Rendering...");
    console.log("Home - ", name);
    return (
        <>
            <h2>Home Component</h2>
        </>
    )
}

export default React.memo(Home, (prevProps, nextProps) => {
    return prevProps.name !== nextProps.name;
});
