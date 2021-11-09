import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { Component } from 'react'
import Text from '../../components/inputs/text'
import Select from '../../components/inputs/select'

class NoAuthFilter extends Component {

    constructor(props) {
        super(props)
        this.props = props
        this.params = this.props.params || {}
    }

    render() {
        let contentStatus = [
            { value: '', label: '' },
            { value: true, label: this.props.t.text.yes },
            { value: false, label: this.props.t.text.no },
        ]

        return (
            <form action={this.props.url} method="post" className="w-100">
                <h4>Lorem</h4>
                <div className="row">
                    <div className="col-sm-6">
                        <Text name="content.name" value={this.params.name}>{this.props.t.models.content.name}</Text>
                    </div>
                    <div className="col-sm-4">
                        <Select items={contentStatus} selected={this.params.complete} name="content.complete">{this.props.t.models.content.complete}</Select>
                    </div>
                    <div className="col-sm-2 pt-4 mt-2">
                        <button className="btn btn-light-info btn-active-info border border-info">{this.props.t.buttons.find}</button>
                    </div>
                </div>

            </form>
        )
    }
}

export default NoAuthFilter