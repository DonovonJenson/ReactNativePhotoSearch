import {FETCHING_QUERY, FETCHING_QUERY_SUCCESS, FETCHING_QUERY_FAILURE, UPDATE_QUERY} from '../constants';

const initialState = {
	queryResults: [],
	isFetching: false,
	error: false,
	currentQuery: '',
}

export default function queryReducer(state = initialState, action){
	switch(action.type){
		case FETCHING_QUERY: {
			return {
				...state,
				isFetching: true,
				queryResults: []
			}
		}
		case FETCHING_QUERY_SUCCESS: {
			return {
				...state,
				isFetching: false,
				queryResults: action.data
			}
		}
		case FETCHING_QUERY_FAILURE: {
			return {
				...state,
				isFetching: false,
				error: true,
			}
		}
		case UPDATE_QUERY: {
			return {
				...state,
				currentQuery: action.currentQuery
			}
		}
		default: 
			return state
	}
}