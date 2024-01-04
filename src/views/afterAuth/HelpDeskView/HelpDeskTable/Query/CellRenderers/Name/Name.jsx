import React from 'react';

const Name = ({ data }) => {
	return <div>{data?.name ? data?.name : '-'}</div>;
};

export default Name;
