import React from 'react';
import { StatusIndicator } from '../../../../../components';

const Status = ({ data }) => {
	console.log(data?.status);
	return (
		<div>
			{data?.status === 'true' ? (
				<StatusIndicator variant="success" text="Verified" />
			) : (
				<StatusIndicator variant="rejected" text="Not-Verified" />
			)}
		</div>
	);
};

export default Status;
