import React from 'react';
import './Badge.scss';
const Badge = ({ props, badge = true, style }) => {
	const getBadgeClass = () => {
		const classMap = {
			isPartiallyOccupied: 'isPartially',
			isFullyOccupied: 'isFull',
			isEmpty: 'isEmpty',
		};

		return `badge ${classMap[props]}`;
	};

	return (
		<div className={getBadgeClass()} style={style}>
			{/* {badge ? <span className="badge-dot"></span> : null} */}
			<span className="badge-text">{props}</span>
		</div>
	);
};

export default Badge;
