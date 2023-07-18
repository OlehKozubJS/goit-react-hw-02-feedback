import { Component } from "react";
import propTypes from "prop-types";

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

Section.propTypes = {
    title: propTypes.string.isRequired
}