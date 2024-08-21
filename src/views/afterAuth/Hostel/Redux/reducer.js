import { createSlice } from '@reduxjs/toolkit';
import { useGetAllHostels, setTitle } from './actionCreator';

export const hostelSlice = createSlice({
	name: 'hostels',
	initialState: {
		loading: false,
		isError: false,
		allHostels: [],
	},
	reducers: {
		setHostelSlice: setTitle,
	},
	extraReducers: (builder) =>
		builder
			.addCase(useGetAllHostels.pending, (state) => {
				state.isError = false;
				state.loading = true;
			})
			.addCase(useGetAllHostels.fulfilled, (state, action) => {
				state.isError = false;
				state.loading = false;
				state.allHostels = action?.payload?.data;
			})
			.addCase(useGetAllHostels.rejected, (state) => {
				state.isError = true;
				state.loading = false;
			}),
});

export const { setHostelSlice } = hostelSlice.actions;
export default setHostelSlice.reducer;
