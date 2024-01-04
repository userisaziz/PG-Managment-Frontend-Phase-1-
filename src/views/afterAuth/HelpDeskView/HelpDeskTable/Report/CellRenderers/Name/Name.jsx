import React from 'react';
import { useNavigate } from 'react-router-dom';
import { pathname } from '../../../../../../../router/pathname';
import './Name.scss';
import { Typography } from '../../../../../../../components';
const Name = ({ data }) => {
	const navigateTo = useNavigate();
	return (
		<Typography type="Link" onClick={() => navigateTo(pathname.VIEW_REPORT.replace(':id', data?.id))}>
			{data?.name ?? '-'}
		</Typography>
	);
};

export default Name;
