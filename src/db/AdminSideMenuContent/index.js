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
		title: 'Maintainance',
		path: pathname.TRANSACTION_HISTORY,
		key: 'transaction-history',
		icon: <Transaction />,
	},

	{
		title: 'Stock',
		path: pathname.CONTENT_MANAGEMENT,
		key: 'content-management',
		icon: <ContentManagement />,
	},

	{
		title: 'Users',
		path: pathname.HELP_DESK,
		key: 'help-desk',
		icon: <HelpDesk />,
	},
	{
		title: 'Meals',
		path: pathname.HELP_DESK,
		key: 'help-desk',
		icon: <HelpDesk />,
	},
];

export default SideMenuContent;
