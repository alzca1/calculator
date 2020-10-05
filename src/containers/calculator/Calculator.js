import React, {Component} from 'react'
import Display from './display/Display'
import Keypad from './keypad/Keypad'
import "./Calculator.css"



class Calculator extends Component {
    render(){
        return(
            <div className="Calculator">
                <Display />
                <Keypad />
            </div>
        )
    }
}

export default Calculator; 