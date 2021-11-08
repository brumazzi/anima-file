import React from 'react'
import { Component } from 'react'

class Paginate extends Component {
    constructor(props) {
        super(props)
        this.props = props
        this.items = this.props.items
        this.perPage = this.props.perPage
        this.pageIndex = this.props.pageIndex
        this.pageRangeView = this.props.pageRangeView || 3
    }

    render() {
        let pages = new Array()
        let totalPages = Math.ceil(parseInt(this.items.length)/parseInt(this.perPage))
        // let beginOfPage = parseInt(this.perPage)*(parseInt(this.pageIndex)-1)

        for(let i=0; i<totalPages; i+=1){
            if(i > this.pageIndex-this.pageRangeView || i < this.pageIndex+this.pageRangeView || i < this.pageRangeView || i > totalPages + this.pageRangeView){
                pages.push(<li key={`pageItem-${i}`} className={`page-item ${(this.pageIndex == i+1) ? 'active' : ''}`} >
                    <a href="#" className="page-link">{i+1}</a>
                </li>)
            }
        }

        return (
            <ul className="pagination">
                <li className={`page-item previous ${(this.pageIndex == 1) ? 'disabled' : ''}`}>
                    <a href="#" className="page-link"><i className="previous"></i></a>
                </li>
                {pages}
                <li className={`page-item next ${(this.pageIndex == totalPages) ? 'disabled' : ''}`}>
                    <a href="#"  className="page-link"><i className="next"></i></a>
                </li>
            </ul>
        )
    }
}

export default Paginate