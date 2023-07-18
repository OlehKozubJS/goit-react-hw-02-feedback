import { Component } from "react";

export class Section extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  addGood = () => this.setState(state => ({good: state.good + 1}));
  addNeutral = () => this.setState(state => ({neutral: state.neutral + 1}));
  addBad = () => this.setState(state => ({bad: state.bad + 1}));
  
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
            <button onClick={this.addGood}>Good</button>
            <button onClick={this.addNeutral}>Neutral</button>
            <button onClick={this.addBad}>Bad</button>
        </div>
        <div>
            <h2>Statistics</h2>
            <ul>
                <li>Good: {good}</li>
                <li>Neutral: {neutral}</li>
                <li>Bad: {bad}</li>
                <li>Total: {this.countTotalFeedback()}</li>
                <li>Positive feedback: {this.countPositiveFeedbackPercentage()}%</li>
            </ul>
        </div>
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