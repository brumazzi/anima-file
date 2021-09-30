import React from 'react'
import { Component } from 'react'

import Header from '../components/header'
import Footer from '../components/footer'
import Main from '../components/main'
import Render from '../templates/render'
import Navbar from '../components/navbar'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArchive, faIdCard, faImage, faSignOutAlt, faTachometerAlt } from '@fortawesome/free-solid-svg-icons'

class Index extends Component {
    constructor(props) {
        super(props)
        this.props = props
        this.user = props.session.user
    }

    render() {
        return (
            <render>
                <content dest="#body">
                    <Navbar>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2">
                                <a href="/u/dashboard" className="nav-link btn btn-custom btn-icon" data-bs-toggle="tooltip" data-bs-placement="top" title={this.props.t.user.navbar.dashboard}>
                                    <FontAwesomeIcon icon={faTachometerAlt} width="1.5rem" />
                                </a>
                            </li>
                            <li className="nav-item mb-2">
                                <a href="/u/banners" className="nav-link btn btn-custom btn-icon" data-bs-toggle="tooltip" data-bs-placement="top" title={this.props.t.user.navbar.banners}>
                                    <FontAwesomeIcon icon={faImage} width="1.5rem" />
                                </a>
                            </li>
                            <li className="nav-item mb-2">
                                <a href="/u/contents" className="nav-link btn btn-custom btn-icon" data-bs-toggle="tooltip" data-bs-placement="top" title={this.props.t.user.navbar.contents}>
                                    <FontAwesomeIcon icon={faArchive} width="1.5rem" />
                                </a>
                            </li>
                            <li className="nav-item mb-2">
                                <a href="/u/categories" className="nav-link btn btn-custom btn-icon" data-bs-toggle="tooltip" data-bs-placement="top" title={this.props.t.user.navbar.categories}>
                                    <FontAwesomeIcon icon={faArchive} width="1.5rem" />
                                </a>
                            </li>
                            <li className="nav-item mb-2">
                                <a href="/u/account" className="nav-link btn btn-custom btn-icon" data-bs-toggle="tooltip" data-bs-placement="top" title={this.props.t.user.navbar.account}>
                                    <FontAwesomeIcon icon={faIdCard} width="1.5rem" />
                                </a>
                            </li>
                        </ul>
                    </Navbar>
                    <section id="kt_wrapper" className="wrapper d-flex flex-column flex-row-fluid">
                        <Header>
                            <div className="page-title d-flex flex-column align-items-start justify-content-center flex-wrap me-lg-2 pb-5 pb-lg-0" data-kt-swapper="true" data-kt-swapper-mode="prepend" data-kt-swapper-parent="{default: '#kt_content_container', lg: '#kt_header_container'}">
                                <h1 className="text-dark fw-bold my-0 fs-2">
                                    <a href="/home">{this.props.t.text.title}</a>
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
                            <div id="btnGroup" className="d-flex flex-shrink-0">
                                <div className="d-flex ms-3">
                                    <a href="/u/dashboard" id="" method="GET" className="btn bg-body btn-color-gray-600 btn-active-info ms-3">
                                        <FontAwesomeIcon icon={faTachometerAlt} width="1.5rem" /> {this.props.t.user.navbar.dashboard}
                                    </a>
                                    <a href="/u/logout" id="logout" method="POST" className="btn btn-danger ms-3">
                                        <FontAwesomeIcon icon={faSignOutAlt} width="1.5rem" /> {this.props.t.buttons.logout}
                                    </a>
                                </div>
                            </div>
                        </Header>
                        <Main>
                        </Main>
                        <Footer>
                            <div className="text-dark order-2 order-md-1">
                                <span className="text-gray-400 fw-bold me-1">Created by</span>
                            </div>
                            <ul className="menu menu-gray-600 menu-hover-primary fw-bold order-1">
                                <li className="menu-item">
                                    <a href="" target="_blank" className="menu-link px-2">About</a>
                                </li>
                                <li className="menu-item">
                                    <a href="" target="_blank" className="menu-link px-2">Support</a>
                                </li>
                                <li className="menu-item">
                                    <a href="" target="_blank" className="menu-link px-2">Purchase</a>
                                </li>
                            </ul>
                        </Footer>
                    </section>
                </content>
            </render>
        )
    }
}

export default Index