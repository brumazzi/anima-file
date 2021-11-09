import { faSave, faSignOutAlt, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Component } from 'react'

import Form from './templates/form'

class New extends Component {
    constructor(props) {
        super(props)
        this.props = props
        this.user = props.session.user
    }

    render() {
        let category = this.props.category
        return (
            <render>
                <content dest="#main">
                    <Form t={this.props.t} user={this.props.user} category={category} url="/u/category/" method="POST" title={this.props.t.titles.category.new}/>
                </content>
                <content dest="#btnGroup">
                    <div className="d-flex">
                        <a className="btn btn-light-danger btn-active-danger ms-3" href="/u/categories/">
                            <FontAwesomeIcon icon={faTimes} width="1.5rem" /> {this.props.t.buttons.cancel}
                        </a>
                        <label htmlFor="form-submit" className="btn btn-light-primary btn-active-primary ms-3">
                            <FontAwesomeIcon icon={faSave} width="1.5rem" /> {this.props.t.buttons.save}
                        </label>
                        <a href="/u/logout" id="logout" method="POST" className="btn btn-danger ms-3">
                            <FontAwesomeIcon icon={faSignOutAlt} width="1.5rem" /> {this.props.t.buttons.logout}
                        </a>
                    </div>
                </content>
                <content dest=".pageTitle">
                    /Lorem
                </content>
            </render>
        )
    }
}

export default New