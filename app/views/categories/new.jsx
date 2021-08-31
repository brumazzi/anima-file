import React from 'react'
import { Component } from 'react'

import Form from './templates/form'

class New extends Component {
    constructor(props) {
        super(props)
        this.props = props
        this.user = props.session.user
    }

    render() {
        let category = this.props.category
        return (
            <render dest="#container">
                <content>
                    <Form t={this.props.t} user={this.props.user} category={category} url="/u/category/" method="POST" title={this.props.t.titles.category.new}/>
                </content>
            </render>
        )
    }
}

export default New