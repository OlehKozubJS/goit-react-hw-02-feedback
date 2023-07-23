import propTypes from "prop-types";
import SectionStyles from "./FeedbackCSS/Section.module.css";

export const Section = ({title}) => {
    return(
        <div >
            <h2 className={SectionStyles.sectionHeader}>{title}</h2>
            {this.props.children}
        </div>
    );
}

Section.propTypes = {
    title: propTypes.string.isRequired
}