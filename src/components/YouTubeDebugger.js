// Code YouTubeDebugger Component Here
import React from 'react'

class YouTubeDebugger extends React.Component {
    //Should have an initial state with properties 
    //create a button with the class 'birate' Clicking it changes the setting.birate state property to 12 
    //create a button with the class 'resolution'. When clicked changes the settings.video resolution state property to '720p'
    constructor() {
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

    handleChangeBirate = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                bitrate: 12
            }
        })
    }
    

    handleChangeResolution = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                video: {
                    ...this.state.settings.video,
                    resolution: '720p'
                }
            }
        })

    }

    /*
   Or this can be defined using the Object.assign method:
   
   this.setState({
     settings: Object.assign({}, this.state.settings, {
       video: Object.assign({}, this.state.settings.video, {
         resolution: '720p'
       })
     })
   });
   
   */



    render() {
        return (
            <div>
                <button className="bitrate" onClick={this.handleChangeBirate}>Change bitrate</button>
                <button className="resolution" onClick={this.handleChangeResolution}>Change resolution</button>
            </div>
        )
    }
}

export default YouTubeDebugger
