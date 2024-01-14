import React from 'react';
import './Box.scss';
const Box = (props) => {
	const { children, className, dark, onClick } = props;

	const customClassName = `Box ${className} ${dark && 'Box--dark'} `;

	return (
		<section className={customClassName} onClick={onClick}>
			{children}
		</section>
	);
};

export default Box;
