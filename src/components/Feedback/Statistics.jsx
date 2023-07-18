import { Component } from "react";
import propTypes from "prop-types";

export class Statistics extends Component {
    render() {
        const { good, neutral, bad, total, positivePercentage } = this.props;

        return (
            <ul>
                <li>Good: {good}</li>
                <li>Neutral: {neutral}</li>
                <li>Bad: {bad}</li>
                <li>Total: {total}</li>
                <li>Positive feedback: {positivePercentage}%</li>
            </ul>
        );
    }
}

/*
propTypes.string.isRequired,
*/

Statistics.propTypes = {
    good: propTypes.string.isRequired,
    neutral: propTypes.string.isRequired,
    bad: propTypes.string.isRequired,
    total: propTypes.string.isRequired,
    positivePercentage: propTypes.string.isRequired
}
