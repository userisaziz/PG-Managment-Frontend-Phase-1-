import React, { useState } from 'react';
import { Box, Breadcrumb, Input } from '../../../../components';
import { pathname } from '../../../../router/pathname';

const AddUser = () => {
	const [input, setInput] = useState();
	const breadCrumbData = [
		{ text: 'User Management', url: pathname.USER_MANAGEMENT },
		{ text: `Add Tenant`, url: pathname.USER_DETAIL },
	];
	const handleChange = (e) => {
		setInput(e.target.value);
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
			</Box>
		</div>
	);
};

export default AddUser;
