import { Component } from "react";

export class FeedbackOptions extends Component {
    constructor(props) {
      super(props);
      this.state = {optionButtons: this.props.options.map((option, index) => <button className={option.replaceAll(" ", "") + "Button"} key={index}>{option}</button>)};
    }
  
    render() {
      return (
        <div onClick={this.props.onLeaveFeedback}>
          {this.state.optionButtons}
        </div>
      )
    }
  }