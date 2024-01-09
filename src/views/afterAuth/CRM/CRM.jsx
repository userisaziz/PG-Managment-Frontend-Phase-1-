import React, { useEffect } from 'react';
import SearchCustomer from './SearchCustomer/SearchCustomer';
import './CRM.scss';
// import { setRouteNameAndPath } from '../Redux/reducer';
// import { useDispatch, useSelector } from 'react-redux';

const CRM = () => {
	// const dispatch = useDispatch();

	return (
		<div className="Crm__wrapper">
			<SearchCustomer />
		</div>
	);
};

export default CRM;
