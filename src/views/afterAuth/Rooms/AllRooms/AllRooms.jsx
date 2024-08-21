import React, { useMemo, useState } from 'react';
import { Box, Button, Dropdown, Input, SearchBar, Tab, Table, Typography } from '../../../../components';
import { Filter } from '../../../../assets/icon';
import './AllRooms.scss';
import RoomBadge from '../../../../components/Common/RoomBadge/RoomBadge';
import { DoughnutChart } from '../../../../charts';
import BarChart from '../../../../charts/BarChart/BarChart';
import DoughnutChart2 from '../../../../charts/DoughnutChart/DougnutChart2';
import { useGetAllRooms } from '../Redux/actionCreator';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import RoomStatus from '../RoomCellRenderers/RoomStatus';
import RoomEdit from '../RoomCellRenderers/RoomEdit';
import { ReactDropdown } from '../../../../components/Common';
import { useNavigate } from 'react-router-dom';
import { useGetAllHostels } from '../../Hostel/Redux/actionCreator';
import { pathname } from '../../../../router/pathname';
import Name from '../RoomCellRenderers/Name';
const AllRooms = () => {
	const dispatch = useDispatch();
	const { rooms } = useSelector((state) => state);
	// const { allRooms } = rooms;
	const allRooms = [
		{
			_id: '66c358c2742fadca892c7a41',
			roomNo: 1,
			imageUrl: 'FF',
			floorId: '66c3586f742fadca892c7a32',
			hostelId: '66c3586f742fadca892c7a30',
			tenants: [],
			feeMonth: 1000,
			feePerDay: 10,
			maxOccupancy: 2,
			currentOccupancy: 0,
			createdAt: '2024-08-19T14:37:54.059Z',
			updatedAt: '2024-08-19T14:37:54.059Z',
			__v: 0,
			hostelName: 'RV PG',
			floorNumber: 1,
			occupancyStatus: 'isEmpty',
		},
		{
			_id: '66c51418dce06b13397c481e',
			roomNo: 23,
			imageUrl: 'dd',
			floorId: '66c3586f742fadca892c7a34',
			hostelId: '66c3586f742fadca892c7a30',
			tenants: [],
			feeMonth: 10000,
			feePerDay: 1000,
			maxOccupancy: 1,
			currentOccupancy: 0,
			createdAt: '2024-08-20T22:09:28.350Z',
			updatedAt: '2024-08-20T22:09:28.350Z',
			__v: 0,
			hostelName: 'RV PG',
			floorNumber: 2,
			occupancyStatus: 'isEmpty',
		},
	];
	const types = ['All', 'Empty', 'PartiallyOccupied', 'Occupied'];
	const [selectedHostel, setselectedHostel] = useState();
	const [selectedFloor, setselectedFloor] = useState();
	const [selectedHostelId, setselectedHostelId] = useState();
	const [selectedFloorId, setselectedFloorId] = useState();
	const [active, setActive] = useState(types[0]);

	const navigate = useNavigate();
	const { allHostels } = useSelector((state) => state.hostels); // Assuming you have a hostels reducer

	const [hostelOptions, setHostelOptions] = useState([]);
	const [floorOptions, setFloorOptions] = useState([]);

	const handleAddRoom = () => {
		navigate(pathname.ADD_ROOM);
	};
	useEffect(() => {
		const hostelOptions = allHostels.map((hostel) => ({
			label: hostel.name,
			value: hostel._id,
		}));

		setHostelOptions(hostelOptions);
	}, [allHostels]);

	const getFloorsForHostel = (hostelId) => {
		const selectedHostel = allHostels.find((hostel) => hostel._id === hostelId);
		if (selectedHostel) {
			const floorOptions = selectedHostel.floors.map((floor) => ({
				label: `Floor ${floor.floorNumber}`,
				value: floor._id,
			}));
			setFloorOptions(floorOptions);
		}
	};

	const handleHostels = useMemo(() => {
		dispatch(useGetAllHostels());
		getFloorsForHostel(selectedHostel);
	}, []);
	useEffect(() => {
		dispatch(useGetAllRooms({ occupancyStatus: active, hostelId: selectedHostel, floorId: selectedFloor }));
	}, [active, selectedFloor, selectedHostel]);

	const header = [
		{ headerName: 'hostelName', field: 'hostelName' },
		{ headerName: 'floorNumber', field: 'floorNumber' },
		{ headerName: 'roomNo', field: 'roomNo' },
		{ headerName: 'occupancyStatus', field: 'occupancyStatus', cellRenderer: RoomStatus },
		{ headerName: 'maxOccupancy', field: 'maxOccupancy' },
		{ headerName: 'currentOccupancy', field: 'currentOccupancy' },
		// { headerName: 'imageUrl', field: 'imageUrl' },
		{ headerName: 'feeMonth', field: 'feeMonth' },
		{ headerName: 'feePerDay', field: 'feePerDay' },
		{ headerName: '', cellRenderer: RoomEdit },
	];

	return (
		<div>
			<Box className="AllRooms--Header">
				<ReactDropdown
					options={hostelOptions}
					value={selectedHostel}
					onFocus={handleHostels}
					onChange={(selectedOption) => {
						setselectedHostel(selectedOption.value);
						getFloorsForHostel(selectedOption.value); // Call the function here
					}}
					placeholder="Select Hostel"
					isRequired
				/>

				<ReactDropdown
					options={floorOptions}
					value={selectedFloor}
					onChange={(selectedOption) => {
						setselectedFloor(selectedOption.value);
					}}
					placeholder="Select Floor"
					isRequired
				/>
				<SearchBar />

				<Button onClick={handleAddRoom}>Add Room</Button>
			</Box>
			<Box className="AllRooms--Table">
				<Tab types={types} active={active} changeActive={setActive} className="AllRooms--Tabs" />
				{active === types[0] && <Table row={allRooms} header={header} />}
				{active === types[1] && <Table row={allRooms} header={header} />}
				{active === types[2] && <Table row={allRooms} header={header} />}
				{active === types[3] && <Table row={allRooms} header={header} />}
			</Box>
		</div>
	);
};

export default AllRooms;

// <Box className="AllRooms--Dropdowns"></Box>

// 		<Box>
// 			<div className="AllRooms--Header">
// 				<Dropdown
// 					placeholder="Select Hostel"
// 					options={menu}
// 					keyToRead="value"
// 					isRequired={true}
// 					value={selectedItem}
// 					onSelect={(value) => handleSelect(value)}
// 				/>

// 				<Dropdown
// 					placeholder="Select Floor"
// 					options={floors}
// 					keyToRead="value"
// 					isRequired={true}
// 					value={selectedFloor}
// 					onSelect={(value) => handleSelect2(value)}
// 				>
// 					{' '}
// 					Select Floor
// 				</Dropdown>
// 				<SearchBar />
// 				<Button>Add Room</Button>
// 				{/* <Filter /> */}
// 			</div>

// 			<RoomBadge />
// 		</Box>
