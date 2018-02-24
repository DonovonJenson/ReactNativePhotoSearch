import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
} from 'react-native';

import { connect } from 'react-redux'


class ImageBox extends Component {

  constructor(props){
  	super(props)
  	console.log(props)
  }


  render() {
    return (
    	<View style = {{flex: 1}}>
    		<Text>Hey!</Text>
        </View>
    );
  }
}

function mapStateToProps(state){
	return {
	}
}

function mapDispatchToProps(dispatch){
	return {
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ImageBox)

const styles = StyleSheet.create({
});