import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Image,
  TouchableHighlight,
  NavigatorIOS,
} from 'react-native';

import { connect } from 'react-redux'
import detailView from './detailView.js'


class ImageBox extends Component {

  constructor(props){
  	super(props)
  	this.detailView = this.detailView.bind(this);
  }



  detailView(imageData){
  	this.props.navigator.push({
  		title: 'Photo Details',
  		component: detailView,
  		passProps: {
  			pushEvent: imageData
  		}
  	})
  }

  render() {
    return (
    	<View style = {styles.photobox}>
    	<TouchableHighlight 
	    	onPress= {() => this.detailView(this.props.imageData)}
	    	underlayColor = '#ddd'>
	      <Image style={styles.image}
	        resizeMode='contain'
 			source={{uri: this.props.imageData.previewURL }}/>
 		</TouchableHighlight>
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
	photobox: {
		borderTopWidth: .5,
		borderBottomWidth: .5,
		paddingBottom: 1,
		paddingTop: 1,
	}
});