import React from "react";
import classes from "./SearchButton.module.css"

const searchButton = (props) => {
    return (
        <button type="button" className={classes.searchBtn}>
            {props.value}
        </button>
    )
}

export default searchButton;