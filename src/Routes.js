import React from 'react'
import {Switch, Route} from "react-router";
import Login from './containers/Login/Login'
import Signup from './containers/Signup/Signup'
import Home from './containers/Home/Home'
import NotFound from "./containers/NotFound/NotFound";

function Routes() {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login}/>
            <Route exact path="/signup" component={Signup}/>
            <Route path="*" component={NotFound} />
        </Switch>
    )
}

export default Routes