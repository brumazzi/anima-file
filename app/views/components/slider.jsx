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
        for(let i=0; i<items.length; i+=1){
            sliderItems.push(<section key={`slider-${i}`} className="slider-item">
                {items[i]}
            </section>)
        }
        return (
            <article className="slider">
                {sliderItems}
            </article>
        )
    }
}

export default Slider