import React, { useState, useEffect } from 'react';
import { Box, Button, Dropdown, SearchBar, Table, Typography } from '../../../../components';
import './TenantsTable.scss';
import { useNavigate } from 'react-router-dom';
import { pathname } from '../../../../router/pathname';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTenantDetails } from '../Redux/actionCreator';
import { ReactDropdown } from '../../../../components/Common';

const TenantsTable = () => {
	const navigateTo = useNavigate();
	const [selectValue, setSelectValue] = useState('');
	const [continentValue, setContinentValue] = useState('');
	const { tenants } = useSelector((state) => state);
	const { allTenantsDetails, loading } = tenants;

	const menu = [
		{ label: 'Name', value: 'name' },
		{ label: 'Aadhar Number', value: 'aadhar' },
	];

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getAllTenantDetails());
	}, [dispatch]);

	const tableHeader = [
		{ headerName: 'Aadhaar Number', field: 'aadhaarNumber' },
		// { headerName: 'Created At', field: 'createdAt' },
		{ headerName: 'Email', field: 'email' },
		{ headerName: 'Emergency Contact Number', field: 'emergencyContactNumber' },
		// { headerName: 'Hostel ID', field: 'hostelId' },
		{ headerName: 'Mobile No.', field: 'mobileNo' },
		{ headerName: 'Name', field: 'name' },
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
					<ReactDropdown
						placeholder="Search by"
						options={menu}
						keyToRead="continent"
						isRequired={true}
						value={continentValue}
						onChange={(value) => setContinentValue(value?.continent)}
						className="TenantsTable--Dropdown"
						// onFocus={handleHostels}
					/>
					<SearchBar placeholder="Search users" />
					<Button variant="primary" onClick={handleButtonClick}>
						Add Tenant
					</Button>
				</div>
			</div>
			<Table
				className="TenantsTable--Table"
				header={tableHeader}
				row={allTenantsDetails}
				isLoading={loading}
				totalItems={allTenantsDetails.length}
				itemsPerPage={10}
				currentPageCount={1}
			/>
		</Box>
	);
};

export default TenantsTable;
