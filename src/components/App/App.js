import React, { Component } from 'react';
import Calculate from '../Calculate/Calculate'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <h1>React Track Runner</h1>
        </header>
        <Calculate />
      </div >
    );
  }
}

export default App;
