import React from 'react';
import { Component } from 'react';

import CheckLabel from './checklabel';

class SelectLabel extends Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.key = 0

    }

    render() {
        let selectOptions = new Array()

        for (let i = 0; i < this.props.items.length; i += 1) {
            let item = this.props.items[i]

            if (item.items) {
                let group = item
                let groupItems = new Array()
                for (let j = 0; j < group.items.length; j += 1) {
                    if (this.props.selected.find(v => v == group.items[j].value))
                        groupItems.push(<CheckLabel id={`${this.props.id}-${this.key++}`} key={this.key++} name={`${this.props.name}`} value={`[${group.items[j].value}]`} checked="1">{group.items[j].label}</CheckLabel>)
                    else
                        groupItems.push(<CheckLabel id={`${this.props.id}-${this.key++}`} key={this.key++} name={`${this.props.name}`} value={`[${group.items[j].value}]`}>{group.items[j].label}</CheckLabel>)
                }
                selectOptions.push(<fieldset key={this.key++}><legend>{group.label}</legend>{groupItems}</fieldset>)
            } else {
                if (this.props.selected.find(v => v == item.value))
                    selectOptions.push(<CheckLabel id={`${this.props.id}-${this.key++}`} key={this.key++} name={`${this.props.name}`} value={`[${item.value}]`} checked="1">{item.label}</CheckLabel>)
                else
                    selectOptions.push(<CheckLabel id={`${this.props.id}-${this.key++}`} key={this.key++} name={`${this.props.name}`} value={`[${item.value}]`}>{item.label}</CheckLabel>)
            }
        }

        return (
            <div className="form-group">
                <label htmlFor={this.props.id} className="">{this.props.children}</label>
                <fieldset>
                    <section>
                        {selectOptions}
                    </section>
                </fieldset>
            </div>
        )
    }
}

export default SelectLabel;