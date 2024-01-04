import React from 'react';
import { Outlet } from 'react-router-dom';

const TransactionHistoryView = () => {
	return (
		<main>
			<Outlet />
		</main>
	);
};

export default TransactionHistoryView;
