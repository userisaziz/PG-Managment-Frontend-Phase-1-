// import { combineReducers } from 'redux';

import { analyticsSlice } from '../views/afterAuth/Analytics/Redux/reducer';
import { hostelSlice } from '../views/afterAuth/Hostel/Redux/reducer';
import { roomSlice } from '../views/afterAuth/Rooms/Redux/reducer';
import { tenantSlice } from '../views/afterAuth/Tenants/Redux/reducer';

export const rootReducer = {
	analytics: analyticsSlice.reducer,
	tenants: tenantSlice.reducer,
	hostels: hostelSlice.reducer,
	rooms: roomSlice.reducer,
};
