import {
	NEXT_FILTER
} from '../actionTypes'


// next button
export const setNextFilterPath = path => {
	return {
		type: NEXT_FILTER,
		path
	}
}
