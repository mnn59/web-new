import React from "react";
import classes from './ProductsSection.module.css'
import Card from '../Card/Card'
import bag from '../../../assets/bag.png'
import SortByBox from "../SortByBox/SortByBox";

const productsSection = () => {
    return (
        <div className={classes.container}>
            <div className={classes.productsSection}>
                <Card
                    image={bag}
                    title="موس گیمینگ ریزر"
                    subTitle="دسته بندی یک"
                    price="۱۰۰۰۰"
                    buttonValue="خرید محصول"
                />
                <Card
                    image={bag}
                    title="موس گیمینگ ریزر"
                    subTitle="دسته بندی یک"
                    price="۱۰۰۰۰"
                    buttonValue="خرید محصول"
                />
                <Card
                    image={bag}
                    title="موس گیمینگ ریزر"
                    subTitle="دسته بندی یک"
                    price="۱۰۰۰۰"
                    buttonValue="خرید محصول"
                />
                <Card
                    image={bag}
                    title="موس گیمینگ ریزر"
                    subTitle="دسته بندی یک"
                    price="۱۰۰۰۰"
                    buttonValue="خرید محصول"
                />
                <Card
                    image={bag}
                    title="موس گیمینگ ریزر"
                    subTitle="دسته بندی یک"
                    price="۱۰۰۰۰"
                    buttonValue="خرید محصول"
                />
                <Card
                    image={bag}
                    title="موس گیمینگ ریزر"
                    subTitle="دسته بندی یک"
                    price="۱۰۰۰۰"
                    buttonValue="خرید محصول"
                />
                <Card
                    image={bag}
                    title="موس گیمینگ ریزر"
                    subTitle="دسته بندی یک"
                    price="۱۰۰۰۰"
                    buttonValue="خرید محصول"
                />
                <Card
                    image={bag}
                    title="موس گیمینگ ریزر"
                    subTitle="دسته بندی یک"
                    price="۱۰۰۰۰"
                    buttonValue="خرید محصول"
                />
                <Card
                    image={bag}
                    title="موس گیمینگ ریزر"
                    subTitle="دسته بندی یک"
                    price="۱۰۰۰۰"
                    buttonValue="خرید محصول"
                />
                <Card
                    image={bag}
                    title="موس گیمینگ ریزر"
                    subTitle="دسته بندی یک"
                    price="۱۰۰۰۰"
                    buttonValue="خرید محصول"
                />
                <Card
                    image={bag}
                    title="موس گیمینگ ریزر"
                    subTitle="دسته بندی یک"
                    price="۱۰۰۰۰"
                    buttonValue="خرید محصول"
                />
                <Card
                    image={bag}
                    title="موس گیمینگ ریزر"
                    subTitle="دسته بندی یک"
                    price="۱۰۰۰۰"
                    buttonValue="خرید محصول"
                />
                <Card
                    image={bag}
                    title="موس گیمینگ ریزر"
                    subTitle="دسته بندی یک"
                    price="۱۰۰۰۰"
                    buttonValue="خرید محصول"
                />


                {/*<SortByBox />*/}
            </div>
            <div className={classes.sortByBox}>
                <div className={classes.sortByCard}>
                    here
                </div>
            </div>
            <div className={classes.groupingBox}>
                <div className={classes.groupCard}>
                    here
                </div>

                <div className={classes.setPriceCard}>
                    here
                </div>
            </div>
        </div>
    )
}

export default productsSection