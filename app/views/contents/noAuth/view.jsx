import React from 'react'
import { Component } from 'react'

class New extends Component {
    constructor(props) {
        super(props)
        this.props = props
        this.user = props.session.user
    }

    render() {
        let contents = this.props.contents
        let categories = this.props.categories

        return (
            <render dest=".container">
                <content>
                    <h1>XXXXXXXXXXX</h1>
                </content>
            </render>
        )
    }
}

export default New