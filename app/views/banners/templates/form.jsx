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
                    <form action={this.props.url} method="post" className="form">
                        <button className="d-none" id="form-submit"></button>
                        <div className="row">
                            <div className="col">
                                <h2>{this.props.title}</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-3">
                                <Text id="banner-image" type="file" name="banner.image" value={banner.image}>{this.props.t.models.banner.image}</Text>
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
                                <Text id="banner-description" type="text" name="banner.description" value={banner.description}>{this.props.t.models.banner.description}</Text>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Form