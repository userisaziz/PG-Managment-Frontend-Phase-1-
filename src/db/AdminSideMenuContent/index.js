// SideMenuContent.jsx
import React from 'react';
import { ContentManagement, Dashboard, HelpDesk, Transaction, UserManagement } from '../../assets/icon';
import { pathname } from '../../router/pathname';

const SideMenuContent = () => [
	{
		title: 'Analytics',
		path: pathname.SLM_ADMIN,
		key: 'dashboard',
		icon: <Dashboard />,
		subMenu: [],
	},
	{
		title: 'Tenants',
		path: pathname.TENANTS,
		key: 'user-management',
		icon: <UserManagement />,
		subMenu: [
			{
				title: 'Tenants List',
				path: pathname.TENANTS_LIST,
				key: 'tenants-list',
			},
			{
				title: 'Add Tenant',
				path: pathname.ADD_TENANT,
				key: 'add-tenant',
			},
		],
	},
	{
		title: 'Property Management',
		path: pathname.HOSTELS,
		key: 'hostel-management',
		icon: <Transaction />,
		subMenu: [
			{
				title: 'Hostels / Update Hostel',
				path: pathname.HOSTELS,
				key: 'hostels',
			},
			{
				title: 'Add Hostel',
				path: pathname.ADD_HOSTELS,
				key: 'add-hostel',
			},
			// {
			// 	title: 'Add Floor',
			// 	path: pathname.ADD_FLOOR,
			// 	key: 'add-hostel',
			// },
		],
	},
	{
		title: 'Rooms',
		path: pathname.ROOMS,
		key: 'rooms-management',
		icon: <ContentManagement />,
		subMenu: [
			{
				title: 'Rooms List / Update Room',
				path: pathname.ROOMS_LIST,
				key: 'rooms-list',
			},
			{
				title: 'Add Room',
				path: pathname.ADD_ROOM,
				key: 'add-room',
			},
		],
	},
	{
		title: 'Transactions',
		path: pathname.TRANSACTIONS,
		key: 'transactions-management',
		icon: <HelpDesk />,
		subMenu: [
			{
				title: 'Transaction History',
				path: pathname.TRANSACTION_HISTORY,
				key: 'transaction-history',
			},
			{
				title: 'Add Transaction',
				path: pathname.ADD_TRANSACTION,
				key: 'add-transaction',
			},
		],
	},
	{
		title: 'Finance',
		path: pathname.FINANCE,
		key: 'finance',
		icon: <HelpDesk />,
		subMenu: [
			{
				title: 'Financial Overview',
				path: pathname.FINANCIAL_OVERVIEW,
				key: 'financial-overview',
			},
		],
	},
];

export default SideMenuContent;
