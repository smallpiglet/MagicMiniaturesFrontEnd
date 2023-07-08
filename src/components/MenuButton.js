import React from "react";


export default class MenuButton extends React.Component {
    constructor (props) {
        super(props)
        this.name = props.name
        this.click = props.onClick
    }

    render () {
        return (
            <>
                <button className="menuButton" onClick={this.click}>{this.name}</button>
            </>
        )
    }
}