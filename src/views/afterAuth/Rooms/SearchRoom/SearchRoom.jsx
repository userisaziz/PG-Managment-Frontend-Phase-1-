import React, { useEffect, useState } from 'react';
import { Button, Input, Table, Typography, Dropdown } from '../../../../components';
import './SearchRoom.scss';
const SearchRoom = () => {
	// const dispatch = useDispatch();
	const [selectedOption, setSelectedOption] = useState('Mobile Number');
	const [label, setLable] = useState('mobile number');
	const [inputType, setInputType] = useState('mobile');
	const [continentValue, setContinentValue] = useState('');
	const [inputTypeSelected, setinputTypeSelected] = useState('number');
	const [inputValue, setInputValue] = useState('');
	const [selectedValue, setSelectedValue] = useState('mobile');
	const [currentPage, setCurrentPage] = useState(1);
	const [showDiv, setShowDiv] = useState(false);
	// const { crm } = useSelector((state) => state);
	const { showUser, isError, getUserDetails, isLoading, customerCount, limit } = 'crm';
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
	const options = [
		{
			value: 'mobile',
			label: 'Mobile Number',
			inputLabel: 'mobile number',
			type: 'number',
		},
		{ value: 'email', label: 'Email Id', inputLabel: 'email id', type: 'text' },
		{ value: 'username', label: 'Username', inputLabel: 'username', type: 'text' },
	];

	const handleOptionSelect = (option) => {
		setCurrentPage(1);
		setShowDiv(false);
		setSelectedOption(option.label);
		setLable(option.inputLabel);
		setSelectedValue(option.value);
		setInputValue('');
		setInputType(option.value);
		setinputTypeSelected(option.type);
	};
	const handlePageChange = (page) => {
		setCurrentPage(page);
	};
	// useEffect(() => {
	// 	if (inputValue) {
	// 		dispatch(
	// 			searchUser({
	// 				type: selectedValue,
	// 				inputVal: inputValue,
	// 				page: currentPage - 1,
	// 			})
	// 		);
	// 	}
	// }, [currentPage]);
	const handleChange = (e) => {
		setShowDiv(false);
		setInputValue(e.target.value);
	};

	const handleSearch = () => {
		setShowDiv(true);
		setCurrentPage(1);
		// dispatch(
		// 	searchUser({
		// 		type: selectedValue,
		// 		inputVal: inputValue,
		// 		page: currentPage - 1,
		// 	})
		// );
	};

	function generateErrorMessage(inputValue, label, isError, showDiv) {
		if (isError && inputValue.length > 2 && showDiv) {
			return `No user registered with this ${label ? label : 'value'} `;
		} else if (inputValue && inputValue.length <= 2 && isError) {
			return 'Min 3 length value required';
		} else {
			return '';
		}
	}
	const handleFormSubmit = (e) => {
		e.preventDefault();
		handleSearch();
	};
	return (
		<div className="SearchCustomer">
			<div className="SearchCustomer__wrapper">
				{/* <h4 className="SearchCustomer__heading">Search Customer</h4> */}
				<Typography className="UserManagementTable--Title">Search Room</Typography>
				<form onSubmit={handleFormSubmit}>
					<div className="SearchCustomer__inputs">
						<div className="SearchRoom--Dropdown">
							<Dropdown
								placeholder="Select Hostel"
								options={menu}
								keyToRead="continent"
								isRequired={true}
								value={continentValue}
								onSelect={(value) => setContinentValue(value?.continent)}
								className="UserManagementTable--Dropdown"
							/>
							<Dropdown
								placeholder="Select Floor"
								options={menu}
								keyToRead="continent"
								isRequired={true}
								value={continentValue}
								onSelect={(value) => setContinentValue(value?.continent)}
								className="UserManagementTable--Dropdown"
							/>
							<Dropdown
								placeholder="Select RoomType"
								options={menu}
								keyToRead="continent"
								isRequired={true}
								value={continentValue}
								onSelect={(value) => setContinentValue(value?.continent)}
								className="UserManagementTable--Dropdown"
							/>
							<Dropdown
								placeholder="Select RoomType"
								options={menu}
								keyToRead="continent"
								isRequired={true}
								value={continentValue}
								onSelect={(value) => setContinentValue(value?.continent)}
								className="UserManagementTable--Dropdown"
							/>
						</div>
					</div>
					<div>
						<Input
							value={inputValue}
							handleChange={handleChange}
							required={isError && inputValue && showDiv ? true : false}
							errorMessage={generateErrorMessage(inputValue, label, isError, showDiv)}
							// validate={true}
							type={inputTypeSelected}
							label={selectedOption ? selectedOption : 'Mobile number'}
							// placeholder={`Enter ${label ? label : `${selectedOption}`} `}
							placeholder={'Enter Room Number'}
						/>
					</div>
					<div className="SearchCustomer__button">
						<Button
							variant={inputValue && !showDiv ? 'primary' : 'disabled'}
							disabled={inputValue && !showDiv ? false : true}
							size="small"
							onClick={handleSearch}
							type="submit"
						>
							Search
						</Button>
					</div>
				</form>

				{!isError && showUser && showDiv ? (
					<>
						{isLoading ? (
							<div className="AccountTransaction__preloader">{/* <PreLoader /> */}</div>
						) : (
							<>
								<Typography>Search Results</Typography>
								<Table
									rowData={getUserDetails}
									columnDefs={searchCustomerHeader}
									currentPage={currentPage}
									handlePageChange={handlePageChange}
									count={customerCount}
									limit={limit}
								/>
							</>
						)}
					</>
				) : null}
			</div>
		</div>
	);
};

export default SearchRoom;
