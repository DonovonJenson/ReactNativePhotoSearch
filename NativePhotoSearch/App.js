import React, { Component } from 'react';
import { Provider, Connect } from 'react-redux';

import {
  Platform,
  StyleSheet,
  Text,
  View,
  NavigatorIOS,
} from 'react-native';

import Searchbox from './components/searchbox.js'
import configureStore from './configureStore';
const store = configureStore()

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.title}> 
          <NavigatorIOS
            style={{flex:1}}
            initialRoute={{
              component: Searchbox,
              title: 'Search'
            }}/> 
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  title: {
    paddingTop: 15,
    margin: 10,
    flex: 1,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});



