import React from 'react';
import './ViewReport.scss';
import { Box, Breadcrumb, Typography, ValueField } from '../../../../../../components';
import ProfileDetail from '../../../../UserManagementView/UserDetail/ProfileDetail/ProfileDetail';
import SideContent from '../../../../UserManagementView/UserDetail/SideContent/SideContent';
const ViewReport = () => {
	const breadCrumbData = [
		{ text: 'Help desk', url: '/' },
		{ text: 'Report', url: '/users' },
		{ text: 'Akash Srivastav', url: '/users/rakesh' },
	];
	return (
		<>
			<Box className="ViewReport--BreadCrumb">
				<Breadcrumb items={breadCrumbData} />
			</Box>
			<Box>
				<div className="ViewReport--Header">
					<Typography className="ViewReport--Name">Report</Typography>
				</div>

				<Box className="ViewReport--Values">
					<ValueField label="Reason">Using photos from someone i know</ValueField>
					<ValueField label="Number of report">170</ValueField>
				</Box>
				<Box className="ViewReport--GeneralDetails">
					<ProfileDetail />

					<Box>
						<SideContent />
					</Box>
				</Box>
			</Box>
		</>
	);
};

export default ViewReport;
