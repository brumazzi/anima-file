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
            <render dest="#container">
                <content>
                    <form action={this.props.url} method={this.props.method}>
                        <div className="row">
                            <div className="column">
                                <h2>{this.props.title}</h2>
                            </div>
                            <div className="column">
                                <a className="button button-outline" href={category._id ? `/u/category/${category._id}/` : '/u/categories/'}>{this.props.t.buttons.cancel}</a>
                                <button className="button">{this.props.t.buttons.save}</button>
                            </div>
                        </div>
                        <div className="row">
                            <div className="column column-50">
                                <Text id="category-name" type="text" name="category.name" value={category.name}>{this.props.t.models.category.name}</Text>
                            </div>
                        </div>
                        <div className="row">
                            <div className="column column-100">
                                <Text id="category-description" type="text" name="category.description" value={category.description}>{this.props.t.models.category.description}</Text>
                            </div>
                        </div>
                    </form>
                </content>
            </render>
        )
    }
}

export default Form