import { faArchive, faIdCard, faImage, faTachometerAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Component } from 'react'

class NavBar extends Component {
    constructor(props) {
        super(props)
        this.props = props
        this.user = props.user
    }

    render() {
        let adminMenu = [];
        if (this.user.is_admin) {
            adminMenu = [
                <li key='1' className="nav-item mb-2">
                    <a href="/u/banners" className="nav-link btn btn-custom btn-icon" data-bs-toggle="tooltip" data-bs-placement="top" title={this.props.t.user.navbar.banners}>
                        <FontAwesomeIcon icon={faImage} width="1.5rem" />
                    </a>
                </li>,
                <li key='2' className="nav-item mb-2">
                    <a href="/u/contents" className="nav-link btn btn-custom btn-icon" data-bs-toggle="tooltip" data-bs-placement="top" title={this.props.t.user.navbar.contents}>
                        <FontAwesomeIcon icon={faArchive} width="1.5rem" />
                    </a>
                </li>,
                <li key='3' className="nav-item mb-2">
                    <a href="/u/categories" className="nav-link btn btn-custom btn-icon" data-bs-toggle="tooltip" data-bs-placement="top" title={this.props.t.user.navbar.categories}>
                        <FontAwesomeIcon icon={faArchive} width="1.5rem" />
                    </a>
                </li>
            ]
        }

        return (
            <content dest="#navbar">
                <li className="nav-item mb-2">
                    <a href="/u/dashboard" className="nav-link btn btn-custom btn-icon" data-bs-toggle="tooltip" data-bs-placement="top" title={this.props.t.user.navbar.dashboard}>
                        <FontAwesomeIcon icon={faTachometerAlt} width="1.5rem" />
                    </a>
                </li>
                {adminMenu}
                <li className="nav-item mb-2">
                    <a href="/u/account" className="nav-link btn btn-custom btn-icon" data-bs-toggle="tooltip" data-bs-placement="top" title={this.props.t.user.navbar.account}>
                        <FontAwesomeIcon icon={faIdCard} width="1.5rem" />
                    </a>
                </li>
            </content>
        )
    }
}

export default NavBar

