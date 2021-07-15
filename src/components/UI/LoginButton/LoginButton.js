import React from "react";
import classes from "./LoginButton.module.css"
import {useHistory} from 'react-router-dom'

const LoginButton = (props) => {
    let history = useHistory()
    const handleButton = () => {
        history.push('/login')
    }
    return (
        <button className={classes.LoginButton} onClick={handleButton}>{props.value}</button>
    )
}

export default LoginButton;