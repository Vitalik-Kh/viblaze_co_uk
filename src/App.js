import React, { Component } from 'react';
import './App.scss';
import Greeting from './containers/Greeting/Greeting';
import Layout from './containers/Layout/Layout'; 

class App extends Component {
  state = {
    greetingIsComplete: false
  }

  onGreetingComplete = () => {
    console.log('Greeting is complete');
    this.setState({ greetingIsComplete: true });
  }

  render() {
    const page = this.state.greetingIsComplete ? 
    <Layout /> : 
    <Greeting onGreetingComplete = { this.onGreetingComplete } />;
    return (
      <div className="App">
        {/* <Layout /> */}
        { page }
      </div>
    );
  }
}

export default App;
