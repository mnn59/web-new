import React, {Component} from "react";
import notfound from '../../assets/404-not-found.png'
import classes from './NotFound.module.css'
import Footer from '../../components/UI/Footer/Footer'

class NotFound extends Component {
    render() {
        return (
            <div className={classes.notFoundSection}>
                <h1 className={classes.notFoundText}>404 not found</h1>
                <img src={notfound} alt="404-Not-Found" className={classes.notFoundImage}/>
                <Footer className={classes.footer}/>
            </div>

        );
    }
}

export default NotFound;
