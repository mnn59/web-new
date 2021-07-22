import React from "react";
import '../../components/UI/Tabs/Tabs'
import Tabs from "../../components/UI/Tabs/Tabs";
import Header from '../../components/UI/Header/Header'
import Footer from '../../components/UI/Footer/Footer'
import Something from "../../components/UI/Something/Something";
import classes from './UserProfile.module.css'
import Modal from "../../components/UI/Modal/Modal"


const UserProfile = () => {
    return (
        <div className={classes.container}>
            <Header />
            <Tabs/>
            {/*<Something />*/}
            <Footer className={classes.footerHere}/>
        </div>
    )
}

export default UserProfile;