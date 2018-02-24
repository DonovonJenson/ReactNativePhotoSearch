import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
} from 'react-native';

import pixabay from '../secretKey.js';
import axios from 'axios';
import { connect } from 'react-redux'
import { fetchQueryFromAPI, updateQuery } from '../actions.js'
import ImageBox from './imageBox.js'


class Searchbox extends Component {

  constructor(props){
  	super(props)
  }

  render() {

  	//Finishing this way, but should refactor to smart and dumb components
  	let resultsArray = []
  	const images = this.props.query.queryResults.hits
  	if (images && images.length > 0){
	  	resultsArray = images.map((imageData) => {
	  		return <ImageBox key={imageData.id} imageData={imageData} navigator={this.props.navigator}/> 
	  	})
  	}

    return (
    	<View style={styles.container}>
	        <TextInput style={styles.inputBox} onChangeText={(text)=> this.props.update(text)}/>
	        <Button color='black' title="Search" onPress={ () => this.props.getQuery(this.props.query.currentQuery)}/> 
	        <Text> {this.props.query.isFetching && 'Searching...'} </Text>
	        <ScrollView>
	        {resultsArray}
	        </ScrollView>
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
		marginTop: 50,
	},
	container: {
		flex: 1,
	    alignItems: 'center',
	    backgroundColor: '#F5FCFF',
	}
});

function mapStateToProps(state){
	return {
		query: state.query
	}
}

function mapDispatchToProps(dispatch){
	return {
		getQuery: (currentQuery) => dispatch(fetchQueryFromAPI(currentQuery)),
		update: (currentQuery) => dispatch(updateQuery(currentQuery))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Searchbox)