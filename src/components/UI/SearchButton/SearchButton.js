import React, {Component} from "react";
import classes from "./SearchButton.module.css"
import classNames from "classnames";

class searchButton extends Component {
    render(){
        const btnClass = classNames(classes.searchBtn, this.props.className);
        return (
            <button type="button" className={btnClass} onClick={this.props.onClick}>
                {this.props.value}
            </button>
        )
    }

}

export default searchButton;