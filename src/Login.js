import React from 'react'
import { Link } from 'react-router-dom';
import './Login.css'

function Login(){
    return(
        <div className="login">
            <Link>
                <img className="login__logo"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon.logo.svg.png"
                alt=""
                />
            </Link>
            
            <div className="login__container">
                <h1>Sign In</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type="email"/>
                    <h5>Password</h5>
                    <input type="password"/>
                    <button type="submit" className="login__signInButton">
                        Sign In
                    </button>
                </form>
                <p>By continuing, you agree to Amazon's Conditions of <br></br> Use and Privacy Notice.</p>
                <h6>New to Amazon?</h6>
                <button className="login__registerButton">Create your Amazon account</button>
            </div>
        </div>
    )
}


export default Login;