import React from "react";
import classes from "./LoginButton.module.css"
import {useHistory} from 'react-router-dom'
import classNames from "classnames";

const LoginButton = (props) => {
    const btnClasses = classNames(props.className, classes.LoginButton)
    let history = useHistory()
    const handleButton = () => {
        history.push('/login')
    }
    return (
        <button className={btnClasses} onClick={handleButton}>{props.value}</button>
    )
}

export default LoginButton;