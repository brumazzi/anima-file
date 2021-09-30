import React from 'react'
import { Component } from 'react'

class Main extends Component {
    constructor(props) {
        super(props)
        this.props = props
    }

    render() {
        return (
            <main id="kt_content" className="content d-flex flex-column flex-column-fluid px-5">
                <div className="container-xxl d-flex flex-column flex-md-row flex-stack">
                    {this.props.children}
                </div>
            </main>
        )
    }
}

export default Main