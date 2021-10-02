import React from 'react'
import { Component } from 'react'

import Header from '../components/header'
import Footer from '../components/footer'
import Main from '../components/main'
import Slider from '../components/slider'
import Render from '../templates/render'
import Navbar from '../components/navbar'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faSignOutAlt, faTachometerAlt } from '@fortawesome/free-solid-svg-icons'

class Index extends Component {
    constructor(props) {
        super(props)
        this.props = props
        this.user = this.props.session.user
    }

    render() {
        let loginButtons
        if (!this.user) {
            loginButtons = <div className="d-flex flex-shrink-0">
                <div className="d-flex ms-3">
                    <a href="/register" className="btn bg-body btn-color-gray-600 btn-active-info" tooltip="{this.props.t.buttons.register}" data-bs-toggle="modal" data-bs-target="#kt_modal_invite_friends">{this.props.t.buttons.register}</a>
                </div>
                <div className="d-flex ms-3">
                    <a href="/login" className="btn btn-primary" tooltip="{this.props.t.buttons.login}" data-bs-toggle="modal" data-bs-target="#kt_modal_create_app" id="kt_toolbar_primary_button">{this.props.t.buttons.login}</a>
                </div>
            </div>
        } else {
            loginButtons = <div className="d-flex flex-shrink-0">
                <div className="d-flex ms-3">
                    <a href="/u/" id="" method="GET" className="btn bg-body btn-color-gray-600 btn-active-info ms-3">
                        <FontAwesomeIcon icon={faTachometerAlt} width="1.5rem" /> {this.props.t.user.navbar.dashboard}
                    </a>
                    <a href="/u/logout" id="logout" method="POST" className="btn btn-danger ms-3">
                        <FontAwesomeIcon icon={faSignOutAlt} width="1.5rem" /> {this.props.t.buttons.logout}
                    </a>
                </div>
            </div>
        }
        return (
            <render>
                <content dest="#body">
                    <Navbar>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><a className="nav-link btn btn-custom" href="/c/anime"><span>{this.props.t.home.menu.animes}</span></a></li>
                            <li className="nav-item mb-2"><a className="nav-link btn btn-custom" href="/c/manga"><span>{this.props.t.home.menu.mangas}</span></a></li>
                            <li className="nav-item mb-2"><a className="nav-link btn btn-custom" href="/c/serie"><span>{this.props.t.home.menu.series}</span></a></li>
                            <li className="nav-item mb-2"><a className="nav-link btn btn-custom" href="/c/film"><span>{this.props.t.home.menu.films}</span></a></li>
                            <li className="nav-item mb-2"><a className="nav-link btn btn-custom" href="/c/dorama"><span>{this.props.t.home.menu.doramas}</span></a></li>
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
                            <form className="text-dark d-flex flex-row align-items-center">
                                <div className="input-group input-group-sm">
                                    <input data-container='UPLOAD_IMAGE' type="file" className="form-control" placeholder={this.props.t.home.searchBar}></input>
                                    <input id="UPLOAD_IMAGE"/>
                                    <span className="input-group-text">
                                        <button className="btn btn-active-primary btn-light-primary btn-sm">
                                            <FontAwesomeIcon icon={faSearch} width="1.0rem"></FontAwesomeIcon>
                                        </button>
                                    </span>
                                </div>
                            </form>
                            {loginButtons}
                        </Header>
                        <Main>
                            <Slider>
                                <span>
                                    <h2>Novidades</h2>
                                </span>
                                <span>
                                    <h2>Últimas historias</h2>
                                </span>
                                <span>
                                    <h2>Mais Requeridos</h2>
                                </span>
                            </Slider>
                        </Main>
                        <Footer>
                            <div className="text-dark order-2 order-md-1">
                                <span className="text-gray-400 fw-bold me-1">Created by</span>
                            </div>
                            <ul className="menu menu-gray-600 menu-hover-primary fw-bold order-1">
                                <li className="menu-item">
                                    <a href="https://keenthemes.com" target="_blank" className="menu-link px-2">About</a>
                                </li>
                                <li className="menu-item">
                                    <a href="https://keenthemes.com/support" target="_blank" className="menu-link px-2">Support</a>
                                </li>
                                <li className="menu-item">
                                    <a href="https://keenthemes.com/products/seven-html-pro" target="_blank" className="menu-link px-2">Purchase</a>
                                </li>
                            </ul>
                        </Footer>
                    </section>
                </content>
                {/* <Render templateUrl="/login" /> */}
            </render>
        )
    }
}

export default Index