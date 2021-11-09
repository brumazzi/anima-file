import React from 'react'
import { Component } from 'react'

import Table from '../components/table'
import Render from '../templates/render'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImage, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'

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
                        <div className="col-auto">
                            <h2>{this.props.t.titles.banner.index}</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <Table
                                legend={['Lorem', 'Lorem']}
                                fields={['title', 'description']}
                                data={this.props.banners}
                                link="/u/banner/:_id"
                                linkIndex="0"
                                footer="Lorem ipsum" />
                        </div>
                    </div>
                </content>
                <content dest="#btnGroup">
                    <div className="d-flex">
                        <a href="/u/banner/new" id="" className="btn btn-light-info btn-active-info ms-3">
                            <FontAwesomeIcon icon={faImage} width="1.5rem" /> {this.props.t.buttons.new} {this.props.t.models.names.banner}
                        </a>
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

export default Index