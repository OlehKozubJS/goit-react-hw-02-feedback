import { Component } from "react";
import propTypes from "prop-types";
import SectionStyles from "./FeedbackCSS/Section.module.css";

export class Section extends Component {
    render() {
        return(
            <div >
                <h2 className={SectionStyles.sectionHeader}>{this.props.title}</h2>
                {this.props.children}
            </div>
        );
    }
}

Section.propTypes = {
    title: propTypes.string.isRequired
}