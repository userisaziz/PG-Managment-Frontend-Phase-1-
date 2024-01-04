import React from 'react';
import { useNavigate } from 'react-router-dom';
import { pathname } from '../../../../../router/pathname';
import { Typography } from '../../../../../components';

const Name = ({ data }) => {
	const navigate = useNavigate();
	return (
		<Typography type="Link" onClick={() => navigate(pathname.TRANSACTION_DETAILS.replace(':id', data?.id))}>
			{data.name ?? '-'}
		</Typography>
	);
};

export default Name;
