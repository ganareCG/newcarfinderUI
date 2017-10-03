import { combineReducers } from 'redux'

import {
	NEXT_FILTER
} from '../actionTypes'

import {
	carBodyType,
	carBodySelection
} from './CarBodyType'

import {
	carFuelType
} from './CarFuelType'

import {
	carFeatureType,
	carFeatureSelection
} from './CarFeatures'

const initialPathState = {
	nextPath: ''
}

const nextFilterPath = (state = initialPathState, action) => {
	switch(action.type) {
		case NEXT_FILTER:
			return {
				...state,
				nextPath: action.path
			}

		default:
			return state
	}	
}

const rootReducer = combineReducers({
	carBodyType,
	carBodySelection,
	nextFilterPath,
	carFuelType,
	carFeatureType,
	carFeatureSelection
})

export default rootReducer
