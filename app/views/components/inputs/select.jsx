import React from 'react';
import {Component} from 'react';

class Select extends Component{
    constructor(props){
        super(props);
        this.props = props;
        this.key = 0

    }

    render() {
        let selectOptions = new Array()

        for(let i=0; i<this.props.items.length; i+=1){
            let item = this.props.items[i]

            if(item.items){
                let group = item
                let groupItems = new Array()
                for(let j=0; j<group.items.length; j+=1){
                    if(this.props.selected == group.items[j].value)
                        groupItems.push(<option key={this.key++} value={group.items[j].value} selected>{group.items[j].label}</option>)
                    else
                        groupItems.push(<option key={this.key++} value={group.items[j].value}>{group.items[j].label}</option>)
                }
                selectOptions.push(<optgroup key={this.key++} label={group.label}>{groupItems}</optgroup>)
            }else{
                if(this.props.selected == item.value)
                    selectOptions.push(<option key={this.key++} value={item.value} selected>{item.label}</option>)
                else
                    selectOptions.push(<option key={this.key++} value={item.value}>{item.label}</option>)
            }
        }

        return(
            <div className="form-group">
                <label htmlFor={this.props.id} className="">{this.props.children}</label>
                <select name={this.props.name} id={this.props.id} className={`form-select ${this.props.className}`}>
                    {selectOptions}
                </select>
            </div>
        )
    }
}

export default Select;