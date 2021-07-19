import React, {Component} from 'react'
import {Link} from "react-router-dom";
import LabeledInput from '../../components/UI/LabeledInput/LabeledInput'
import classes from './Signup.module.css'
import Footer from '../../components/UI/Footer/Footer'
import Header from '../../components/UI/Header/Header'
import Auxiliary from "../../hoc/Auxiliary";
import SignupButton from '../../components/UI/SearchButton/SearchButton'

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
                className: 'classes.labeledInputName'
            },
            familyName: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'نام خانوادگی خود را وارد کنید ...'
                },
                label: 'نام خانوادگی',
                value: '',
                className: 'classes.labeledInputFamilyName'
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'ایمیل خود را وارد کنید ...'
                },
                label: 'ایمیل',
                value: '',
                className: 'classes.labeledInputEmail'
            },
            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'رمز عبور خود را وارد کنید ...'
                },
                label: 'رمز عبور',
                value: '',
                className: 'classes.labeledInputPassword'
            },
            address: {
                elementType: 'textarea',
                elementConfig: {
                    type: 'text',
                    placeholder: 'آدرس خود را وارد کنید ...',
                },
                label: 'آدرس',
                value: '',
                className: 'classes.labeledInputAddress'
            }
        }
    }


    inputChangedHandler = (event, inputIdentifier) => {
        const updatedSignupForm = {
            ...this.state.signupForm
        }
        const updatedFormElement = {    //deep clone
            ...updatedSignupForm[inputIdentifier]
        }
        updatedFormElement.value = event.target.value
        updatedSignupForm[inputIdentifier] = updatedFormElement
        this.setState({signupForm: updatedSignupForm})
    }


    render() {
        const formElementsArray = []
        for (let key in this.state.signupForm) {
            formElementsArray.push({
                id: key,
                config: this.state.signupForm[key]
            })
        }
        return (
            <Auxiliary>
                <Header/>
                <div className={classes.Signup}>
                    <form className={classes.grid_container}>
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
                                changed={(event) => this.inputChangedHandler(event, formElement.id)}
                            />
                        ))}
                        <SignupButton value="ثبت نام" className={classes.signupButton}/>
                    </form>

                </div>
                <Footer/>
            </Auxiliary>
        )
    }
}

export default signup