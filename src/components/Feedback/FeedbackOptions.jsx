import { Component } from "react";

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