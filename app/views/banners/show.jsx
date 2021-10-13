import { faAngleLeft, faEye, faPen, faPencilAlt, faSave, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Component } from 'react'
import Checkbox from '../components/inputs/checkbox'
import Text from '../components/inputs/text'

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
                <content dest="#main">
                    <div className="row">
                        <div className="col">
                            <h2>{this.props.t.titles.banner.show}</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-3 form-group">
                            <label htmlFor="">{this.props.t.models.banner.image}</label>
                            <p className="">
                                <img width="100%" src={`${banner.image}`} alt="" />
                            </p>
                        </div>
                        <div className="col-sm-9">
                            <div className="row">
                                <div className="col-sm-6 form-group">
                                    <label htmlFor="">{this.props.t.models.banner.title}</label>
                                    <p className="form-control">{banner.title}</p>
                                </div>
                                <div className="col-sm-6 form-group">
                                    <form id="changeStatus" action={`/u/banner/${banner._id}`} method='put' className="form">
                                        <Checkbox checked={banner.active} disabled={true}>{this.props.t.models.banner.active}</Checkbox>
                                    </form>
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
                <listener action="change" callback="(evt)=>{document.getElementById('changeStatus').submit()}" target="#banner-active" />
            </render>
        )
    }
}

export default Show