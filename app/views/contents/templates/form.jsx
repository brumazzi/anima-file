import React from 'react'
import { Component } from 'react'

import Text from '../../components/inputs/text'
import Select from '../../components/inputs/select'
import Checkbox from '../../components/inputs/checkbox'
import { CategoryModel } from '../../../../config/db'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOutAlt, faUpload } from '@fortawesome/free-solid-svg-icons'
import SelectLabel from '../../components/inputs/selectlabel'
import { toString } from 'lodash'

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
        let selectedCategories = content.categories || []
        let contentTypes = [
            { value: 'anime', label: this.props.t.models.content.types.anime },
            { value: 'manga', label: this.props.t.models.content.types.manga },
            { value: 'film', label: this.props.t.models.content.types.film },
            { value: 'serie', label: this.props.t.models.content.types.serie },
            { value: 'dorama', label: this.props.t.models.content.types.dorama },
        ]
        for (let i = 0; i < this.props.categories.length; i += 1) {
            let category = this.props.categories[i]
            selectCategories.push({ label: category.name, value: toString(category._id), title: category.description })
        }

        return (
            <div className="d-flex row justify-content-center">
                <div className="col-sm-12">
                    <form action={this.props.url} method={this.props.method}>
                        <button className="d-none" id="form-submit"></button>
                        <div className="row">
                            <div className="column">
                                <h2>{this.props.title}</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-3">
                                <div className="form-group mb-5 col-sm-12">
                                    <label className="">
                                        {this.props.t.models.content.image} <label htmlFor="file-chooser" className="pointer"><FontAwesomeIcon icon={faUpload} width='1rem' /></label>
                                    </label>
                                    <img width="100%" src={`${content.image}`} alt="Fazer Upload" />
                                </div>
                                <div className="d-none">
                                    <Text className="" id="file-chooser" container="content-image" type="file" accept=".jpg, .jpeg, .png"></Text>
                                    <Text className="" id="content-image" type="text" name="content.image" value={content.image}></Text>
                                </div>
                            </div>
                            <div className="col-sm-9">
                                <div className="row">
                                    <div className="col-sm-6">
                                        <Text id="content-name" type="text" name="content.name" value={content.name}>{this.props.t.models.content.name}</Text>
                                    </div>
                                    <div className="col-sm-3">
                                        <Checkbox checked={content.visible} id="content-visible" type="text" name="content.visible" value="1">{this.props.t.models.content.visible}</Checkbox>
                                    </div>
                                    <div className="col-sm-3">
                                        <Checkbox checked={content.complete} id="content-complete" type="text" name="content.complete" value="1">{this.props.t.models.content.complete}</Checkbox>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-3">
                                        <Select id="content-type" type="text" name="content.type" items={contentTypes} selected={content.type}>{this.props.t.models.content.type}</Select>
                                    </div>
                                    <div className="col-sm-3">
                                        <Text id="content-author" type="text" name="content.author" value={content.author}>{this.props.t.models.content.author}</Text>
                                    </div>
                                    <div className="col-sm-3">
                                        <Text id="content-publishDate" type="date" name="content.publishDate" value={this.toInputDate(content.publishDate)}>{this.props.t.models.content.publishDate}</Text>
                                    </div>
                                    <div className="col-sm-3">
                                        <Text id="content-chapters" type="text" name="content.chapters" value={content.chapters}>{this.props.t.models.content.chapters}</Text>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <Text id="content-description" type="text" multLines={true} name="content.description" value={content.description}>{this.props.t.models.content.description}</Text>
                                    </div>
                                    <div className="col-sm-6">
                                        <input type="hidden" name="content.categories" value="[]" />
                                        <SelectLabel items={selectCategories} selected={selectedCategories} id="content-categories" type="text" name="content.categories" value={content.categories}>{this.props.t.models.content.categories}</SelectLabel>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Form