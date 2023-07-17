import { Component } from "react";

class Toggle extends Component {
  state = { isOpen: false };

  toggle = () => {
    this.setState(state => ({ isOpen: !state.isOpen }));
  };

  render() {
    const { isOpen } = this.state;
    const { children } = this.props;

    return (
      <div>
        <button onClick={this.toggle}>{isOpen ? "Hide" : "Show"}</button>
        {isOpen && children}
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