import React from 'react';
import { Box, Button, Chip, Interest, SearchBar, Typography, ValueField } from '../../../../components';
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
							title="Hostel 1"
							text="750"
							// className="DashboardView--Labels"
						/>
					</div>

					<div className="AllHostels--MiddleSection">
						<div className="AllHostels--Beds">
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
						</div>

						<Box dark={true}>
							<ValueField label="Expected Collection" className="AllHostels--InlineValue">
								1 Lakhs
							</ValueField>
						</Box>
						<div className="AllHostels--Expected">
							<Box dark={true}>
								<ValueField label="Collected Amount">1 Lakhs</ValueField>
							</Box>
							<Box dark={true}>
								<ValueField label="Remaining Amount">1 Lakhs</ValueField>
							</Box>
							<Box dark={true}>
								<ValueField label="Overdue Amount">1 Lakhs</ValueField>
							</Box>
						</div>
					</div>
					<div className="AllHostels--RightSection">
						<Box dark={true}>
							<Interest label="Furniture" data={['Celing Fan', 'Table', 'TubeLight']} />
							{/* <Button
								variant="Link"
								className="Questionaire--Button"
								// onClick={() => setIsOpenModal(true)}
							>
								View More
							</Button> */}
						</Box>
						<Box dark={true}>
							<div className="AllHostels--ExpenseSection">
								<ValueField label="Monthly Expenses" className="AllHostels--InlineValue">
									2000
								</ValueField>
								<Button
									variant="Link"
									className="Questionaire--Button"
									// onClick={() => setIsOpenModal(true)}
								>
									View Details
								</Button>
							</div>
						</Box>
					</div>
				</div>
			</Box>
		</div>
	);
};

export default AllHostels;
