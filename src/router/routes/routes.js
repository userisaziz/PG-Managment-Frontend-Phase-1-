import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import { Dashboard, HelpDesk, Login, TransactionHistory, UserManagement } from '../../pages';
import { pathname } from '../pathname';
import Components from '../../views/beforeAuth/components';

import { ErrorBoundary } from '../../components';
import ForgotPassword from '../../views/beforeAuth/LoginView/ForgotPassword/ForgotPassword';
import ValidateOTP from '../../views/beforeAuth/LoginView/ValidateOTP/ValidateOTP';
import AdminPanelLayout from '../../layouts/AdminPanelLayout/AdminPanelLayout';
import { HelpDeskTable, ViewReport, ViewTicket } from '../../views/afterAuth/HelpDeskView';
import { UserDetail, UserManagementTable } from '../../views/afterAuth/UserManagementView';
import { TransactionTable, TransactionDetails } from '../../views/afterAuth/TransactionHistoryView';
import AddTenants from '../../views/afterAuth/Tenants/AddTenants/AddTenants';
import CRM from '../../views/afterAuth/CRM/CRM';
import Hostels from '../../views/afterAuth/Hostels.jsx/HostelView';
import AllHostels from '../../views/afterAuth/Hostels.jsx/AllHostels/AllHostels';
import TenantsTable from '../../views/afterAuth/Tenants/TenantsTable/TenantsTable';
import Rooms from '../../views/afterAuth/Rooms/Rooms';
import Reports from '../../views/afterAuth/Reports/Reports';
import FinanceView from '../../views/afterAuth/FinanceView/FinanceView';
import FinanceHome from '../../views/afterAuth/FinanceView/FinanceHome/FinanceHome';
import AllRooms from '../../views/afterAuth/Rooms/AllRooms/AllRooms';
import TransactionView from '../../views/afterAuth/TransactionView/TransactionView';
import TransactionHome from '../../views/afterAuth/TransactionView/TransactionHome/TransactionHome';
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
						element: <TenantsTable />,
					},
					{
						path: pathname.USER_DETAIL,
						element: <UserDetail />,
					},
					{
						path: pathname.ADD_TENANT,
						element: <AddTenants />,
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
				path: pathname.HOSTELS,
				element: <Hostels />,
				children: [
					{
						index: true,
						element: <AllHostels />,
					},
					// {
					// 	path: pathname.TRANSACTION_DETAILS,
					// 	element: <TransactionDetails />,
					// },
				],
			},
			{
				path: pathname.ROOMS,
				element: <Rooms />,
				children: [
					{
						index: true,
						element: <AllRooms />,
					},
					// {
					// 	path: pathname.TRANSACTION_DETAILS,
					// 	element: <TransactionDetails />,
					// },
				],
			},
			{
				path: pathname.TRANSACTIONS,
				element: <TransactionView />,
				children: [
					{
						index: true,
						element: <TransactionHome />,
					},
					// {
					// 	path: pathname.TRANSACTION_DETAILS,
					// 	element: <TransactionDetails />,
					// },
				],
			},
			{
				path: pathname.FINANCE,
				element: <FinanceView />,
				children: [
					{
						index: true,
						element: <FinanceHome />,
					},
					// {
					// 	path: pathname.TRANSACTION_DETAILS,
					// 	element: <TransactionDetails />,
					// },
				],
			},
			{
				path: pathname.REPORTS,
				element: <Reports />,
				children: [
					{
						index: true,
						element: <Reports />,
					},
					// {
					// 	path: pathname.TRANSACTION_DETAILS,
					// 	element: <TransactionDetails />,
					// },
				],
			},
		],
	},
]);

export default router;
