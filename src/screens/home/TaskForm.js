import React , {useState, useEffect} from 'react'
import './TaskForm.scss'
import {Button} from '@mui/material';
import { useFirestore } from '../../hooks/useFirestore'
import DatePicker from 'react-date-picker';


const TaskForm = ({uid}) => {

const [name, setName] = useState('')
const [deadline, setDeadline] = useState(new Date())


const {addDocument, response} = useFirestore('task')

    const handleSubmit =(e) => {
        e.preventDefault()
        addDocument({uid, name, deadline})
        console.log(uid)  

    }
     useEffect(() => {

        if(response.success){
         setName('')
         setDeadline('')
        }
         
     }, [response.success])


     return(
        <div className="task-form">
            <div className="heading">Add Birthday</div>
            <div className="row">
            <label for= "name">Name</label>
            <input 
                id = "name" 
                type="text" 
                // placeholder="Enter product name"
                value ={name}
                onChange= {(e) => setName(e.target.value)}
            />
            </div>

            <div className="row">
            <label for= "deadline">Date</label>
            <DatePicker onChange={setDeadline} value={deadline} className ="date-input" />
            {/* <input 
                id = "deadline" 
                type="text" 
                // placeholder="Enter product name"
                value ={deadline}
                onChange= {(e) => setDeadline(e.target.value)}
            /> */}
            </div>

            <Button variant="contained" className = "add-btn" onClick = {handleSubmit}>Add B'day</Button>

        </div>
     )
}

export default TaskForm