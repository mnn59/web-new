import classes from './App.module.css';
import {Component} from 'react'
import Layout from './components/Layout/Layout'
import LoginButton from './components/UI/LoginButton/LoginButton'
import Header from './components/UI/Header/Header'
import Footer from './components/UI/Footer/Footer'
import HeroHeader from './components/UI/HeroHeader/HeroHeader'
import ProductsSection from './components/UI/ProductsSection/ProductsSection'
import {BrowserRouter as Router, Route, Redirect, Switch, Link} from 'react-router-dom'
import Login from './containers/Login/Login'
import Routes from './Routes'
import Home from './containers/Home/Home'

class App extends Component {
    render() {
        return (
            <Router>
                <div className={classes.App}>
                    {/*<Header/>*/}
                    {/*<Layout>*/}
                    {/*    <p>تست</p>*/}
                    {/*    <LoginButton value="ورود / ثبت نام"/>*/}
                    {/*</Layout>*/}
                    {/*<HeroHeader/>*/}
                    {/*<ProductsSection/>*/}
                    {/*<Link to="/login">Go to login page</Link>*/}
                    {/*<Footer/>*/}

                    {/*<Home />*/}
                    <Routes/>
                </div>

                {/*<Switch>*/}
                {/*    <Route path="/login" exact component={Login} />*/}
                {/*</Switch>*/}
            </Router>
        );
    }
}

export default App;
