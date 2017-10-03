import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Redirect, withRouter } from 'react-router-dom'

import FindCarFilterRouter from '../routes/FindCarFilters'

class FindCarFilters extends React.Component {
	constructor(props) {
		super(props)
	}

	componentDidMount() {
		this.props.history.push('/find-car/filters/bodyType')
	}

	handleNextClick = () => {
		this.props.history.push(this.props.nextPath)
	}

	render() {
		return (
			<div>
				<FindCarFilterRouter />

				<div className="filters-footer">
					<button
						type="button"
						onClick={this.handleNextClick} className="target-link">Next</button>
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	const { nextPath } = state.nextFilterPath

	return {
		nextPath
	}
}

export default withRouter(connect(mapStateToProps)(FindCarFilters))
