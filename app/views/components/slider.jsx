import React from 'react'
import { Component } from 'react'

class Slider extends Component {
    constructor(props) {
        super(props)
        this.props = props
    }

    render() {
        let items = this.props.children
        let sliderItems = []
        let navItems = []
        for (let i = 0; i < items.length; i += 1) {
            sliderItems.push(<section id={`slider-${i}`} key={`slider-${i}`} className={`slider-content-item tab-pane fade ${!i ? 'show active' : ''}`}>
                {items[i]}
            </section>)
            navItems.push(<li key={`slider-item-${i}`} className="nav-item slider-item">
                <a href={`#slider-${i}`} className={`slider-link rounded border border-2 mx-3 border-primary ${!i ? 'active' : ''}`} roof="roof"></a>
            </li>)
        }
        return (
            <div className="rounded roof slider">
                <div className="d-flex d-flex-row">
                    <div className="d-flex d-flex-column slider-content flex-center w-100">
                        <span className="slider-content-before"><a href="#">{'<'}</a></span>
                            {sliderItems}
                        <span className="slider-content-before"><a href="#">{'>'}</a></span>
                    </div>
                </div>
                <div className="d-flex d-flex-row">
                    <div className="d-flex d-flex-column flex-center w-100">
                        <ul className="nav nav-tabs nav-line-tabs mb-5 fs-6">
                            {navItems}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Slider