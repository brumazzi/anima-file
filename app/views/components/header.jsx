import React from 'react'
import { Component } from 'react'

class Header extends Component {
    constructor(props) {
        super(props)
        this.props = props
    }

    render() {
        // {/* style="animation-duration: 0.3s;"> */}
        return (
            <header id="kt_header" className="header" data-kt-sticky="true" data-kt-sticky-name="header" data-kt-sticky-offset="{default: '200px', lg: '300px'}">
                <div className="container-xxl d-flex align-items-center justify-content-between" id="kt_header_container">
                    {this.props.children}
                </div>
            </header>
        )
    }
}

export default Header