import React, { useState } from 'react';
import { CustomSelect, Input, Typography } from '../../../../../components';

const HostelAllocation = () => {
	const [input, setInput] = useState();
	const handleChange = (e) => {
		setInput(e.target.value);
	};
	return (
		<>
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
		</>
	);
};

export default HostelAllocation;
