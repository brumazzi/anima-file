import React from 'react'
import { Component } from 'react'

import Slider from '../components/slider'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faSignOutAlt, faTachometerAlt } from '@fortawesome/free-solid-svg-icons'
import NavBar from './templates/navbar'
import Header from './templates/header'
import Text from '../components/inputs/text'

class Index extends Component {
    constructor(props) {
        super(props)
        this.props = props
        this.user = this.props.session.user
    }

    render() {
        return (
            <render>
                <content dest="#main">
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
                </content>
                <NavBar t={this.props.t}></NavBar>
                <Header t={this.props.t} user={this.user}>
                </Header>
                {/* <Render templateUrl="/login" /> */}
            </render>
        )
    }
}

export default Index