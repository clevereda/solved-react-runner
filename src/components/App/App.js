import React, { Component } from 'react';
import Calculate from '../Calculate/Calculate'
import './App.css';

class App extends Component {
  state = {
    totalDistance: 0,
    input_miles: 0,
    input_time: 0,
    lastTime: 0,
    lastMiles: 0,
    longestMiles: 0,
    longestTime: 0,
    fastestMiles: 0,
    fastestTime: 0,
    fastestSpeed: 0
  }
  updateRuns = () => {
    const miles = this.state.input_miles;
    const time = this.state.input_time;
    const speed = miles / (time / 60);
    const totalDistance = this.state.totalDistance;

    this.setState({
      lastMiles: miles,
      lastTime: time,
      lastSpeed: speed,
      totalDistance: (Number(totalDistance) + Number(miles))
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
    const val = event.target.value;
    this.setState({
      input_time: val
    });
  }
  setMiles = (event) => {
    const val = event.target.value;
    this.setState({
      input_miles: val,
    })
  }
  render() {
    return (
      <div className='container'>
        <header>
          <h1>React Track Runner</h1>
        </header>
        <div className="container">
          <div className='row col-12'>
            <div className='col-12 col-md-4 mx-1'>
              <input type='number' placeholder="miles" onChange={this.setMiles} />
            </div>
            <div className='col-12 col-md-4 mx-1'>
              <input type='number' placeholder="time(minutes)" onChange={this.setTime} />
            </div>
            <div className='col-12 col-md-3 mx-1'>
              <button className="btn btn-success" onClick={this.updateRuns}>Add Run</button>
            </div>
          </div>
        </div>
        <hr /><h2>MOST RECENT RUN</h2>
        <Calculate distance={this.state.lastMiles} time={this.state.lastTime} />
        <hr /><h2>LONGEST RUN</h2>
        <Calculate distance={this.state.longestMiles} time={this.state.longestTime} />
        <hr /><h2>FASTEST RUN</h2>
        <Calculate distance={this.state.fastestMiles} time={this.state.fastestTime} />
        <hr />
        <h2>
          TOTAL DISTANCE:{this.state.totalDistance}
        </h2>
      </div >
    );
  }
}

export default App;
