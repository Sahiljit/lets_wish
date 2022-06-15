import React from 'react'
import './Header.scss'
import {useNavigate} from 'react-router-dom'
import {Button} from '@mui/material';
import {Link} from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'

const Header = () => {

  const {logout} = useLogout()
  const {user} = useAuthContext()

  const navigate = useNavigate()


  return(
    <div className="header">
      <div className="section-header">

        <div className="first-col">
          <div className="heading" onClick = {() => navigate('/')}>Lets Wish</div>
          <div className="text">Happy Birthdays</div>
        </div>
        <div >
          {!user && <div className="second-col">
            <Button  variant = "outlined" className = "btn" onClick = {() => navigate('/login')}>Login</Button>
            <Button  variant = "outlined" className = "btn" onClick = {() => navigate('/signup')}>Signup</Button>
          </div> }

          {user && <div className="second-col"> 
            <div className="name">Hey, {user.displayName}</div>
            <Button variant = "outlined" className = "btn"  onClick = {logout}>Logout</Button>
            
          </div>}

        </div>

      </div>
    </div>


  )

}

export default Header