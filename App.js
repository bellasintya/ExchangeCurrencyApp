/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React from 'react';
import Home from './src/Screens/Home';
import {Provider} from 'react-redux';
import store from './src/Redux/store';

const App = () => (
  <Provider store={store}>
    <Home />
   </Provider>
);

export default App;
