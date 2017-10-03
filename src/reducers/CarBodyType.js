import {
	REQUEST_CAR_BODY,
	RECEIVE_CAR_BODY,
	CAR_BODY_SELECTION
} from '../actionTypes'

let initialCarBodyState = {
	isFetching: false,
	carBody: []
}

export const carBodyType = (state = initialCarBodyState, action) => {
	switch (action.type) {
		case REQUEST_CAR_BODY:
			return {
				...state,
				isFetching: true
			}

		case RECEIVE_CAR_BODY:
			return {
				...state,
				isFetching: false,
				carBody: action.carBody
			}

		default:
			return state
	}
}

export const carBodySelection = (state = [], action) => {
	switch (action.type) {
		case CAR_BODY_SELECTION:
			let itemIndex = state.indexOf(action.id)

			if (itemIndex > -1) {
				let newArray = state

				newArray.splice(itemIndex, 1)
				return [
					...newArray
				]
			}
			else {
				return [
					...state,
					action.id
				]
			}

		default:
			return state
	}
}
