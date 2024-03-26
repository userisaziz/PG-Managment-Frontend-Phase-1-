import React from 'react';
import { Table } from '../../../../components';

const Paid = () => {
	// Row Headers
	const columnDefs = [
		{ headerName: 'Tenant Name', field: 'tenantName' },
		{ headerName: 'Transaction Type', field: 'transactionType' },
		{ headerName: 'Amount', field: 'amount' },
		{ headerName: 'Date', field: 'date' },
	];

	// Row Data
	const rowData = [
		{ tenantName: 'John Doe', transactionType: 'Rent', amount: 1200, date: '2024-03-01' },
		{ tenantName: 'Jane Smith', transactionType: 'Utilities', amount: 80, date: '2024-03-02' },
		{ tenantName: 'Michael Johnson', transactionType: 'Late Fee', amount: 50, date: '2024-03-03' },
		{ tenantName: 'Emily Brown', transactionType: 'Security Deposit', amount: 1500, date: '2024-03-04' },
		{ tenantName: 'Robert Davis', transactionType: 'Rent', amount: 1300, date: '2024-03-05' },
		{ tenantName: 'Sarah Wilson', transactionType: 'Utilities', amount: 90, date: '2024-03-06' },
		{ tenantName: 'James Thompson', transactionType: 'Rent', amount: 1200, date: '2024-03-07' },
		{ tenantName: 'Olivia Martinez', transactionType: 'Late Fee', amount: 50, date: '2024-03-08' },
		{ tenantName: 'William Garcia', transactionType: 'Utilities', amount: 85, date: '2024-03-09' },
		{ tenantName: 'Sophia Rodriguez', transactionType: 'Rent', amount: 1250, date: '2024-03-10' },
		{ tenantName: 'Benjamin Hernandez', transactionType: 'Security Deposit', amount: 1600, date: '2024-03-11' },
		{ tenantName: 'Mia Lopez', transactionType: 'Rent', amount: 1200, date: '2024-03-12' },
		// Add more rows as needed
	];

	return (
		<div>
			<Table row={rowData} header={columnDefs} />
		</div>
	);
};

export default Paid;
