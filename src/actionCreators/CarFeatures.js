import {
	REQUEST_CAR_FEATURE,
	RECEIVE_CAR_FEATURE,
	CAR_FEATURE_SELECTION
} from '../actionTypes'

export const requestCarFeature = isFetching => {
	return {
		type: REQUEST_CAR_FEATURE,
		isFetching
	}
}

export const setCarFeature = carFeature => {
	return {
		type: RECEIVE_CAR_FEATURE,
		carFeature
	}
}

export const fetchCarFeature = isFetching => (dispatch, getState) => {
	dispatch(requestCarFeature(isFetching))
	return fetch('../../car-features.json')
		.then(response => response.json())
		.then(json => dispatch(setCarFeature(json)))
}

export const carFeatureSelection = id => {
	return {
		type: CAR_FEATURE_SELECTION,
		id
	}
}
