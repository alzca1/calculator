import React, { Component } from "react";
import Button from "../../../components/button/button";
import "./Keypad.css";

class Keypad extends Component {
  render() {
    return (
      <div className="Keypad">
        <div className="FunctionKeys">
          <div className="UpperKeys">
            <Button className="UpperKey" label="AC" />
            <Button className="UpperKey" label="+/-" />
            <Button className="UpperKey" label="%" />
          </div>
          <div className="DigitKeys">
            <Button className="DigitKey" className="key0" label="0" />
            <Button className="DigitKey" label="." />
            <Button className="DigitKey" label="1" />
            <Button className="DigitKey" label="2" />
            <Button className="DigitKey" label="3" />
            <Button className="DigitKey" label="4" />
            <Button className="DigitKey" label="5" />
            <Button className="DigitKey" label="6" />
            <Button className="DigitKey" label="7" />
            <Button className="DigitKey" label="8" />
            <Button className="DigitKey" label="9" />
          </div>
        </div>
        <div className="OperatorKeys">
          <Button className="OperatorKey" label="÷" />
          <Button className="OperatorKey" label="x" />
          <Button className="OperatorKey" label="-" />
          <Button className="OperatorKey" label="+" />
          <Button className="OperatorKey" label="=" />
        </div>
      </div>
    );
  }
}

export default Keypad;
