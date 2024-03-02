import React from 'react';
import { Box, Button, Dropdown, Input, SearchBar, Typography } from '../../../../components';
import { Filter } from '../../../../assets/icon';
import './AllRooms.scss';
import RoomBadge from '../../../../components/Common/RoomBadge/RoomBadge';
import { DoughnutChart } from '../../../../charts';
import BarChart from '../../../../charts/BarChart/BarChart';
import DoughnutChart2 from '../../../../charts/DoughnutChart/DougnutChart2';
const AllRooms = () => {
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
					<Dropdown>Select Hostel</Dropdown>
					<Dropdown>Select Floor</Dropdown>
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
