import React from 'react';
import { Outlet } from 'react-router-dom';

const TransactionView = () => {
	return (
		<div>
			<Outlet />
		</div>
	);
};

export default TransactionView;
