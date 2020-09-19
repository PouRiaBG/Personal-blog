import {useContext} from 'react'
import {AuthContextDispatcher} from '../components/AuthProvider'

export const useAuthDispatch = ()=>{
    return useContext(AuthContextDispatcher)
}