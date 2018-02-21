export const SET_STATE = 'SET_STATE'

export function changeState() {
	return dispatch => {
		settingState('test')
	}
}

export function settingState(value) {
	return {
		type: SET_STATE,
		value
	}
}