import React, { useState } from 'react';
import { Box, Button, Chip, Interest, SearchBar, Typography, ValueField } from '../../../../components';
import { DoughnutChart, LineChart } from '../../../../charts';
import './ViewHostel.scss';
import DoughnutChart2 from '../../../../charts/DoughnutChart/DougnutChart2';
import LineChart2 from '../../../../charts/LineChart/LineChart2';
import { UpArrow } from '../../../../assets/icon';

const ViewHostel = () => {
	const doughnutData = {
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
	const handleButtonClick = () => {
		navigateTo(pathname.ADD_TENANT);
	};
	const [activeTab, setActiveTab] = useState('Daily');

	const data = {
		labels: ['12 am', '3 am', '6 am', '9 am', '12 pm', '3 pm', '6 pm', '9 pm', '12 am'],
		datasets: [
			{
				label: 'Daily Time Usage',
				data: [9, 17, 3, 5, 10, 11, 56, 10, 11, 7],
				borderColor: '#2B9DEF',
				fill: true,
				backgroundColor: 'rgba(103, 181, 253, 0.10)',
			},
		],
	};

	const WeeklyData = {
		labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
		datasets: [
			{
				label: 'Weekly Time Usage',
				data: [9, 17, 3, 5, 10, 11, 56],
				borderColor: '#2B9DEF',
				fill: true,
				backgroundColor: 'rgba(103, 181, 253, 0.10)',
			},
		],
	};

	const MonthlyData = {
		labels: ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
		datasets: [
			{
				label: 'Monthly Time Usage',
				data: [9, 17, 3, 5, 10, 11, 56, 9, 17, 3, 5, 10],
				borderColor: '#2B9DEF',
				fill: true,
				backgroundColor: 'rgba(103, 181, 253, 0.10)',
			},
		],
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
						{/* <LineChart2 /> */}

						<div className="UseTime">
							<div className="UseTime--Header">
								<Typography className="UseTime--Title"> Usage Time</Typography>
								<div className="UseTime--Chip">
									<Chip
										label="Daily"
										isActive={activeTab === 'Daily'}
										onClick={() => setActiveTab('Daily')}
									/>
									<Chip
										label="Weekly"
										isActive={activeTab === 'Weekly'}
										onClick={() => setActiveTab('Weekly')}
									/>
									<Chip
										label="Monthly"
										isActive={activeTab === 'Monthly'}
										onClick={() => setActiveTab('Monthly')}
									/>
								</div>
							</div>

							<div className="UseTime--TimeDataContent">
								<Typography className="UseTime--Time">342 hrs</Typography>
								<Typography className="UseTime--TimeData">
									<UpArrow /> 23%
								</Typography>
								<Typography className="UseTime--TimeContent">Than Yesterday</Typography>
							</div>

							{activeTab === 'Daily' && (
								<LineChart
									data={data}
									className="UseTime--Line"
									verticalgrid={false}
									dashedBorder={true}
								/>
							)}
							{activeTab === 'Weekly' && (
								<LineChart
									data={WeeklyData}
									className="UseTime--Line"
									verticalgrid={false}
									dashedBorder={true}
								/>
							)}

							{activeTab === 'Monthly' && (
								<LineChart
									data={MonthlyData}
									className="UseTime--Line"
									verticalgrid={false}
									dashedBorder={true}
								/>
							)}
						</div>
					</div>

					<div className="AllHostels--MiddleSection">
						<div className="AllHostels--Beds">
							<ValueField label="Total Rooms">300</ValueField>
							<ValueField label="Total Beds">500</ValueField>
							<ValueField label="Occupied Beds">120</ValueField>
							<ValueField label="Vaccant Beds">80</ValueField>
						</div>
						<div className="AllHostels--Tenants">
							<ValueField label="Total Tenants">300</ValueField>
							<ValueField label="Total Workers">500</ValueField>
						</div>
						<div className="AllHostels--Collection">
							{/* <ValueField label="Expenses" className="AllHostels--InlineValue">
								1 Lakhs
							</ValueField> */}

							{/* <ValueField label="Remaining Amount" className="AllHostels--InlineValue">
								1 Lakhs
							</ValueField>
							<ValueField label="Overdue Amount" className="AllHostels--InlineValue">
								1 Lakhs
							</ValueField> */}
							{/* <ValueField label="Total Tenants" className="AllHostels--InlineValue">
								1 Lakhs
							</ValueField>
							<ValueField label="Total Workers" className="AllHostels--InlineValue">
								1 Lakhs
							</ValueField> */}
						</div>
						<div className="AllHostels--Cards">
							<div className="AllHostels--Card">
								<Typography className="AllHostels--Title">{'Expenses'}</Typography>
								<Typography className="AllHostels--SubTitle">{'24'}</Typography>
							</div>
							<div className="AllHostels--Card">
								<Typography className="AllHostels--Title">{'Collected Amount'}</Typography>
								<Typography className="AllHostels--SubTitle">{'subTitle'}</Typography>
							</div>
							<div className="AllHostels--Card">
								<Typography className="AllHostels--Title">{'Remaing Amount'}</Typography>
								<Typography className="AllHostels--SubTitle">{'subTitle'}</Typography>
							</div>
							<div className="AllHostels--Card">
								<Typography className="AllHostels--Title">{'Overdue Amount'}</Typography>
								<Typography className="AllHostels--SubTitle">{'subTitle'}</Typography>
							</div>
						</div>
						{/* <div className="AllHostels--Expected">
							<ValueField label="Collected Amount">1 Lakhs</ValueField>
							<ValueField label="Remaining Amount">1 Lakhs</ValueField>
							<ValueField label="Overdue Amount">1 Lakhs</ValueField>
						</div> */}
					</div>
				</div>
			</Box>
		</div>
	);
};

export default ViewHostel;
