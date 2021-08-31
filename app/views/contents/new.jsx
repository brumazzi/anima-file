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
        let content = this.props.content
        let categories = this.props.categories

        return (
            <render dest="#container">
                <content>
                    <Form t={this.props.t} user={this.props.user}
                        content={content}
                        categories={categories}
                        url={"/u/content/"}
                        method={"POST"}
                        title={this.props.t.titles.content.new} />
                </content>
            </render>
        )
    }
}

export default New