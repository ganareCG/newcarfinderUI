import React from 'react'
import { Switch, Route } from 'react-router-dom'

import AppRoutes from '../routes'

class Main extends React.Component {
	render() {
		return (
			<div>
				<AppRoutes />
			</div>
		)
	}
}

export default Main
