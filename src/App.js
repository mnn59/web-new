import classes from './App.module.css';
import {Component} from 'react'
import Layout from './components/Layout/Layout'
import LoginButton from './components/UI/LoginButton/LoginButton'
import Header from './components/UI/Header/Header'
import Footer from './components/UI/Footer/Footer'

class App extends Component {
    render() {
        return (
            <div className={classes.App}>
                <Header />
                {/*<Layout>*/}
                {/*    <p>تست</p>*/}
                {/*    <LoginButton value="ورود / ثبت نام"/>*/}
                {/*</Layout>*/}

                <Footer />
            </div>
        );
    }
}

export default App;
