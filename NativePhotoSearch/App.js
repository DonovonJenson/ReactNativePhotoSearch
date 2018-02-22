import React, { Component } from 'react';
import { Provider, Connect } from 'react-redux';

import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Searchbox from './components/searchbox.js'
import configureStore from './configureStore';
const store = configureStore()

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}> 
          <Text style={styles.title}> PixaBay </Text>
          <Searchbox/>
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  title: {
    paddingTop: 15,
    fontSize: 20,
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});



