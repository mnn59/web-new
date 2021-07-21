import React, {Component} from "react"
import classes from "./GroupCard.module.css"
import styled from 'styled-components'


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


        const Check = styled.span`
          width: 20px;
          height: 20px;
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          border-radius: 100px;
          border: 2px solid #1c68b0;
          box-shadow: 0px 0px 0px 0px #1c68b0 inset;
          transition: all 0.25s cubic-bezier(0, 1.05, 0.72, 1.07);
          margin-left: 9px;
          margin-top: 5px;

          &::after {
            content: '';
            width: 100%;
            height: 100%;
            //opacity: 0;
            //z-index: 4;
            position: absolute;
            //transform: scale(0);
            //transition-delay: 0.2s !important;
            transition: all 0.25s cubic-bezier(0, 1, 05, 0.72, 1.07);
          }
        `;


        const Input = styled.input`
          margin-left: 5px;
          visibility: hidden;
          position: absolute;

          &:checked {
            ~ ${Check} {
              border-color: #1c68b0;
              box-shadow: 0px 0px 0px 15px #1c68b0 inset;

              &::after {
                opacity: 1;
                transform: scale(1);
              }
            }
          }
        `;


        return (
            <div className={classes.container}>
                <h1 className={classes.header}>دسته بندی ها</h1>
                <hr className={classes.divider}/>
                <form onSubmit={this.formSubmit}>

                    <div className={classes.radio}>
                        <label className={classes.label}>
                            {/*<input*/}
                            {/*    type="radio"*/}
                            {/*    value="دسته بندی یک"*/}
                            {/*    checked={this.state.selectedOption === "دسته بندی یک"}*/}
                            {/*    onChange={this.onValueChange}*/}
                            {/*    className={classes.input}*/}
                            {/*/>*/}


                            <Input
                                type="radio"
                                value="دسته بندی یک"
                                checked={this.state.selectedOption === "دسته بندی یک"}
                                onChange={this.onValueChange}
                            />

                            {/*<span className={classes.check}>*/}
                            {/*</span>*/}

                            <Check/>
                            دسته بندی یک
                        </label>
                    </div>

                    <div className={classes.radio}>
                        <label className={classes.label}>
                            {/*<input*/}
                            {/*    type="radio"*/}
                            {/*    value="دسته بندی دو"*/}
                            {/*    checked={this.state.selectedOption === "دسته بندی دو"}*/}
                            {/*    onChange={this.onValueChange}*/}
                            {/*    className={classes.input}*/}
                            {/*/>*/}


                            <Input
                                type="radio"
                                value="دسته بندی دو"
                                checked={this.state.selectedOption === "دسته بندی دو"}
                                onChange={this.onValueChange}
                            />

                            <Check/>
                            دسته بندی دو
                        </label>
                    </div>

                    <div className={classes.radio}>
                        <label className={classes.label}>
                            {/*<input*/}
                            {/*    type="radio"*/}
                            {/*    value="دسته بندی سه"*/}
                            {/*    checked={this.state.selectedOption === "دسته بندی سه"}*/}
                            {/*    onChange={this.onValueChange}*/}
                            {/*    className={classes.input}*/}
                            {/*/>*/}

                            <Input
                                type="radio"
                                value="دسته بندی سه"
                                checked={this.state.selectedOption === "دسته بندی سه"}
                                onChange={this.onValueChange}
                            />


                            <Check/>
                            دسته بندی سه
                        </label>
                    </div>

                    <div className={classes.radio}>
                        <label className={classes.label}>
                            {/*<input*/}
                            {/*    type="radio"*/}
                            {/*    value="دسته بندی چهار"*/}
                            {/*    checked={this.state.selectedOption === "دسته بندی چهار"}*/}
                            {/*    onChange={this.onValueChange}*/}
                            {/*    className={classes.input}*/}
                            {/*/>*/}


                            <Input
                                type="radio"
                                value="دسته بندی چهار"
                                checked={this.state.selectedOption === "دسته بندی چهار"}
                                onChange={this.onValueChange}
                            />


                            <Check/>
                            دسته بندی چهار
                        </label>
                    </div>
                </form>
            </div>
        )
    }
}

export default GroupCard