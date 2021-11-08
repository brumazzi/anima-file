import React from 'react'
import {Component} from 'react'

import Table from '../components/table'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArchive, faImage, faSignOutAlt} from '@fortawesome/free-solid-svg-icons'
import Paginate from '../components/paginate'
import Filter from './templates/filter'

class Index extends Component{
    constructor(props){
        super(props)
        this.props = props
        this.user = props.session.user
    }

    render() {
        let t = this.props.t.models.content
        let contents = this.props.contents
        let perPage = this.props.perPage || 10
        let pageIndex = this.props.pageIndex || 1
        for(let i=0; i<contents.length; i+=1){
            contents[i].typeString = this.props.t.models.content.types[contents[i].type]
        }

        return(
            <render>
                <content dest="#main">
                    <div className="row">
                        <div className="col-sm-12">
                            <h2>{this.props.t.titles.content.index}</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <Table
                                id="content-table"
                                legend={[t.name, t.type, t.chapters, t.publishDate, t.complete]}
                                fields={['name', 'typeString', 'chapters', 'publishDate.toLocaleString().slice(0,10)', 'complete ? "Sim" : "Não"']}
                                data={contents}
                                link="/u/content/:_id"
                                linkIndex="0"
                                footer="Conteudo de rodapé"/>
                        </div>
                    </div>
                </content>

                <content dest="#btnGroup">
                    <div className="d-flex">
                        <a href="/u/content/new" id="" className="btn btn-light-info btn-active-info ms-3">
                            <FontAwesomeIcon icon={faArchive} width="1.5rem" /> {this.props.t.buttons.new_a} {this.props.t.models.names.content}
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

export default Index