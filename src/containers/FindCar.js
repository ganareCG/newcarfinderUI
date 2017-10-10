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
				<h3 className="subtitle">Confirm your City</h3>
				<div className="row">
					<div className="col s12">
						<input type="text" name="SelectCity" placeholder="Select Your City" />
					</div>
				</div>
				<div className="row">
					<div className="col s12">
						<button type="button" onClick={this.handleCitySubmit} className="cw-btn cw-btn-sm cw-btn-default">Submit location</button>
					</div>
				</div>
			</div>
		)
	}
}

export default FindCar
