import React from 'react';
import { Component } from 'react';

class Text extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        let label = '';
        let input = '';
        if (this.props.children)
            label = <label htmlFor={this.props.id} className="">{this.props.children}</label>
        if (this.props.multLines)
            input = <textarea data-container={this.props.container} className={`${this.props.className} form-control`} type={this.props.type || 'text'} name={this.props.name} id={this.props.id} required={this.props.required}>{this.props.value || ""}</textarea>
        else
            input = <input data-container={this.props.container} className={`${this.props.className} form-control`} type={this.props.type || 'text'} name={this.props.name} id={this.props.id} defaultValue={this.props.value || ""} required={this.props.required} />


        return (
            <div className="form-group mb-5 col-sm-12">
                {label}
                {input}
            </div>
        )
    }
}

export default Text;