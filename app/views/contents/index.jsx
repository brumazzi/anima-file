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
        let t = this.props.t.models.content
        let contents = this.props.contents
        for(let i=0; i<contents.length; i+=1){
            contents[i].typeString = this.props.t.models.content.types[contents[i].type]
        }

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
                                legend={[t.name, t.type, t.chapters, t.publishDate, t.complete]}
                                fields={['name', 'typeString', 'chapters', 'publishDate.toLocaleString().slice(0,10)', 'complete ? "Sim" : "Não"']}
                                data={contents}
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