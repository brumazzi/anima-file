import React from 'react'
import { Component } from 'react'

import Text from '../components/inputs/text'
import NavBar from './templates/navbar'

class Register extends Component {
    constructor(props) {
        super(props)
        this.props = props
    }

    render() {
        let user = this.props.user
        return (
            <render>
                <content dest="#main">
                    <div className="d-flex row justify-content-center">
                        <div className="col-sm-5">
                            <form action="/register" method="post" className="form row">
                                <h3>{this.props.t.home.formRegister.title}</h3>
                                <Text type="text" id="login" name="user.login" value={(user) ? user.login : ""}>
                                    {this.props.t.models.user.login}
                                </Text>
                                <Text type="password" name="user.password" id="password">
                                    {this.props.t.models.user.password}
                                </Text>
                                <Text type="password" name="user.passwordConfirmation" id="passwordConfirmation">
                                    {this.props.t.models.user.passwordConfirmation}
                                </Text>
                                <Text type="email" name="user.email" id="email" value={(user) ? user.info.name : ""}>
                                    {this.props.t.models.user.email}
                                </Text>
                                <Text type="text" name="user.info.name" id="name" value={(user) ? user.info.name : ""}>
                                    {this.props.t.models.user.info.name}
                                </Text>
                                <Text type="date" name="user.info.birth" id="birth" value={(user) ? user.info.birth : ""}>
                                    {this.props.t.models.user.info.birth}
                                </Text>
                                <div className="form-group">
                                    <button className="btn btn-primary">{this.props.t.home.formRegister.button}</button>
                                    <a className="btn btn-secondary ms-3" href="/login">{this.props.t.home.formRegister.toLogin}</a>
                                </div>
                            </form>
                        </div>
                    </div>
                </content>
                {/* <NavBar t={this.props.t}></NavBar> */}
            </render>
        )
    }
}

export default Register;