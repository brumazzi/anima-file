import React from 'react'
import { Component } from 'react'
import Card from '../templates/card'

class New extends Component {
    constructor(props) {
        super(props)
        this.props = props
        this.user = props.session.user
    }

    render() {
        let contents = this.props.contents
        let categories = this.props.categories
        let contentsCard = []

        for(let i=0; i<contents.length; i+=1){
            contentsCard.push(<div key={contents[i]._id} className="col-sm-3"><Card t={this.props.t} content={contents[i]}></Card></div>)
        }

        return (
            <render>
                <content dest="#main">
                    <div className="row justify-content-sm-center">
                        {contentsCard}
                    </div>
                </content>
            </render>
        )
    }
}

export default New