import { createContext, useState } from "react";

export const MyStore = createContext(); // print and see what's inside -

export const ContextProvider = ({children}) => {

    console.log("Context Rendering..."); // Sbse pehle context hi re render hoga then app and all of its childs

    const [count, setCount] = useState(0);

    return (
        <MyStore.Provider value={{count, setCount}}>
            {children}
        </MyStore.Provider>
    )
}