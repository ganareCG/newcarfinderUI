import styles from '../../style/main.scss';

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
				<div className="header-wrapper">
					<Link className="cw-btn-link" to="/find-car">Find Car</Link>
				</div>
				<div className="content-wrapper">
					<Main />
				</div>
			</div>
		)
	}
}

export default App
