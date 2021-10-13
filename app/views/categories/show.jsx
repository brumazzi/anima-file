import { faPencilAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Component } from 'react'

class Show extends Component {
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
                    <div className="row">
                        <div className="column">
                            <h2>{this.props.t.titles.category.show}</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6 form-group">
                            <label htmlFor="">{this.props.t.models.category.name}</label>
                            <p className="form-control">{category.name}</p>
                        </div>
                        <div className="col-sm-3 form-group">
                            <label htmlFor="">{this.props.t.models.category.createDate}</label>
                            <p className="form-control">{(category.createDate) ? category.createDate.toLocaleString() : "--/--/--- --:--"}</p>
                        </div>
                        <div className="col-sm-3 form-group">
                            <label htmlFor="">{this.props.t.models.category.updateDate}</label>
                            <p className="form-control">{(category.updateDate) ? category.updateDate.toLocaleString() : "--/--/--- --:--"}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12 form-group">
                            <label htmlFor="">{this.props.t.models.category.description}</label>
                            <p className="form-control">{category.description}</p>
                        </div>
                    </div>
                </content>
                <content dest="#btnGroup">
                    <div className="d-flex">
                        <a href="/u/categories/" className="btn btn-active-secondary btn-light-secondary ms-3">
                            {this.props.t.buttons.back}
                        </a>
                        <a href={`/u/category/${category._id}/edit`} className="btn btn-active-warning btn-light-warning ms-3">
                            <FontAwesomeIcon icon={faPencilAlt} width="1.5rem" /> {this.props.t.buttons.edit}
                        </a>
                        <a href="/u/logout" id="logout" method="POST" className="btn btn-danger ms-3">
                            <FontAwesomeIcon icon={faSignOutAlt} width="1.5rem" /> {this.props.t.buttons.logout}
                        </a>
                    </div>
                </content>
            </render>
        )
    }
}

export default Show