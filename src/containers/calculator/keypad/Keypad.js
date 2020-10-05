import React, { Component } from "react";
import Button from "../../../components/button/button";
import "./Keypad.css";

class Keypad extends Component {
  render() {
    return (
      <div className="Keypad">
        <div className="FunctionKeys">
          <div className="UpperKeys">
            <Button label="AC" />
            <Button label="+/-" />
            <Button label="%" />
          </div>
          <div className="DigitKeys"></div>
        </div>
      </div>
    );
  }
}

export default Keypad;
