import React, {Component} from "react"
import classes from "./GroupCard.module.css"

class GroupCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "React"
        }
        this.onValueChange = this.onValueChange.bind(this)
    }

    onValueChange(event) {
        this.setState({
            selectedOption: event.target.value
        })
    }

    formSubmit(event) {
        event.preventDefault()
        console.log(this.state.selectedOption)
    }

    render() {
        return (
            <div className={classes.container}>
                <h1 className={classes.header}>دسته بندی ها</h1>
                <hr className={classes.divider}/>
                <form onSubmit={this.formSubmit}>

                    <div className={classes.radio}>
                        <label className={classes.label}>
                            <input
                                type="radio"
                                value="دسته بندی یک"
                                checked={this.state.selectedOption === "دسته بندی یک"}
                                onChange={this.onValueChange}
                                className={classes.input}
                            />
                            <span className={classes.check}>

                            </span>
                            دسته بندی یک
                        </label>
                    </div>

                    <div className={classes.radio}>
                        <label className={classes.label}>
                            <input
                                type="radio"
                                value="دسته بندی دو"
                                checked={this.state.selectedOption === "دسته بندی دو"}
                                onChange={this.onValueChange}
                                className={classes.input}
                            />
                            دسته بندی دو
                        </label>
                    </div>

                    <div className={classes.radio}>
                        <label className={classes.label}>
                            <input
                                type="radio"
                                value="دسته بندی سه"
                                checked={this.state.selectedOption === "دسته بندی سه"}
                                onChange={this.onValueChange}
                                className={classes.input}
                            />
                            دسته بندی سه
                        </label>
                    </div>

                    <div className={classes.radio}>
                        <label className={classes.label}>
                            <input
                                type="radio"
                                value="دسته بندی چهار"
                                checked={this.state.selectedOption === "دسته بندی چهار"}
                                onChange={this.onValueChange}
                                className={classes.input}
                            />
                            دسته بندی چهار
                        </label>
                    </div>
                </form>
            </div>
        )
    }
}

export default GroupCard