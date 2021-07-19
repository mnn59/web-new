import React from "react";
import classes from './LabeledInput.module.css'
import classNames from "classnames";

const labeledInput = (props) => {
    const containerClass = classNames(classes.grid_container, props.className)
    // const labelClass = classNames(classes.label_item, props.labelClassName)

    let InputElement = null

    switch (props.elementType) {
        case ('input'):
            InputElement = <input
                className={classes.input}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed}
            />
            break
        case ('textarea'):
            InputElement = <textarea
                className={classes.input}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed}
            />
            break
        default:
            InputElement = <input
                className={classes.input}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed}
            />
    }
    return (
        <div className={containerClass}>
            <div className={classes.grid_item}>
                {/*<input type={props.type} className={classes.input} placeholder={props.placeholder}/>*/}
                {InputElement}
            </div>
            <div className={classes.label_item}>{props.label}</div>
        </div>
    )
}

export default labeledInput;