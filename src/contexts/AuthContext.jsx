import { createContext, UseState} from 'react'

export const AuthContext = createContext();

export default function AuthProvider({ children }){
    const [isLogged, setLogged] = UseState(false);

    return(
        <AuthContext.Provider value={{ isLogged, setLogged}}>
            {children}
        </AuthContext.Provider>
    )
}
    
