import React from "react";
import classes from './LabeledInput.module.css'
import classNames from "classnames";

const labeledInput = (props) => {
    const containerClass = classNames(classes.grid_container, props.className)
    const labelClass =  classNames(classes.label_item, props.labelClassName)
    return (
        <div className={containerClass}>
            <div className={classes.grid_item}>
                <input type="text" className={classes.input} placeholder={props.placeholder}/>
            </div>
            <div className={labelClass}>{props.label}</div>
        </div>
    )
}

export default labeledInput;