import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Redirect, withRouter } from 'react-router-dom'

import { setNextFilterPath } from '../actionCreators'
import {
	carBodySelection
} from '../actionCreators/CarBodyType'

import ListItem from '../components/ListItem'

class CarBodyTypeAbout extends React.Component {
	constructor(props) {
		super(props)
	}

	componentDidMount() {
		let { setNextFilterPath } = this.props

		setNextFilterPath('/find-car/filters/fuelType')
	}

	render() {
		let { carBody, carBodySelection, selectedBody } = this.props

		let listElements;

		if(carBody.length) {
			listElements = carBody.map(item => {
				let activeClass = selectedBody.indexOf(item.id) > -1 ? 'active' : ''

				return (
					<li
						className={"list-body-type__item " + activeClass}
						key={item.id}
						onClick={carBodySelection.bind(this, item.id)}>
							<ListItem data={item} />
					</li>
				)
			})
		}

		return (
			<div className="form-content">
				<ul className="content-list list__body-type">
					{ listElements }
				</ul>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	const { carBody } = state.carBodyType
	const selectedBody = state.carBodySelection

	return {
		carBody,
		selectedBody
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		carBodySelection: bindActionCreators(carBodySelection, dispatch),
		setNextFilterPath: bindActionCreators(setNextFilterPath, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(CarBodyTypeAbout)
