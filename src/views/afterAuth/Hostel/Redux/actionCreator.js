import { createAsyncThunk } from '@reduxjs/toolkit';

import { Get, Post } from '../../../../services/HttpServices/HttpServices';
import { CREATE_HOSTEL, GET_HOSTEL_DETAILS } from '../../../../api/endpoints';
export const setTitle = (state, action) => {
	state.title = action.payload;
};
export const useGetAllHostels = createAsyncThunk('hostels/getAllHostels', async (_, thunkAPI) => {
	try {
		let apiUrl = GET_HOSTEL_DETAILS;
		const queryParams = [];

		if (queryParams.length > 0) {
			apiUrl += '?' + queryParams.join('&');
		}
		const response = await Get(apiUrl);
		return response;
	} catch (error) {
		return thunkAPI.rejectWithValue(error?.response?.message);
	}
});
export const useCreateHostel = createAsyncThunk('hostels/create-hostel', async ({ payload, next }, thunkAPI) => {
	console.log('payload: ', payload);
	try {
		let apiUrl = CREATE_HOSTEL;
		const response = await Post(apiUrl, payload);
		next();
		return response;
	} catch (error) {
		return thunkAPI.rejectWithValue(error?.response?.message);
	}
});
