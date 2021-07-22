import React, {Component, useState} from 'react'
import {Link} from "react-router-dom";
import LabeledInput from '../../components/UI/LabeledInput/LabeledInput'
import classes from './Signup.module.css'
import Footer from '../../components/UI/Footer/Footer'
import Header from '../../components/UI/Header/Header'
import Auxiliary from "../../hoc/Auxiliary";
import SignupButton from '../../components/UI/SearchButton/SearchButton'
import {Redirect} from "react-router-dom";

class signup extends Component {

    state = {
        signupForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'نام خود را وارد کنید ...'
                },
                label: 'نام',
                value: '',
                className: classes.labeledInputName,
                validation: {
                    required: true,
                    maxLength: 255
                },
                valid: false,
                touched: false
            },
            familyName: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'نام خانوادگی خود را وارد کنید ...'
                },
                label: 'نام خانوادگی',
                value: '',
                className: classes.labeledInputFamilyName,
                validation: {
                    required: true,
                    maxLength: 255
                },
                valid: false,
                touched: false
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'ایمیل خود را وارد کنید ...'
                },
                label: 'ایمیل',
                value: '',
                className: classes.labeledInputEmail,
                validation: {
                    required: true,
                    emailRegex: '[a-zA-Z0-9.]+@[a-zA-Z0-9]+\\.[A-Za-z]+',
                    maxLength: 255
                },
                valid: false,
                touched: false
            },
            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'رمز عبور خود را وارد کنید ...'
                },
                label: 'رمز عبور',
                value: '',
                className: classes.labeledInputPassword,
                validation: {
                    required: true,
                    minLength: 8,
                    maxLength: 255,
                    passwordRegex: '(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)'
                },
                valid: false,
                touched: false
            },
            address: {
                elementType: 'textarea',
                elementConfig: {
                    type: 'text',
                    placeholder: 'آدرس خود را وارد کنید ...',
                },
                label: 'آدرس',
                value: '',
                className: classes.labeledInputAddress,
                validation: {
                    required: true,
                    maxLength: 1000
                },
                valid: false,
                touched: false
            }
        },
        formIsValid: false,
        redirect: false,
    }

    checkValidity(value, rules) {
        let isValid = true
        if (rules.required) {
            isValid = value.trim() !== '' && isValid
        }
        if (rules.minLength) {
            isValid = value.length >= rules.minLength && isValid
        }
        if (rules.maxLength) {
            isValid = value.length <= rules.maxLength && isValid
        }
        if (rules.emailRegex) {
            isValid = value.match(rules.emailRegex) && isValid
        }

        if (rules.passwordRegex) {
            isValid = value.match(rules.passwordRegex) && isValid
        }
        return isValid
    }



    signupHandler = async (event) => {
        event.preventDefault()
        const formData = {}
        for (let formElementIdentifier in this.state.signupForm) {
            formData[formElementIdentifier] = this.state.signupForm[formElementIdentifier].value
        }
        const signupRequestOrder = {
            signupData: formData
        }
        // console.log(signupRequestOrder)


        // response
        await fetch('http://localhost:8000/api/register', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(formData)
        })

        // const content = await response.json()
        // console.log(content) // what server returns to us?

        // this.setState({redirect: true})
        // this.redirectToLoginPage()   // for redirect to login but I could not




    }


    // redirect to login page
    // redirectToLoginPage = () => {
    //     if (this.state.redirect) {
    //         return <Redirect to="/login"/>
    //     }
    // }



    inputChangedHandler = (event, inputIdentifier) => {
        const updatedSignupForm = {
            ...this.state.signupForm
        }
        const updatedFormElement = {    //deep clone
            ...updatedSignupForm[inputIdentifier]
        }
        updatedFormElement.value = event.target.value
        updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation)
        updatedFormElement.touched = true
        updatedSignupForm[inputIdentifier] = updatedFormElement

        let formIsValid = true
        for (let inputIdentifier in updatedSignupForm) {
            formIsValid = updatedSignupForm[inputIdentifier].valid && formIsValid
        }
        // console.log(formIsValid)
        this.setState({signupForm: updatedSignupForm, formIsValid: formIsValid})
    }


    render() {
        const formElementsArray = []
        for (let key in this.state.signupForm) {
            formElementsArray.push({
                id: key,
                config: this.state.signupForm[key]
            })
        }

        // const [name, setName] = useState('')
        // const [familyName, setFamilyName] = useState('')
        // const [email, setEmail] = useState('')
        // const [password, setPassword] = useState('')
        // const [address, setAddress] = useState('')


        return (
            <Auxiliary>
                <Header/>
                <div className={classes.Signup}>
                    <form className={classes.grid_container} onSubmit={this.signupHandler}>
                        {/*<strong>فروشگاه - ثبت نام</strong>*/}
                        {/*<LabeledInput inputtype="input" type="text" placeholder="نام خود را وارد کنید ..." label="نام"*/}
                        {/*              className={classes.labeledInputName}/>*/}
                        {/*<LabeledInput inputtype="input" type="text" placeholder="نام خانوادگی خود را وارد کنید ..." label="نام خانوادگی"*/}

                        {/*              className={classes.labeledInputFamilyName}/>*/}
                        {/*<LabeledInput inputtype="input" type="email" placeholder="ایمیل خود را وارد کنید ..." label="ایمیل"*/}
                        {/*              className={classes.labeledInputEmail}/>*/}
                        {/*<LabeledInput inputtype="input" type="password" placeholder="رمز عبور خود را وارد کنید ..." label="رمز عبور"*/}
                        {/*              className={classes.labeledInputPassword}/>*/}
                        {/*<LabeledInput inputtype="textarea" placeholder="آدرس خود را وارد کنید ..." label="آدرس"*/}
                        {/*              className={classes.labeledInputAddress}/>*/}


                        {/*<input type="text" placeholder="نام خود را وارد کنید ..."  className={classes.labeledInputName}/>*/}
                        {/*<input type="text" placeholder="نام خانوادگی خود را وارد کنید ..."   className={classes.labeledInputFamilyName}/>*/}
                        {/*<input type="text" placeholder="ایمیل خود را وارد کنید ..."  className={classes.labeledInputEmail}/>*/}
                        {/*<input type="text" placeholder="رمز عبور خود را وارد کنید ..."  className={classes.labeledInputPassword}/>*/}
                        {/*<input type="text" placeholder="آدرس خود را وارد کنید ..."  className={classes.labeledInputAddress}/>*/}


                        <strong>فروشگاه - ثبت نام</strong>
                        {formElementsArray.map(formElement => (
                            <LabeledInput
                                key={formElement.id}
                                elementType={formElement.config.elementType}
                                elementConfig={formElement.config.elementConfig}
                                label={formElement.config.label}
                                value={formElement.config.value}
                                className={formElement.config.className}    //classes did not apply
                                invalid={!formElement.config.valid}
                                touched={formElement.config.touched}
                                changed={(event) => this.inputChangedHandler(event, formElement.id)}
                            />
                        ))}
                        <SignupButton
                            value="ثبت نام"
                            className={classes.signupButton}
                            disabled={!this.state.formIsValid}
                            type="submit"
                        />
                    </form>
                </div>
                <Footer className={classes.footerHereInSignup}/>
            </Auxiliary>
        )
    }
}

export default signup