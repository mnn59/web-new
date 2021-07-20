import React, {Component} from "react";
import classes from "./SearchButton.module.css"
import classNames from "classnames";

class searchButton extends Component {
    render(){
        const btnClass = classNames(classes.searchBtn, this.props.className);
        return (
            <button
                type={this.props.type}
                className={btnClass}
                onClick={this.props.onClick}
                disabled={this.props.disabled}
            >
                {this.props.value}
            </button>
        )
    }

}

export default searchButton;