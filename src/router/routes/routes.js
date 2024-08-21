import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import { Dashboard, HelpDesk, Login, TransactionHistory, UserManagement } from '../../pages';
import { pathname } from '../pathname';
import Components from '../../views/beforeAuth/components';

import { ErrorBoundary } from '../../components';
import ForgotPassword from '../../views/beforeAuth/LoginView/ForgotPassword/ForgotPassword';
import ValidateOTP from '../../views/beforeAuth/LoginView/ValidateOTP/ValidateOTP';
import AdminPanelLayout from '../../layouts/AdminPanelLayout/AdminPanelLayout';

import AddTenants from '../../views/afterAuth/Tenants/AddTenants/AddTenants';
import Hostels from '../../views/afterAuth/Hostel/HostelView';
import AllHostels from '../../views/afterAuth/Hostel/AllHostels/AllHostels';
import TenantsTable from '../../views/afterAuth/Tenants/TenantsTable/TenantsTable';
import Rooms from '../../views/afterAuth/Rooms/Rooms';

import AllRooms from '../../views/afterAuth/Rooms/AllRooms/AllRooms';

import AddHostel from '../../views/afterAuth/Hostel/AddHostel/AddHostel';
import AddRoom from '../../views/afterAuth/Rooms/AddRoom/AddRoom';
import BookRoom from '../../views/afterAuth/Rooms/BookRoom/BookRoom';
import TransactionView from '../../views/afterAuth/TransactionView/TransactionView';
import HostelDetails from '../../views/afterAuth/Hostel/HostelDetails/HostelDetails';
import RoomDetails from '../../views/afterAuth/Rooms/RoomDetails/RoomDetails';

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
				path: pathname.TRANSACTION_DETAILS,
				element: <TransactionView />,

			},
			{
				path: pathname.HOSTELS,
				element: <Hostels />,
				children: [
					{
						index: true,
						element: <AllHostels />,
					},
					{
						path: pathname.ADD_HOSTELS,
						element: <AddHostel />,
					},
					{
						path: pathname.HOSTEL_DETAILS,
						element: <HostelDetails />,
					},

				],
			},
			{
				path: pathname.ROOMS,
				element: <Rooms />,
				children: [
					{
						path: pathname.ROOMS_LIST,
						element: <AllRooms />,
					},

					{
						path: pathname.ADD_ROOM,
						element: <AddRoom />,
					},

					{
						path: pathname.BOOK_ROOM,
						element: <BookRoom />,
					},
					{
						path: pathname.ROOM_DETAILS,
						element: <RoomDetails />
					}
					// {
					// 	path: pathname.TRANSACTION_DETAILS,
					// 	element: <TransactionDetails />,
					// },
				],
			},
			{
				path: pathname.TENANTS,
				element: <Rooms />,
				children: [
					{
						path: pathname.TENANTS_LIST,
						element: <TenantsTable />,
					},

					{
						path: pathname.ADD_TENANT,
						element: <AddTenants />,
					},

					{
						path: pathname.BOOK_ROOM,
						element: <BookRoom />,
					},


				],
			},
		],
	},
]);

export default router;
