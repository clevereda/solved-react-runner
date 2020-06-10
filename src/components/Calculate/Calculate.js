import React, { Component } from 'react';

class Calculate extends Component {
    state = {
        miles: 0,
        time: 0,
        lastTime: 0,
        lastMiles: 0,
        lastSpeed: 0,
        longestMiles: 0,
        longestTime: 0,
        longestSpeed: 0,
        fastestMiles: 0,
        fastestTime: 0,
        fastestSpeed: 0
    }
    calculateSpeed = (distance, time) => {
        let speed = (60 / time) * distance;
        return speed;
    }
    setLast = (event) => {
        let miles = this.state.miles;
        let time = this.state.time;
        let speed = this.calculateSpeed(miles, time);
        this.setState({
            lastMiles: miles,
            lastTime: time,
            lastSpeed: speed
        });
        if (miles > this.state.longestMiles) {
            this.setState({
                longestMiles: miles,
                longestTime: time,
                longestSpeed: speed
            });
        }
        if (speed > this.state.fastestSpeed) {
            this.setState({
                fastestMiles: miles,
                fastestTime: time,
                fastestSpeed: speed
            });
        }
    }
    setTime = (event) => {
        let val = event.target.value;
        this.setState({
            time: val
        });
    }
    setMiles = (event) => {
        let val = event.target.value;
        this.setState({
            miles: val
        })
    }
    render() {
        return (
            <div className="container">
                <div className='row col-12'>
                    <div className='col-12 col-md-4 mx-1'>
                        <input type='number' placeholder="miles" onChange={this.setMiles} />
                    </div>
                    <div className='col-12 col-md-4 mx-1'>
                        <input type='number' placeholder="time(minutes)" onChange={this.setTime} />
                    </div>
                    <div className='col-12 col-md-3 mx-1'>
                        <button className="btn btn-success" onClick={this.setLast}>Add Run</button>
                    </div>
                </div>
                <div className='row my-4'>
                    <div className='col-12 h3'><u> LAST RUN</u> </div>
                    <div className='col-12 col-sm-4'>TIME: {this.state.lastTime} min </div>
                    <div className='col-12 col-sm-4'>DISTANCE: {this.state.lastMiles} miles </div>
                    <div className='col-12 col-sm-4'>SPEED: {this.state.lastSpeed} mph </div>
                </div>
                <div className='row my-4'>
                    <div className='col-12 h3'><u> LONGEST RUN</u></div>
                    <div className='col-12 col-sm-4'>TIME: {this.state.longestTime} min </div>
                    <div className='col-12 col-sm-4'>DISTANCE: {this.state.longestMiles} miles </div>
                    <div className='col-12 col-sm-4'>SPEED: {this.state.longestSpeed} mph </div>
                </div>
                <div className='row my-4'>
                    <div className='col-12 h3'><u> FASTEST RUN</u></div>
                    <div className='col-12 col-sm-4'>TIME: {this.state.fastestTime} min </div>
                    <div className='col-12 col-sm-4'>DISTANCE: {this.state.fastestMiles} miles </div>
                    <div className='col-12 col-sm-4'>SPEED: {this.state.fastestSpeed} mph </div>
                </div>
            </div >
        );
    }
}

export default Calculate;
