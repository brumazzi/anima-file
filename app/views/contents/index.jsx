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
                            <h2>{this.props.t.titles.content.index}</h2>
                        </div>
                        <div className="column">
                            <a href="/u/content/new" className="button">{this.props.t.buttons.new} {this.props.t.models.names.content}</a>
                        </div>
                    </div>
                    <div className="row">
                        <div className="column">
                            <Table
                                legend={['Nome']}
                                fields={['name']}
                                data={this.props.contents}
                                link="/u/content/:_id"
                                linkIndex="0"
                                footer="Conteudo de rodapé"/>
                        </div>
                    </div>
                </content>
            </render>
        )
    }
}

export default Index