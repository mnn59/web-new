import React, {useState} from "react";
// import classes from './Tabs.css'
import classNames from "classnames";
import './Tabs.css'

const Tabs = () => {
    const [toggleState, setToggleState] = useState(1)
    const toggleTab = (index) => {
        setToggleState(index)
        console.log(index)
    }
    // const toggleStateClasses = classNames(classes.tabs, classes.active_tabs)
    // const tabClass = classNames(classes.tabs)
    // const toggleStateClassesForContents = classNames(classes.content, classes.active_content)
    // const contentClass = classNames(classes.content)
    return (
        <div className="container">
            <div className="block_tabs">
                <button
                    // className={toggleState === 1 ? {toggleStateClasses} : {tabClass}}
                    className={toggleState === 1 ? "tabs active_tabs" : "tabs"}
                    onClick={() => toggleTab(1)}
                >
                    <h1>Tab 1</h1>
                </button>
                <button
                    // className={toggleState === 2 ? {toggleStateClasses} : {tabClass}}
                    className={toggleState === 2 ? "tabs active_tabs" : "tabs"}
                    onClick={() => toggleTab(2)}
                >
                    <h1>Tab 2</h1>
                </button>
                <button
                    // className={toggleState === 3 ? {toggleStateClasses} : {tabClass}}
                    className={toggleState === 3 ? "tabs active_tabs" : "tabs"}
                    onClick={() => toggleTab(3)}
                >
                    <h1>Tab 3</h1>
                </button>
            </div>
            <div className="content_tabs">
                <div
                    // className={toggleState === 1 ? {toggleStateClassesForContents} : {contentClass}}
                    className={toggleState === 1 ? "content active_content" : "content"}
                >
                    <p>Tab 1 content</p>
                </div>
                <div
                    // className={toggleState === 2 ? {toggleStateClassesForContents} : {contentClass}}
                    className={toggleState === 2 ? "content active_content" : "content"}
                >
                    <p>Tab 2 content</p>
                </div>
                <div
                    // className={toggleState === 3 ? {toggleStateClassesForContents} : {contentClass}}
                    className={toggleState === 3 ? "content active_content" : "content"}
                >
                    <p>Tab 3 content</p>
                </div>
            </div>

        </div>
    )
}

export default Tabs