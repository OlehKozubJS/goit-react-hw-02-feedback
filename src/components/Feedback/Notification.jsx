import { Component } from "react";

export class Notification extends Component {
    render() {
        return(
            <p>{this.props.message}</p>
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