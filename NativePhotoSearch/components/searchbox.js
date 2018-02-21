import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
} from 'react-native';

import pixabay from '../secretKey.js';
import axios from 'axios';


export default class Searchbox extends Component {

  constructor(props){
  	super(props)
  }

  dofunction(query){
  	axios.get(`https://pixabay.com/api/?key=${pixabay}&q={query}`)
  	.then((response) =>{
  		console.log(response.data)
  	})
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