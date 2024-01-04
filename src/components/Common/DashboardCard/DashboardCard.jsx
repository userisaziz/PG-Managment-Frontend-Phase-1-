import React from 'react';
import './DashboardCard.scss';
import Box from '../Box/Box';
const DashboardCard = (props) => {
	const { icon, heading, subheading, onClick, className } = props;
	return (
		<Box className={className}>
			<div className="DashboardCard" onClick={onClick}>
				<div className="DashboardCard--TopContent">
					<div className="DashboardCard--Img">{icon}</div>
				</div>
				<div className="DashboardCard--BottomContent">
					<div className="DashboardCard--Heading">{heading}</div>
					<div className="DashboardCard--Subheading">{subheading}</div>
				</div>
			</div>
		</Box>
	);
};

export default DashboardCard;
