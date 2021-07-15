import React from 'react'
import {Link} from "react-router-dom";
import LabeledInput from '../../components/UI/LabeledInput/LabeledInput'
import classes from './Signup.module.css'
import Footer from '../../components/UI/Footer/Footer'
import Header from '../../components/UI/Header/Header'
import Auxiliary from "../../hoc/Auxiliary";
import SearchButton from '../../components/UI/SearchButton/SearchButton'

const signup = () => {
    return (
        <Auxiliary>
            <Header/>
            <div className={classes.Signup}>
                <div className={classes.grid_container}>
                    <strong>فروشگاه - ثبت نام</strong>
                    <LabeledInput placeholder="نام خود را وارد کنید ..." label="نام" className={classes.labeledInputName}/>
                    <LabeledInput placeholder="نام خانوادگی خود را وارد کنید ..." label="نام خانوادگی" labelClassName={classes.labelClassname} className={classes.labeledInputFamilyName}/>
                    <LabeledInput placeholder="ایمیل خود را وارد کنید ..." label="ایمیل" className={classes.labeledInputEmail}/>
                    <LabeledInput placeholder="رمز عبور خود را وارد کنید ..." label="رمز عبور" className={classes.labeledInputPassword}/>
                    <LabeledInput placeholder="آدرس خود را وارد کنید ..." label="آدرس" className={classes.labeledInputAddress}/>
                </div>
                <SearchButton value="ثبت نام" className={classes.signupButton}/>
            </div>
            <Footer/>
        </Auxiliary>
    )
}

export default signup