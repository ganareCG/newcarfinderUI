import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Redirect, withRouter } from 'react-router-dom'

import { setNextFilterPath } from '../actionCreators'
import {
	fetchCarFuel
} from '../actionCreators/CarFuelType'

import ListItem from '../components/ListItem'

class CarFuelType extends React.Component {
	constructor(props) {
		super(props)
	}

	componentDidMount() {
		let { fetchCarFuel, setNextFilterPath } = this.props

		fetchCarFuel()
		setNextFilterPath('/find-car/filters/features')
	}

	render() {
		let { carFuel, isFetching } = this.props

		let listElements;

		if(carFuel.length) {
			listElements = carFuel.map(item => {
				return (
					<li className="list-fuel-type__item" key={item.id}>
						<ListItem data={item} />
					</li>
				)
			})
		}

		return (
			<div className="form-content">
				<p className="form-heading">Select your vehicle fuel type</p>

				{ isFetching ? <div>Loading...</div> : '' }

				<ul className="content-list list__fuel-type">
					{ listElements }
				</ul>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	const { carFuel, isFetching } = state.carFuelType

	return {
		carFuel,
		isFetching	
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		fetchCarFuel: bindActionCreators(fetchCarFuel, dispatch),
		setNextFilterPath: bindActionCreators(setNextFilterPath, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(CarFuelType)
