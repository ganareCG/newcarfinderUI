import {
	REQUEST_CAR_FEATURE,
	RECEIVE_CAR_FEATURE,
	CAR_FEATURE_SELECTION
} from '../actionTypes'

let initialCarFeatureState = {
	isFetching: false,
	carFeature: []
}

export const carFeatureType = (state = initialCarFeatureState, action) => {
	switch (action.type) {
		case REQUEST_CAR_FEATURE:
			return {
				...state,
				isFetching: true
			}

		case RECEIVE_CAR_FEATURE:
			return {
				...state,
				isFetching: false,
				carFeature: action.carFeature
			}

		default:
			return state
	}
}

export const carFeatureSelection = (state = [], action) => {
	switch (action.type) {
		case CAR_FEATURE_SELECTION:
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
