import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { browserHistory, Redirect, withRouter } from 'react-router-dom'

class FindCar extends React.Component {
	constructor(props) {
		super(props)
	}

	handleCitySubmit = () => {
		this.props.history.push('/find-car/filters')
	}

	render() {
		return (
			<div className="form-content">
				<p className="form-heading">Select city</p>
				<p className="city-selection">Mumbai</p>
				<button type="button" onClick={this.handleCitySubmit} className="btn">Submit location</button>
			</div>
		)
	}
}

export default FindCar
