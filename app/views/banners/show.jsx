import { faAngleLeft, faEye, faPen, faPencilAlt, faSave, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
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
        let banner = this.props.banner
        return (
            <render>
                <content dest="main">
                    <div className="row">
                        <div className="col">
                            <h2>{this.props.t.titles.banner.show}</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-3 form-group">
                            <label htmlFor="">{this.props.t.models.banner.image}</label>
                            <p className="form-control">{banner.image}</p>
                        </div>
                        <div className="col-sm-9">
                            <div className="row">
                                <div className="col-sm-6 form-group">
                                    <label htmlFor="">{this.props.t.models.banner.title}</label>
                                    <p className="form-control">{banner.title}</p>
                                </div>
                                <div className="col-sm-6 form-group">
                                    <label htmlFor="">{this.props.t.models.banner.active}</label>
                                    <p className="form-control">{banner.active ? this.props.t.text.yes : this.props.t.text.no}</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-6 form-group">
                                    <label htmlFor="">{this.props.t.models.banner.createDate}</label>
                                    <p className="form-control">{(banner.createDate) ? banner.createDate.toLocaleString() : "--/--/--- --:--"}</p>
                                </div>
                                <div className="col-sm-6 form-group">
                                    <label htmlFor="">{this.props.t.models.banner.updateDate}</label>
                                    <p className="form-control">{(banner.updateDate) ? banner.updateDate.toLocaleString() : "--/--/--- --:--"}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12 form-group">
                            <label htmlFor="">{this.props.t.models.banner.description}</label>
                            <p className="form-control">{banner.description}</p>
                        </div>
                    </div>
                </content>
                <content dest="#btnGroup">
                    <div className="d-flex">
                        <a href="/u/banners/" className="btn btn-active-secondary btn-light-secondary ms-3">
                            {this.props.t.buttons.back}
                        </a>
                        <a href={`/u/banner/${banner._id}/edit`} className="btn btn-active-warning btn-light-warning ms-3">
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