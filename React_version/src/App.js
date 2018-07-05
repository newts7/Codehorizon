import React, { Component } from 'react';
import './App.css';
import { Contests } from './components/contests';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Contests/>  
      </div>
    );
  }
}

export default App;
