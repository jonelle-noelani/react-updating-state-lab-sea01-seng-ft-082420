import React, {Component} from 'react'

export default class DigitalClicker extends Component {
    constructor( ) {
        super( )
        this.state = {
            timesClicked: 0
        }
    }

    handleClick = () => {
        let newClick = this.state.timesClicked + 1
        this.setState({
            timesClicked: newClick
        })
    }

    render() {
        return(
            <div>
            <h3>{this.state.timesClicked}</h3>
            <button onClick={this.handleClick}>{this.state.timesClicked}</button>
            </div>
        )
    }
}
