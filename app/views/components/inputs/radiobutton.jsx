import React from 'react'
import {Component} from 'react'

class RadioButton extends Component{
    constructor(props){
        super(props)
        this.props = props
    }

    render() {
        return(
            <label htmlFor={this.props.id} className="radio circle">
                <input type="radio" name={this.props.name} id={this.props.id} value={this.props.value} required={this.props.required}/>
                <span>{this.props.children}</span>
            </label>
        )
    }
}

export default RadioButton