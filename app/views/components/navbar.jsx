import React from 'react'
import { Component } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArchive, faIdCard, faImage, faSignOutAlt, faTachometerAlt } from '@fortawesome/free-solid-svg-icons'

class Navbar extends Component {
    constructor(props) {
        super(props)
        this.props = props
    }

    render() {
        return (
            <div className="aside bg-white" id="kt_aside">
                <div id="kt_aside_logo" className="aside-logo d-none d-lg-flex flex-column align-items-center flex-column-auto py-10">
                </div>
                <div id="kt_aside_nav" className="aside-nav d-flex flex-column align-items-center flex-column-fluid w-100 pt-5 pt-lg-0">
                    <div className="hover-scroll-y mb-10">
                        {this.props.children}
                    </div>
                </div>
                <div id="kt_aside_footer" className="aside-footer d-flex flex-column align-items-center flex-column-auto">
                </div>
            </div>
        )
    }
}

export default Navbar