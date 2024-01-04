import React from 'react';

const Amount = ({ data }) => {
	return <div>{data?.amount ?? '-'}</div>;
};

export default Amount;
