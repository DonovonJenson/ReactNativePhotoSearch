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
import { connect } from 'react-redux'
import { fetchQueryFromAPI, updateQuery } from '../actions.js'


class Searchbox extends Component {

  constructor(props){
  	super(props)
  }

  render() {
    return (
    	<View>
	        <TextInput style={styles.inputBox} onChangeText={(text)=> this.props.update(text)}/>
	        <Button color='black' title="Search" onPress={ () => this.props.getQuery(this.props.query.currentQuery)}/> 
	        <Text> {this.props.query.isFetching && 'Searching...'} </Text>
	        <Text> {this.props.query.currentQuery} </Text>
	        <Text> {JSON.stringify(this.props.query.queryResults)} </Text>
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