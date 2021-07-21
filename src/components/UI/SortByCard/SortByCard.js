import React from "react"
import classes from "./SortByCard.module.css"
import classNames from "classnames";
import {Link} from "react-router-dom";

const SortByCard = (props) => {
    return (
        <div className={classes.container}>
            <div className={classes.Navbar}>
                <ul className={classes.menu__row}>
                    <li className={classes.menu__list}>
                        <a  className={classes.menu__data_label}>مرتب سازی بر اساس : </a>
                    </li>
                    <li id="first" className={classes.menu__list}>
                        <a href="#mostSelling" className={classes.menu__link}>بیشترین فروش</a>
                    </li>
                    <li id="second" className={classes.menu__list}>
                        <a href="#cost" className={classes.menu__link}>قیمت</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default SortByCard