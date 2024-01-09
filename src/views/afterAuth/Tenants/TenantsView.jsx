import React from 'react';
import { Outlet } from 'react-router-dom';

const TenantsView = () => {
	return (
		<main>
			<Outlet />
		</main>
	);
};

export default TenantsView;
