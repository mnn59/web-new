import React, {useState} from 'react'
import classes from './Login.module.css'
import {Link} from "react-router-dom";
import LoginButton from '../../components/UI/SearchButton/SearchButton'
import Auxiliary from "../../hoc/Auxiliary";
import Footer from '../../components/UI/Footer/Footer'
import Header from '../../components/UI/Header/Header'
import LabeledInput from '../../components/UI/LabeledInput/LabeledInput'
import SortByBox from "../../components/UI/SortByBox/SortByBox";

const login = () => {



    const inputHandler = () => {
        console.log('input validation')
    }

    const LoginButtonHandler = () => {
        alert('login pushed')
        console.log(document.getElementById('email_input').value)
    }
    return (
        // <Auxiliary>
        //     <Header/>
        //     <form className={classes.grid_container}>
        //         <h1 className={classes.grid_header}>فروشگاه - ورود</h1>
        //         <div className={classes.grid_item}>
        //             <input
        //                 type="text"
        //                 className={classes.email_input}
        //                 id="email_input"
        //                 placeholder="ایمیل خود را وارد کنید ..."
        //                 onClick={inputHandler}
        //                 required
        //             />
        //         </div>
        //
        //         <div className={classes.label_item}>ایمیل</div>
        //         <div className={classes.grid_item}>
        //             <input
        //                 type="password"
        //                 className={classes.password_input}
        //                 placeholder="رمز عبور خود را وارد کنید ..."
        //                 required
        //             />
        //         </div>
        //         <div className={classes.label_item}>رمز عبور</div>
        //         <LoginButton
        //             value="ورود"
        //             className={classes.login_button}
        //             onClick={LoginButtonHandler}
        //             type="submit"
        //         />
        //     </form>
        //     <Footer className={classes.footerHere}/>
        // </Auxiliary>

        <Auxiliary>
            <Header />
            <form className={classes.grid_container}>
                <strong className={classes.grid_header}>فروشگاه - ورود</strong>
            </form>

            {/*test*/}
            {/*<SortByBox/>*/}
            <Footer className={classes.footerHere}/>
        </Auxiliary>

    )
}

export default login