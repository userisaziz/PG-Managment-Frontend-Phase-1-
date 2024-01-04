import React from 'react';

const SerialNumber = ({ data }) => {
	return <div>{data['SL No.'] ?? '-'}</div>;
};

export default SerialNumber;
