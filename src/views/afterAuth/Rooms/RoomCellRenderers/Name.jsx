import React from 'react';

import { useNavigate } from 'react-router-dom';
import { pathname } from '../../../../router/pathname';
import { Button } from '../../../../components';
import EyeShow from '../../../../assets/icon/EyeShow/EyeShow';

const Name = ({ data }) => {
	const navigate = useNavigate();
	return (
		<div
			variant="link"
			onClick={() => {
				navigate(pathname.ROOM_DETAILS);
			}}
		>
			<EyeShow />
			{data.roomNo}
		</div>
	);
};

export default Name;
