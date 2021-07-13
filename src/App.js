import classes from './App.module.css';
import {Component} from 'react'
import Layout from './components/Layout/Layout'

class App extends Component {
    render() {
        return (
            <div className={classes.App}>
                <Layout>
                    <p>تست</p>
                </Layout>
            </div>
        );
    }
}

export default App;
