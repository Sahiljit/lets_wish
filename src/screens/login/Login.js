import React, {useState} from 'react'
import './Login.scss'
import { useLogin } from '../../hooks/useLogin'
import {Button} from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';



const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const {error, login, isPending} = useLogin()

    const handleSubmit = (e) => {

        e.preventDefault()
        login(email,password)
    }


    return(

    <div className="login-screen">
        <div className="login-screen-container">
        <div className="heading">Login</div>
        <div className="input-field">
            <input type="text" id="name" required onChange={(e) => setEmail(e.target.value)} value ={email}/>
        <label for="name">Enter Email</label>
        </div>
        <div className="input-field">
            <input type="password" id="password" required onChange={(e) => setPassword(e.target.value)} value={password}/>
        <label for="password">Enter Password</label>
        </div>

        <Button variant = "outlined" className = "btn" onClick = {handleSubmit}>
        {isPending
              ?
              <div className="loading">
                <CircularProgress className = "loading-icon"/>
              </div>
              :
              "Login"
              
            }
        </Button>

        {error && <p>{error}</p>}
        </div>      

    </div>



    )

}

export default Login