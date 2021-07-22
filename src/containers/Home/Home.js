import React, {useEffect, useState} from 'react'
import Header from '../../components/UI/Header/Header'
import HeroHeader from '../../components/UI/HeroHeader/HeroHeader'
import ProductsSection from '../../components/UI/ProductsSection/ProductsSection'
import Footer from '../../components/UI/Footer/Footer'
import Auxiliary from "../../hoc/Auxiliary";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const home = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [name, setName] = useState('')

    // eslint-disable-next-line react-hooks/rules-of-hooks
    // useEffect(() => {
    //     (
    //         async () => {
    //             const response = await fetch('http://localhost:8000/api/user', {
    //                 headers: {'Content-Type': 'application/json'},
    //                 credentials: 'include',
    //             })
    //             // content here is user
    //             const content = await response.json()
    //             setName(content.name)
    //         }
    //     )()
    // })


    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        (
            async () => {
                await fetch('http://localhost:8000/api/user', {
                    headers: {'Content-Type': 'application/json'},
                    credentials: 'include',
                })
            }
        )()
    })


    // const anotherFunc = (name) => {
    //     if (name) {
    //         return 'Hi' + name
    //     } else {
    //         return 'You are not authenticated'
    //     }
    // }

    const loadDataOnlyOnce = (name) => {
        // var variable = ""
        // if (name) {
        //     variable = 'Hi' + name
        // } else {
        //     variable = 'You are not authenticated'
        // }
        const variable = 'Hi' + name;
        window.onload = () => {
            // toast.success(anotherFunc, {
            //     position: toast.POSITION.TOP_RIGHT
            // });
            alert(variable)
            // console.log(name)
        }
    }

    const HellotoUser = (name) => {
        useEffect(() => {
            loadDataOnlyOnce(name)
        }, [])
    }

    // HellotoUser(name)


    return (
        <Auxiliary>
            <Header/>
            <HeroHeader/>
            <ProductsSection/>
            <Footer/>
            <div>
                {/*{name ? HellotoUser() : 'You are not authenticated'}*/}
                {/*{alert(`Hi ${name}`)}*/}
            </div>
        </Auxiliary>
    )
}

export default home