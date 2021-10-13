import { faSearch, faSignOutAlt, faTachometerAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Component } from 'react'

class Header extends Component {
    constructor(props) {
        super(props)
        this.props = props
        this.user = this.props.user
    }

    render() {
        let loginButtons
        if (!this.user) {
            loginButtons = <div className="d-flex flex-shrink-0">
                <div className="d-flex ms-3">
                    <a href="/register" className="btn bg-body btn-color-gray-600 btn-active-info" tooltip={this.props.t.buttons.register} data-bs-toggle="modal" data-bs-target="#kt_modal_invite_friends">{this.props.t.buttons.register}</a>
                </div>
                <div className="d-flex ms-3">
                    <a href="/login" className="btn btn-primary" tooltip={this.props.t.buttons.login} data-bs-toggle="modal" data-bs-target="#kt_modal_create_app" id="kt_toolbar_primary_button">{this.props.t.buttons.login}</a>
                </div>
            </div>
        } else {
            loginButtons = <div className="d-flex flex-shrink-0">
                <div className="d-flex ms-3">
                    <a href="/u/dashboard" id="" method="GET" className="btn bg-body btn-color-gray-600 btn-active-info ms-3">
                        <FontAwesomeIcon icon={faTachometerAlt} width="1.5rem" /> {this.props.t.user.navbar.dashboard}
                    </a>
                    <a href="/u/logout" id="logout" method="POST" className="btn btn-danger ms-3">
                        <FontAwesomeIcon icon={faSignOutAlt} width="1.5rem" /> {this.props.t.buttons.logout}
                    </a>
                </div>
            </div>
        }

        return (
            <content dest="#kt_header_container">
                <div className="page-title d-flex flex-column align-items-start justify-content-center flex-wrap me-lg-2 pb-5 pb-lg-0" data-kt-swapper="true" data-kt-swapper-mode="prepend" data-kt-swapper-parent="{default: '#kt_content_container', lg: '#kt_header_container'}">
                    <h1 className="text-dark fw-bold my-0 fs-2">
                        <a href="/u/dashboard">{this.props.t.text.title}</a>
                    </h1>
                </div>
                <div className="d-flex d-lg-none align-items-center ms-n2 me-2">
                    <div className="btn btn-icon btn-active-icon-primary" id="kt_aside_toggle">
                        <span className="svg-icon svg-icon-2x">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M21 7H3C2.4 7 2 6.6 2 6V4C2 3.4 2.4 3 3 3H21C21.6 3 22 3.4 22 4V6C22 6.6 21.6 7 21 7Z" fill="black"></path>
                                <path opacity="0.3" d="M21 14H3C2.4 14 2 13.6 2 13V11C2 10.4 2.4 10 3 10H21C21.6 10 22 10.4 22 11V13C22 13.6 21.6 14 21 14ZM22 20V18C22 17.4 21.6 17 21 17H3C2.4 17 2 17.4 2 18V20C2 20.6 2.4 21 3 21H21C21.6 21 22 20.6 22 20Z" fill="black"></path>
                            </svg>
                        </span>
                    </div>
                </div>
                <form className="text-dark d-flex flex-row align-items-center">
                    <div className="input-group input-group-sm">
                        <input type="search" className="form-control" placeholder={this.props.t.home.searchBar}></input>
                        <span className="input-group-text">
                            <button className="btn btn-active-primary btn-light-primary btn-sm">
                                <FontAwesomeIcon icon={faSearch} width="1.0rem"></FontAwesomeIcon>
                            </button>
                        </span>
                    </div>
                </form>
                {loginButtons}

            </content>
        )
    }
}

export default Header

