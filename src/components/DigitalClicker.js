// Code DigitalClicker Component Here
import React from 'react' 

class DigitalClicker extends React.Component{
    //has an initial state property timesClicked intially defined as 0 
    //renders out a button with a label that shows timesClicked value, you button should just say 0 at the start 
    //Whenever the button is clicked, update the state by incrementing the timesClicked by 1

    constructor() {
        super() 

        this.state = {
            timesClicked: 0
        }
    }

    handleClick = () => {
        this.setState(previousState => {
            return {
                timesClicked: previousState.timesClicked + 1
            }
        })
    }

    render() {
        return(
        <button onClick={this.handleClick}>{this.state.timesClicked}</button>
        )
    }
}

export default DigitalClicker
