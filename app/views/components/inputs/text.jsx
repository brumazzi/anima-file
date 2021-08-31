import React from 'react';
import {Component} from 'react';

class Text extends Component{
    constructor(props){
        super(props);
        this.props = props;
    }

    render() {
        return(
            <div className="form-group">
                <label htmlFor={this.props.id} className="">{this.props.children}</label>
                <input type={this.props.type || 'text'} name={this.props.name} id={this.props.id} defaultValue={this.props.value || ""} required={this.props.required}/>
            </div>
        )
    }
}

export default Text;