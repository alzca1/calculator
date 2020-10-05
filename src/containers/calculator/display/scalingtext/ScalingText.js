import React, { Component } from "react";
import "./ScalingText.css";

class ScalingText extends Component {
  render() {
    return (
      <div className="ScalingText">
        <div className="Text">{this.props.value}</div>
      </div>
    );
  }
}

export default ScalingText;
