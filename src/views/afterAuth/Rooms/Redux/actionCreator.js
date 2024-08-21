import { createAsyncThunk } from '@reduxjs/toolkit';

import { Get, Post } from '../../../../services/HttpServices/HttpServices';
import { GET_ROOM_DETAILS, CREATE_ROOM } from '../../../../api/endpoints';
export const setTitle = (state, action) => {
	state.title = action.payload;
};
export const useGetAllRooms = createAsyncThunk(
	'rooms/GET_ROOM_DETAILS',
	async ({ occupancyStatus, hostelId, floorId }, thunkAPI) => {
		try {
			let apiUrl = GET_ROOM_DETAILS;
			const queryParams = [];
			if (occupancyStatus) queryParams.push(`occupancyStatus=${occupancyStatus}`);
			if (hostelId) queryParams.push(`hostelId=${hostelId}`);
			if (floorId) queryParams.push(`floorId=${floorId}`);
			if (queryParams.length > 0) {
				apiUrl += '?' + queryParams.join('&');
			}
			const response = await Get(apiUrl);
			return response;
		} catch (error) {
			return thunkAPI.rejectWithValue(error?.response?.message);
		}
	}
);
export const useCreateRoom = createAsyncThunk('rooms/create-room', async ({ payload, next }, thunkAPI) => {
	console.log('payload: ', payload);
	try {
		let apiUrl = CREATE_ROOM;
		const response = await Post(apiUrl, payload);
		next();
		return response;
	} catch (error) {
		return thunkAPI.rejectWithValue(error?.response?.message);
	}
});
