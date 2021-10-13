import React from 'react'
import { Component } from 'react'

import NavBar from './templates/navbar'
import Header from './templates/header'

class Index extends Component {
    constructor(props) {
        super(props)
        this.props = props
        this.user = props.session.user
    }

    render() {
        return (
            <render>
                <content dest="#main">
                    <div className="row">
                        <div className="col">
                            <div className="groupbox">
                                <span className="groupbox-item">0</span>
                                <span className="groupbox-item">1</span>
                                <span className="groupbox-item">2</span>
                            </div>
                        </div>
                    </div>
                </content>
                <NavBar t={this.props.t} user={this.user}></NavBar>
                <Header t={this.props.t} user={this.user}>
                </Header>
            </render>
        )
    }
}

export default Index