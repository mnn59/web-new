import React from "react";
import classes from './HeroHeader.module.css'
import SearchButton from '../SearchButton/SearchButton'
import clock from '../../../assets/clock.png'

const heroHeader = () => {
    return (
        <div className={classes.div__HeroHeader}>
            <p className={classes.p__title}>
                در محصولات سایت جستجو کنید ...
            </p>
            <input type="text" placeholder="نام محصول خود را جستجو کنید ..." className={classes.input__searchBarText}/>
            <SearchButton value="جستجو کنید"/>
            <img src={clock} alt="clock" className={classes.image__HeroHeader}/>
        </div>
    )
}

export default heroHeader