import React from 'react'
import {Component} from 'react'

class Footer extends Component{
    constructor(props){
        super(props)
        this.props = props
    }

    render() {
        return(
            <footer className="w-100 bg-dark text-white p-4">
                {this.props.children}
            </footer>
        )
    }
}

export default Footer