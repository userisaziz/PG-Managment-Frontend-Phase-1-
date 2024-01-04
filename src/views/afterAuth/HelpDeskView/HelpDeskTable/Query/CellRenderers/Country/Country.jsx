import React from 'react';

const Country = ({ data }) => {
	return <div>{data?.country ? data?.country : '-'}</div>;
};

export default Country;
