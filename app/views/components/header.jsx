import React from 'react'
import {Component} from 'react'

class Header extends Component{
    constructor(props){
        super(props)
        this.props = props
    }

    render() {
        return(
            <header className="w-100 bg-dark text-white p-4">
                {this.props.children}
            </header>
        )
    }
}

export default Header