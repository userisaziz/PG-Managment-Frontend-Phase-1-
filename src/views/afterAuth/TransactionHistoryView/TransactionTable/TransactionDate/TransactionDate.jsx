import React from 'react';

const TransactionDate = ({ data }) => {
	return <div>{data?.date ?? '-'}</div>;
};

export default TransactionDate;
