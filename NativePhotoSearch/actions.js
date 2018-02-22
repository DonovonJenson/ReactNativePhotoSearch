import {FETCHING_QUERY, FETCHING_QUERY_SUCCESS, FETCHING_QUERY_FAILURE, UPDATE_QUERY} from './constants';
import axios from 'axios';

export function fetchQueryFromAPI(query){
	console.log(query)
	return (dispatch) => {
		dispatch(getQuery())
		axios.get(`https://pixabay.com/api/?key=${pixabay}&q=${query}`)
  		.then((response) =>{
  			dispatch(getQuerySuccess(response.data))
  		}). catch((error) => {
  			dispatch(getQuerryFailure(error))
  		})
	}
}

function getQuery(){
	return {
		type: FETCHING_QUERY
	}
}

function getQuerySuccess(data){
	return {
		type: FETCHING_QUERY_SUCCESS,
		data
	}
}

function getQueryFailure() {
	return{
		type: FETCHING_PEOPLE_FAILURE
	}
}

export function updateQuery(currentQuery) {
	return{
		type: UPDATE_QUERY, 
		currentQuery
	}
}