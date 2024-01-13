import React, { useState } from 'react';
import { CustomSelect, Input, Typography } from '../../../../../components';

const ResidentialDetails = () => {
	const [input, setInput] = useState();
	const handleChange = (e) => {
		setInput(e.target.value);
	};
	return (
		<div>
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
		</div>
	);
};

export default ResidentialDetails;
