import React, { Component } from 'react';
import Calculate from '../Calculate/Calculate';

class Example extends Component {
    state = {
        worldRecordDistance: 1,
        worldRecordTime: 3.2
    }
    render() {
        return (
            <div className='row my-4'>
                <p>
                    <Calculate distance={this.state.worldRecordDistance} time={this.state.worldRecordTime} />
                </p>
            </div>
        );
    }
}

export default Example;