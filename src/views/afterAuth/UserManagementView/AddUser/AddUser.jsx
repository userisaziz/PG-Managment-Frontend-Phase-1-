import React, { useState } from 'react';
import { Box, Breadcrumb, Input } from '../../../../components';
import { pathname } from '../../../../router/pathname';
import CustomSelect from '../../../../components/Common/CustomSelect/CustomSelect';

const AddUser = () => {
	const [input, setInput] = useState();
	const [selectedOption, setSelectedOption] = useState();
	const breadCrumbData = [
		{ text: 'User Management', url: pathname.USER_MANAGEMENT },
		{ text: `Add Tenant`, url: pathname.USER_DETAIL },
	];
	const handleChange = (e) => {
		setInput(e.target.value);
	};
	const options = [
		{ value: 10, label: 'Ten' },
		{ value: 20, label: 'Twenty' },
		{ value: 30, label: 'Thirty' },
	];
	const handleOptionSelect = (option) => {
		setSelectedOption(option?.label);
	};

	return (
		<div className="UserDetail">
			<Box className="UserDetail--BreadCrumb">
				<Breadcrumb items={breadCrumbData} />
			</Box>
			<Box>
				<Input
					placeholder="Enter email"
					type="email"
					isRequired={true}
					onChange={handleChange}
					// onBlur={handleOnBlur}
					value={input}
					// isDisabled={true}
				/>
				<CustomSelect
					options={options}
					placeholder="Select an option"
					defaultValue={selectedOption}
					handleOptionSelected={handleOptionSelect}
					optionKey="label"
				/>
			</Box>
			<Box>
				<Input
					placeholder="Enter email"
					type="email"
					isRequired={true}
					onChange={handleChange}
					// onBlur={handleOnBlur}
					value={input}
					// isDisabled={true}
				/>
				<CustomSelect
					options={options}
					placeholder="Select an option"
					defaultValue={selectedOption}
					handleOptionSelected={handleOptionSelect}
					optionKey="label"
				/>
			</Box>
			<Box>
				<Input
					placeholder="Enter email"
					type="email"
					isRequired={true}
					onChange={handleChange}
					// onBlur={handleOnBlur}
					value={input}
					// isDisabled={true}
				/>
				<CustomSelect
					options={options}
					placeholder="Select an option"
					defaultValue={selectedOption}
					handleOptionSelected={handleOptionSelect}
					optionKey="label"
				/>
			</Box>
			<Box>
				<Input
					placeholder="Enter email"
					type="email"
					isRequired={true}
					onChange={handleChange}
					// onBlur={handleOnBlur}
					value={input}
					// isDisabled={true}
				/>
				<CustomSelect
					options={options}
					placeholder="Select an option"
					defaultValue={selectedOption}
					handleOptionSelected={handleOptionSelect}
					optionKey="label"
				/>
			</Box>
		</div>
	);
};

export default AddUser;
