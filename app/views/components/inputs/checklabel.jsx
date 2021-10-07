import React from 'react'
import {Component} from 'react'

class CheckLabel extends Component{
    constructor(props){
        super(props)
        this.props = props
    }

    render() {
        let checked = this.props.checked ? "checked" : ""
        return(
            <label title={this.props.title} htmlFor={this.props.id} className="checklabel rounded">
                <input type="checkbox" name={this.props.name} id={this.props.id} defaultChecked={checked} value={this.props.value} required={this.props.required}/>
                <span className={`badge badge-${this.props.color}`}>{this.props.children}</span>
            </label>
        )
    }
}

export default CheckLabel