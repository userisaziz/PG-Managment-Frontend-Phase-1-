import React from 'react';

const Query = ({ data }) => {
	return <div className="Query--Table">{data?.query ? data?.query : '-'}</div>;
};

export default Query;
