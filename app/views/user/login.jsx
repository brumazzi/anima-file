import React from 'react'
import { Component } from 'react'

import Text from '../components/inputs/text'
import Header from './templates/header'
import NavBar from './templates/navbar'

class Login extends Component {
    constructor(props) {
        super(props)
        this.props = props
        this.user = props.session.user
    }

    render() {
        return (
            <render>
                <content dest="#main"></content>
                <Header t={this.props.t} user={this.user}></Header>
                {/* <listener action="click" callback="sendAlert" target="#h3" /> */}
            </render>
        )
    }
}

export default Login

