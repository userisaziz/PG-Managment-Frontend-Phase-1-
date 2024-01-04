import React from 'react';
import { Box, Table } from '../../../../components';
import SerialNumber from './SerialNumber/SerialNumber';
import Name from './Name/Name';
import TransactionDate from './TransactionDate/TransactionDate';
import Amount from './Amount/Amount';
import Continent from './Continent/Continent';
import Invoice from './Invoice/Invoice';
import TransactionTableHeader from '../TransactionTableHeader/TransactionTableHeader';
import './TransactionTable.scss';

const Transactiontable = () => {
	const rowData = [
		{
			id: 1,
			'SL No.': 1,
			date: '12-04-2023',
			name: 'Akash Srivastav',
			amount: 90,
			continent: 'Asia',
			invoice: 'INV001',
		},
		{
			id: 2,
			'SL No.': 1,
			date: '12-04-2023',
			name: 'Akash Srivastav',
			amount: 90,
			continent: 'Asia',
			invoice: 'INV001',
		},
		{
			id: 3,
			'SL No.': 1,
			date: '12-04-2023',
			name: 'Akash Srivastav',
			amount: 90,
			continent: 'Asia',
			invoice: 'INV001',
		},
		{
			id: 4,
			'SL No.': 1,
			date: '12-04-2023',
			name: 'Akash Srivastav',
			amount: 90,
			continent: 'Asia',
			invoice: 'INV001',
		},
		{
			id: 5,
			'SL No.': 1,
			date: '12-04-2023',
			name: 'Akash Srivastav',
			amount: 90,
			continent: 'Asia',
			invoice: 'INV001',
		},
		{
			id: 6,
			'SL No.': 1,
			date: '12-04-2023',
			name: 'Akash Srivastav',
			amount: 90,
			continent: 'Asia',
			invoice: 'INV001',
		},
		{
			id: 7,
			'SL No.': 1,
			date: '12-04-2023',
			name: 'Akash Srivastav',
			amount: 90,
			continent: 'Asia',
			invoice: 'INV001',
		},
		{
			id: 8,
			'SL No.': 1,
			date: '12-04-2023',
			name: 'Akash Srivastav',
			amount: 90,
			continent: 'Asia',
			invoice: 'INV001',
		},
		{
			id: 9,
			'SL No.': 1,
			date: '12-04-2023',
			name: 'Akash Srivastav',
			amount: 90,
			continent: 'Asia',
			invoice: 'INV001',
		},
		{
			id: 10,
			'SL No.': 1,
			date: '12-04-2023',
			name: 'Akash Srivastav',
			amount: 90,
			continent: 'Asia',
			invoice: 'INV001',
		},
		{
			id: 11,
			'SL No.': 1,
			date: '12-04-2023',
			name: 'Akash Srivastav',
			amount: 90,
			continent: 'Asia',
			invoice: 'INV001',
		},
	];

	const tableHeader = [
		{ headerName: 'SL No.', field: 'SL No.', cellRenderer: SerialNumber, width: 100 },
		{ headerName: 'Name', field: 'name', cellRenderer: Name },
		{ headerName: 'Date', field: 'date', cellRenderer: TransactionDate },
		{ headerName: 'Amount', field: 'amount', cellRenderer: Amount },
		{ headerName: 'Continent', field: 'continent', cellRenderer: Continent },
		{ headerName: 'Invoice', field: 'invoice', cellRenderer: Invoice },
	];

	return (
		<Box className="TransactionContainer">
			<TransactionTableHeader />
			<Table header={tableHeader} row={rowData} isFullWidth={true} />
		</Box>
	);
};

export default Transactiontable;
