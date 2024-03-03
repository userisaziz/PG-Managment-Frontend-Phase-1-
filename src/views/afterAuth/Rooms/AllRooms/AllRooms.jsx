import React, { useState } from 'react';
import { Box, Button, Dropdown, Input, SearchBar, Typography } from '../../../../components';
import { Filter } from '../../../../assets/icon';
import './AllRooms.scss';
import RoomBadge from '../../../../components/Common/RoomBadge/RoomBadge';
import { DoughnutChart } from '../../../../charts';
import BarChart from '../../../../charts/BarChart/BarChart';
import DoughnutChart2 from '../../../../charts/DoughnutChart/DougnutChart2';
const AllRooms = () => {
	const menu = [
		{ id: 1, value: 'Hostel 1' },
		{ id: 2, value: 'Hostel 2' },
		{ id: 3, value: 'Hostel 3' },
	];
	const floors = [
		{ id: 1, value: 'Floor 1' },
		{ id: 2, value: 'Floor 2' },
	];
	const [selectedItem, setSelectedItem] = useState(menu[0].value);
	const [selectedFloor, setSelectedFloor] = useState(floors[0].value);

	const handleSelect = (val, index) => {
		setSelectedItem({ value: val, id: index });
	};
	const handleSelect2 = (val, index) => {
		setSelectedFloor({ value: val, id: index });
	};
	const doughnutData = {
		labels: [
			{ key: 'Occupancy', value: '10 lacs' },
			{ key: 'Non-Occupancy', value: '10 lacs' },
		],
		datasets: [
			{
				data: [9, 17],
				hoverOffset: 0,
				cutout: '75%',
				rotation: 270,
				borderRadius: [8, 8, 8, 8, 8, 8, 8],
			},
		],
	};
	const labels = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December',
	];

	const data = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 120, 110];
	const doughnutDa = {
		labels: ['Filled', 'Vaccant'],
		datasets: [
			{
				data: [1, 2],
				hoverOffset: 0,
				cutout: '75%',
				rotation: 270,
				borderRadius: [8, 8],
			},
		],
	};
	return (
		<div>
			<Box className="AllRooms--Dropdowns"></Box>

			<Box>
				<div className="AllRooms--Header">
					<Dropdown
						placeholder="Select Hostel"
						options={menu}
						keyToRead="value"
						isRequired={true}
						value={selectedItem}
						onSelect={(value) => handleSelect(value)}
					/>

					<Dropdown
						placeholder="Select Floor"
						options={floors}
						keyToRead="value"
						isRequired={true}
						value={selectedFloor}
						onSelect={(value) => handleSelect2(value)}
					>
						{' '}
						Select Floor
					</Dropdown>
					<SearchBar />
					<Button>Add Room</Button>
					{/* <Filter /> */}
				</div>

				<RoomBadge />
			</Box>
			<Box className="AllRooms--Charts">
				<DoughnutChart2 data={doughnutDa} />
				<BarChart data={data} labels={labels} />
			</Box>
		</div>
	);
};

export default AllRooms;
