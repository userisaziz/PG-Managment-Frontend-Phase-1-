import React, { useEffect, useState } from 'react';
import { Box, Button, Chip, Dropdown, Modal, SearchBar, Typography, ValueField } from '../../../components';
import './Room.scss';
import SearchRoom from './SearchRoom/SearchRoom';
import { Filter } from '../../../assets/icon';
const Rooms = () => {
	const [filterModal, setFilterModal] = useState();
	return (
		<div>
			<Box className="Room--Header">
				<SearchBar placeholder="Search Room" />

				<div
					dark={true}
					className="Room--Filter"
					onClick={() => {
						setFilterModal(true);
					}}
				>
					<Filter />
				</div>
				<Button
				// variant={'Secondary'}
				>
					Add Room
				</Button>
			</Box>
			<Box className="Room--Beds">
				<Box dark={true}>
					<ValueField label="Total Rooms">300</ValueField>
				</Box>
				<Box dark={true}>
					<ValueField label="Total Beds">500</ValueField>
				</Box>
				<Box dark={true}>
					<ValueField label="Occupied Beds">120</ValueField>
				</Box>
				<Box dark={true}>
					<ValueField label="Unoccupied Beds">80</ValueField>
				</Box>
			</Box>

			{/* <Box>
				<SearchRoom />
			</Box> */}
			<Box>
				<div className="Room--AvailableRoom">
					<span className="PersonalDetails--CodeNumber">Hostel 1</span>
					<Dropdown placeholder={'Select Floor'} />
				</div>
				<Box className={''} dark={true}>
					{1}
				</Box>
			</Box>

			<Modal
				title="Filter Rooms"
				isOpen={filterModal}
				onClose={setFilterModal}
				className="ProfileDropdown--Modal"
			>
				<div className="ProfileDropdown--Buttons">
					<Button
						variant="secondary"
						onClick={() => {
							setFilterModal(false);
						}}
					>
						No
					</Button>
					<Button type="round" className="ProfileDropdown--DeleteButton">
						Yes
					</Button>
				</div>
			</Modal>
		</div>
	);
};

export default Rooms;
