import React, { createContext, useContext, useState } from 'react'
const AuthContext = createContext({
    login:false,
    handleLogin:()=>{},
    handleLogout:()=>{}
});
export const AuthProvider = ({children}:{children:React.ReactNode}) => {
    
    const [login,setLogin]=useState(false);

    function handleLogin(){
        console.log("Login successful");
        setLogin(true);
    }
    function handleLogout(){
        console.log("Logout successful");
        setLogin(false);
    }

  return (
    <AuthContext.Provider value={{login,handleLogin,handleLogout}}>{children}</AuthContext.Provider>

  )
}

export const useAuth=()=>{
    return useContext(AuthContext);
}