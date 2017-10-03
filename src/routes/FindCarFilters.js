import React from 'react'
import { Switch, Route } from 'react-router-dom'

import CarBodyType from '../containers/CarBodyType'
import CarBodyTypeAbout from '../containers/CarBodyTypeAbout'
import CarFuelType from '../containers/CarFuelType'
import CarFeatures from '../containers/CarFeatures'

class FindCarFilterRouter extends React.Component {
	render() {
		return (
			<Switch>
				<Route path="/find-car/filters/bodyType" component={CarBodyType} />
				<Route path="/find-car/filters/bodyTypeAbout" component={CarBodyTypeAbout} />
				<Route path="/find-car/filters/fuelType" component={CarFuelType} />
				<Route path="/find-car/filters/features" component={CarFeatures} />
			</Switch>
		)
	}
}

export default FindCarFilterRouter
