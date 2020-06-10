import React, { Component } from 'react';

class Calculate extends Component {

    render() {
        const speed = this.props.distance / (this.props.time / 60);
        return (

            <div className='row my-4'>
                <div className='col-12 col-sm-4'>TIME: {this.props.time} min </div>
                <div className='col-12 col-sm-4'>DISTANCE: {this.props.distance} miles </div>
                <div className='col-12 col-sm-4'>SPEED: {isNaN(speed) ? 0 : speed} mph </div>
            </div>
        );
    }
}

export default Calculate;
