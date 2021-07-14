import React from 'react'
// import classes from './Login.module.css'
import {Link} from "react-router-dom";

const signup = () => {
    return (
        <>
            <h1>Sign up page</h1>
            <span>
                Already have an account?
                <Link to="/login">Log in</Link>
            </span>
            <br/>
            <span>Go back <Link to="/">Home</Link></span>
        </>
    )
}

export default signup