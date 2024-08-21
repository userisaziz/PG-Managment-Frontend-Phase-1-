import React, { useState } from 'react';
import { Box, Button, Chip, Interest, SearchBar, Table, Typography, ValueField } from '../../../../components';
import { DoughnutChart, LineChart } from '../../../../charts';
import './AllHostels.scss';
import DoughnutChart2 from '../../../../charts/DoughnutChart/DougnutChart2';
import LineChart2 from '../../../../charts/LineChart/LineChart2';
import { UpArrow } from '../../../../assets/icon';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useGetAllHostels } from '../Redux/actionCreator';
import { useNavigate } from 'react-router-dom';
import { pathname } from '../../../../router/pathname';

const AllHostels = () => {
	const dispatch = useDispatch();
	const navigateTo = useNavigate();
	const { hostels } = useSelector((state) => state);
	const { allHostels } = hostels;
	const handleButtonClick = () => {
		navigateTo(pathname.ADD_HOSTELS);
	};

	useEffect(() => {
		dispatch(useGetAllHostels());
	}, []);

	const hostelHeader = [
		{ headerName: 'Name', field: 'name' },
		{ headerName: 'State', field: 'address.state' },
		{ headerName: 'District', field: 'address.district' },
		{ headerName: 'Pincode', field: 'address.pincode' },
		{ headerName: 'PG Type', field: 'pgType' },
		{ headerName: 'Total Tenants', field: 'totalTenants' },
		{ headerName: 'Total Rooms', field: 'totalRooms' },
		{ headerName: 'Total Beds', field: 'totalBeds' },
		{ headerName: 'Total Floors', field: 'totalFloors' },
	];
	return (
		<div>
			<Box className="AllHostels--Header">
				<SearchBar placeholder="Search Hostel" />
				<Button variant="primary" onClick={handleButtonClick}>
					Add Hostel
				</Button>
			</Box>
			<Box className="AllHostels--Table">
				<Table header={hostelHeader} row={allHostels} />
			</Box>
		</div>
	);
};

export default AllHostels;
