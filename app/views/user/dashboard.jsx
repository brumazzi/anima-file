import React from 'react'
import { Component } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {} from '@fortawesome/free-solid-svg-icons'
import Checkbox from '../components/inputs/checkbox'
import RadioButton from '../components/inputs/radiobutton'

class Index extends Component {
    constructor(props) {
        super(props)
        this.props = props
        this.user = props.session.user
    }

    render() {
        return (
            <render>
                <content dest="main">
                    <div className="row">
                        <div className="col">
                            <div className="groupbox">
                                <span className="groupbox-item">0</span>
                                <span className="groupbox-item">1</span>
                                <span className="groupbox-item">2</span>
                            </div>
                        </div>
                    </div>
                </content>
            </render>
        )
    }
}

export default Index