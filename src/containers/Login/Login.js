import React from 'react'
import classes from './Login.module.css'
import {Link} from "react-router-dom";

const login = () => {
    return (
        <div className={classes.Login}>
            <h1>Login Page</h1>
            <span>
                don't have an account ?
                <Link to="/signup">Sign up</Link>
            </span>
            <br/>
            <span>Go back <Link to="/">Home</Link></span>
        </div>
    )
}

export default login