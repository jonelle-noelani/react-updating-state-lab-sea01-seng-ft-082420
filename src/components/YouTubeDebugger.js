import React, {Component} from 'react'

export default class YouTubDebugger extends Component {

    constructor(){
        super()
        this.state = {
            errors: [],
            user: null,
            settings: {
              bitrate: 8,
              video: {
                resolution: '1080p'
              }
            }
        }
    }

    bitClick = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                bitrate: 12
            }
        })
    }

    resolution = () => {
        this.setState({
            settings: {
            ...this.state.settings, 
                video: {
                ...this.state.video,
                    resolution: '720p'
                }
            }
        })
    }

    render() {
        return(
            <div>
            <button onClick={this.bitClick} className='bitrate'>BITRATE</button>
            <button onClick={this.resolution} className='resolution'>RESOLUTION</button>
            </div>
        )
    }
}
