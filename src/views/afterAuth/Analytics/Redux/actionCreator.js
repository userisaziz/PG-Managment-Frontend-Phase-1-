import { createAsyncThunk } from '@reduxjs/toolkit';
import { ANALYTICS } from '../../../../api/endpoints';
import { Get } from '../../../../services/HttpServices/HttpServices';

export const useGetAnalytics = createAsyncThunk('analytics/home', async (_, thunkAPI) => {
	try {
		let apiUrl = ANALYTICS;
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
