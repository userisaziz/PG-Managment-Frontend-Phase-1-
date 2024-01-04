import React from 'react';
import { StatusIndicator } from '../../../../../../components';

const Status = ({ data }) => {
	let variant = '';

	if (data?.status === 'Pending') {
		variant = 'pending';
	} else if (data?.status === 'Resolved') {
		variant = 'success';
	}

	return <div>{data?.status ? <StatusIndicator variant={variant} text={data?.status} /> : '-'}</div>;
};

export default Status;
