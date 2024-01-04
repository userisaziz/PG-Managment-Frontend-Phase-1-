import React, { useState } from 'react';
import './Tab.scss';

const Tab = (props) => {
	const { className, active, changeActive, types } = props;

	const customClassName = `Tab ${className} `;

	console.log(active);

	return (
		<div className={customClassName}>
			{types?.map((type) => (
				<button
					key={type}
					className={`Tab--TabName ${active === type ? 'Tab--Active' : ''}`}
					onClick={() => changeActive(type)}
				>
					{type}
				</button>
			))}
		</div>
	);
};

export default Tab;
