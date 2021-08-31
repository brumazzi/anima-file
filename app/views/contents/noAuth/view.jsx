import React from 'react'
import { Component } from 'react'

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
                </content>
            </render>
        )
    }
}

export default New