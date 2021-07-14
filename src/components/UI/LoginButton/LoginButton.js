import React from "react";
import classes from "./LoginButton.module.css"

const loginButton = (props) => {
    return (
        <button className={classes.LoginButton}>{props.value}</button>
    )
}

export default loginButton;