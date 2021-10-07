import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { Component } from 'react'

class Card extends Component{

    constructor(props) {
        super(props)
        this.props = props
    }

    render() {
        let content = this.props.content

        return (
            <div className="card card-px-0">
                <div className="card-header overflow-hidden">
                    <img src={content.image} alt="" width="100%" style={{border: 'none'}} />
                </div>
                <div className="card-body px-2">
                    <p>{content.description}</p>
                </div>
                <div className="card-footer px-2">
                    <div className="d-flex flex-column align-items-end">
                        <div className="d-flex ms-3">
                            <button className="btn btn-sm btn-active-primary btn-light-primary ms-3" title={this.props.t.buttons.add}>
                                <FontAwesomeIcon icon={faPlus} width="1.5rem"></FontAwesomeIcon>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Card