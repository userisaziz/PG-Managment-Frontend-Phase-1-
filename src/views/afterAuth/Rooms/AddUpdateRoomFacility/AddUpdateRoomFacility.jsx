import React from 'react';
import { Box, Button, Input, Typography } from '../../../../components';

const AddUpdateRoomFacility = () => {
	return (
		<Box className="AddHostel">
			<Typography>Add/Facilities a Room-Facilities</Typography>
			<div className="AddHostel--Content">
				<Input />
				<Input />
			</div>

			<div className="AddHostel--ButtonsDiv">
				<Button variant="secondary">Cancel</Button>
				<Button>Submit</Button>
			</div>
		</Box>
	);
};

export default AddUpdateRoomFacility;
