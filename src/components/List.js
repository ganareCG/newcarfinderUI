import React from 'react'
import PropTypes from 'prop-types'

const List = ({ data, listClass, listElementClass, clickEvent }) => (
	<ul className={listClass}>
		<li
			className={listElementClass + " "}
			key={item.id}
			onClick={carBodySelection.bind(this, item.id)}>
			<RecommendBodyType data={item} />
		</li>
	</ul>
)

List.propTypes = {
	data: PropTypes.object.isRequired,
	listClassName: PropTypes.string,
	clickEvent: PropTypes.func
}

export default List
