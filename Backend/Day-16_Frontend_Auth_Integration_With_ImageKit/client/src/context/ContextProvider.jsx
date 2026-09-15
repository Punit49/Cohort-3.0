import React, { createContext, useState } from 'react'

export const MyStore = createContext();

export const ContextProvider = ({children}) => {

  const [accessToken, setAccessToken] = useState(null);
  const [user, setUser] = useState(null);

  const value = {
    accessToken, setAccessToken, user, setUser
  }

  return (
    <MyStore.Provider value={value}>
      {children}
    </MyStore.Provider>
  )
}
