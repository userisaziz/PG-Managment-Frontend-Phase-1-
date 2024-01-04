import React from 'react';

const Divider = ({ width, color, margin }) => {
	const dividerStyle = {
		width: width || '100%',
		height: '1px',
		backgroundColor: color || '#000000',
		margin: margin || 0,
	};

	return <div style={dividerStyle}></div>;
};

export default Divider;
