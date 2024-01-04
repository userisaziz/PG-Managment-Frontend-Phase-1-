import React, { useState } from 'react';
import { Box, Button, Download, Dropdown, SearchBar, Table, Typography } from '../../../../components';
import './UserManagementTable.scss';
import Name from './Name/Name';
import Country from './Country/Country';
import Continent from './Continent/Continent';
import Contact from './Contact/Contact';
import Date from './Date/Date';
import Gender from './Gender/Gender';
import Status from './Status/Status';
import { useNavigate } from 'react-router-dom';
import { pathname } from '../../../../router/pathname';

const UserManagementTable = () => {
	const navigateTo = useNavigate();
	const [selectValue, setSelectValue] = useState('');
	const [continentValue, setContinentValue] = useState('');

	const handleSelect = (val) => {
		console.log(val);
		setSelectValue(val);
	};
	const menu = [
		{
			continent: 'ASIA',
		},
		{
			continent: 'EUROPE',
		},
		{
			continent: 'AFRICA',
		},
		{
			continent: 'SOUTH_AMERICA',
		},
		{
			continent: 'NORTH_AMERICA',
		},
		{
			continent: 'AUSTRALIA',
		},
		{
			continent: 'ANTARCTICA',
		},
	];
	const rowData = [
		{
			s_no: 1,
			name: 'Abhishek shrivastava',
			date: '12-04-2023, 11:59 pm',
			country: 'India',
			contact: '9876543445',
			continent: '01',
			gender: 'male',
			status: 'false',
		},
		{
			s_no: 1,
			name: 'Apurva',
			date: '12-04-2023, 11:59 pm',
			country: 'India',
			contact: '9876543445',
			continent: '01',
			gender: 'female',
			status: 'false',
		},
		{
			s_no: 1,
			name: 'Abhishek shrivastava',
			date: '12-04-2023, 11:59 pm',
			country: 'India',
			contact: '9876543445',
			continent: '01',
			gender: 'male',
			status: 'true',
		},
		{
			s_no: 1,
			name: 'Abhishek shrivastava',
			date: '12-04-2023, 11:59 pm',
			country: 'India',
			contact: '9876543445',
			continent: '01',
			gender: 'male',
			status: 'false',
		},
		{
			s_no: 1,
			name: 'Abhishek shrivastava',
			date: '12-04-2023, 11:59 pm',
			country: 'India',
			contact: '9876543445',
			continent: '01',
			gender: 'male',
			status: 'true',
		},
		{
			s_no: 1,
			name: 'Abhishek shrivastava',
			date: '12-04-2023, 11:59 pm',
			country: 'India',
			contact: '9876543445',
			continent: '01',
			gender: 'male',
			status: 'true',
		},
	];
	const tableHeader = [
		{ headerName: 'SL No', field: 's_no', width: 100 },
		{ headerName: 'Name', field: 'name', cellRenderer: Name },
		{ headerName: 'Country', field: 'country', cellRenderer: Country },
		{ headerName: 'Contact', field: 'contact', cellRenderer: Contact },
		{ headerName: 'Continent', field: 'continent', cellRenderer: Continent },
		{ headerName: 'Date of joining', field: 'date', cellRenderer: Date },
		{ headerName: 'Gender', field: 'gender', cellRenderer: Gender },
		{ headerName: 'Status', field: 'status', cellRenderer: Status },
	];
	const handleButtonClick = () => {
		navigateTo(pathname.ADD_TENANT);
	};
	return (
		<Box className="UserManagementTable">
			<div className="UserManagementTable--Header">
				<Typography className="UserManagementTable--Title">Tenant List</Typography>
				<SearchBar placeholder="Search users" />
				<Dropdown
					placeholder="Select Continent"
					options={menu}
					keyToRead="continent"
					isRequired={true}
					value={continentValue}
					onSelect={(value) => setContinentValue(value?.continent)}
					className="UserManagementTable--Dropdown"
				/>
				{/* <Download
					className="UserManagementTable--Download"
					value={selectValue}
					onchange={(value) => handleSelect(value)}
				/> */}
				<Button variant="primary" onClick={handleButtonClick}>
					Add Tenant
				</Button>
			</div>
			<Table className="UserManagementTable--Table" header={tableHeader} row={rowData} />
		</Box>
	);
};

export default UserManagementTable;
