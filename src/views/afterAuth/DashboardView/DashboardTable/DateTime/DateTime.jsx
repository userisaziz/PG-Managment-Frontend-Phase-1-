import React from 'react';

const DateTime = ({ data }) => {
	return <div>{data?.date ?? '-'}</div>;
};

export default DateTime;
