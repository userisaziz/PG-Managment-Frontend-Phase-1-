import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import { ContentManagement, Dashboard, HelpDesk, Login, TransactionHistory, UserManagement } from '../../pages';
import { pathname } from '../pathname';
import Components from '../../views/beforeAuth/components';

import { ErrorBoundary } from '../../components';
import ForgotPassword from '../../views/beforeAuth/LoginView/ForgotPassword/ForgotPassword';
import ValidateOTP from '../../views/beforeAuth/LoginView/ValidateOTP/ValidateOTP';
import AdminPanelLayout from '../../layouts/AdminPanelLayout/AdminPanelLayout';
import { HelpDeskTable, ViewReport, ViewTicket } from '../../views/afterAuth/HelpDeskView';
import { UserDetail, UserManagementTable } from '../../views/afterAuth/UserManagementView';
import { TransactionTable, TransactionDetails } from '../../views/afterAuth/TransactionHistoryView';
import AddUser from '../../views/afterAuth/UserManagementView/AddUser/AddUser';
const LoginLayout = React.lazy(() => import(`../../layouts/LoginLayout/LoginLayout`));

const router = createBrowserRouter([
	{
		path: pathname.LOGIN,
		element: <LoginLayout />,
		errorElement: <ErrorBoundary />,
		children: [
			{
				index: true,
				element: <Login />,
			},
			{
				path: pathname.FORGOT_PASSWORD,
				element: <ForgotPassword />,
			},
			{
				path: pathname.VALIDATE_OTP,
				element: <ValidateOTP />,
			},
		],
	},

	{
		path: pathname.GENERIC_COMPONENTS,
		element: <Components />,
		errorElement: <ErrorBoundary />,
	},

	{
		path: pathname.SLM_ADMIN,
		element: <AdminPanelLayout />,
		errorElement: <ErrorBoundary />,
		children: [
			{
				index: true,
				element: <Dashboard />,
			},
			{
				path: pathname.USER_MANAGEMENT,
				element: <UserManagement />,
				children: [
					{
						index: true,
						element: <UserManagementTable />,
					},
					{
						path: pathname.USER_DETAIL,
						element: <UserDetail />,
					},
					{
						path: pathname.ADD_TENANT,
						element: <AddUser />,
					},
				],
			},
			{
				path: pathname.HELP_DESK,
				element: <HelpDesk />,
				children: [
					{
						index: true,
						element: <HelpDeskTable />,
					},
					{
						path: pathname.VIEW_TICKET,
						element: <ViewTicket />,
					},
					{
						path: pathname.VIEW_REPORT,
						element: <ViewReport />,
					},
				],
			},
			{
				path: pathname.TRANSACTION_HISTORY,
				element: <TransactionHistory />,
				children: [
					{
						index: true,
						element: <TransactionTable />,
					},
					{
						path: pathname.TRANSACTION_DETAILS,
						element: <TransactionDetails />,
					},
				],
			},
			{
				path: pathname.CONTENT_MANAGEMENT,
				element: <ContentManagement />,
			},
		],
	},
]);

export default router;
