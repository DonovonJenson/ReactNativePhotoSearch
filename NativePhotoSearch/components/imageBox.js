import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Image,
} from 'react-native';

import { connect } from 'react-redux'


class ImageBox extends Component {

  constructor(props){
  	super(props)
  }

  render() {
    return (
    	<View>
	        <Text> Hello guvna! </Text>
	        <Image style={styles.image}
 			source={{uri: this.props.imageData.previewURL }}/>
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
		height: 200,
		width: 200,
	}
});