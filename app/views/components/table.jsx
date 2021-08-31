import React from 'react'
import {Component} from 'react'

class Table extends Component{
    constructor(props){
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

        let items = []
        for(let i=0; i<data.length; i+=1){
            let line = new Array();
            for(let j=0; j<fields.length; j+=1){
                if(linkIndex == j){
                    let linkFields = link.match(/:\w+/).map((field)=>{return field.replace(/:/g,'')})
                    let itemLink = link

                    for(let key in linkFields){
                        itemLink = itemLink.replace(`:${linkFields[key]}`, data[i][linkFields[key]])
                    }
                    line.push(
                        <td key={`${i}${j}`}>
                            <a href={itemLink}>{eval(`data[${i}].${fields[j]}`)}</a>
                        </td>
                    )
                }else
                    line.push(<td key={`${i}${j}`}>{eval(`data[${i}].${fields[j]}`)}</td>)
            }
            items.push(<tr key={i}>{line}</tr>)
        }

        return(
            <table>
                <thread>
                    <tr>
                        {(legend || fields || []).map((value)=>{return(<th key={value}>{value}</th>)})}
                    </tr>
                </thread>
                <tbody>
                    {items}
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan={fields.length}>{footer}</td>
                    </tr>
                </tfoot>
            </table>
        )
    }
}

export default Table