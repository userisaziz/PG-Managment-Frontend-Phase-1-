import React, { useState } from 'react';
import { Box, Button, CustomSelect, Dropdown, Input, Typography } from '../../../../../components';
import { Wizard, useWizard } from 'react-use-wizard';
import './PersonalDetails.scss';
import NextPrevButton from '../../../../../components/Tenants/NextPrevButton';
const PersonalDetails = () => {
	const { handleStep, previousStep, nextStep } = useWizard();
	const [input, setInput] = useState();
	const [status, setStatus] = useState();

	const handleChange = (e) => {
		setInput(e.target.value);
	};
	const menu = [
		{
			labe: 'Student',
			value: 'student',
		},
		{
			labe: 'Employed',
			value: 'employed',
		},
		{
			labe: 'Unemployed',
			value: 'unemployed',
		},
	];
	return (
		<>
			<Typography className="PersonalDetails--Name">Personal Details</Typography>
			<div className="PersonalDetails--MobileDiv">
				<Input
					placeholder="Name of the Tenant"
					type="text"
					isRequired={true}
					onChange={handleChange}
					// onBlur={handleOnBlur}
					value={input}
					// isDisabled={true}
				/>
				<Dropdown
					className="PersonalDetails--Dropdown"
					placeholder="Status"
					options={menu}
					keyToRead="value"
					isRequired={true}
					value={status}
					onSelect={(value) => setStatus(value?.label)}
				/>
			</div>

			<div className="PersonalDetails--MobileDiv">
				<span className="PersonalDetails--CodeNumber">+91</span>
				<Input
					placeholder="Contact Number"
					type="number"
					isRequired={true}
					onChange={handleChange}
					// onBlur={handleOnBlur}
					value={input}
					// isDisabled={true}
				/>
			</div>
			<div className="PersonalDetails--MobileDiv">
				<span className="PersonalDetails--CodeNumber">+91</span>
				<Input
					placeholder="Emergency Contact Number"
					type="number"
					isRequired={true}
					onChange={handleChange}
					// onBlur={handleOnBlur}
					value={input}
					// isDisabled={true}
				/>
			</div>

			<Input
				placeholder="Email"
				type="email"
				isRequired={true}
				onChange={handleChange}
				// onBlur={handleOnBlur}
				value={input}
				// isDisabled={true}
			/>
			<Input
				placeholder="Aadhar Number"
				type="number"
				isRequired={true}
				onChange={handleChange}
				// onBlur={handleOnBlur}
				value={input}
				// isDisabled={true}
			/>
			<NextPrevButton />
		</>
	);
};

export default PersonalDetails;
