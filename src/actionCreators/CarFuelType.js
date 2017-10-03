import {
	REQUEST_CAR_FUEL,
	RECEIVE_CAR_FUEL
} from '../actionTypes'

export const requestCarFuel = isFetching => {
	return {
		type: REQUEST_CAR_FUEL,
		isFetching
	}
}

export const setCarFuel = carFuel => {
	return {
		type: RECEIVE_CAR_FUEL,
		carFuel
	}
}

export const fetchCarFuel = isFetching => (dispatch, getState) => {
	dispatch(requestCarFuel(isFetching))
	return fetch('../../car-fuel.json')
		.then(response => response.json())
		.then(json => dispatch(setCarFuel(json)))
}
