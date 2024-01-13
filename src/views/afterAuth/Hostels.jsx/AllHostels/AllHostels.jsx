import React from 'react';
import { Box, Button, Interest, SearchBar, ValueField } from '../../../../components';
import { DoughnutChart } from '../../../../charts';
import './AllHostels.scss';
const AllHostels = () => {
	const doughnutData = {
		labels: [
			{ key: 'Asia', value: '10 lacs' },
			{ key: 'South America', value: '10 lacs' },
		],
		datasets: [
			{
				data: [9, 17],
				hoverOffset: 0,
				cutout: '75%',
				rotation: 270,
				borderRadius: [8, 8],
			},
		],
	};
	const handleButtonClick = () => {
		navigateTo(pathname.ADD_TENANT);
	};
	return (
		<div>
			<Box className="AllHostels--Header">
				<SearchBar placeholder="Search Hostel" />
				<Button variant="primary" onClick={handleButtonClick}>
					Add Hostel
				</Button>
			</Box>
			<Box className="">
				<div className="AllHostels--Sections">
					<div className="AllHostels--LeftSection">
						<DoughnutChart
							data={doughnutData}
							title="Total Beds"
							text="750"
							// className="DashboardView--Labels"
						/>
					</div>

					<div className="AllHostels--MiddleSection">
						<ValueField label="Name">Akash Srivastav</ValueField>
						<ValueField label="Age">26</ValueField>
						<ValueField label="Phone Number">-</ValueField>
						<ValueField label="Gender">Male</ValueField>
						<ValueField label="Email">Siddhantbhoi@gmail.com</ValueField>
						<ValueField label="Country">India</ValueField>
					</div>
					<div className="AllHostels--RightSection">
						{' '}
						<Interest label="Furniture" data={['Celing Fan', 'Table', 'TubeLight']} />
						<div className="AllHostels--ExpenseSection">
							<ValueField label="Monthly Salaries">Akash Srivastav</ValueField>
						</div>
					</div>
				</div>
			</Box>
		</div>
	);
};

export default AllHostels;
