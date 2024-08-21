import React, { useEffect, useState } from 'react';
import { Box, Button, Chip, DashboardCard, ProgressBar, Typography, ViewDetailsCard } from '../../../components/Common';
import { Money, OpenBook, UpArrow, UserIcon } from '../../../assets/icon';
import './Analytics.scss';
import { DoughnutChart, LineChart, PieChart } from '../../../charts';
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
			{ key: 'Hostel 1', value: '10 lacs' },
			{ key: 'Hostel 2', value: '10 lacs' },
			{ key: 'Hostel 3', value: '10 lacs' },
		],
		datasets: [
			{
				data: [9, 17, 3],
				hoverOffset: 0,
				cutout: '5%',
				rotation: 270,
				borderColor: '#231e1e',
				backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'], // Added backgroundColor
				borderRadius: [5, 5, 5],
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
				hoverOffset: 0,
				cutout: '75%',
				rotation: 270,
				borderColor: '#231e1e',
				backgroundColor: ['#FF6384', '#36A2EB'], // Added backgroundColor
				borderRadius: [8, 8],
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
					<PieChart
						className="Analytics--Doughnut"
						data={doughnutData}
						title="Revenue distributed by Hostels"
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
