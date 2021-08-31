import React from 'react'
import {Component} from 'react'

class Render extends Component{
    constructor(props){
        super(props)
        this.props = props
    }

    render() {
        let method = this.props.method || 'get'
        let templateUrl = this.props.templateUrl
        let command = `requestPage('${method}', '${templateUrl}')`
        return(
            <script type="text/javascript" command={command} />
        )
    }
}

export default Render