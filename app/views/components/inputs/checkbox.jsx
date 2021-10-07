import React from 'react'
import { Component } from 'react'

class Checkbox extends Component {
    constructor(props) {
        super(props)
        this.props = props
    }

    render() {
        let checked = this.props.checked ? "checked" : ""
        return (
            <div className="form-group">
                <label className="form-check-label" htmlFor={this.props.id}>
                    {this.props.children}
                </label>
                <div className="form-check form-switch form-check-custom form-check-solid">
                    <input type="hidden" name={this.props.name} id="" value="0" />
                    <input disabled={this.props.disabled} className="form-check-input w-60px" type="checkbox" name={this.props.name} id={this.props.id} defaultChecked={checked} value={this.props.value} required={this.props.required} />
                </div>
            </div>

        )
    }
}

export default Checkbox