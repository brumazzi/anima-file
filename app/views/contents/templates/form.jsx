import React from 'react'
import { Component } from 'react'

import Text from '../../components/inputs/text'
import Select from '../../components/inputs/select'
import Checkbox from '../../components/inputs/checkbox'
import { CategoryModel } from '../../../../config/db'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import SelectLabel from '../../components/inputs/selectlabel'

class Form extends Component {
    constructor(props) {
        super(props)
        this.props = props
    }

    toInputDate(date) {
        return (date) ? date.toISOString().slice(0, 10) : ""
    }

    render() {
        let content = this.props.content || {}
        let selectCategories = []
        let selectedItems = content.categories || []
        let contentTypes = [
            {value: 'anime', label: this.props.t.models.content.types.anime},
            {value: 'manga', label: this.props.t.models.content.types.manga},
            {value: 'film', label: this.props.t.models.content.types.film},
            {value: 'serie', label: this.props.t.models.content.types.serie},
            {value: 'dorama', label: this.props.t.models.content.types.dorama},
        ]
        for(let i=0; i<this.props.categories.length; i+=1){
            let category = this.props.categories[i]
            selectCategories.push({label: category.name, value: category._id, title: category.description})
        }

        return (
            <render dest="#container">
                <content>
                    <form action={this.props.url} method={this.props.method}>
                        <div className="row">
                            <div className="column">
                                <h2>{this.props.title}</h2>
                            </div>
                            <div className="column">
                                <a className="button button-outline" href={content._id ? `/u/content/${content._id}` : '/u/contents'}>{this.props.t.buttons.cancel}</a>
                                <button className="button">{this.props.t.buttons.save}</button>
                            </div>
                        </div>
                        <div className="row">
                            <div className="column column-50">
                                <Text id="content-name" type="text" name="content.name" value={content.name}>{this.props.t.models.content.name}</Text>
                            </div>
                            <div className="column column-25">
                                <Checkbox checked={content.visible} id="content-visible" type="text" name="content.visible" value="1">{this.props.t.models.content.visible}</Checkbox>
                            </div>
                            <div className="column column-25">
                                <Checkbox checked={content.complete} id="content-complete" type="text" name="content.complete" value="1">{this.props.t.models.content.complete}</Checkbox>
                            </div>
                        </div>
                        <div className="row">
                            <div className="column column-25">
                                <Select id="content-type" type="text" name="content.type" items={contentTypes} selected={content.type}>{this.props.t.models.content.type}</Select>
                            </div>
                            <div className="column column-25">
                                <Text id="content-author" type="text" name="content.author" value={content.author}>{this.props.t.models.content.author}</Text>
                            </div>
                            <div className="column column-25">
                                <Text id="content-publishDate" type="date" name="content.publishDate" value={this.toInputDate(content.publishDate)}>{this.props.t.models.content.publishDate}</Text>
                            </div>
                            <div className="column column-25">
                                <Text id="content-chapters" type="text" name="content.chapters" value={content.chapters}>{this.props.t.models.content.chapters}</Text>
                            </div>
                        </div>
                        <div className="row">
                            <div className="column column-100">
                                <input type="hidden" name="content.categories" value="[]" />
                                <SelectLabel items={selectCategories} selected={selectedItems} id="content-categories" type="text" name="content.categories" value={content.categories}>{this.props.t.models.content.categories}</SelectLabel>
                            </div>
                        </div>
                        <div className="row">
                            <div className="column column-100">
                                <Text id="content-description" type="text" name="content.description" value={content.description}>{this.props.t.models.content.description}</Text>
                            </div>
                        </div>
                    </form>
                </content>
            </render>
        )
    }
}

export default Form