import React, {useState, Component} from 'react'
import classes from './Login.module.css'
import {Link, Redirect} from "react-router-dom";
import LoginButton from '../../components/UI/SearchButton/SearchButton'
import Auxiliary from "../../hoc/Auxiliary";
import Footer from '../../components/UI/Footer/Footer'
import Header from '../../components/UI/Header/Header'
import LabeledInput from '../../components/UI/LabeledInput/LabeledInput'
import SortByBox from "../../components/UI/SortByBox/SortByBox";
import NewModal from "../../components/UI/NewModal/NewModal";

class login extends Component {
    constructor(props) {
        super(props);
        this.showModal = this.showModal.bind(this)
        this.hideModal = this.hideModal.bind(this)
        if(this.state.redirect){
            return <Redirect to="/"/>
        }
    }


    state = {
        loginForm: {
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'ایمیل خود را وارد کنید ...'
                },
                label: 'ایمیل',
                value: '',
                className: classes.labeledInputEmail
            },
            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'رمز عبور خود را وارد کنید ...'
                },
                label: 'رمز عبور',
                value: '',
                className: classes.labeledInputPassword
            }
        },
        redirect: false,
        show: false,
    }


    showModal = () => {
        this.setState({
            show: true
        })
    }

    hideModal = () => {
        this.setState({
            show: false
        })
    }


    loginHandler= async (event) => {
        event.preventDefault()
        const formData = {}
        for (let formElementIdentifier in this.state.loginForm){
            formData[formElementIdentifier] = this.state.loginForm[formElementIdentifier].value
        }
        await fetch('http://localhost:8000/api/login',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            credentials: 'include',
            body: JSON.stringify(formData)
        })

        this.setState({
            redirect: true
        })
    }

    inputChangedHandler = (event, inputIdentifier) => {
        const updatedLoginForm = {
            ...this.state.loginForm
        }

        const updatedFormElement = {
            ...updatedLoginForm[inputIdentifier]
        }
        updatedFormElement.value = event.target.value
        updatedLoginForm[inputIdentifier] = updatedFormElement

        this.setState({
            loginForm: updatedLoginForm
        })
    }




    // const inputHandler = () => {
    //     console.log('input validation')
    // }
    //
    // const LoginButtonHandler = () => {
    //     alert('login pushed')
    //     console.log(document.getElementById('email_input').value)
    // }
    render (){

        const formElementArray = []
        for (let key in this.state.loginForm){
            formElementArray.push({
                id: key,
                config: this.state.loginForm[key]
            })
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
                <form className={classes.grid_container} onSubmit={this.loginHandler}>
                    <strong className={classes.grid_header}>فروشگاه - ورود</strong>
                    {formElementArray.map(formElement => (
                        <LabeledInput
                            key={formElement.id}
                            elementType={formElement.config.elementType}
                            elementConfig={formElement.config.elementConfig}
                            label={formElement.config.label}
                            value={formElement.config.value}
                            className={formElement.config.className}
                            changed={(event) => this.inputChangedHandler(event, formElement.id)}
                        />
                    ))}

                    <NewModal show={this.state.show} handleClose={this.hideModal}>
                        <h1 className={classes.headerModal}>
                            عملیات ورود
                        </h1>
                    </NewModal>
                    <LoginButton
                        value="ورود"
                        className={classes.loginButton}
                        type="submit"
                        onClick={this.showModal}
                    />
                    <h2 className={classes.h2Tag}>
                        حساب کاربری ندارید ؟
                        <Link to="/signup">
                            برو به صفحه ثبت نام
                        </Link>
                    </h2>
                </form>
                <Footer className={classes.footerHere}/>
            </Auxiliary>

        )
    }

}

export default login