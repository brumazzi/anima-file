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
        for(let i=0; i<this.props.categories.length; i+=1){
            let category = this.props.categories[i]
            categories.push( <span key={category._id} title={category.description} className="badge">{category.name}</span> )
        }

        return (
            <render dest="#container">
                <content>
                    <div className="row">
                        <div className="column">
                            <h2>{this.props.t.titles.content.show}</h2>
                        </div>
                        <div className="column">
                            <a className="button button-outline" href={`/u/contents`}>{this.props.t.buttons.back}</a>
                            <a className="button" href={`/u/content/${content._id}/edit`}>{this.props.t.buttons.edit}</a>
                        </div>
                    </div>
                    <div className="row">
                            <div className="column column-50">
                                <label htmlFor="">{this.props.t.models.content.name}</label>
                                <p className="input">{content.name}</p>
                            </div>
                            <div className="column column-25">
                                <label htmlFor="">{this.props.t.models.content.visible}</label>
                                <p className="input">{content.visible ? "Sim" : "Não"}</p>
                            </div>
                            <div className="column column-25">
                                <label htmlFor="">{this.props.t.models.content.complete}</label>
                                <p className="input">{content.complete ? "Sim" : "Não"}</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="column column-25">
                                <label htmlFor="">{this.props.t.models.content.type}</label>
                                <p className="input">{this.props.t.models.content.types[content.type]}</p>
                            </div>
                            <div className="column column-25">
                                <label htmlFor="">{this.props.t.models.content.author}</label>
                                <p className="input">{content.author}</p>
                            </div>
                            <div className="column column-25">
                                <label htmlFor="">{this.props.t.models.content.publishDate}</label>
                                <p className="input">{(content.publishDate) ? content.publishDate.toLocaleString() : "--/--/--- --:--"}</p>
                            </div>
                            <div className="column column-25">
                                <label htmlFor="">{this.props.t.models.content.chapters}</label>
                                <p className="input">{content.chapters}</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="column column-25">
                                <label htmlFor="">{this.props.t.models.content.createDate}</label>
                                <p>{(content.createDate) ? content.createDate.toLocaleString() : "--/--/--- --:--"}</p>
                            </div>
                            <div className="column column-25">
                                <label htmlFor="">{this.props.t.models.content.updateDate}</label>
                                <p>{(content.updateDate) ? content.updateDate.toLocaleString() : "--/--/--- --:--"}</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="column column-100">
                                <label htmlFor="">{this.props.t.models.content.categories}</label>
                                <p className="input">{categories}</p>
                            </div>
                            <div className="column column-100">
                                <label htmlFor="">{this.props.t.models.content.description}</label>
                                <p className="input">{content.description}</p>
                            </div>
                        </div>
                </content>
            </render>
        )
    }
}

export default Show