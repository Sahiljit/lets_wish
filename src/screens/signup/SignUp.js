import React, {useState} from 'react'
import './SignUp.scss'
import {Button} from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';

import { useSignup } from '../../hooks/useSignup'

const SignUp = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [displayName, setDisplayName] = useState('')

  const {signup, isPending, error} = useSignup()

  
  const handleSubmit = (e) => {
     
    e.preventDefault()
    signup(email, password, displayName)

  }


  return(
    <div className="signUp-screen">
        <div className="signUp-screen-container">
        <div className="heading">Sign Up</div>
        <div className="input-field">
            <input type="text" id="display-name" required onChange={(e) => setDisplayName(e.target.value)} value ={displayName}/>
        <label for="display-name"> Display Name</label>
        </div>

        <div className="input-field">
            <input type="text" id="name" required onChange={(e) => setEmail(e.target.value)} value ={email}/>
        <label for="name"> Email</label>
        </div>
        <div className="input-field">
            <input type="password" id="password" required onChange={(e) => setPassword(e.target.value)} value={password}/>
        <label for="password"> Password</label>
        </div>

        <Button variant = "outlined" className = "btn" onClick = {handleSubmit}>
        {isPending
              ?
              <div className="loading">
                <CircularProgress className = "loading-icon"/>
              </div>
              :
              "Sign Up"
              
            }
        </Button>

        {error && <p>{error}</p>}
        </div>      

    </div>
  )
}

export default SignUp