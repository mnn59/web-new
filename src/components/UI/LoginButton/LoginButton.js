import React from "react";
import classes from "./LoginButton.module.css"
import { Redirect } from "react-router-dom"

const loginButton = (props) => {
    const handleButton = () => {
        return (
           <Redirect to="/login"/>
        )
    }
    return (
        <button className={classes.LoginButton} onClick={handleButton}>{props.value}</button>
    )
}

export default loginButton;