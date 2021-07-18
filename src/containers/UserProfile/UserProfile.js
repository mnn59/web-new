import React from "react";
import '../../components/UI/Tabs/Tabs'
import Tabs from "../../components/UI/Tabs/Tabs";
import Header from '../../components/UI/Header/Header'
import Footer from '../../components/UI/Footer/Footer'
import Something from "../../components/UI/Something/Something";
import './UserProfile.css'


const UserProfile = () => {
    return (
        <div>
            <Header />
            <Tabs/>
            {/*<Something />*/}
            <Footer className="footerHere"/>
        </div>
    )
}

export default UserProfile;