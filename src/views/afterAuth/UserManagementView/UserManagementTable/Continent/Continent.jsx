import React from 'react';

const Continent = ({ data }) => {
	return <div>{data?.continent ?? '-'}</div>;
};

export default Continent;
