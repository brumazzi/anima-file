import React from 'react'
import {Component} from 'react'

import Render from './render'

class Base extends Component{
    constructor(props){
        super(props)
        this.props = props
    }

    render() {
        return(
            <html lang={this.props.locale}>
                <head>
                    <meta charSet="utf-8" />
                    <meta name="render" url="/home" method="get"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <title>Teste</title>
                    <link rel="stylesheet" href="/css/milligram.css" crossOrigin="anonymous"/>
                    <link rel="stylesheet" href="/css/sweetalert2.min.css" crossOrigin="anonymous"/>
                    <link rel="stylesheet" href="/css/base.css" crossOrigin="anonymous"/>
                    <script src="/js/sweetalert2.min.js"></script>
                    <script src="/js/renderRoutes.js"></script>
                </head>
                <body id="body"></body>
            </html>
        )
    }
}

export default Base