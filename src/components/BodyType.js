import React from 'react'
import PropTypes from 'prop-types'

const BodyType = ({data}) => (
	<div>
		<img src={data.icon} className="item__icon" />
		<h3 className="item__heading">{data.name + "(" + data.count + ")"}</h3>
	</div>
)

BodyType.propTypes = {
	data: PropTypes.object.isRequired
}

export default BodyType
