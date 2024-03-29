import React from 'react'
import { Component } from 'react'

import NavBar from './templates/navbar'
import Header from './templates/header'
import ProgressCard from '../components/progressCard'

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
                    <div className="row justify-content-sm-center">
                        <div className="col-sm-3">
                        </div>
                    </div>
                </content>
                <NavBar t={this.props.t} user={this.user}></NavBar>
                <Header t={this.props.t} user={this.user}></Header>
                <content dest=".pageTitle">
                    /{this.props.t.titles.dashboard.index}
                </content>
            </render>
        )
    }
}

export default Index