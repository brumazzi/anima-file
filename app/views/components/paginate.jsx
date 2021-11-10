import React from 'react'
import { Component } from 'react'

class Paginate extends Component {
    constructor(props) {
        super(props)
        this.props = props
        this.items = this.props.items || []
        this.perPage = this.props.perPage || 10
        this.pageIndex = this.props.pageIndex || 1
        this.pageRangeView = this.props.pageRangeView || 2
        this.url = this.props.url || ""
    }

    render() {
        let pages = new Array()
        let totalPages = Math.ceil(parseInt(this.items.length) / parseInt(this.perPage))
        // let beginOfPage = parseInt(this.perPage)*(parseInt(this.pageIndex)-1)

        for (let i = 0; i < totalPages; i += 1) {
            if (i + 1 == this.pageIndex || i > this.pageIndex - this.pageRangeView || i < this.pageIndex + this.pageRangeView || i < this.pageRangeView || i > totalPages - this.pageRangeView) {
                pages.push(<li key={`pageItem-${i}`} className={`page-item ${(this.pageIndex == i + 1) ? 'active' : ''}`} >
                    <a href={`${this.url}?index=${i+1}`} className="page-link border border-primary">{i + 1}</a>
                </li>)
            }
        }

        return (
            <ul className="pagination">
                <li className={`page-item previous ${(this.pageIndex == 1) ? 'disabled' : ''}`}>
                    <a href={`${this.url}?index=${this.pageIndex-1}`} className="page-link"><i className="previous"></i></a>
                </li>
                {pages}
                <li className={`page-item next ${(this.pageIndex == totalPages) ? 'disabled' : ''}`}>
                    <a href={`${this.url}?index=${this.pageIndex+1}`} className="page-link"><i className="next"></i></a>
                </li>
            </ul>
        )
    }
}

export default Paginate