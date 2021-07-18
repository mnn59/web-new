import React from "react";
import classes from './Footer.module.css'
import classNames from "classnames";

const footer = (props) => {
    const footerClass = classNames(props.className, classes.div__Footer)
    return (
        <div className={footerClass}>
            تمامی حقوق برای مهدی محفوظ است
        </div>
    )
}

export default footer