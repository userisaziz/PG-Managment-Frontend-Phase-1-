import React from 'react';
import { useNavigate } from 'react-router-dom';
import { pathname } from '../../../../../../../router/pathname';
import './RequestId.scss';
import { Typography } from '../../../../../../../components';
const RequestId = ({ data }) => {
	const navigate = useNavigate();
	return (
		<Typography type="Link" onClick={() => navigate(pathname.VIEW_TICKET.replace(':id', data?.id))}>
			{data.request_id ?? '-'}
		</Typography>
	);
};

export default RequestId;
