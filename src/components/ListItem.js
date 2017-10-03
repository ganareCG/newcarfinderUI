import React from 'react'
import PropTypes from 'prop-types'

const ListItem = ({data}) => (
	<div>
		<img src={data.icon} className="item__icon" />
		<div className="item__details">
			<h3 className="item__heading">{data.name}</h3>
			<p className="item__description">{data.description}</p>
		</div>
	</div>
)

ListItem.propTypes = {
	data: PropTypes.object.isRequired
}

export default ListItem
