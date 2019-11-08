import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Home from './src/screen/home'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <Home />
    );
  }
}

export default App;
