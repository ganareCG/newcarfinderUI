import React from 'react'
import { Switch, Route } from 'react-router-dom'

import FindCar from '../containers/FindCar'
import FindCarFilters from '../containers/FindCarFilters'

class AppRoutes extends React.Component {
	render() {
		return (
			<Switch>
				<Route exact path="/find-car" component={FindCar} />
				<Route path="/find-car/filters" component={FindCarFilters} />
			</Switch>
		)
	}
}

export default AppRoutes
