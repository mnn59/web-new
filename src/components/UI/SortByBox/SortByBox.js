import React from "react"
import classes from "./SortByBox.module.css"


// class does not appear in other classes like login

const SortByBox = () => {
    return (
            <div className={classes.container}>
                <ul className={classes.list} data-label="مرتب سازی بر اساس: ">
                    <li className={classes.list_item}>
                        <a href="#" className={classes.list_item_link}>
                            سلام
                        </a>
                    </li>
                    <li>
                        <a href="#" className={classes.list_item_link}>
                            خوبی
                        </a>
                    </li>
                    <li>
                        <a href="#" className={classes.list_item_link}>
                            من
                        </a>
                    </li>
                </ul>
            </div>
    )
}

export default SortByBox