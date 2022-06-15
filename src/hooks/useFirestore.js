import {useReducer, useEffect, useState} from 'react'
import { db } from '../firebase/Firebase'
import { collection, addDoc , doc, deleteDoc } from 'firebase/firestore'


let initialState = {    
    document:null,
    isPending:false,
    error:null,
    success:null
}

const firestoreReducer = (state, action) => {
    switch (action.type) {

        case 'IS_PENDING':
            return {isPending: true, document: null, success: false, error: null}

        case 'ADDED_DOCUMENT':
            return { isPending:false, document: action.payload, success: true, error: null}
        
        case 'DELETED_DOCUMENT':
                return {isPending:false, document:null, success: true, error: null}
        
        case 'ERROR':
            return {isPending:false, document:null, success: false, error: action.payload}


        default:
            return state
    }
}

export const useFirestore = (collection_name) => {

    const [response, dispatch] = useReducer(firestoreReducer, initialState)

    
    const addDocument = async(Document) => {

        dispatch({ type: 'IS_PENDING'})
    
        const ref = collection(db, collection_name)
        try{
            const addedDocument = await addDoc(ref, Document)
            dispatch({ type: 'ADDED_DOCUMENT', payload: addedDocument})            
        }
        catch(err){
            dispatch({type: 'ERROR', payload: err.message})
        }        
    }

    const deleteDocument = async(id) => {
        
        dispatch({type: 'IS_PENDING'})

        try{
            const ref = doc(db, 'task', id)
            // 3rd argument is the id of the document which we wanna refer to
            await deleteDoc(ref)

            dispatch({ type: 'DELETED_DOCUMENT'})
        }
        catch(err){
            dispatch({ type: 'ERROR', payload: err.message})
        }

    }


    


    return {addDocument, deleteDocument, response}

}