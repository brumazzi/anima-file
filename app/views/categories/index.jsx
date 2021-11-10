import React from 'react'
import {Component} from 'react'

import Table from '../components/table'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArchive, faImage, faSignOutAlt} from '@fortawesome/free-solid-svg-icons'

class Index extends Component{
    constructor(props){
        super(props)
        this.props = props
        this.user = props.session.user
    }

    render() {
        let t = this.props.t.models.category
        return(
            <render>
                <content dest="#main">
                    <div className="row">
                        <div className="column">
                            <Table
                                legend={[t.name, t.description]}
                                fields={['name', 'description']}
                                data={this.props.categories}
                                link="/u/category/:_id"
                                linkIndex="0"
                                paginate={true}
                                filterField="name"
                                pageParams={{
                                    perPage: this.props.perPage,
                                    pageIndex: this.props.pageIndex,
                                    actionURL: '/u/categories/'
                                }}
                                t={this.props.t}
                                footer="Lorem ipsum"/>
                        </div>
                    </div>
                </content>
                <content dest="#btnGroup">
                    <div className="d-flex">
                        <a href="/u/category/new" id="" className="btn btn-light-info btn-active-info ms-3">
                            <FontAwesomeIcon icon={faArchive} width="1.5rem" /> {this.props.t.buttons.new_a} {this.props.t.models.names.category}
                        </a>
                        <a href="/u/logout" id="logout" method="POST" className="btn btn-danger ms-3">
                            <FontAwesomeIcon icon={faSignOutAlt} width="1.5rem" /> {this.props.t.buttons.logout}
                        </a>
                    </div>
                </content>
                <content dest=".pageTitle">
                    /{this.props.t.titles.category.index}
                </content>
            </render>
        )
    }
}

export default Index