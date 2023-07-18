import { Component } from "react";
import { Section } from "./Section";
import { FeedbackOptions } from "./FeedbackOptions";
import { Statistics } from "./Statistics";
import { Notification } from "./Notification";

export class Feedback extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    };
  
    changeStatistics = (event) => {
        if (event.target.className === "GoodButton") {
            this.setState({good: this.state.good + 1});
        }
        if (event.target.className === "NeutralButton") {
            this.setState({neutral: this.state.neutral + 1});
        }
        if (event.target.className === "BadButton") {
            this.setState({bad: this.state.bad + 1});
        }
    }
  
    countTotalFeedback = () => {
        const { good, neutral, bad } = this.state;
        return good + neutral + bad;
    };
    
    countPositiveFeedbackPercentage = () => {
        const sum = this.countTotalFeedback();
        return Math.floor(this.state.good / sum * 100);
    };
  
    render() {
        const { good, neutral, bad } = this.state;
  
        return (
            <div>
                <Section title="Please leave feedback">
                    <FeedbackOptions options={["Good", "Bad", "Neutral"]} onLeaveFeedback={this.changeStatistics} />
                </Section>
  
                <Section title="Statistics">
                    {
                    this.countTotalFeedback() === 0 ?
                    <Notification message="There is no feedback" />
                    :
                    <Statistics good={good} neutral={neutral} bad={bad} total={this.countTotalFeedback()} positivePercentage={this.countPositiveFeedbackPercentage()} />
                    }
                </Section>
            </div>
        );
    }
}

/*
FriendList.propTypes = {
    friends: propTypes.arrayOf(
        propTypes.shape(
            {
                avatar: propTypes.string.isRequired,
                name: propTypes.string.isRequired,
                isOnline: propTypes.bool.isRequired,
                id: propTypes.number.isRequired,
            }
        )
    ).isRequired,
}
*/