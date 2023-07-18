import { Component } from "react";
import propTypes from "prop-types";

export class Notification extends Component {
    render() {
        return(
            <p>{this.props.message}</p>
        );
    }
}


Notification.propTypes = {
    message:  propTypes.string.isRequired
}
