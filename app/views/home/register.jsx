import React from 'react'
import {Component} from 'react'

import Text from '../components/inputs/text'

class Index extends Component{
    constructor(props){
        super(props)
        this.props = props
    }

    render() {
        let user = this.props.user
        return(
            <render dest=".container">
                <content>
                    <form action="/register" method="post" className="">
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
                            <button>{this.props.t.home.formRegister.button}</button>
                            <a className="button button-outline" href="/login">{this.props.t.home.formRegister.toLogin}</a>
                        </div>
                    </form>
                </content>
            </render>
        )
    }
}

export default Index;