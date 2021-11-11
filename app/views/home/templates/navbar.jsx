import React from 'react'
import { Component } from 'react'

class NavBar extends Component {
    constructor(props) {
        super(props)
        this.props = props
    }

    render() {
        return (
            <content dest="#navbar">
                <li className="nav-item mb-2">
                    <a className="nav-link btn btn-custom" href="/home"><span>{this.props.t.home.menu.home}</span></a>
                </li>
                <li className="nav-item mb-2">
                    <a className="nav-link btn btn-custom" href="/c/anime"><span>{this.props.t.home.menu.animes}</span></a>
                </li>
                <li className="nav-item mb-2">
                    <a className="nav-link btn btn-custom" href="/c/manga"><span>{this.props.t.home.menu.mangas}</span></a>
                </li>
                <li className="nav-item mb-2">
                    <a className="nav-link btn btn-custom" href="/c/serie"><span>{this.props.t.home.menu.series}</span></a>
                </li>
                <li className="nav-item mb-2">
                    <a className="nav-link btn btn-custom" href="/c/film"><span>{this.props.t.home.menu.films}</span></a>
                </li>
                <li className="nav-item mb-2">
                    <a className="nav-link btn btn-custom" href="/c/dorama"><span>{this.props.t.home.menu.doramas}</span></a>
                </li>
            </content>
        )
    }
}

export default NavBar

