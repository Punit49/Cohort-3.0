import { createContext, useState } from "react"

export const MyStore = createContext(); 

const ContextProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [accessToken, setAccessToken] = useState(null);

  const value = {
    user, setUser, accessToken, setAccessToken
  }

  return (
    <MyStore.Provider value={value}>
      {children}
    </MyStore.Provider>
  )
}

export default ContextProvider

