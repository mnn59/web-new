import classes from './App.module.css';
import {Component} from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import Routes from './Routes'

class App extends Component {
    render() {
        return (
            <Router>
                <div className={classes.App}>
                    <Routes/>
                </div>
            </Router>
        );
    }
}

export default App;
