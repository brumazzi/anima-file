import React from 'react'
import {Component} from 'react'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArchive, faIdCard, faSignOutAlt, faTachometerAlt} from '@fortawesome/free-solid-svg-icons'

class Navbar extends Component{
    constructor(props){
        super(props)
        this.props = props
    }

    render() {
        return(
            <nav className="navbar">
                <ul className="nav-list">
                    <li className="nav-item">
                        <a href="/u/dashboard" className="nav-link button">
                            <FontAwesomeIcon icon={faTachometerAlt} width="1.5rem"/> {this.props.t.dashboard}
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="/u/contents" className="nav-link button">
                            <FontAwesomeIcon icon={faArchive} width="1.5rem"/> {this.props.t.contents}
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="/u/categories" className="nav-link button">
                            <FontAwesomeIcon icon={faArchive} width="1.5rem"/> {this.props.t.categories}
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="/u/acount" className="nav-link button">
                            <FontAwesomeIcon icon={faIdCard} width="1.5rem"/> {this.props.t.acount}
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="/u/logout" id="logout" method="POST" className="nav-link button">
                            <FontAwesomeIcon icon={faSignOutAlt} width="1.5rem"/> {this.props.t.logout}
                        </a>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default Navbar