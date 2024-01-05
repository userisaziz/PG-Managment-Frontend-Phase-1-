import React from 'react';
import { Box, Button, DashboardCard, ProgressBar, ViewDetailsCard } from '../../../components/Common';
import { Money, OpenBook, UserIcon } from '../../../assets/icon';
import './DashboardView.scss';
import { DoughnutChart } from '../../../charts';
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
				fill: true,
				backgroundColor: ['#FF6B6B', '#DD7BFF', '#FFC9CF', '#6F6F6F', '#FF946E', '#FBD051', '#89C5F5'],
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
							subheading="Total query resolved"
							className="DashboardView--Cards"
						/>
						<DashboardCard
							icon={<OpenBook />}
							heading="995"
							subheading="Total query resolved"
							className="DashboardView--Cards"
						/>
					</div>
					<div>
						<Box>
							{/* <ActivityView /> */}
							<DashboardCard
								icon={<OpenBook />}
								heading="995"
								subheading="Total query resolved"
								className="DashboardView--Cards"
							/>
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
					<Box></Box>
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
