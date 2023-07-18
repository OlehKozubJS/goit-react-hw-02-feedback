import { Component } from "react";

export class Section extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  addGood = () => {this.state.good += 1};
  addNeutral = () => {this.addNeutral.neutral += 1};
  addBad = () => {this.addBad.bad += 1};
    
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };
  countPositiveFeedbackPercentage();

  toggle = () => {
    this.setState(state => ({ isOpen: !state.isOpen }));
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <div>
        <div>
            <h2>Please leave feedback</h2>
            <button onClick={addGood}>Good</button>
            <button onClick={addNeutral}>Neutral</button>
            <button onClick={addBad}>Bad</button>
        </div>
        <div>
            <h2>Statistics</h2>
            <ul>
                <li>Good: {good}</li>
                <li>Neutral: {neutral}</li>
                <li>Bad: {bad}</li>
                <li>Total:</li>
                <li>Positive feedback: </li>
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