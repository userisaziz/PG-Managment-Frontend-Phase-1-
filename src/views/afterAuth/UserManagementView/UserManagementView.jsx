import React from 'react';
import { Outlet } from 'react-router-dom';

const UserManagementView = () => {
	return (
		<main>
			<Outlet />
		</main>
	);
};

export default UserManagementView;
