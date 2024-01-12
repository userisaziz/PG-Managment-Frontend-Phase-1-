import React from 'react';
import { Typography } from '../../../../../components';
import { useNavigate } from 'react-router';
import { pathname } from '../../../../../router/pathname';

const Name = ({ data }) => {
	const navigateTo = useNavigate();
	return (
		<Typography type="Link" onClick={() => navigateTo(pathname.USER_DETAIL, { state: data })}>
			{data?.name ?? '-'}
		</Typography>
	);
};

export default Name;
