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
  	console.log(this.props.previewURL)
    return (
    	<View style = {{flex: 1, alignItems: 'center'}}>
    		<Image style={styles.image}
	        resizeMode='contain'
 			source={{uri: this.props.previewURL }}/>
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
		flex: 1,
	},
});