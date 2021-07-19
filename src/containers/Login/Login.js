import React from 'react'
import classes from './Login.module.css'
import {Link} from "react-router-dom";
import LoginButton from '../../components/UI/SearchButton/SearchButton'
import Auxiliary from "../../hoc/Auxiliary";
import Footer from '../../components/UI/Footer/Footer'
import Header from '../../components/UI/Header/Header'
import LabeledInput from '../../components/UI/LabeledInput/LabeledInput'

const login = () => {
    const inputHandler = () => {
        console.log('input validation')
    }

    const LoginButtonHandler = () => {
        alert('login pushed')
        console.log(document.getElementById('email_input').value)
    }
    return (
        <Auxiliary>
            <Header />
            <div className={classes.grid_container}>
                {/*<h1>Login Page</h1>*/}
                {/*<span>*/}
                {/*    don't have an account ?*/}
                {/*    <Link to="/signup">Sign up</Link>*/}
                {/*</span>*/}
                {/*<br/>*/}
                {/*<span>Go back <Link to="/">Home</Link></span>*/}
                {/*<h1 className={classes.grid_item}></h1>*/}
                <h1 className={classes.grid_header}>فروشگاه - ورود</h1>

                <div className={classes.grid_item}>
                    <input
                        type="text"
                        className={classes.email_input}
                        id="email_input"
                        placeholder="ایمیل خود را وارد کنید ..."
                        onClick={inputHandler}
                        required
                    />
                </div>
                <div className={classes.label_item}>ایمیل</div>
                {/*<LabeledInput placeholder="ایمیل خود را وارد کنید ..." label="ایمیل"/>*/}
                <div className={classes.grid_item}>
                    <input type="password" className={classes.password_input} placeholder="رمز عبور خود را وارد کنید ..."/>
                </div>
                <div className={classes.label_item}>رمز عبور</div>
                {/*<LabeledInput placeholder="رمز عبور خود را وارد کنید ..." label="رمز عبور"/>*/}
                <LoginButton
                    value="ورود"
                    className={classes.login_button}
                    onClick={LoginButtonHandler}
                />
            </div>
            <Footer className={classes.footerHere}/>
        </Auxiliary>

    )
}

export default login