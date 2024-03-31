import { createSlice } from '@reduxjs/toolkit';
import { getAllTenantDetails, setTitle } from './actionCreator';

export const tenantSlice = createSlice({
	name: 'tenants',
	initialState: {
		loading: false,
		isError: false,
		allTenantsDetails: [],
	},
	reducers: {
		setTenantSlice: setTitle,
	},
	extraReducers: (builder) =>
		builder
			.addCase(getAllTenantDetails.pending, (state) => {
				state.isError = false;
				state.loading = true;
			})
			.addCase(getAllTenantDetails.fulfilled, (state, action) => {
				state.isError = false;
				state.loading = false;
				state.allTenantsDetails = action?.payload?.data;
			})
			.addCase(getAllTenantDetails.rejected, (state) => {
				state.isError = true;
				state.loading = false;
			}),
});

export const { setTenantSlice } = tenantSlice.actions;
export default setTenantSlice.reducer;
