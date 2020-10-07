import React, { Component } from "react";
import Button from "../../../components/button/button";
import { connect } from "react-redux";
import "./Keypad.css";

class Keypad extends Component {
  render() {
  let displayLabel = "AC"; 
  if(this.props.displayValue !== "0"){
    console.log(this.props.displayValue)
    displayLabel = "C"
    console.log(displayLabel)
  }
    return (
      
      <div className="Keypad">
        <div className="FunctionKeys">
          <div className="UpperKeys">
            <Button className="UpperKey" onClick={this.props.onACPressed} label={displayLabel} />
            <Button className="UpperKey" onClick = {this.props.onToggleSign} label="+/-" />
            <Button className="UpperKey" onClick={this.props.onAddingPercent}label="%" />
          </div>
          <div className="DigitKeys">
            <Button
              className="DigitKey key0"
              onClick={() => this.props.onDigitPressed(0)}
              label="0"
            />
            <Button
              className="DigitKey"
              onClick={this.props.onPeriodPressed}
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
          <Button className="OperatorKey"  onClick={() => this.props.onOperatorPressed("/")} label="÷" />
          <Button className="OperatorKey"  onClick={() => this.props.onOperatorPressed("*")} label="x" />
          <Button className="OperatorKey"  onClick={() => this.props.onOperatorPressed("-")} label="-" />
          <Button className="OperatorKey"  onClick={() => this.props.onOperatorPressed("+")} label="+" />
          <Button className="OperatorKey"  onClick={() => this.props.onOperatorPressed("=")} label="=" />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    value: state.value, 
    displayValue: state.displayValue
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onDigitPressed: (number) => dispatch({ type: "INPUTDIGIT", digit: number }),
    onPeriodPressed: () => dispatch({type:"PERIOD"}), 
    onACPressed: () => dispatch({ type: "CLEAR"}),
    onToggleSign: () => dispatch({type: "TOGGLESIGN"}), 
    onAddingPercent: () => dispatch({type: "PERCENT"}), 
    onOperatorPressed: (operator) => dispatch({type: "OPERATOR", symbol: operator})
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Keypad);
