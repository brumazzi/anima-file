import React from 'react'
import { Component } from 'react'

import Render from './render'

class Base extends Component {
    constructor(props) {
        super(props)
        this.props = props
    }

    render() {
        return (
            <html lang={this.props.locale}>
                <head>
                    <meta name="description" content="" />
                    <meta name="keywords" content="" />
                    <meta property="og:locale" content="en_US" />
                    <meta property="og:type" content="article" />
                    <meta property="og:title" content="Seven HTML Free - Bootstrap 5 HTML Multipurpose Light/Dark Admin Dashboard Theme" />
                    <meta property="og:url" content="https://keenthemes.com/products/seven-html-pro" />
                    <meta property="og:site_name" content="Keenthemes | Seven HTML Free" />

                    <meta charSet="utf-8" />
                    <meta name="render" url="/home" method="get" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <title>Teste</title>
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700" />
                    <link rel="stylesheet" href="/css/seven.css" crossOrigin="anonymous" />
                    <link rel="stylesheet" href="/plugins/global/seven.css" crossOrigin="anonymous" />
                    <link rel="stylesheet" href="/css/sweetalert2.min.css" crossOrigin="anonymous" />
                    <link rel="stylesheet" href="/css/base.css" crossOrigin="anonymous" />
                    <script src="/js/sweetalert2.min.js"></script>
                    <script src="/js/renderRoutes.js"></script>
                </head>
                <body id="kt_body" className="header-fixed header-tablet-and-mobile-fixed aside-fixed aside-secondary-disabled">
                    <div className="d-flex flex-column flex-root">
                        <div className="page d-flex flex-row flex-column-fluid" id="body"></div>
                    </div>
                </body>
            </html>
        )
    }
}

export default Base