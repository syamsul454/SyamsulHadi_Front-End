import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Home from './src/screen/home'
import store from './src/redux/store'
import { Provider } from 'react-redux'


const App = () => {
  return (
    <Provider store={store}>
     <Home />
    </Provider>
  )
}

export default App;
