import React from 'react'
import './Home.scss'
import TaskForm from './TaskForm'
import TaskList from './TaskList'
import {useAuthContext} from '../../hooks/useAuthContext'
import { useCollection } from '../../hooks/useCollection'


const Home = () => {

  const {user} = useAuthContext()
  const {documents, error} = useCollection(
    'task',
    ['uid', '==', user.uid]
    // null
    )
  

  return(
    <div className="home-screen">
    <div className="container">
      <div className="content">
      {error && <p>{error}</p>}
      {documents && <TaskList tasks = {documents} />}
      </div>

      <div className="add-form">
      <TaskForm uid = {user.uid}/>
      </div>
    </div>

    </div>
  
  )

}

export default Home