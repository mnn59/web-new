import React from "react"
import classes from "./NewModal.module.css"
import classNames from "classnames";

const Modal = ({handleClose, show}, props) => {
    const showHideClassName = show ? classNames(classes.modal, classes.display_block) : classNames(classes.modal, classes.display_none)
    const pTagClasses = [classes.pTag]

    if (props.invalid){
        pTagClasses.push(classes.Invalid)
    }
    if (!props.invalid){
        pTagClasses.push(classes.Valid)
    }


    return (
        <div className={showHideClassName}>
            <section className={classes.modal_main}>
                <p className={pTagClasses.join(' ')}>
                    موفقیت آمیز بودن یا نبودن
                </p>
                {props.children}
                <button type="button" className={classes.closeButton} onClick={handleClose}>
                    X
                </button>
            </section>
        </div>
    )
}

export default Modal