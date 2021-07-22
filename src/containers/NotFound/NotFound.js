import React, {Component} from "react";
import notfound from '../../assets/404-not-found.png'
import classes from './NotFound.module.css'
import Footer from '../../components/UI/Footer/Footer'
import Header from '../../components/UI/Header/Header'
import Auxiliary from "../../hoc/Auxiliary";

class NotFound extends Component {
    render() {
        return (
            <Auxiliary>
                <Header/>
                <div className={classes.notFoundSection}>
                    <h1 className={classes.notFoundText}>404 not found</h1>
                    <img src={notfound} alt="404-Not-Found" className={classes.notFoundImage}/>
                    <Footer className={classes.footer}/>
                </div>
            </Auxiliary>

        );
    }
}

export default NotFound;
