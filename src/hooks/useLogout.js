import { useEffect, useState } from 'react';
import {auth} from '../firebase/Firebase'
import {signOut} from 'firebase/auth'
import { useAuthContext } from "./useAuthContext";


export const useLogout = () =>{

    const [isCancelled, setIsCancelled] = useState(false)
    const [error, setError] = useState(null)
    const [isPending, setIsPending] = useState(false)

    const {dispatch} = useAuthContext()


    const logout = async() => {

        setError(null)
        setIsPending(true)

        try{            
            await signOut(auth)

            dispatch({type: 'LOGOUT'})

            if(!isCancelled){
            setIsPending(false)
            setError(null)
            }

        }
        catch(err){
            
            console.log(err.message)
            setError(err.message)
            setIsPending(false)
        }
         
        
    }

    // here we are simply writing our clean-up function
    useEffect(() => {    
    return ()=> setIsCancelled(true)
    },[])

    return {error, isPending, logout}
}