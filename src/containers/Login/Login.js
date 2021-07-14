import React from 'react'
import classes from './Login.module.css'
import {Link} from "react-router-dom";
import SearchButton from '../../components/UI/SearchButton/SearchButton'
import Auxiliary from "../../hoc/Auxiliary";

const login = () => {
    return (
        <Auxiliary>
            <div className={classes.grid_container}>
                {/*<h1>Login Page</h1>*/}
                {/*<span>*/}
                {/*    don't have an account ?*/}
                {/*    <Link to="/signup">Sign up</Link>*/}
                {/*</span>*/}
                {/*<br/>*/}
                {/*<span>Go back <Link to="/">Home</Link></span>*/}
                {/*<h1 className={classes.grid_item}></h1>*/}
                {/*<h1 className={classes.grid_header}>salam</h1>*/}
                <div className={classes.grid_item}>
                    <input type="text" className={classes.email_input} placeholder="ایمیل خود را وارد کنید ..."/>
                </div>
                <div className={classes.label_item}>ایمیل</div>
                <div className={classes.grid_item}>
                    <input type="text" className={classes.password_input} placeholder="رمز عبور خود را وارد کنید ..."/>
                </div>
                <div className={classes.label_item}>رمز عبور</div>
                <SearchButton value="ورود"/>
            </div>
        </Auxiliary>

    )
}

export default login