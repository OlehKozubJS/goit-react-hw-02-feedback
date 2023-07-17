import { Component } from "react";

class Section extends Component {
  state = { isOpen: false };

  toggle = () => {
    this.setState(state => ({ isOpen: !state.isOpen }));
  };

  render() {
    const { isOpen } = this.state;
    const { children } = this.props;

    return (
      <div>
        <div>
            <h2>Please leave feedback</h2>
            <button>Good</button>
            <button>Neutral</button>
            <button>Bad</button>
        </div>
        <div>
            <h2>Statistics</h2>
            
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