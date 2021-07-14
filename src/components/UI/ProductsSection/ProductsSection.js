import React from "react";
import classes from './ProductsSection.module.css'
import Card from '../Card/Card'
import bag from '../../../assets/bag.png'

const productsSection = () => {
    return (
        <div className={classes.productsSection}>
            <Card
                image={bag}
                title="موس گیمینگ ریزر"
                subTitle="دسته بندی یک"
                price="۱۰۰۰۰ تومان"
                buttonValue="خرید محصول"
            />
            <Card
                image={bag}
                title="موس گیمینگ ریزر"
                subTitle="دسته بندی یک"
                price="۱۰۰۰۰ تومان"
                buttonValue="خرید محصول"
            />
            <Card
                image={bag}
                title="موس گیمینگ ریزر"
                subTitle="دسته بندی یک"
                price="۱۰۰۰۰ تومان"
                buttonValue="خرید محصول"
            />
        </div>
    )
}

export default productsSection