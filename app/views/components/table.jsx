import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Component } from 'react'
import Paginate from './paginate'

class Table extends Component {
    constructor(props) {
        super(props)
        this.props = props
    }

    render() {
        let legend = this.props.legend
        let fields = this.props.fields
        let data = this.props.data
        let footer = this.props.footer
        let link = this.props.link
        let linkIndex = this.props.linkIndex
        let usePaginate = this.props.paginate

        let items = []
        for (let i = 0; i < data.length; i += 1) {
            let line = new Array();
            for (let j = 0; j < fields.length; j += 1) {
                if (linkIndex == j) {
                    let linkFields = link.match(/:\w+/).map((field) => { return field.replace(/:/g, '') })
                    let itemLink = link

                    for (let key in linkFields) {
                        itemLink = itemLink.replace(`:${linkFields[key]}`, data[i][linkFields[key]])
                    }
                    line.push(
                        <td key={`${i}${j}`}>
                            <a href={itemLink}>{eval(`data[${i}].${fields[j]}`)}</a>
                        </td>
                    )
                } else
                    line.push(<td key={`${i}${j}`}>{eval(`data[${i}].${fields[j]}`)}</td>)
            }
            items.push(<tr key={i}>{line}</tr>)
        }

        let paginate = ""
        let filter = ""
        if (usePaginate === true) {
            filter = <div className="input-group mb-3" style={{width: '30%'}}>
                <button className="btn btn-outline-primary border border-primary" type="button"><FontAwesomeIcon icon={faSearch} width="1rem" /></button>
                <input type="text" className="form-control border-primary" placeholder="" aria-label="" />
            </div>
            paginate = <Paginate items={items} perPage={this.props.perPage} pageIndex={this.props.pageIndex}></Paginate>
        }

        return (
            <div>
                <div className="d-flex d-flex-row">
                    <div className="d-flex d-flex-column w-100 justify-content-end">
                        {filter}
                    </div>
                </div>
                <div className="d-flex d-flex-row">
                    <div className="d-flex d-flex-column w-100">
                        <table className="table table-striped gy-3 gs-7" id={this.props.id}>
                            <thead className="border-bottom-3 fw-bold">
                                <tr>
                                    {(legend || fields || []).map((value) => { return (<th key={value}>{value}</th>) })}
                                </tr>
                            </thead>
                            <tbody>
                                {items}
                            </tbody>
                            <tfoot className="border-top-3 fw-bold">
                                <tr>
                                    <td colSpan={fields.length}>{footer}</td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>
                <div className="d-flex d-flex-row">
                    <div className="d-flex d-flex-column flex-center w-100">
                        {paginate}
                    </div>
                </div>
            </div>
        )
    }
}

export default Table