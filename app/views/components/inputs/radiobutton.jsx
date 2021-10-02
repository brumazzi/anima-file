import React from 'react'
import {Component} from 'react'

class RadioButton extends Component{
    constructor(props){
        super(props)
        this.props = props
    }

    render() {
        let checked = this.props.checked ? "checked" : ""
        return(
            <div className="form-check form-switch form-check-custom form-check-solid form-group">
                <input className="form-check-input" type="radio" name={this.props.name} id={this.props.id} defaultChecked={checked} value={this.props.value} required={this.props.required} />
                <label className="form-check-label text-gray-600" htmlFor={this.props.id}>
                    {this.props.children}
                </label>
            </div>
        )
    }
}

export default RadioButton