import { createSlice } from '@reduxjs/toolkit';
import { getAllHostels, setTitle } from './actionCreator';

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
			.addCase(getAllHostels.pending, (state) => {
				state.isError = false;
				state.loading = true;
			})
			.addCase(getAllHostels.fulfilled, (state, action) => {
				state.isError = false;
				state.loading = false;
				state.allHostels = action?.payload?.data;
			})
			.addCase(getAllHostels.rejected, (state) => {
				state.isError = true;
				state.loading = false;
			}),
});

export const { setHostelSlice } = hostelSlice.actions;
export default setHostelSlice.reducer;
