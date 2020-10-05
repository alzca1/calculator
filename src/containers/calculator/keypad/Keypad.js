import React, { Component } from "react";
import Button from "../../../components/button/button";
import { connect } from "react-redux";
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
            <Button
              className="DigitKey key0"
              onClick={() => this.props.onDigitPressed(0)}
              label="0"
            />
            <Button
              className="DigitKey"
              onClick={() => this.props.onDigitPressed(".")}
              label="."
            />
            <Button
              className="DigitKey"
              onClick={() => this.props.onDigitPressed(1)}
              label="1"
            />
            <Button
              className="DigitKey"
              onClick={() => this.props.onDigitPressed(2)}
              label="2"
            />
            <Button
              className="DigitKey"
              onClick={() => this.props.onDigitPressed(3)}
              label="3"
            />
            <Button
              className="DigitKey"
              onClick={() => this.props.onDigitPressed(4)}
              label="4"
            />
            <Button
              className="DigitKey"
              onClick={() => this.props.onDigitPressed(5)}
              label="5"
            />
            <Button
              className="DigitKey"
              onClick={() => this.props.onDigitPressed(6)}
              label="6"
            />
            <Button
              className="DigitKey"
              onClick={() => this.props.onDigitPressed(7)}
              label="7"
            />
            <Button
              className="DigitKey"
              onClick={() => this.props.onDigitPressed(8)}
              label="8"
            />
            <Button
              className="DigitKey"
              onClick={() => this.props.onDigitPressed(9)}
              label="9"
            />
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

const mapDispatchToProps = (dispatch) => {
  return {
    onDigitPressed: (number) => dispatch({ type: "CONCATENATE", digit: number }),
  };
};
export default connect(null, mapDispatchToProps)(Keypad);
