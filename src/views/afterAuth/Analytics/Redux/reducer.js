import { createSlice } from '@reduxjs/toolkit';
import { useGetAnalytics } from './actionCreator';

export const analyticsSlice = createSlice({
	name: 'analytics',
	initialState: {
		loading: false,
		isError: false,
		analyticsData: [],
		revenueByHostel: [],
	},
	reducers: {
		setAnalyticsSlice: useGetAnalytics,
	},
	extraReducers: (builder) =>
		builder
			.addCase(useGetAnalytics.pending, (state) => {
				state.isError = false;
				state.loading = true;
			})
			.addCase(useGetAnalytics.fulfilled, (state, action) => {
				state.isError = false;
				state.loading = false;
				state.analyticsData = action?.payload;
				state.revenueByHostel = action?.payload?.revenueByHostel;
			})
			.addCase(useGetAnalytics.rejected, (state) => {
				state.isError = true;
				state.loading = false;
			}),
});
export const { setAnalyticsSlice } = analyticsSlice.actions;
export default setAnalyticsSlice.reducer;
