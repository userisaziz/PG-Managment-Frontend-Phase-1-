import React, { useState } from 'react';
import { Button, CustomSelect, Input, Typography } from '../../../../../components';
import { Wizard, useWizard } from 'react-use-wizard';
const PersonalDetails = () => {
	const { handleStep, previousStep, nextStep } = useWizard();
	const [input, setInput] = useState();

	const handleChange = (e) => {
		setInput(e.target.value);
	};
	return (
		<>
			<Typography className="AddTenants--Name">Personal Details</Typography>
			<Input
				placeholder="Name of the Tenant"
				type="text"
				isRequired={true}
				onChange={handleChange}
				// onBlur={handleOnBlur}
				value={input}
				// isDisabled={true}
			/>
			<CustomSelect />
			<Input
				placeholder="Contact Number"
				type="number"
				isRequired={true}
				onChange={handleChange}
				// onBlur={handleOnBlur}
				value={input}
				// isDisabled={true}
			/>
			<Input
				placeholder="Emergency Contact Number"
				type="number"
				isRequired={true}
				onChange={handleChange}
				// onBlur={handleOnBlur}
				value={input}
				// isDisabled={true}
			/>
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
			<Button variant="secondary" onClick={() => previousStep()}>
				Previous
			</Button>
			<Button variant="primary" onClick={() => nextStep()}>
				Next
			</Button>
		</>
	);
};

export default PersonalDetails;
