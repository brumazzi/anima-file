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

class Examples extends Component{
    constructor(props){
        super(props)
        this.props = props
        this.user = this.props.session.user
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
        let menuItem = null
        if(this.user)
            menuItem = <a className="text-right" href="/u/logout" method="POST">{this.props.t.home.menu.logout}</a>
        else
            menuItem = <a className="text-right" href="/login">{this.props.t.home.menu.login}</a>

        return(
            <render>
                <content dest="#body">
                    <Header>
                        <section className="topbar">
                            <ul className="menu horizontal">
                                <li className="menu-item"><a className="text-left" href="/home">{this.props.t.home.menu.page}</a></li>
                                <li className="menu-item"><a className="tex-center" href="/c/anime"><span>{this.props.t.home.menu.animes}</span></a></li>
                                <li className="menu-item"><a className="text-center" href="/c/manga"><span>{this.props.t.home.menu.mangas}</span></a></li>
                                <li className="menu-item"><a className="text-center" href="/c/serie"><span>{this.props.t.home.menu.series}</span></a></li>
                                <li className="menu-item"><a className="text-center" href="/c/film"><span>{this.props.t.home.menu.films}</span></a></li>
                                <li className="menu-item"><a className="text-center" href="/c/dorama"><span>{this.props.t.home.menu.doramas}</span></a></li>
                                <li className="menu-item">{menuItem}</li>
                            </ul>
                        </section>
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
                {/* <Render templateUrl="/login" /> */}
            </render>
        )
    }
}

export default Examples