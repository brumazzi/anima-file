import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { Component } from 'react'

class Card extends Component {

    constructor(props) {
        super(props)
        this.props = props
    }

    render() {
        let content = this.props.content

        return (
            <div className="card card-px-0">
                <div className="card-header overflow-hidden">
                    <img src={content.image} alt="" width="100%" style={{ border: 'none' }} />
                </div>
                <div className="card-body px-2 py-2" style={{ height: '6rem', overflow: 'hidden' }}>
                    <h4>{content.name}</h4>
                    <p>{content.description}</p>
                </div>
                <div className="card-footer px-3 py-3">
                    <div className="row">
                        <div className="col-sm-6 align-items-end text-begin">
                            <small className="fw-bold text-secondary">
                                {content.publishDate.toLocaleString().slice(0, 10)}
                            </small>
                        </div>
                        <div className="col-sm-6 align-items-end text-end">
                            <a href="#" className="btn-active-primary btn-light-primary mx-3" title={this.props.t.buttons.add}>
                                <FontAwesomeIcon icon={faPlus} width="1.0rem"></FontAwesomeIcon>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Card