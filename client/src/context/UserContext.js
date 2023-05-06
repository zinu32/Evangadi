import React, { createContext, useContext, useState } from 'react'
export const UserContext = createContext();
export const UserProvider = (props) => {
    const [userData, setUserData] = useState({
        user: undefined,
        token: undefined
    });
    return (
        <UserContext.Provider value={[userData,setUserData]}>
            {props.children}
        </UserContext.Provider>
    )
}
export default useContext