import React from 'react';
import './Name.scss';
import { Button } from '../../../../../../components';
import { useNavigate } from 'react-router-dom';
import { pathname } from '../../../../../../router/pathname';
const Name = ({ data }) => {
	const navigate = useNavigate();
	return (
		<Button
			variant="link"
			onClick={() => {
				navigate(pathname.HOSTEL_DETAILS);
			}}
		>
			{data.name}
		</Button>
	);
};

export default Name;
