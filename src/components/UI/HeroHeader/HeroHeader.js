import React, {useEffect, useState, Component} from "react";
import classes from './HeroHeader.module.css'
import SearchButton from '../SearchButton/SearchButton'
import clock from '../../../assets/clock.png'
import {render} from "@testing-library/react";

class HeroHeader extends Component {
    // componentDidMount() {
    //     const div = document.getElementsByClassName("div__HeroHeader")[0]
    //     console.log(div.style.backgroundColor)
    // }

    render() {
        // const [counter, setCounter] = useState(0)
        function getRandomColor() {
            var letters = '0123456789ABCDEF'
            var color = '#'
            for (var i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)]
            }
            return color
        }

        function changeColor(div) {
            div.style.backgroundColor = getRandomColor()
        }

        return (
            <div className={classes.div__HeroHeader} id={classes.div__HeroHeader}>
                <p className={classes.p__title}>
                    در محصولات سایت جستجو کنید ...
                </p>
                <input type="text" placeholder="نام محصول خود را جستجو کنید ..."
                       className={classes.input__searchBarText}/>
                <SearchButton value="جستجو کنید"/>
                <img src={clock} alt="clock" className={classes.image__HeroHeader}/>
            </div>
        )
    }


    // setInterval(changeColor, 10000)

    // let myCounter = 0
    // let timeout = null
    // useEffect(() => {
    //     return () => clearInterval(timeout)
    // }, [])
    // myCounter = counter
    // const startInterval = () => {
    //     timeout = setInterval(() => {
    //         setCounter(counter => counter + 1)
    //         console.log("counter: ", myCounter)
    //         if (myCounter === 10) clearInterval(timeout)
    //     }, 1000)
    // }

    // startInterval()

//     useEffect(
//
// () => {
//     const
//     interval = setInterval(() => {
//         // console.log('This will run every second')
//         setCounter(counter => counter + 1)
//         // changeColor()
//         console.log(counter)
//     }, 10000)
//
//     return()
//
// =>
//
//     clearInterval(interval)
// }
//
// )


}

export default HeroHeader