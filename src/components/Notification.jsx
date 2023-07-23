import { Component } from "react";
import propTypes from "prop-types";
import NotificationStyles from "./FeedbackCSS/Notification.module.css"

export class Notification extends Component {
    render() {
        return(
            <p className={NotificationStyles.notification}>{this.props.message}</p>
        );
    }
}

Notification.propTypes = {
    message:  propTypes.string.isRequired
}
