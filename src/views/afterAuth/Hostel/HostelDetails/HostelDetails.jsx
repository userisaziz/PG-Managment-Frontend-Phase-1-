import React from 'react';
import './HostelDetails.scss';
import { Hostel, Profile } from '../../../../assets/images';
import { Box, DashboardCard, Typography, ValueField, ViewDetailsCard } from '../../../../components';
import { Money, OpenBook, UserIcon } from '../../../../assets/icon';
import { DoughnutChart, LineChart } from '../../../../charts';
import RoomBadge from '../../../../components/Common/RoomBadge/RoomBadge';
const HostelDetails = ({ fetchedUser }) => {
	const MonthlyData = {
		labels: ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
		datasets: [
			{
				label: 'In Progress',
				data: [26, 45, 18, 9, 33, 12, 98, 9, 20, 3, 55, 23],
				borderColor: '#2B9DEF',
				fill: true,
				backgroundColor: 'rgba(103, 181, 253, 0.10)',
			},
			{
				label: 'Total Sales Closed',
				data: [15, 25, 40, 5, 22, 8, 70, 9, 12, 4, 7, 13],
				borderColor: '#FF6B6B',
				fill: true,
				backgroundColor: 'rgba(255, 107, 107, 0.10)',
			},
		],
	};
	const profileData = {
		labels: [
			{ key: 'Vacant Beds ', value: 30 },
			{ key: 'Occupied Beds', value: 10 },
		],
		datasets: [
			{
				data: [9, 17],
				hoverOffset: 0,
				cutout: '75%',
				rotation: 270,
				borderColor: '#231e1e',
				backgroundColor: ['#FF6384', '#36A2EB'],
				borderRadius: [8, 8],
			},
		],
	};
	return (
		<div className="HostelDetails">
			<Box className="HostelDetails--Left">
				<Typography className="HostelDetails--Title">RV PG</Typography>
				<div className="HostelDetails--ImageContainer">
					<img src={Hostel} className="HostelDetails--Image" />
				</div>
				<div className="HostelDetails--DetailFields">
					<ValueField label="Address">{fetchedUser?.user[0]?.age}</ValueField>
					<ValueField label="No. of Floors">
						{fetchedUser?.user[0]?.country[0]?.dial_code} {fetchedUser?.user[0]?.mobileNo}
					</ValueField>
					<ValueField label="PG Type">{fetchedUser?.user[0]?.country[0]?.name}</ValueField>
					{/* <ValueField label="Daily Income">{fetchedUser?.user[0]?.pronouns}</ValueField> */}
				</div>
				<Typography className="HostelDetails--Title">Total Beds 40</Typography>
				<div className="HostelDetails--DoughnutChart">
					<DoughnutChart
						data={profileData}
						// title={`Total Beds ${analyticsData?.totalBeds} `}
						text="750"
						className="HostelDetails--Labels"
					/>
				</div>
			</Box>
			<div className="HostelDetails--Right">
				<div className="HostelDetails--RightCards">
					<DashboardCard
						icon={<UserIcon />}
						// heading={analyticsData?.totalTenants}
						subheading="Total tenant"
						className="Analytics--Cards"
					/>
					<DashboardCard
						icon={<Money />}
						// heading={`₹ ${analyticsData?.netIncome}`}
						subheading="Total revenue"
						className="Analytics--Cards"
					/>
					<DashboardCard
						icon={<OpenBook />}
						// heading={`₹ ${analyticsData?.expenses}`}
						subheading="Total Expenses"
						className="Analytics--Cards"
					/>
				</div>

				<Box
					className="HostelDetails--ViewDetailsCard"
					title="Recent Tenants"
					// icon={<Button variant="link">View More</Button>}
				>
					<LineChart
						data={MonthlyData}
						className="HostelDetails--Line"
						verticalgrid={false}
						dashedBorder={true}
					/>
				</Box>
				<Box className="HostelDetails--RoomBadge">
					<Typography className="HostelDetails--Title">Total Rooms 40</Typography>
					<RoomBadge />
				</Box>
			</div>
		</div>
	);
};

export default HostelDetails;
