import Button from '@mui/material/Button';
import {auth, provider} from '../firebase';
import React from 'react';
import '../Assets/login-style/login.css';
import logo from '../Assets/logo.png';


function Login() {
    const signIn = () => {
        // eslint-disable-next-line no-unused-expressions
        auth.signInWithPopup(provider)
        .catch(error=> alert(error
        .message));
    };

  return (   
            <div className='login'>
                 <h2>Our Community</h2>
                 <h3>SIMPLES <span>RECIPE</span></h3>
                <div className="login-log">
                     <img src={logo}
                     alt="" 
                     />
                </div>
               
                <p>Do you have google account? Great, you can join to us by logging in with your google account </p>
                <Button onClick= {signIn}>Sign in</Button>
            </div>
        );
}

export default Login;