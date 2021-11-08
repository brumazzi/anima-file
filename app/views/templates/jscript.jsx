import React from 'react'
import {Component} from 'react'

class JScript extends Component{
    constructor(props){
        super(props)
        this.props = props
    }

    render() {
        let call = this.props.call
        return(
            <script type="text/javascript" command={call} />
        )
    }
}

export default JScript