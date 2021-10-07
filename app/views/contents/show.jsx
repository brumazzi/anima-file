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
        let content = this.props.content
        let categories = []
        for (let i = 0; i < this.props.categories.length; i += 1) {
            let category = this.props.categories[i]
            categories.push(<span key={category._id} title={category.description} className="badge badge-primary mx-1">{category.name}</span>)
        }

        return (
            <render>
                <content dest="main">
                    <div className="row">
                        <div className="column">
                            <h2>{this.props.t.titles.content.show}</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-3">
                            <label className="">
                                {this.props.t.models.content.image} <label htmlFor="file-chooser" className="pointer"><FontAwesomeIcon icon={faUpload} width='1rem' /></label>
                            </label>
                            <img width="100%" src={`${content.image}`} alt="Fazer Upload" />
                        </div>
                        <div className="col-sm-9">
                            <div className="row">
                                <div className="col-sm-6 form-group">
                                    <label htmlFor="">{this.props.t.models.content.name}</label>
                                    <p className="form-control">{content.name}</p>
                                </div>
                                <div className="col-sm-3 form-group">
                                    <label htmlFor="">{this.props.t.models.content.visible}</label>
                                    <p className="form-control">{content.visible ? "Sim" : "Não"}</p>
                                </div>
                                <div className="col-sm-3 form-group">
                                    <label htmlFor="">{this.props.t.models.content.complete}</label>
                                    <p className="form-control">{content.complete ? "Sim" : "Não"}</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-3 form-group">
                                    <label htmlFor="">{this.props.t.models.content.type}</label>
                                    <p className="form-control">{this.props.t.models.content.types[content.type]}</p>
                                </div>
                                <div className="col-sm-3 form-group">
                                    <label htmlFor="">{this.props.t.models.content.author}</label>
                                    <p className="form-control">{content.author}</p>
                                </div>
                                <div className="col-sm-3 form-group">
                                    <label htmlFor="">{this.props.t.models.content.publishDate}</label>
                                    <p className="form-control">{(content.publishDate) ? content.publishDate.toLocaleString() : "--/--/--- --:--"}</p>
                                </div>
                                <div className="col-sm-3 form-group">
                                    <label htmlFor="">{this.props.t.models.content.chapters}</label>
                                    <p className="form-control">{content.chapters}</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-3 form-group">
                                    <label htmlFor="">{this.props.t.models.content.createDate}</label>
                                    <p className="form-control">{(content) ? content.createDate.toLocaleString() : "--/--/--- --:--"}</p>
                                </div>
                                <div className="col-sm-3 form-group">
                                    <label htmlFor="">{this.props.t.models.content.updateDate}</label>
                                    <p className="form-control">{(content) ? content.updateDate.toLocaleString() : "--/--/--- --:--"}</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-6 form-group">
                                    <label htmlFor="">{this.props.t.models.content.description}</label>
                                    <p className="form-control">{content.description}</p>
                                </div>
                                <div className="col-sm-6 form-group">
                                    <label htmlFor="">{this.props.t.models.content.categories}</label>
                                    <p className="form-control">{categories}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </content>
                <content dest="#btnGroup">
                    <div className="d-flex">
                        <a href="/u/contents/" className="btn btn-active-secondary btn-light-secondary ms-3">
                            {this.props.t.buttons.back}
                        </a>
                        <a href={`/u/content/${content._id}/edit`} className="btn btn-active-warning btn-light-warning ms-3">
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