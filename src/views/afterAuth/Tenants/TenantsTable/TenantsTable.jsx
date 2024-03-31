import React, { useState, useEffect } from 'react';
import { Box, Button, Download, Dropdown, SearchBar, Table, Typography } from '../../../../components';
import './TenantsTable.scss';
import Name from './Name/Name';
import Country from './Country/Country';
import Continent from './Continent/Continent';
import Contact from './Contact/Contact';
import Date from './Date/Date';
import Gender from './Gender/Gender';
import Status from './Status/Status';
import { useNavigate } from 'react-router-dom';
import { pathname } from '../../../../router/pathname';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTenantDetails } from '../Redux/actionCreator';

const TenantsTable = () => {
	const navigateTo = useNavigate();
	const [selectValue, setSelectValue] = useState('');
	const [continentValue, setContinentValue] = useState('');
	const { tenants } = useSelector((state) => state);
	const { allTenantsDetails, loading } = tenants;

	const menu = [
		{
			continent: 'Name',
		},
		{
			continent: 'Aadhar Number',
		},
		{
			continent: 'Phone Number',
		},
	];

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getAllTenantDetails());
	}, []);

	const tableHeader = [
		{ headerName: 'Name', field: 'name' },
		{ headerName: 'Email', field: 'email' },
		{ headerName: 'Contact', field: 'contact' },
		{ headerName: 'Emergency Contact Number', field: 'emergencyContactNumber' },
		{ headerName: 'Aadhaar Number', field: 'adhaarNumber' },
		{ headerName: 'State', field: 'permanentAddress.state' },
		{ headerName: 'District', field: 'permanentAddress.district' },
		{ headerName: 'Address Pincode', field: 'permanentAddress.pincode' },

		{ headerName: 'Mobile Number', field: 'mobileNo' },
		{ headerName: 'Type', field: 'type' },

		{ headerName: 'Rented Date', field: 'rentedDate' },
		{ headerName: 'Rent Type', field: 'rentType' },
	];
	const handleButtonClick = () => {
		navigateTo(pathname.ADD_TENANT);
	};
	return (
		<Box className="TenantsTable">
			<div className="TenantsTable--Header">
				<div>
					<Typography className="TenantsTable--Title">Tenant List</Typography>
				</div>
				<div className="TenantsTable--HeaderRight">
					<Dropdown
						placeholder="Search by"
						options={menu}
						keyToRead="continent"
						isRequired={true}
						value={continentValue}
						onSelect={(value) => setContinentValue(value?.continent)}
						className="TenantsTable--Dropdown"
					/>
					<SearchBar placeholder="Search users" />
					{/* <Filter /> */}
					{/* <Download
					className="TenantsTable--Download"
					value={selectValue}
					onchange={(value) => handleSelect(value)}
				/> */}
					<Button variant="primary" onClick={handleButtonClick}>
						Add Tenant
					</Button>
				</div>
			</div>
			<Table className="TenantsTable--Table" header={tableHeader} row={allTenantsDetails} />
		</Box>
	);
};

export default TenantsTable;
