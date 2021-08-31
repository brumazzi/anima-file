import React from 'react'
import { Component } from 'react'

import Header from '../components/header'
import Footer from '../components/footer'
import Render from '../templates/render'
import Navbar from './navbar'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'

class Index extends Component {
    constructor(props) {
        super(props)
        this.props = props
        this.user = props.session.user
    }

    render() {
        return (
            <render dest="#body">
                <content>
                    <Header>
                        <h1>Lorem</h1>
                        <p><strong>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus, modi ex, sequi dicta autem porro aliquam, omnis eos quis corrupti accusantium quasi quia molestias aut laborum vel rem id veritatis.</strong></p>
                    </Header>
                    <main>
                        <div className="container">
                            <div className="row">
                                <div className="column column-25">
                                    <Navbar t={this.props.t.user.navbar}></Navbar>
                                </div>
                                <div className="column column-75">
                                    <div id="container">
                                        <div className="row">
                                            <div className="column"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                    <Footer>Lorem</Footer>
                </content>
            </render>
        )
    }
}

export default Index