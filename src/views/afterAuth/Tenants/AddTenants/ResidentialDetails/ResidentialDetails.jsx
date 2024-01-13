import React, { useState } from 'react';
import { CustomSelect, Input, Typography } from '../../../../../components';
import NextPrevButton from '../../../../../components/Tenants/NextPrevButton';
import './ResidentialDetails.scss';
const ResidentialDetails = () => {
	const [input, setInput] = useState();
	const handleChange = (e) => {
		setInput(e.target.value);
	};
	return (
		<>
			<Typography className="AddTenants--Name">Residential Address</Typography>
			<div className="ResidentialDetails--District">
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
					placeholder="Pincode"
					type="number"
					isRequired={true}
					onChange={handleChange}
					// onBlur={handleOnBlur}
					value={input}
					// isDisabled={true}
				/>
			</div>

			<div className="ResidentialDetails--District">
				<Input
					placeholder="District"
					type="number"
					isRequired={true}
					onChange={handleChange}
					// onBlur={handleOnBlur}
					value={input}
					// isDisabled={true}
				/>
				<Input
					placeholder="State"
					type="number"
					isRequired={true}
					onChange={handleChange}
					// onBlur={handleOnBlur}
					value={input}
					// isDisabled={true}
				/>
				<Input
					placeholder="Town"
					type="email"
					isRequired={true}
					onChange={handleChange}
					// onBlur={handleOnBlur}
					value={input}
					// isDisabled={true}
				/>
			</div>

			<Input
				placeholder="Temporary Address"
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

export default ResidentialDetails;
