import React from 'react'
import {Switch, Route} from "react-router";
import Login from './containers/Login/Login'
import Signup from './containers/Signup/Signup'
import Home from './containers/Home/Home'
import NotFound from "./containers/NotFound/NotFound";
import UserProfile from "./containers/UserProfile/UserProfile";

function Routes() {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login}/>
            <Route exact path="/signup" component={Signup}/>
            <Route exact path="/user-profile" component={UserProfile} />
            <Route path="*" component={NotFound} />
        </Switch>
    )
}

export default Routes