import React, { Component } from 'react';

class Calculate extends Component {

    render() {
        return (

            <div className='row my-4'>
                <div className='col-12 col-sm-4'>TIME: {this.props.time} min </div>
                <div className='col-12 col-sm-4'>DISTANCE: {this.props.distance} miles </div>
                <div className='col-12 col-sm-4'>SPEED: {this.props.distance / (this.props.time / 60)} mph </div>
            </div>
        );
    }
}

export default Calculate;
