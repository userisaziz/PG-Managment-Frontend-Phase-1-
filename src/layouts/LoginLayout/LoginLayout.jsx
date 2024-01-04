import React from 'react';
import { Outlet } from 'react-router-dom';
import { Banner } from '../../assets/images';

import './LoginLayout.scss';

const LoginLayout = () => {
	return (
		<div className="LoginLayout" style={sx}>
			<Outlet />
		</div>
	);
};

export default LoginLayout;

const sx = {
	background: `linear-gradient(0deg, rgba(9, 9, 9, 0.50) 0%, rgba(9, 9, 9, 0.50) 100%), url(${Banner}), lightgray 50% / cover no-repeat`,
	backgroundPosition: 'center',
	backgroundSize: 'cover',
	backgroundRepeat: 'no-repeat',
};
