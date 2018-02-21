/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose} from 'redux';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import thunk from 'redux-thunk';
import reducer from './reducers/reducers.js'

const store = createStore(reducer, compose(
  applyMiddleware(thunk)
));

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Provider store={store}>
        <Text style={styles.welcome}> Sup </Text>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});




