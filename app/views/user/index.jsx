import React from 'react'
import { Component } from 'react'

import Header from '../components/header'
import Footer from '../components/footer'
import Main from '../components/main'
import Render from '../templates/render'
import Navbar from '../components/navbar'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArchive, faClipboardList, faIdCard, faImage, faSearch, faSignOutAlt, faTachometerAlt } from '@fortawesome/free-solid-svg-icons'
import Text from '../components/inputs/text'

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
                </content>
            </render>
        )
    }
}

export default Index