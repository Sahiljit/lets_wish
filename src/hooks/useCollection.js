import {useEffect, useState, useRef} from "react"
import { db } from "../firebase/Firebase"
import {collection, onSnapshot, query, where} from 'firebase/firestore'


export const useCollection = (collection_name, _q) => {

    const [documents, setDocuments] = useState([])
    const [error, setError] = useState(null)

    const q = useRef(_q).current


    useEffect(() => {

        let ref = collection(db, collection_name)

        if(q){
            ref = query(ref, where(...q))
        }

        const unsub = onSnapshot(ref, (snapshot)=> {

            setDocuments(snapshot.docs.map(doc => 
                ({...doc.data() , id: doc.id})))

            }, (err)=> {
                    setError(err.message)
            })
            
        setError(null)

        // cleanup function to unsubsrcibe from firestore when our component unmounts

        return ()=> unsub()


    }, [collection_name])

    // console.log(documents)

    return {documents, error}

}