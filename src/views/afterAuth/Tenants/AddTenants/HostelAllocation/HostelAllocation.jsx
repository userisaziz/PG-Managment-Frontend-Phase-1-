import React, { useState } from 'react';
import { CustomSelect, Dropdown, Input, Typography } from '../../../../../components';
import NextPrevButton from '../../../../../components/Tenants/NextPrevButton';

const HostelAllocation = () => {
	const [input, setInput] = useState();
	const [hotel, setHotel] = useState();
	const [room, setRoom] = useState();
	const [floor, setFloor] = useState();
	const [roomNo, setroomNo] = useState();
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
			<Typography className="AddTenants--Name">Hostel Allocation</Typography>

			<Dropdown
				placeholder="Select Hostel"
				options={menu}
				keyToRead="value"
				isRequired={true}
				value={status}
				onSelect={(value) => setStatus(value?.label)}
			/>
			<Dropdown
				placeholder="Select Room Type"
				options={menu}
				keyToRead="value"
				isRequired={true}
				value={status}
				onSelect={(value) => setStatus(value?.label)}
			/>
			<Dropdown
				placeholder="Select Floor"
				options={menu}
				keyToRead="value"
				isRequired={true}
				value={status}
				onSelect={(value) => setStatus(value?.label)}
			/>
			<Dropdown
				placeholder="Select Room Number"
				options={menu}
				keyToRead="value"
				isRequired={true}
				value={status}
				onSelect={(value) => setStatus(value?.label)}
			/>
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
			<NextPrevButton />
		</>
	);
};

export default HostelAllocation;
