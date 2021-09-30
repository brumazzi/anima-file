import { times } from 'lodash'
import React from 'react'
import { Component } from 'react'

import Text from '../../components/inputs/text'

class Form extends Component {
    constructor(props) {
        super(props)
        this.props = props
        this.user = props.user
    }

    render() {
        let category = this.props.category || {}
        return (
            <div className="d-flex row justify-content-center">
                <div className="col-sm-12">
                    <form action={this.props.url} method={this.props.method}>
                        <button className="d-none" id="form-submit"></button>
                        <div className="row">
                            <div className="col">
                                <h2>{this.props.title}</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-6">
                                <Text id="category-name" type="text" name="category.name" value={category.name}>{this.props.t.models.category.name}</Text>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12">
                                <Text id="category-description" type="text" name="category.description" value={category.description}>{this.props.t.models.category.description}</Text>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Form