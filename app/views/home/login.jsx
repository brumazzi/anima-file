import React from 'react'
import {Component} from 'react'

import Text from '../components/inputs/text'

class FormLogin extends Component{
    constructor(props){
        super(props)
        this.props = props
    }

    render() {
        return(
            <render dest=".container">
                <content>
                    <form action="/login" method="post" className="">
                        <h3 id="h3">{this.props.t.home.formLogin.title}</h3>
                        <Text type="text" id="login" name="login" required="required">
                            {this.props.t.home.formLogin.login}
                        </Text>
                        <Text type="password" id="password" name="password" required="required">
                            {this.props.t.home.formLogin.password}
                        </Text>
                        <div className="form-group">
                            <button>{this.props.t.home.formLogin.button}</button>
                            <a className="button button-outline" href="/register">{this.props.t.home.formLogin.register}</a>
                        </div>
                    </form>
                </content>
                {/* <listener action="click" callback="sendAlert" target="#h3" /> */}
            </render>
        )
    }
}

export default FormLogin

