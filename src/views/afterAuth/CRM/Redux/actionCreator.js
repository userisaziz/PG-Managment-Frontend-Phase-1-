// import { createAsyncThunk } from '@reduxjs/toolkit';
// import { Pathname } from '../../../../../Pathname';

// import { CRM_REFUND_TXN, CRM_SEARCH_BY } from '../../../../../API/Endpoints';
// import Server from '../../../../../Server';
// import { message } from '../../../../../Components/ToastMsg/ToastMsg';
// export const setRouteName = (state, action) => {
// 	state.pathIcon = action.payload;
// };

// // ---------- API CALL ----------

// export const UserFetchRouteName = createAsyncThunk('dashboard/Users', () => {});
// export const setTitle = (state, action) => {
// 	state.title = action.payload;
// };

// // export const searchUser = createAsyncThunk(
// //     async ({ type, inputVal, page, invoice_type }, thunkAPI) => {
// //         let apiUrl = `${CRM_SEARCH_BY}?${type}=${inputVal}&page=${page}`;

// //         const queryParams = [];
// //         if (invoice_type) queryParams.push(`invoice_type=${invoice_type}`);
// //         if (queryParams.length > 0) {
// //             apiUrl += '?' + queryParams.join('&');
// //         }

// //         const response = await Server.get(apiUrl, true);
// //         if (response.success == true) {
// //             return response;
// //         } else {
// //             throw new Error('Error fetching data:', error);
// //         }
// //     }
// // );

// export const searchUser = createAsyncThunk(
// 	'crm/searchUser',
// 	async ({ type, inputVal, page, invoice_type }, thunkAPI) => {
// 		try {
// 			const response = await Server.get(`${CRM_SEARCH_BY}?${type}=${inputVal}&page=${page}`, true);
// 			if (response.success === true) {
// 				// message.success(response.message);
// 				return response;
// 			} else {
// 				message.error(response?.message);
// 			}
// 		} catch (err) {
// 			message.error(response.message);
// 			return thunkAPI.rejectWithValue(err?.response?.message);
// 		}
// 	}
// );

// export const searchedUserAllData = createAsyncThunk('crm/searchedUserAllData', async ({ username, page }, thunkAPI) => {
// 	try {
// 		let apiUrl = CRM_SEARCH_BY;

// 		const queryParams = [];

// 		if (username) queryParams.push(`username=${username}`);
// 		if (page) queryParams.push(`page=${page}`);
// 		if (queryParams.length > 0) {
// 			apiUrl += '?' + queryParams.join('&');
// 		}
// 		const response = await Server.get(apiUrl, true);
// 		if (response.success === true) {
// 			return response;
// 		} else {
// 			message.error(response?.message);
// 		}
// 	} catch (err) {
// 		message.error(response.message);
// 		return thunkAPI.rejectWithValue(err?.response?.message);
// 	}
// });

// export const searchedUserChargingTransactions = createAsyncThunk(
// 	'crm/searchedUserChargingTransactions',
// 	async ({ username, invoice_type, page }, thunkAPI) => {
// 		try {
// 			let apiUrl = CRM_SEARCH_BY;

// 			const queryParams = [];
// 			if (username) queryParams.push(`username=${username}`);
// 			if (page) queryParams.push(`page=${page}`);
// 			if (invoice_type) queryParams.push(`invoice_type=${invoice_type}`);
// 			if (queryParams.length > 0) {
// 				apiUrl += '?' + queryParams.join('&');
// 			}
// 			const response = await Server.get(apiUrl, true);
// 			if (response.success === true) {
// 				return response;
// 			}
// 		} catch (err) {
// 			message.error(response.message);
// 			// throw new Error('Error fetching data:', error);
// 			return thunkAPI.rejectWithValue(err?.response?.message);
// 		}
// 	}
// );

// export const refundTxn = createAsyncThunk('crm/refundTxn', async (payload, thunkAPI) => {
// 	try {
// 		const response = await Server.post(CRM_REFUND_TXN, payload, true);
// 		if (response.success === true) {
// 			message.success('Refund successfull');
// 			window.location.reload();
// 			return response;
// 		} else {
// 			message.error(response?.message);
// 		}
// 	} catch (err) {
// 		message.error(response.message);
// 		return thunkAPI.rejectWithValue(err?.response?.message);
// 	}
// });
