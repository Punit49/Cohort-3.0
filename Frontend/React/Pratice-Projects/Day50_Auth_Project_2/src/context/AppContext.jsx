import React, { createContext, useState } from 'react'

export const MeraStore = createContext();

const AppContext = ({children}) => {

    const [registeredUsers, setRegisteredUsers] = useState(JSON.parse(localStorage.getItem("registeredUsers")) || []);
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")) || null);

    return (
        <MeraStore.Provider value={{registeredUsers, setRegisteredUsers, user, setUser}}>
            {children}
        </MeraStore.Provider>
    )
}

export default AppContext
