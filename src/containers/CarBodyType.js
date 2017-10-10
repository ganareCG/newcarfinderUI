import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Redirect, withRouter } from 'react-router-dom'

import { setNextFilterPath } from '../actionCreators'
import {
	fetchCarBody,
	carBodySelection
} from '../actionCreators/CarBodyType'

import RecommendBodyType from '../components/RecommendBodyType'
import BodyType from '../components/BodyType'
import ListItem from '../components/ListItem'

class CarBodyType extends React.Component {
	constructor(props) {
		super(props)
	}

	componentDidMount() {
		let { fetchCarBody, setNextFilterPath } = this.props

		fetchCarBody()
		setNextFilterPath('/find-car/filters/bodyTypeAbout')
	}

	render() {
		let { carBody, isFetching, carBodySelection, selectedBody } = this.props

		let bodyListElements, recommendationListElements

		if(carBody.length) {
			bodyListElements = carBody.map(item => {
				let activeClass = selectedBody.indexOf(item.id) > -1 ? 'active' : ''

				return (
					<li
						className={"list-other-body-type__item " + activeClass}
						key={item.id}
						onClick={carBodySelection.bind(this, item.id)}>
							<BodyType data={item} />
					</li>
				)
			})

			recommendationListElements = carBody.map(item => {
				let activeClass = selectedBody.indexOf(item.id) > -1 ? 'active' : ''

				if(item.isRecommended) {
					return (
						<li
							className={"list-recommend-body-type__item " + activeClass}
							key={item.id}
							onClick={carBodySelection.bind(this, item.id)}>
								<RecommendBodyType data={item} />
						</li>
					)
				}
			})
		}

		return (
			<div className="form-content">
				{ isFetching ? <div>Loading...</div> : '' }
				<h3 className="subtitle">Recommendations in your budget</h3>
				<ul className="content-list list__recommend-body-type">
					{ recommendationListElements }
				</ul>

				<h3 className="subtitle">Other body type</h3>
				<ul className="content-list list__other-body-type">
					{ bodyListElements }
				</ul>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	const { carBody, isFetching } = state.carBodyType
	const selectedBody = state.carBodySelection

	return {
		carBody,
		isFetching,
		selectedBody
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		fetchCarBody: bindActionCreators(fetchCarBody, dispatch),
		carBodySelection: bindActionCreators(carBodySelection, dispatch),
		setNextFilterPath: bindActionCreators(setNextFilterPath, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(CarBodyType)
