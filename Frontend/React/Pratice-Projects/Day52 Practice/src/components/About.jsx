import React from "react";

const About = ({greet}) => {
    greet();
    console.log("About Rendering...");

    return (
        <>
            <h1>About Component </h1>
        </>
    );
}

export default React.memo(About);
