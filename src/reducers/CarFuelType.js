import {
	REQUEST_CAR_FUEL,
	RECEIVE_CAR_FUEL
} from '../actionTypes'

let initialCarFuelState = {
	isFetching: false,
	carFuel: []
}

export const carFuelType = (state = initialCarFuelState, action) => {
	switch (action.type) {
		case REQUEST_CAR_FUEL:
			return {
				...state,
				isFetching: true
			}

		case RECEIVE_CAR_FUEL:
			return {
				...state,
				isFetching: false,
				carFuel: action.carFuel
			}

		default:
			return state
	}
}
