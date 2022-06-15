import React from 'react'
import './TaskList.scss'
import {IconButton} from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useFirestore } from '../../hooks/useFirestore'

const TaskList = ({tasks}) => {

    const {deleteDocument} = useFirestore('task')

    

  return(
    <div className="task-list">
      {tasks.length == 0 ? 
      <div className="no-task">
        Start Adding Birthdays
      </div>
      :
      <>
         {tasks.map((task)=> (
        <div className="task">
          <div className="first-col">
          <div className="name">{task.name}</div>        
          <div className="deadline">{new Date(task.deadline.seconds*1000).toDateString().split(' ').slice(1).join(' ')}</div>
          </div>
          <div className="second-col">
          <IconButton className = "del-btn" onClick={()=> deleteDocument(task.id)}>
            <DeleteForeverIcon  className = "del-icon"/>
          </IconButton>
          </div>      
          

        </div>
      ))}
      </>
      }
   

    </div>
  )
}

export default TaskList