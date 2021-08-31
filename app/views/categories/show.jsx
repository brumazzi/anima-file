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
            <render dest="#container">
                <content>
                    <div className="row">
                        <div className="column">
                            <h2>{this.props.t.titles.category.show}</h2>
                        </div>
                        <div className="column">
                            <a className="button button-outline" href={`/u/categories`}>{this.props.t.buttons.back}</a>
                            <a className="button" href={`/u/category/${category._id}/edit`}>{this.props.t.buttons.edit}</a>
                        </div>
                    </div>
                    <div className="row">
                        <div className="column column-50">
                            <label htmlFor="">{this.props.t.models.category.name}</label>
                            <p>{category.name}</p>
                        </div>
                        <div className="column column-25">
                            <label htmlFor="">{this.props.t.models.category.createDate}</label>
                            <p>{(category.createDate) ? category.createDate.toLocaleString() : "--/--/--- --:--"}</p>
                        </div>
                        <div className="column column-25">
                            <label htmlFor="">{this.props.t.models.category.updateDate}</label>
                            <p>{(category.updateDate) ? category.updateDate.toLocaleString() : "--/--/--- --:--"}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="column column-100">
                            <label htmlFor="">{this.props.t.models.category.description}</label>
                            <p>{category.description}</p>
                        </div>
                    </div>
                </content>
            </render>
        )
    }
}

export default Show