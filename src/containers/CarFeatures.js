import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Redirect, withRouter } from 'react-router-dom'

import { setNextFilterPath } from '../actionCreators'
import {
	fetchCarFeature,
	carFeatureSelection
} from '../actionCreators/CarFeatures'

import ListItem from '../components/ListItem'

class CarFeatures extends React.Component {
	constructor(props) {
		super(props)
	}

	componentDidMount() {
		let { fetchCarFeature } = this.props

		fetchCarFeature()
	}

	render() {
		let { carFeature, isFetching, carFeatureSelection, selectedFeature } = this.props

		let listElements;

		if(carFeature.length) {
			listElements = carFeature.map(item => {
				let activeClass = selectedFeature.indexOf(item.id) > -1 ? 'active' : ''

				return (
					<li
						className={"list-feature-type__item " + activeClass}
						key={item.id}
						onClick={carFeatureSelection.bind(this, item.id)}>
							<ListItem data={item} />
					</li>
				)
			})
		}

		return (
			<div className="form-content">
				<p className="form-heading">Choose features you desire most</p>

				{ isFetching ? <div>Loading...</div> : '' }

				<ul className="content-list list__feature-type">
					{ listElements }
				</ul>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	const { carFeature, isFetching } = state.carFeatureType
	const selectedFeature = state.carFeatureSelection

	return {
		carFeature,
		isFetching,
		selectedFeature
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		fetchCarFeature: bindActionCreators(fetchCarFeature, dispatch),
		carFeatureSelection: bindActionCreators(carFeatureSelection, dispatch),
		setNextFilterPath: bindActionCreators(setNextFilterPath, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(CarFeatures)
