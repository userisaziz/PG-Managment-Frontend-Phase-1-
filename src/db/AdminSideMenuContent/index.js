import React from 'react';
import { ContentManagement, Dashboard, HelpDesk, Transaction, UserManagement } from '../../assets/icon';
import { pathname } from '../../router/pathname';

const SideMenuContent = () => [
	{
		title: 'Analytics',
		path: pathname.SLM_ADMIN,
		key: 'dashboard',
		icon: <Dashboard />,
	},
	{
		title: 'Tenants',
		path: pathname.USER_MANAGEMENT,
		key: 'user-management',
		icon: <UserManagement />,
	},

	{
		title: 'Hostels/PG',
		path: pathname.HOSTELS,
		key: 'hostel-management',
		icon: <Transaction />,
	},

	{
		title: 'Rooms',
		path: pathname.ROOMS,
		key: 'content-management',
		icon: <ContentManagement />,
	},

	{
		title: 'Expenses',
		path: pathname.HELP_DESK,
		key: 'help-desk',
		icon: <HelpDesk />,
	},
	{
		title: 'Reports',
		path: pathname.REPORTS,
		key: 'reports',
		icon: <HelpDesk />,
	},
];

export default SideMenuContent;
