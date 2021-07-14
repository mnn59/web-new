import React from 'react'
import {Switch, Route} from "react-router";
import Login from './containers/Login/Login'
import Signup from './containers/Signup/Signup'
import Home from './containers/Home/Home'

function Routes() {
    return (
        <Switch>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/signup" component={Signup}/>
            <Route exact path="/" component={Home} />
        </Switch>
    )
}

export default Routes