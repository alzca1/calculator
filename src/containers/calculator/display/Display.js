import React, {Component} from 'react'
import ScalingText from './scalingtext/ScalingText'
import "./Display.css"


class Display extends Component {
    render(){
        return(
            <div className="Display">
                <ScalingText />
            </div>
        )
    }
}

export default Display; 