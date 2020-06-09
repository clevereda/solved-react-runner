import React, { Component } from 'react';

class Calculate extends Component {
    state = {
        miles: 0,
        last: 0,
        most: 0
    }
    setLast = (event) => {
        let val = this.state.miles;
        let most = this.state.most;
        if (val > most) {
            this.setState({
                most: val
            })
        }
        this.setState({
            last: val
        })
    }
    setMiles = (event) => {

        let val = event.target.value;
        this.setState({
            miles: val
        })
    }
    render() {
        return (
            <div>
                <h3>  <input type='number' id="number" onChange={this.setMiles} />
                    <button onClick={this.setLast}>Add Run</button>
                    <div> MILES RUN: {this.state.miles}</div>
                    <div> LAST RUN: {this.state.last}</div>
                    <div> MOST MILES RUN: {this.state.most}</div>

                </h3>
            </div >
        );
    }
}

export default Calculate;
