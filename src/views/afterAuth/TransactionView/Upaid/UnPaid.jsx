import React from 'react';
import { Table } from '../../../../components';

export const UnPaid = () => {
	// Row Headers
	const columnDefs = [
		{ headerName: 'Tenant Name', field: 'tenantName' },
		{ headerName: 'Transaction Type', field: 'transactionType' },
		{ headerName: 'Amount', field: 'amount' },
		{ headerName: 'Date', field: 'date' },
		{ headerName: 'Status', field: 'status' },
	];

	// Row Data
	const rowData = [
		{ tenantName: 'John Doe', transactionType: 'Rent', amount: 1200, date: '2024-03-01', status: 'Paid' },
		{ tenantName: 'Jane Smith', transactionType: 'Utilities', amount: 80, date: '2024-03-02', status: 'Paid' },
		{
			tenantName: 'Michael Johnson',
			transactionType: 'Late Fee',
			amount: 50,
			date: '2024-03-03',
			status: 'Unpaid',
		},
		{
			tenantName: 'Emily Brown',
			transactionType: 'Security Deposit',
			amount: 1500,
			date: '2024-03-04',
			status: 'Paid',
		},
		// Add more paid transactions as needed
		{ tenantName: 'Sophia Rodriguez', transactionType: 'Rent', amount: 1250, date: '2024-03-10', status: 'Unpaid' },
		{
			tenantName: 'Benjamin Hernandez',
			transactionType: 'Security Deposit',
			amount: 1600,
			date: '2024-03-11',
			status: 'Unpaid',
		},
		{ tenantName: 'Mia Lopez', transactionType: 'Rent', amount: 1200, date: '2024-03-12', status: 'Unpaid' },
		// Add more unpaid transactions as needed
	];

	return (
		<div>
			<Table row={rowData} header={columnDefs} />
		</div>
	);
};
