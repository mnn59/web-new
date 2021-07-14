import React from "react";
import classes from "./Header.module.css"
import LoginButton from "../LoginButton/LoginButton"

const header = () => {
    return (
        <div className={classes.Header}>
            <LoginButton value="ورود / ثبت نام"/>
            <div className={classes.Navbar}>
                <ul className={classes.menu__row}>
                    <li className={classes.menu__list}>
                        <a href="#" className={classes.menu__link}>محصولات</a>
                    </li>
                    <li className={classes.menu__list}>
                        <a href="#" className={classes.menu__link}>پشتیبانی</a>
                    </li>
                    <li className={classes.menu__list}>
                        <a href="#" className={classes.menu__link}>تماس با ما</a>
                    </li>
                    <li className={classes.menu__list}>
                        <a href="#" className={classes.menu__link}>صفحه اول</a>
                    </li>
                    <li className={classes.menu__list}>
                        <p className={classes.menu__logo}>فروشگاه</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default header