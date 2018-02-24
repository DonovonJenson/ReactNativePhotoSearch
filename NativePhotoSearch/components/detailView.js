import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Image
} from 'react-native';

import { connect } from 'react-redux'


class ImageBox extends Component {

  constructor(props){
  	super(props)
  }


  render() {
  	console.log(this.props)
    return (
    	<View style = {styles.container}>
    		<Image style={styles.image}
	        resizeMode='contain'
 			source={{uri: this.props.previewURL }}/>
 			<Text style={styles.text}> User: {this.props.user}</Text>
 			<Text style={styles.text}> Tags: {this.props.tags}</Text>
 			<Text style={styles.text}> Resolution: {this.props.imageHeight}x{this.props.imageWidth}</Text>
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
	image: {
		height: 275,
		width: 275,
	},
	container: {
		flex: 1, 
		alignItems: 'center',
		justifyContent: 'center'
	},
	text: {
		fontSize: 20,
		margin: 1,
		paddingBottom: 3,
		borderBottomWidth: 1,
	},
});