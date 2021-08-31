import React from 'react'
import {Component} from 'react'

import Header from '../components/header'
import Footer from '../components/footer'
import Render from '../templates/render'
import CheckLabel from '../components/inputs/checklabel'
import Checkbox from '../components/inputs/checkbox'
import Radio from '../components/inputs/radiobutton'
import Select from '../components/inputs/select'
import SelectLabel from '../components/inputs/selectlabel'

class Index extends Component{
    constructor(props){
        super(props)
        this.props = props
    }

    render() {
        let selectItems = [
            {value: 1, label: "Key 1"},
            {value: 2, label: "Key 2"},
            {label: "Group", items:[
                {value: 3, label: "Key group 1"},
                {value: 4, label: "Key group 2"},
            ]}
        ]

        let loginMessage = {text: "Lorem", icon: "success"}
        return(
            <render dest="#body">
                <content>
                    <Header>
                        <h1>Lorem</h1>
                    </Header>
                    <main>
                        <div className="container">
                            <a href="/login" className="button button-outline">Login</a>
                            <div className="row">
                                <div className="column">
                                    <span className="h3">Lorem</span>
                                </div>
                                <div className="column">
                                    <Checkbox id="qwerty" checked='1' name="test" value="1">text</Checkbox>
                                    <CheckLabel id="qwertyx" name="test" value="1">text</CheckLabel>
                                </div>
                                <div className="column">
                                    <Radio id="radio1" name="rr" value="0">xxx</Radio>
                                    <Radio id="radio2" name="rr" value="1">qwerty</Radio>
                                </div>
                                <div className="column">
                                    <Select name="select" id="select" items={selectItems} selected="3"/>
                                    <SelectLabel name="select" id="select" items={selectItems} selected={[1,3]}/>
                                </div>
                            </div>
                        </div>
                    </main>
                    <Footer>
                        <strong>Lorem</strong>
                    </Footer>
                </content>
                <Render templateUrl="/login" />
            </render>
        )
    }
}

export default Index