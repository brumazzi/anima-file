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
            { value: '', label: 'Lorem' },
            { value: true, label: 'Lorem' },
            { value: false, label: 'Lorem' },
        ]

        return (
            <form action={this.props.url} method="post" className="w-100">
                <h4>Lorem</h4>
                <div className="row">
                    <div className="col-sm-6">
                        <Text name="content.name" value={this.params.name}>Lorem</Text>
                    </div>
                    <div className="col-sm-4">
                        <Select items={contentStatus} selected={this.params.complete} name="content.complete">Lorem</Select>
                    </div>
                    <div className="col-sm-2 pt-4 mt-2">
                        <button className="btn btn-light-info btn-active-info border border-info">Lorem</button>
                    </div>
                </div>

            </form>
        )
    }
}

export default NoAuthFilter