import React,{useState} from 'react';

export const AuthContext = React.createContext({})
export const AuthContextDispatcher = React.createContext({})


const AuthProvider:React.FC = (props)=>{
    const [state ,setState] = useState(false)
    return (
       <AuthContext.Provider value={state}>
           <AuthContextDispatcher.Provider value={setState}>
                {props.children}
           </AuthContextDispatcher.Provider>
       </AuthContext.Provider>
    )
}

export default AuthProvider