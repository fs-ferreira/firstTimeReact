import { Component } from "react";
import "./styles.css";

export class Button extends Component {
  render() {
    const { text, event, disabled } = this.props;
    return (
      <button className="button" onClick={event} disabled={disabled}>
        {text}
      </button>
    );
  }
}
