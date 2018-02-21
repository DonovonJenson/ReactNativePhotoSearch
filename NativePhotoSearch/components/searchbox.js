import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
} from 'react-native';


export default class Searchbox extends Component {

  constructor(props){
  	super(props)
  }

  dofunction(){
  	console.log('ran')
  }

  render() {
    return (
    	<View>
	        <TextInput style={styles.inputBox}/>
	        <Button color='black' title="Search" onPress={this.dofunction}/> 
        </View>
    );
  }
}

const styles = StyleSheet.create({
	inputBox: {
		height: 40, 
		width: 150,
		borderWidth: 2, 
		borderColor: 'gray',
	},
});