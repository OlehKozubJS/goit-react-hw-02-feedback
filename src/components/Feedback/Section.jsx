import { Component } from "react";

export class Section extends Component {
    render() {
        return(
            <div>
                <h2>{this.props.title}</h2>
                {this.props.children}
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