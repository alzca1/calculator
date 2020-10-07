import React, { Component } from "react";
import "./ScalingText.css";

class ScalingText extends Component {
  state = {
    scale: 1,
  };

  componentDidUpdate() {
    const { scale } = this.state;
    const childOffsetWidth = this.node.offsetWidth;
    const parentNodeOffsetWidth = this.node.offsetParent.offsetWidth;
    const nextScale = parentNodeOffsetWidth / childOffsetWidth;

    if (scale === nextScale) {
      return;
    }

    if (nextScale < 1) {
      this.setState({
        scale: nextScale,
      });
    }

    if (scale < 1) {
      this.setState({
        scale: 1,
      });
    }
  }

  render() {
    const { scale } = this.state;
    let textStyle = {
      position: "absolute",
      right: 0,
      padding: "45px 5px 55px 10px",
      transform: `scale(${scale}, ${scale})`,
      transformOrigin: "right",
      display: "inline-block"
    };
    return (
      <div className="ScalingText" {...this.props}>
        <div style={textStyle} ref={(node) => (this.node = node)}>
          {this.props.value}
        </div>
      </div>
    );
  }
}

export default ScalingText;
