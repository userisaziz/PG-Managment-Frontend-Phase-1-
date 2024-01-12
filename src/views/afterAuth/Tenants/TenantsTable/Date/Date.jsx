import React from 'react';

const Date = ({ data }) => {
	return <div>{data?.date ?? '-'}</div>;
};

export default Date;
