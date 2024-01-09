// import { createSlice } from '@reduxjs/toolkit';
// import initialState from './state';

// import {
// 	UserFetchRouteName,
// 	setRouteName,
// 	searchUser,
// 	setTitle,
// 	refundTxn,
// 	searchedUserChargingTransactions,
// 	searchedUserAllData,
// } from './actionCreator';

// export const crmSlice = createSlice({
// 	name: 'dashboard',
// 	initialState,
// 	reducers: {
// 		setRouteNameAndPath: setRouteName,
// 		setCustomer: setTitle,
// 	},
// 	extraReducers: (builder) => {
// 		builder.addCase(UserFetchRouteName.pending, (state) => {
// 			state.loading = true;
// 		});
// 		builder.addCase(UserFetchRouteName.fulfilled, (state, action) => {
// 			state.loading = false;
// 			state.users = action.payload;
// 			state.error = '';
// 		});
// 		builder.addCase(UserFetchRouteName.rejected, (state, action) => {
// 			state.loading = false;
// 			state.users = [];
// 			state.error = action.error.message;
// 		});
// 		builder.addCase(searchUser.pending, (state) => {
// 			state.isLoading = true;
// 			state.isError = false;
// 			state.showUser = false;
// 		});
// 		builder.addCase(searchUser.fulfilled, (state, action) => {
// 			state.isLoading = false;
// 			state.customerId = action?.payload?.payload?.resp?.customer?.id;
// 			state.getUserDetails = action?.payload?.payload?.resp?.customer;
// 			state.error = '';
// 			state.customerCount = action?.payload?.payload?.customerCount;
// 			state.limit = action?.payload?.payload?.resp?.limit;
// 			state.isError = false;
// 			state.showUser = true;
// 			state.isErrorInFetch = false;
// 		});
// 		builder.addCase(searchUser.rejected, (state, action) => {
// 			state.isLoading = false;
// 			state.isError = true;
// 			state.userName = '';
// 			state.customerId = '';
// 			state.error = action.error.message;
// 			state.user = [];
// 			state.showUser = false;
// 			state.isErrorInFetch = true;
// 		});
// 		builder.addCase(searchedUserChargingTransactions.pending, (state) => {
// 			state.isLoading = true;
// 			state.isError = false;
// 			state.showUser = false;
// 		});
// 		builder.addCase(searchedUserChargingTransactions.fulfilled, (state, action) => {
// 			state.isLoading = false;
// 			state.customerId = action?.payload?.payload?.resp?.customer?.id;

// 			state.getUserChargingTransaction = action?.payload?.payload?.resp?.customer[0]?.transactions;
// 			state.error = '';
// 			state.count = action?.payload?.payload?.count;

// 			state.isError = false;
// 			state.showUser = true;
// 		});
// 		builder.addCase(searchedUserChargingTransactions.rejected, (state, action) => {
// 			state.isLoading = false;
// 			state.isError = true;
// 			state.userName = '';
// 			state.customerId = '';
// 			state.error = action.error.message;
// 			state.count = action?.payload?.payload?.count;
// 			state.user = [];
// 			state.showUser = false;
// 		});
// 		///--allData
// 		builder.addCase(searchedUserAllData.pending, (state) => {
// 			state.isLoading = true;
// 			state.isError = false;
// 			state.showUser = false;
// 		});
// 		builder.addCase(searchedUserAllData.fulfilled, (state, action) => {
// 			state.isLoading = false;
// 			state.customerId = action?.payload?.payload?.resp?.customer?.id;
// 			state.getUserDetails = action?.payload?.payload?.resp?.customer;
// 			state.countInAccount = action?.payload?.payload?.count;
// 			state.error = '';
// 			state.isError = false;
// 			state.showUser = true;
// 		});
// 		builder.addCase(searchedUserAllData.rejected, (state, action) => {
// 			state.isLoading = false;
// 			state.isError = true;
// 			state.userName = '';
// 			state.customerId = '';
// 			state.error = action.error.message;
// 			state.user = [];
// 			state.showUser = false;
// 		});

// 		///---------REFUND-------//
// 		builder.addCase(refundTxn.pending, (state) => {
// 			state.isLoading = true;
// 			state.isError = false;
// 			state.showUser = false;
// 		});
// 		builder.addCase(refundTxn.fulfilled, (state, action) => {
// 			state.isLoading = false;
// 			state.error = '';
// 			state.isError = false;
// 		});
// 		builder.addCase(refundTxn.rejected, (state, action) => {
// 			// state.isLoading = false;
// 			// state.isError = true;
// 			state.userName = '';
// 			state.customerId = '';
// 			state.error = action.error.message;
// 			state.user = [];
// 			state.showUser = false;
// 		});
// 	},
// 	// reducer: (states) => {
// 	//     states.addCase(UserFetchRouteName.fulfilled, (state, action) => {
// 	//         state.pathIcon = action.payload;
// 	//     });
// 	// },
// });

// export const { setRouteNameAndPath, setCustomer } = crmSlice.actions;

// export default crmSlice.reducer;
