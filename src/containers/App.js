import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Switch, Route, Link, withRouter } from 'react-router-dom'

import Main from './Main'

class App extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div>
				<Link to="/find-car">Find Car</Link>
				<Main />
			</div>
		)
	}
}

export default App
