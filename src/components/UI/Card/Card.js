import React from "react";
import classes from './Card.module.css'

const card = (props) => {
    return (
        <div className={classes.productCard}>
            <img src={props.image} className={classes.productImage}/>
            <h1 className={classes.productTitle}>{props.title}</h1>
            <p className={classes.productSubTitle}>{props.subTitle}</p>
            <hr className={classes.divider}/>
            <div className={classes.productPriceSection}>
                <p className={classes.productPrice}>
                    {props.price} تومان
                </p>
                <button className={classes.BuyButton}>{props.buttonValue}</button>
            </div>
        </div>
    )
}

export default card