import React, {Component} from "react"

class Something extends Component {
    constructor(props) {
        super(props);
        this.state = {
            digit: 0,
            background: 'white'
        }
    }
    componentDidMount = () => {
        setInterval(() => {
            this.setState(prevState => ({
                digit: prevState.digit + 1,
                background: 'red'
            }))
        }, 1000)
    }

    render() {
        const sisi =  this.state.background
        return(
            <div style={{backgroundColor: {sisi}}}>
                counter: {this.state.digit}
            </div>
        )
    }
}

export default Something