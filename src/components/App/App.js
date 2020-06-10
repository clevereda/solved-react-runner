import React, { Component } from 'react';
import Calculate from '../Calculate/Calculate'
import Example from '../Example/Example'
import './App.css';

class App extends Component {
  /*
    What We will need:


  
    Total Distance run.

    LIVE updating input field values.

    Storage for the **DISTANCE, TIME** of
    our runs:
      last, 
      longest, 
      fastest

    Fastest Run Speed
  */
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

  /*
    When the button clicks, we want to:
    

    Store the run as the previous run

    Check the miles for a record longest run...
    Change longest run values if applicable

    Check the speed for a record fastest run...
    Change fastest run values if applicable
  */
  updateRuns = () => {
    //easy access to long names
    const miles = this.state.input_miles;
    const time = this.state.input_time;
    const speed = miles / (time / 60);
    const totalDistance = this.state.totalDistance;

    //set our previous run no matter what
    this.setState({
      lastMiles: miles,
      lastTime: time,
      //add the run to the total distance
      totalDistance: (Number(totalDistance) + Number(miles))
    });

    //check for a record longest run, set if applicable
    if (miles > this.state.longestMiles) {
      this.setState({
        longestMiles: miles,
        longestTime: time,
      });
    }

    //check for a record fastest run, set if applicable
    if (speed > this.state.fastestSpeed) {
      this.setState({
        fastestMiles: miles,
        fastestTime: time,
        fastestSpeed: speed
      });
    }
  }

  /* 
    live update input_time to our time input value
  */
  setTime = (event) => {
    const val = event.target.value;
    this.setState({
      input_time: val
    });
  }

  /* 
    live update input_miles to our miles input value
  */
  setMiles = (event) => {
    const val = event.target.value;
    this.setState({
      input_miles: val,
    })
  }
  render() {
    return (
      //bootstrap things
      <div className='container'>
        <header>
          <h1>React Track Runner</h1>
        </header>
        <div className="container">
          <div className='row col-12'>
            <div className='col-12 col-md-4 mx-1'>

              {/* set our input_miles each time this input changes */}
              <input type='number' placeholder="miles" onChange={this.setMiles} />
            </div>
            <div className='col-12 col-md-4 mx-1'>

              {/* set our input_time each time this input changes */}
              <input type='number' placeholder="time(minutes)" onChange={this.setTime} />
            </div>
            <div className='col-12 col-md-3 mx-1'>

              {/* Update all run data on button click */}
              <button className="btn btn-success" onClick={this.updateRuns}>Add Run</button>
            </div>
          </div>
        </div>

        {/* USE OUR LAST RUN DATA AS PROPS */}
        <hr /><h2>MOST RECENT RUN</h2>
        <Calculate distance={this.state.lastMiles} time={this.state.lastTime} />

        {/* USE OUR LONGEST RUN DATA AS PROPS */}
        <hr /><h2>LONGEST RUN</h2>
        <Calculate distance={this.state.longestMiles} time={this.state.longestTime} />

        {/* USE OUR FASTEST RUN DATA AS PROPS */}
        <hr /><h2>FASTEST RUN</h2>
        <Calculate distance={this.state.fastestMiles} time={this.state.fastestTime} />
        <hr />
        <h2>
          WORLD RECORD:

        </h2>
        <Example />
        {/* DISPLAY OUR TOTAL DISTANCE */}
        <h2>
          TOTAL DISTANCE:{this.state.totalDistance}
        </h2>
      </div >
    );
  }
}

export default App;
