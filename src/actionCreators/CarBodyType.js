import {
	REQUEST_CAR_BODY,
	RECEIVE_CAR_BODY,
	CAR_BODY_SELECTION
} from '../actionTypes'

export const requestCarBody = isFetching => {
	return {
		type: REQUEST_CAR_BODY,
		isFetching
	}
}

export const setCarBody = carBody => {
	return {
		type: RECEIVE_CAR_BODY,
		carBody
	}
}

export const setRecommendedCarBody = carBody => (dispatch) => {
	carBody.map(item => {
		if(item.isRecommended) {
			return dispatch(carBodySelection(item.id))
		}
	})
}

export const fetchCarBody = isFetching => (dispatch, getState) => {
	dispatch(requestCarBody(isFetching))
	return fetch('../../car-body.json')
		.then(response => response.json())
		.then(json => {
			dispatch(setCarBody(json))
			dispatch(setRecommendedCarBody(json))
		})
}

export const carBodySelection = id => {
	return {
		type: CAR_BODY_SELECTION,
		id
	}
}
