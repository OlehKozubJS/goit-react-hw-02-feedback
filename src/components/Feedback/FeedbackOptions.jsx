import { Component } from "react";
import propTypes from "prop-types";

export class FeedbackOptions extends Component {
    renderOptionButtons = () => {
        return this.props.options.map((option, index) => <button className={option.replaceAll(" ", "") + "Button"} key={index}>{option}</button>);
    }
  
    render() {
        return (
            <div onClick={this.props.onLeaveFeedback}>
                {this.renderOptionButtons()}
            </div>
        )
    }
}


FeedbackOptions.propTypes = {
    options: propTypes.arrayOf(propTypes.string.isRequired).isRequired,
    onLeaveFeedback: propTypes.func.isRequired
}
