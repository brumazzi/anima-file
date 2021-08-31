import React from 'react'
import {Component} from 'react'

class Checkbox extends Component{
    constructor(props){
        super(props)
        this.props = props
    }

    render() {
        let checked = this.props.checked ? "checked" : ""
        return(
            <label htmlFor={this.props.id} className="checkbox rounded">
                <input type="hidden" name={this.props.name} id="" value="0"/>
                <input type="checkbox" name={this.props.name} id={this.props.id} defaultChecked={checked} value={this.props.value} required={this.props.required}/>
                <span>{this.props.children}</span>
            </label>
        )
    }
}

export default Checkbox