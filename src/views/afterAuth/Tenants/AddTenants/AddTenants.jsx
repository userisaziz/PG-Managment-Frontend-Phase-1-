import React, { useState } from 'react';
import { Box, Breadcrumb, Button, CustomSelect, Input, Typography } from '../../../../components';
import { pathname } from '../../../../router/pathname';
import './AddTenants.scss';
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
				<Typography className="AddTenants--Name">Residential Address</Typography>
				<Input
					placeholder="Permanent Address"
					type="text"
					isRequired={true}
					onChange={handleChange}
					// onBlur={handleOnBlur}
					value={input}
					// isDisabled={true}
				/>
				<Input
					placeholder="Temporary Address"
					type="number"
					isRequired={true}
					onChange={handleChange}
					// onBlur={handleOnBlur}
					value={input}
					// isDisabled={true}
				/>
				<Input
					placeholder="Pincode"
					type="number"
					isRequired={true}
					onChange={handleChange}
					// onBlur={handleOnBlur}
					value={input}
					// isDisabled={true}
				/>
				<Input
					placeholder="Enter Emergency Contact Number"
					type="number"
					isRequired={true}
					onChange={handleChange}
					// onBlur={handleOnBlur}
					value={input}
					// isDisabled={true}
				/>
				<Input
					placeholder="Enter Email"
					type="email"
					isRequired={true}
					onChange={handleChange}
					// onBlur={handleOnBlur}
					value={input}
					// isDisabled={true}
				/>
				<Typography className="AddTenants--Name">Hostel Allocation</Typography>
				<Input
					placeholder="Permanent Address"
					type="text"
					isRequired={true}
					onChange={handleChange}
					// onBlur={handleOnBlur}
					value={input}
					// isDisabled={true}
				/>
				<CustomSelect />
				<CustomSelect />
				<CustomSelect />
				<Typography className="AddTenants--Name">Fees</Typography>
				<Input
					placeholder="Rent"
					type="text"
					isRequired={true}
					onChange={handleChange}
					// onBlur={handleOnBlur}
					value={input}
					// isDisabled={true}
				/>
				<Input
					placeholder="Deposit"
					type="text"
					isRequired={true}
					onChange={handleChange}
					// onBlur={handleOnBlur}
					value={input}
					// isDisabled={true}
				/>
				<Button variant="secondary">Cancel</Button>
				<Button variant="primary">Submit</Button>
			</Box>
		</div>
	);
};

export default AddTenants;
