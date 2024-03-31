import { createAsyncThunk } from '@reduxjs/toolkit';

import { Get } from '../../../../services/HttpServices/HttpServices';
import { GET_TENANT_DETAILS } from '../../../../api/endpoints';
export const setTitle = (state, action) => {
	state.title = action.payload;
};
export const getAllTenantDetails = createAsyncThunk('tenants/getAllTenantDetails', async (_, thunkAPI) => {
	try {
		let apiUrl = GET_TENANT_DETAILS;
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
