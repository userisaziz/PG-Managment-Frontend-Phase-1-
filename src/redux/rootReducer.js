// import { combineReducers } from 'redux';

// import { app } from './app/reducer';
// import { dashboardSlice } from '../views/afterAuth/dashboard/redux/reducer';

import { hostelSlice } from '../views/afterAuth/Hostels.jsx/Redux/reducer';
import { tenantSlice, tenantsSlice } from '../views/afterAuth/Tenants/Redux/reducer';
export const rootReducer = {
	// app,
	// dashboard: dashboardSlice.reducer,
	tenants: tenantSlice.reducer,
	hostels: hostelSlice.reducer,
};
