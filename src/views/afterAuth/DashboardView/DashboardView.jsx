import React, { useState } from 'react';
import { Box, Button, Chip, DashboardCard, ProgressBar, Typography, ViewDetailsCard } from '../../../components/Common';
import { Money, OpenBook, UpArrow, UserIcon } from '../../../assets/icon';
import './DashboardView.scss';
import { DoughnutChart, LineChart } from '../../../charts';
import ActivityView from './ActivityView/ActivityView';
import DashboardTable from './DashboardTable/DashboardTable';

const DashboardView = () => {
	const doughnutData = {
		labels: [
			{ key: 'Asia', value: '10 lacs' },
			{ key: 'South America', value: '10 lacs' },
			{ key: 'North America', value: '10 lacs' },
			{ key: 'Australia', value: '10 lacs' },
			{ key: 'Antarctica', value: '10 lcas' },
			{ key: 'Europe', value: '10 lacs' },
			{ key: 'Africa', value: '10 lacs' },
		],
		datasets: [
			{
				data: [9, 17, 3, 5, 10, 11, 56],
				hoverOffset: 0,
				cutout: '75%',
				rotation: 270,
				borderRadius: [8, 8, 8, 8, 8, 8, 8],
			},
		],
	};
	const genderRatioData = {
		labels: [
			{ key: 'Male', value: '1 lacs' },
			{ key: 'Female', value: '10 lacs' },
			{ key: 'Other', value: '2 lacs' },
		],
		datasets: [
			{
				data: [1, 10, 2],
				fill: true,
				backgroundColor: ['#FF6B6B', '#FF946E', '#6F6F6F'],
			},
		],
	};

	const ageCategoryData = {
		labels: [
			{ key: 'From age to', value: '>14 -25 years' },
			{ key: 'From age to', value: '26 - 35 years' },
			{ key: 'From age to', value: '36 - 45 years' },
			{ key: 'From age to', value: '46 - 55 years' },
			{ key: 'From age to', value: '56 & above' },
		],
		datasets: [
			{
				data: [1, 10, 2, 1, 10],
				fill: true,
				backgroundColor: ['#FF946E', '#FF6B6B', '#6F6F6F', '#FFC9CF', '#89C5F5'],
			},
		],
	};

	const profileData = {
		labels: [
			{ key: 'Total profile Blocked', value: '375' },
			{ key: 'Total profile to be Blocked', value: '375' },
		],
		datasets: [
			{
				data: [14, 10],
				fill: true,
				backgroundColor: ['#FF6B6B', '#6F6F6F'],
			},
		],
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
		<React.Fragment>
			<div className="DashboardView--Divider">
				<section className="DashboardView--Left">
					<div className="DashboardView--LeftCards">
						<DashboardCard
							icon={<UserIcon />}
							heading="2.65 Lacs"
							subheading="Total tenant"
							className="DashboardView--Cards"
						/>
						<DashboardCard
							icon={<Money />}
							heading="₹37.5 Cr."
							subheading="Total revenue"
							className="DashboardView--Cards"
						/>
						<DashboardCard
							icon={<OpenBook />}
							heading="995"
							subheading="Total Expenses"
							className="DashboardView--Cards"
						/>
					</div>
					<div>
						<Box>
							<ActivityView />{' '}
						</Box>
					</div>
				</section>

				<Box className="DashboardView--Right">
					<DoughnutChart
						className="DashboardView--Doughnut"
						data={doughnutData}
						title="Revenue distributed per PG"
						text="₹37.5 Cr"
					/>
				</Box>
			</div>

			<div className="DashboardView--MiddleContainer">
				<div className="DashboardView--LeftDoughnutBox">
					{/* <Box className="DashboardView--ContainerDoughnut">
						<DoughnutChart data={genderRatioData} title="Total Expenses" text="2.3 Lacs" />
					</Box>
					<Box className="DashboardView--ContainerDoughnut">
						<DoughnutChart data={ageCategoryData} title="Total Income" text="2.65 Lacs" />
					</Box> */}
					<Box>
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
							{/* <DoughnutChart2
								data={doughnutData}
								title="Hostel 1"
								text="750"
								className="DashboardView--Labels"
							/> */}
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
					</Box>
				</div>
				<Box className="DashboardView--Progress">
					<ProgressBar progress={70} data={{ key: 'Asia', value: '35 lacs' }} />
					<ProgressBar progress={30} data={{ key: 'South america', value: '35 lacs' }} />
					<ProgressBar progress={25} data={{ key: 'North america', value: '35 lacs' }} />
					<ProgressBar progress={30} data={{ key: 'Australia', value: '35 lacs' }} />
					<ProgressBar progress={40} data={{ key: 'Antartica', value: '35 lacs' }} />
					<ProgressBar progress={50} data={{ key: 'Europe', value: '35 lacs' }} />
					<ProgressBar progress={60} data={{ key: 'Africa', value: '35 lacs' }} />
				</Box>
			</div>
			<div className="DashboardView--Divider">
				<ViewDetailsCard
					className="DashboardView--Left"
					title="Recent Tenants"
					icon={<Button variant="link">View More</Button>}
				>
					<DashboardTable />
				</ViewDetailsCard>
				<Box className="DashboardView--Right">
					<DoughnutChart data={profileData} title="Total Beds" text="750" className="DashboardView--Labels" />
				</Box>
			</div>
		</React.Fragment>
	);
};

export default DashboardView;
