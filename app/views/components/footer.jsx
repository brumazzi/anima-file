import React from 'react'
import { Component } from 'react'

class Footer extends Component {
    constructor(props) {
        super(props)
        this.props = props
    }

    render() {
        return (
            <footer id="kt_footer" className="footer py-4 d-flex flex-lg-column">
                <div className="container-xxl d-flex flex-column flex-md-row flex-stack">
                    {this.props.children}
                </div>
            </footer>
        )
    }
}

export default Footer