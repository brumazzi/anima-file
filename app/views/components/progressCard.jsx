import React from 'react'
import { Component } from 'react'

class ProgressCard extends Component {
    constructor(props) {
        super(props)
        this.props = props
    }

    render() {
        // let className = this.props.className
        let color = this.props.color || ""
        let progress = this.props.progress || "0"
        let progressColor = this.props.progressColor || ""

        return (
            <div className={`card`}>
                <div className="card-header rounded d-block" style={{backgroundColor: color}}>
                    <h4 className="mt-2" style={{height: '3rem'}}>{this.props.children}</h4>
                    <div className="progress h-6px w-100">
                        <div className="progress-bar" style={{width: `${progress}%`, backgroundColor: progressColor}}></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProgressCard