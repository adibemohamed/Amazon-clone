import React, { useState } from 'react'
import './Login.css';
import { Link } from 'react-router-dom';
import { auth } from './firebase';


function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const singIn = e => {
        e.preventDefault();
        
        // some funcy firebase suff
    }

    const register = e => {
        e.preventDefault();
        auth
        .createUserWithEmailAndPassword(email, password)
        .then((auth) => {
            // Successfully user created
            console.log(auth);
        })
        .catch(error => console.log(error.message));

    }


    return (
        <div className="login">
            <Link to='/'>
                <img className="login__logo" src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" />
            </Link>

            <div className="login__container">
                <h1>Sign-in</h1>
                <form>
                    <h5>Email</h5>
                    <input type="text" value={email} 
                    onChange={e => setEmail(e.target.value) }/>

                    <h5>Password</h5>
                    <input type="password" value={password} 
                    onChange={e => setPassword(e.target.value) } />

                    <button className="login__singInButton" onClick={singIn}>Sign In</button>
                </form>
                <p>
                By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.
                </p>
                <button className="login__registerButton" onClick={register}  >Create you Amazon account</button>
            </div>

        </div>
    )
}

export default Login
