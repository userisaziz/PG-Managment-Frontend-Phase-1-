import React, { useState, useEffect } from 'react';
import { Box, Button, Dropdown, SearchBar, Table, Typography } from '../../../../components';
import './TenantsTable.scss';
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
		{ continent: 'Name' },
		{ continent: 'Aadhar Number' },
		{ continent: 'Phone Number' },
		{ continent: 'Payment Date' },
	];

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getAllTenantDetails());
	}, [dispatch]);

	const tableHeader = [
		{ title: 'Name', dataIndex: 'name', key: 'name' },
		{ title: 'Email', dataIndex: 'email', key: 'email' },
		{ title: 'Contact', dataIndex: 'contact', key: 'contact' },
		{ title: 'Emergency Contact Number', dataIndex: 'emergencyContactNumber', key: 'emergencyContactNumber' },
		{ title: 'Aadhaar Number', dataIndex: 'adhaarNumber', key: 'adhaarNumber' },
		{ title: 'State', dataIndex: ['permanentAddress', 'state'], key: 'state' },
		{ title: 'District', dataIndex: ['permanentAddress', 'district'], key: 'district' },
		{ title: 'Address Pincode', dataIndex: ['permanentAddress', 'pincode'], key: 'pincode' },
		{ title: 'Mobile Number', dataIndex: 'mobileNo', key: 'mobileNo' },
		{ title: 'Type', dataIndex: 'type', key: 'type' },
		{ title: 'Rented Date', dataIndex: 'rentedDate', key: 'rentedDate' },
		{ title: 'Rent Type', dataIndex: 'rentType', key: 'rentType' },
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
