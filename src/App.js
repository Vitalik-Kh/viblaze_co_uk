import React, { Component } from 'react';
import './App.scss';
import Greeting from './containers/Greeting/Greeting';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Greeting />
      </div>
    );
  }
}

export default App;
