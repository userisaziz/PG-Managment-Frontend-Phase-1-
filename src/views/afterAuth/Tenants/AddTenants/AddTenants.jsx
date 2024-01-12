import React, { useState } from 'react';
import { Box, Breadcrumb, Button, CustomSelect, Input, Typography } from '../../../../components';
import { pathname } from '../../../../router/pathname';
import './AddTenants.scss';
import { Wizard, useWizard } from 'react-use-wizard';
import PersonalDetails from './PersonalDetails/PersonalDetails';
import ResidentialDetails from './ResidentialDetails/ResidentialDetails';
import HostelAllocation from './HostelAllocation/HostelAllocation';
const Step1 = () => {
	const { handleStep, previousStep, nextStep } = useWizard();
	const [input, setInput] = useState();

	const breadCrumbData = [
		{ text: 'User Management', url: pathname.USER_MANAGEMENT },
		{ text: `Add Tenant`, url: pathname.USER_DETAIL },
	];
	const handleChange = (e) => {
		setInput(e.target.value);
	};

	// Attach an optional handler
	handleStep(() => {
		alert('Going to step 2');
	});

	return (
		<>
			<div>1st</div>\
			<Input
				placeholder="Name of the Tenant"
				type="text"
				isRequired={true}
				onChange={handleChange}
				// onBlur={handleOnBlur}
				value={input}
				// isDisabled={true}
			/>
			<button onClick={() => previousStep()}>Previous ⏮️</button>
			<button onClick={() => nextStep()}>Next ⏭</button>
		</>
	);
};
const Step2 = () => {
	const { handleStep, previousStep, nextStep } = useWizard();

	// Attach an optional handler
	handleStep(() => {
		alert('Going to step 3');
	});

	return (
		<>
			<div>2nd</div>
			<button onClick={() => previousStep()}>Previous ⏮️</button>
			<button onClick={() => nextStep()}>Next ⏭</button>
		</>
	);
};
const AddTenants = () => {
	const [input, setInput] = useState();

	const breadCrumbData = [
		{ text: 'User Management', url: pathname.USER_MANAGEMENT },
		{ text: `Add Tenant`, url: pathname.USER_DETAIL },
	];
	const handleChange = (e) => {
		setInput(e.target.value);
	};
	return (
		<div className="AddTenants">
			<Box className="AddTenants--BreadCrumb">
				<Breadcrumb items={breadCrumbData} />
			</Box>
			<Box className="AddTenants--Form">
				<Wizard>
					<PersonalDetails />
					<ResidentialDetails />
					<HostelAllocation />
				</Wizard>

				{/* <Button variant="secondary">Cancel</Button>
				<Button variant="primary">Submit</Button> */}
			</Box>
		</div>
	);
};

export default AddTenants;
