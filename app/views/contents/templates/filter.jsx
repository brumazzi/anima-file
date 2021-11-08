import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { Component } from 'react'
import Text from '../../components/inputs/text'
import Select from '../../components/inputs/select'

class Filter extends Component {

    constructor(props) {
        super(props)
        this.props = props
        this.params = this.props.params
    }

    render() {
        let content = this.props.content
        let contentTypes = [
            { value: 'anime', label: this.props.t.models.content.types.anime },
            { value: 'manga', label: this.props.t.models.content.types.manga },
            { value: 'film', label: this.props.t.models.content.types.film },
            { value: 'serie', label: this.props.t.models.content.types.serie },
            { value: 'dorama', label: this.props.t.models.content.types.dorama },
        ]
        let contentStatus = [
            { value: '', label: 'Lorem' },
            { value: 'true', label: 'Lorem' },
            { value: 'false', label: 'Lorem' },
        ]

        return (
            <form action="/u/contents/" method="GET">
                <h4>Lorem</h4>
                <div className="row">
                    <div className="col-sm-4">
                        <Text name="content.name">Nome</Text>
                    </div>
                    <div className="col-sm-2">
                        <Select items={contentTypes} name="content.type">Tipo</Select>
                    </div>
                    <div className="col-sm-2">
                        <Select items={contentStatus} name="content.complete">Estado</Select>
                    </div>
                    <div className="col pt-4 mt-2">
                        <button className="btn btn-primary">Lorem</button>
                    </div>
                </div>

            </form>
        )
    }
}

export default Filter