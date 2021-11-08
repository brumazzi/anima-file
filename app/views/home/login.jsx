import React from 'react'
import { Component } from 'react'

import Text from '../components/inputs/text'
import NavBar from './templates/navbar'

class Login extends Component {
    constructor(props) {
        super(props)
        this.props = props
    }

    render() {
        return (
            <render>
                <content dest="#main">
                    <div className="d-flex row justify-content-center">
                        <div className="col-sm-5">
                            <form action="/login" method="post" className="form row">
                                <h3 id="h3">{this.props.t.home.formLogin.title}</h3>
                                <Text type="text" id="login" name="login" required="required">
                                    {this.props.t.home.formLogin.login}
                                </Text>
                                <Text type="password" id="password" name="password" required="required">
                                    {this.props.t.home.formLogin.password}
                                </Text>
                                <div className="form-group col-sm-12">
                                    <button className="btn btn-primary">{this.props.t.home.formLogin.button}</button>
                                    <a className="btn btn-secondary ms-3" href="/register">{this.props.t.home.formLogin.register}</a>
                                </div>
                            </form>
                        </div>
                    </div>
                </content>
                {/* <NavBar t={this.props.t}></NavBar> */}
                {/* <listener action="click" callback="sendAlert" target="#h3" /> */}
            </render>
        )
    }
}

export default Login

