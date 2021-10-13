import { faUpload } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { times } from 'lodash'
import React from 'react'
import { Component } from 'react'
import Checkbox from '../../components/inputs/checkbox'

import Text from '../../components/inputs/text'

class Form extends Component {
    constructor(props) {
        super(props)
        this.props = props
        this.user = props.user
    }

    render() {
        let banner = this.props.banner || {}
        return (
            <div className="d-flex row justify-content-center">
                <div className="col-sm-12">
                    <form action={this.props.url} method={this.props.method} className="form" encType="multipart/form-data">
                        <button className="d-none" id="form-submit"></button>
                        <div className="row">
                            <div className="col">
                                <h2>{this.props.title}</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-3">
                                <div className="form-group mb-5 col-sm-12">
                                    <label className="">
                                        {this.props.t.models.banner.image} <label htmlFor="file-chooser" className="pointer"><FontAwesomeIcon icon={faUpload} width='1rem' /></label>
                                    </label>
                                    <img width="100%" src={`${banner.image}`} alt="Fazer Upload" />
                                </div>
                                <div className="d-none">
                                    <Text className="" id="file-chooser" container="banner-image" type="file" accept=".jpg, .jpeg, .png"></Text>
                                    <Text className="" id="banner-image" type="text" name="banner.image" value={banner.image}></Text>
                                </div>
                            </div>
                            <div className="col-sm-9">
                                <div className="row">
                                    <div className="col-sm-6">
                                        <Text id="banner-title" type="text" name="banner.title" value={banner.title}>{this.props.t.models.banner.title}</Text>
                                    </div>
                                    <div className="col-sm-6">
                                        <Checkbox checked={banner.active} id="banner-active" name="banner.active" value="1">{this.props.t.models.banner.active}</Checkbox>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12">
                                <Text id="banner-description" multLines={true} type="text" name="banner.description" value={banner.description}>{this.props.t.models.banner.description}</Text>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Form