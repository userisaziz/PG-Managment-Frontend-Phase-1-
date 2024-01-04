import React from 'react';
import { Link } from 'react-router-dom';
import './Breadcrumb.scss';

const Breadcrumb = (props) => {
	const { items } = props;
	return (
		<nav>
			<ol className="Breadcrumb">
				{items.map((item, index) => (
					<li
						key={index}
						className={`Breadcrumb--Breadcrumb-item ${index === items.length - 1 ? 'active' : ''}`}
					>
						{index === items.length - 1 ? item.text : <Link to={item.url}>{item.text}</Link>}
					</li>
				))}
			</ol>
		</nav>
	);
};

export default Breadcrumb;
