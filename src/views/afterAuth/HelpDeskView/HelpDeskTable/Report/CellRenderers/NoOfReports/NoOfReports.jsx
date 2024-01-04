import React from 'react';

const NoOfReports = ({ data }) => {
	return <div>{data?.no_of_reports ?? '-'}</div>;
};

export default NoOfReports;
