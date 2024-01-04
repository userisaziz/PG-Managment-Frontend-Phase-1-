import React from 'react';

const Reason = ({ data }) => {
	return <div>{data?.Reason ?? '-'}</div>;
};

export default Reason;
