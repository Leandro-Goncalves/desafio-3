import { createContext, useContext, useEffect, useState } from "react";
import Cookies from "universal-cookie";
import { api } from "../services/api";

const UserContext = createContext()

export const UserProvider = ({children}) => {

    const [jwt, setJwt] = useState(null)
    const userIsLogged = !!jwt

    useEffect(() => {
        const cookies = new Cookies();
        const token = cookies.get("jwt")
        if(token){
          setJwt(token)
        }
      },[])

    async function login(email, password) {
        const {data} = await api.post("login", {email, password});
        const {jwt, error, message} = data;
        if(error){
            throw new Error (message);  
        }
        if(!jwt) {
            throw new Error ("Cookie Invalid"); 
        }
        const cookies = new Cookies();
        cookies.set('jwt', jwt, { path: '/' });
        setJwt(jwt)
    }
    return(
       <UserContext.Provider value={{
           login,
           userIsLogged
       }}>
           {children}
       </UserContext.Provider> 
    )
}

export const useUser = () =>  useContext(UserContext)