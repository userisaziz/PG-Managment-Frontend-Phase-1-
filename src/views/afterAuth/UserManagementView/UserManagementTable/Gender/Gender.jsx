import React from 'react';

const Gender = ({ data }) => {
	return <div>{data?.gender ?? '-'}</div>;
};

export default Gender;
