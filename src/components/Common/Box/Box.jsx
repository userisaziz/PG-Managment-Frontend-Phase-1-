import React from 'react';
import './Box.scss';
const Box = (props) => {
	const { children, className, dark } = props;

	const customClassName = `Box ${className} ${dark && 'Box--dark'} `;

	return <section className={customClassName}>{children}</section>;
};

export default Box;
