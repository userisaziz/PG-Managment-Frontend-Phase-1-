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
import Name from './CellRenderers/Name/Name';

const AllHostels = () => {
	const dispatch = useDispatch();
	const navigateTo = useNavigate();
	const { hostels } = useSelector((state) => state);
	// const { allHostels } = hostels;
	const allHostels = [
		{
			_id: '66c3586f742fadca892c7a30',
			name: 'RV PG',
			pgType: 'Male',
			rooms: [
				{
					_id: '66c358c2742fadca892c7a41',
					roomNo: 1,
				},
				{
					_id: '66c51418dce06b13397c481e',
					roomNo: 23,
				},
			],
			floors: [
				{
					_id: '66c3586f742fadca892c7a34',
					floorNumber: 2,
					rooms: ['66c51418dce06b13397c481e'],
				},
				{
					_id: '66c3586f742fadca892c7a32',
					floorNumber: 1,
					rooms: ['66c358c2742fadca892c7a41'],
				},
			],
			totalTenants: 0,
			totalRooms: 2,
			totalBeds: 3,
			totalFloors: 2,
		},
	];
	const handleButtonClick = () => {
		navigateTo(pathname.ADD_HOSTELS);
	};

	useEffect(() => {
		dispatch(useGetAllHostels());
	}, []);

	const hostelHeader = [
		{
			headerName: 'Name',
			field: 'name',
			cellRenderer: Name,
		},
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
