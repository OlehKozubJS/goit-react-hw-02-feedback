import { Component } from "react";

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
        <div>
            <h2>Please leave feedback</h2>

            <FeedbackOptions options={["Good", "Bad", "Neutral"]} onLeaveFeedback={this.changeStatistics} />
        </div>
        <div>
            <h2>Statistics</h2>
            <Statistics good={good} neutral={neutral} bad={bad} total={this.countTotalFeedback()} positivePercentage={this.countPositiveFeedbackPercentage()} />
        </div>
      </div>
    );
  }
}

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

export class FeedbackOptions extends Component {
  constructor(props) {
    super(props);
    this.state = {optionButtons: this.props.options.map((option, index) => <button className={option.replaceAll(" ", "") + "Button"} key={index}>{option}</button>)};
  }

  render() {
    return (
      <div onClick={this.props.onLeaveFeedback}>
        {this.state.optionButtons}
      </div>
    )
  }
}

export class Section extends Component {

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