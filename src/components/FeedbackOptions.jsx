import { Component } from "react";
import propTypes from "prop-types";
import FeedbackOptionsStyles from "./FeedbackCSS/FeedbackOptions.module.css";

export class FeedbackOptions extends Component {
    renderOptionButtons = () => {
        return this.props.options.map(
            (option, index) =>
                <button
                    className={FeedbackOptionsStyles.feedbackOptionsButton}
                    data-id={option}
                    key={index}
                    onClick={this.props.onLeaveFeedback}
                >
                    {option}
                </button>
        );
    }
  
    render() {
        return (
            <div className={FeedbackOptionsStyles.feedbackOptions}>
                {this.renderOptionButtons()}
            </div>
        )
    }
}

FeedbackOptions.propTypes = {
    options: propTypes.arrayOf(propTypes.string.isRequired).isRequired,
    onLeaveFeedback: propTypes.func.isRequired
}
