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
        let stamps = this.props.stamps
        let categories = this.props.categories
        let layouts = this.props.layouts

        return (
            <render dest="#container">
                <content>
                    <Form t={this.props.t} user={this.props.user}
                        content={content}
                        stamps={stamps}
                        categories={categories}
                        layouts={layouts}
                        url={"/u/content/"}
                        method={"POST"}
                        title={this.props.t.titles.content.new} />
                </content>
            </render>
        )
    }
}

export default New