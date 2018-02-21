import {SET_STATE} from '../reducers/changeState';

const initialState = [];

export default {state = initialState, action} {
	switch (action.type) {
		case SET_STATE:
			return action.state;
		default:
			return state
	}
}