import React, { useEffect, useState } from 'react';
import { Box, Button, Chip, Dropdown, Modal, SearchBar, Typography, ValueField } from '../../../components';
import './Room.scss';
import SearchRoom from './SearchRoom/SearchRoom';
import { Filter } from '../../../assets/icon';
import RoomBadge from '../../../components/Common/RoomBadge/RoomBadge';
const Rooms = () => {
	const [filterModal, setFilterModal] = useState();
	return (
		<div>
			{/* <Box className="Room--Header">
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
			</Box> */}
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
			<Box className="Room--Box">
				<div className="Room--AvailableRoom">
					<Dropdown placeholder={'Select Hostel'} />
					<Dropdown placeholder={'Select Floor'} />
				</div>
				<div dark={true} className="Room--AllRooms">
					{/* <Typography className="AddTenants--Name">Hostel 1</Typography>
					<Typography className="AddTenants--Name">Floor 2</Typography> */}
					<div className="Room--AllRoomBadge">
						<RoomBadge />
						<RoomBadge />
						<RoomBadge />
						<RoomBadge />
						<RoomBadge />
						<RoomBadge />
						<RoomBadge />
						<RoomBadge />
						<RoomBadge />
						<RoomBadge />
						<RoomBadge />
						<RoomBadge />
					</div>
				</div>
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
