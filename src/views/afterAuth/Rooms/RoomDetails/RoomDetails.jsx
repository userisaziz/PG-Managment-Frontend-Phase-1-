import React from 'react';
import './RoomDetails.scss';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Box, DashboardCard, Table, Typography, ValueField } from '../../../../components';
import { Hostel, Room } from '../../../../assets/images';
import { useSelector } from 'react-redux';
import { Money, UserIcon } from '../../../../assets/icon';
import { DoughnutChart, LineChart, VerticalBar } from '../../../../charts';

const RoomDetails = ({ fetchedUser }) => {
	const { tenants } = useSelector((state) => state);
	const { allTenantsDetails, loading } = tenants;

	const slides = [
		{
			img: Hostel,
			title: 'Stay Ahead of the Game: Real-time Insights for Instant Impact',
			subTitle:
				"Gain a strategic advantage with our platform's real-time insights, allowing you to make informed decisions instantly, keeping you ahead in the fast-paced world of sales.",
		},
		{
			img: Hostel,
			title: 'Future-Proof Your Sales: AI-powered Forecasting for Precision Planning',
			subTitle:
				'Plotline facilitates automated transcription and the ability to tag and organize key elements of user interview videos.',
		},
		{
			img: Hostel,
			title: 'Guided Success: Actionable Recommendations for Optimal Sales Performance',
			subTitle:
				'Receive personalized recommendations and actionable insights based on data analysis, empowering you to implement targeted strategies and drive tangible results.',
		},
	];
	const tableHeader = [
		{ headerName: 'Aadhaar Number', field: 'aadhaarNumber' },
		// { headerName: 'Created At', field: 'createdAt' },
		{ headerName: 'Email', field: 'email' },
		{ headerName: 'Emergency Contact Number', field: 'emergencyContactNumber' },
		// { headerName: 'Hostel ID', field: 'hostelId' },
		{ headerName: 'Mobile No.', field: 'mobileNo' },
		{ headerName: 'Name', field: 'name' },
	];
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
	const MonthlyData = {
		labels: ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
		datasets: [
			{
				label: 'Bed Occupancy',
				data: [1, 2, 2, 3, 3, 1, 3, 2, 1, 3, 3, 2],
				// borderColor: '#dbdbdb',
				scales: {
					display: false,
				},
				// fill: true,
				// backgroundColor: 'rgba(103, 181, 253, 0.10)',
				backgroundColor: '#8c8c8c',
			},
			// {
			// 	label: 'Total Sales Closed',
			// 	data: [15, 25, 40, 5, 22, 8, 70, 9, 12, 4, 7, 13],
			// 	borderColor: '#FF6B6B',
			// 	fill: true,
			// 	backgroundColor: 'rgba(255, 107, 107, 0.10)',
			// },
		],
	};
	return (
		<div className="RoomDetails">
			<Box className="HostelDetails--Left">
				<Typography className="HostelDetails--Title">Room No 2</Typography>
				<div className="RoomDetails--ImageContainer">
					<img src={Room} className="HostelDetails--Image" />
				</div>
				<div className="HostelDetails--DetailFields">
					<ValueField label="Address">{fetchedUser?.user[0]?.age}</ValueField>
					<ValueField label="No. of Floors">
						{fetchedUser?.user[0]?.country[0]?.dial_code} {fetchedUser?.user[0]?.mobileNo}
					</ValueField>
					<ValueField label="PG Type">{fetchedUser?.user[0]?.country[0]?.name}</ValueField>
					{/* <ValueField label="Daily Income">{fetchedUser?.user[0]?.pronouns}</ValueField> */}
				</div>
				<Typography className="HostelDetails--Title">Current Occupancy</Typography>
				<div className="HostelDetails--DoughnutChart">
					<DoughnutChart
						data={profileData}
						// title={`Total Beds ${analyticsData?.totalBeds} `}
						text="750"
						className="HostelDetails--Labels"
					/>
				</div>
			</Box>

			<div className="RoomDetails--Content">
				<div className="RoomDetails--Cards">
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
				</div>
				<Box
					className="HostelDetails--ViewDetailsCard"
					title="Recent Tenants"
					// icon={<Button variant="link">View More</Button>}
				>
					<VerticalBar
						data={MonthlyData}
						className="HostelDetails--Line"
						verticalgrid={false}
						horizontalGrid={false}
						dashedBorder={true}
					/>
				</Box>
				<Box className="RoomDetails--TableContainer">
					<Table
						className="RoomDetails--Table"
						header={tableHeader}
						row={allTenantsDetails}
						isLoading={loading}
						totalItems={allTenantsDetails?.length}
						itemsPerPage={10}
						suppressPagination={true}
						currentPageCount={1}
					/>
				</Box>
			</div>
		</div>
	);
};

export default RoomDetails;
