import React from 'react';

const Reason = ({ data }) => {
	return <div>{data?.reason ?? '-'}</div>;
};

export default Reason;
