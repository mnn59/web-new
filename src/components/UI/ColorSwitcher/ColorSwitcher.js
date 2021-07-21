import React, {Component} from "react"
import classes from './ColorSwitcher.module.css'

const colorArray = ["#27ae60", "lightblue", "#6c5ce7", "#fdcb6e", "#b33939", "#ee612c"]

class ColorSwitcher extends Component {
    constructor(props) {
        super(props)
        this.state = {
            color: "#ee612c"
        }
    }

    componentDidMount() {
        let colorPos = 0
        setInterval(() => {
            if (colorArray.length - 1 > colorPos) {
                this.setState({
                    color: colorArray[colorPos]
                })
                colorPos++
            } else {
                this.setState({
                    color: colorArray[colorPos]
                })
                colorPos = 0
            }
        }, 10000)
    }

    changeColor(event) {
        // event.preventDefault()
        this.setState({
            color: event.target.value
        })
    }


    render() {
        const styleObject = {
            background: this.state.color
        }
        return (
            <div style={styleObject} className={classes.container}>
                {this.props.children}
            </div>
        )
    }
}

export default ColorSwitcher