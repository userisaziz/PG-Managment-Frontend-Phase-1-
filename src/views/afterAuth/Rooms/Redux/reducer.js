import { createSlice } from '@reduxjs/toolkit';
import { useGetAllRooms, setTitle } from './actionCreator';

export const roomSlice = createSlice({
	name: 'room',
	initialState: {
		loading: false,
		isError: false,
		allRooms: [],
	},
	reducers: {
		setRoomSlice: setTitle,
	},
	extraReducers: (builder) =>
		builder
			.addCase(useGetAllRooms.pending, (state) => {
				state.isError = false;
				state.loading = true;
			})
			.addCase(useGetAllRooms.fulfilled, (state, action) => {
				state.isError = false;
				state.loading = false;
				state.allRooms = action?.payload?.data;
			})
			.addCase(useGetAllRooms.rejected, (state) => {
				state.isError = true;
				state.loading = false;
			}),
});

export const { setRoomSlice } = roomSlice.actions;
export default setRoomSlice.reducer;
