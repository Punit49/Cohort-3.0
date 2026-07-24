import { React, useState,createContext } from 'react'

export const MyStore = createContext();

const AppContext = ({children}) => {

    const [registeredUsers, setRegisteredUsers] = useState(JSON.parse(localStorage.getItem("registeredUsers")) || []);
    const [loggedInUser, setLoggedInUser] = useState(JSON.parse(localStorage.getItem("user")) || null);
    console.log("registeredUsers - ", registeredUsers);
    console.log("loggedInUser - ", loggedInUser);

    return (
        <MyStore.Provider value={{registeredUsers, setRegisteredUsers, loggedInUser, setLoggedInUser}}>
            {children}
        </MyStore.Provider>
    )
}

export default AppContext;