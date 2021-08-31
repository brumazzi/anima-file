import React from 'react'
import {Component} from 'react'

import Table from '../components/table'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSignOutAlt} from '@fortawesome/free-solid-svg-icons'

class Index extends Component{
    constructor(props){
        super(props)
        this.props = props
        this.user = props.session.user
    }

    render() {
        return(
            <render dest="#container">
                <content>
                    <div className="row">
                        <div className="column">
                            <h2>{this.props.t.titles.category.index}</h2>
                        </div>
                        <div className="column">
                            <a href="/u/category/new" className="button">{this.props.t.buttons.new_a} {this.props.t.models.names.category}</a>
                        </div>
                    </div>
                    <div className="row">
                        <div className="column">
                            <Table
                                legend={['Nome', 'Descrição']}
                                fields={['name', 'description']}
                                data={this.props.categories}
                                link="/u/category/:_id"
                                linkIndex="0"
                                footer="Lorem ipsum"/>
                        </div>
                    </div>
                </content>
            </render>
        )
    }
}

export default Index