import React, { useEffect, useState } from 'react';
import { Box, Button, Chip, DashboardCard, ProgressBar, Typography, ViewDetailsCard } from '../../../components/Common';
import { Money, OpenBook, UpArrow, UserIcon } from '../../../assets/icon';
import './Analytics.scss';
import { DoughnutChart, LineChart } from '../../../charts';
import ActivityView from './ActivityView/ActivityView';
import DashboardTable from './DashboardTable/DashboardTable';
import { useDispatch, useSelector } from 'react-redux';
import { useGetAnalytics } from './Redux/actionCreator';

const Analytics = () => {
	const dispatch = useDispatch();
	const { analytics } = useSelector((state) => state);
	const { analyticsData } = analytics;
	console.log('analyticsData: ', analyticsData);
	useEffect(() => {
		dispatch(useGetAnalytics({}));
	}, []);
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

	const profileData = {
		labels: [
			{ key: 'Total Vacant Beds ', value: analyticsData?.vacantBeds },
			{ key: 'Total Occupied Beds', value: analyticsData?.occupiedBeds },
		],
		datasets: [
			{
				data: [analyticsData?.vacantBeds, analyticsData?.occupiedBeds],
				fill: true,
				backgroundColor: ['#FF6B6B', '#93d96f'],
			},
		],
	};

	return (
		<React.Fragment>
			<div className="Analytics--Divider">
				<section className="Analytics--Left">
					<div className="Analytics--LeftCards">
						<DashboardCard
							icon={<UserIcon />}
							heading={analyticsData?.totalTenants}
							subheading="Total tenant"
							className="Analytics--Cards"
						/>
						<DashboardCard
							icon={<Money />}
							heading={`₹ ${analyticsData?.netIncome}`}
							subheading="Total revenue"
							className="Analytics--Cards"
						/>
						<DashboardCard
							icon={<OpenBook />}
							heading={`₹ ${analyticsData?.expenses}`}
							subheading="Total Expenses"
							className="Analytics--Cards"
						/>
					</div>
					<div>
						<Box>
							<ActivityView />{' '}
						</Box>
					</div>
				</section>

				<Box className="Analytics--Right">
					<DoughnutChart
						className="Analytics--Doughnut"
						data={doughnutData}
						title="Revenue distributed per PG"
						text="₹37.5 Cr"
					/>
				</Box>
			</div>

			<div className="Analytics--Divider">
				<ViewDetailsCard
					className="Analytics--Left"
					title="Recent Tenants"
					icon={<Button variant="link">View More</Button>}
				>
					<DashboardTable />
				</ViewDetailsCard>
				<Box className="Analytics--Right">
					<DoughnutChart
						data={profileData}
						title={`Total Beds ${analyticsData?.totalBeds} `}
						text="750"
						className="Analytics--Labels"
					/>
				</Box>
			</div>
		</React.Fragment>
	);
};

export default Analytics;
