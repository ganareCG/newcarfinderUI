import React from 'react'
import PropTypes from 'prop-types'

const RecommendBodyType = ({data}) => (
	<div>
		<img src={data.icon} className="item__icon" />
		<h3 className="item__heading">{data.name}</h3>
	</div>
)

RecommendBodyType.propTypes = {
	data: PropTypes.object.isRequired
}

export default RecommendBodyType
