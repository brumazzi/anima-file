import React from 'react';
import { Component } from 'react';

class Text extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        let label = '';
        if (this.props.children)
            label = <label htmlFor={this.props.id} className="text-gray-600">{this.props.children}</label>

        return (
            <div className="form-group mb-5 col-sm-12">
                {label}
                <input data-container={this.props.container} className={`${this.props.className} form-control`} type={this.props.type || 'text'} name={this.props.name} id={this.props.id} defaultValue={this.props.value || ""} required={this.props.required} />
            </div>
        )
    }
}

export default Text;