import React from 'react';
import { Box, PaymentHistory, Referral, Typography } from '../../../../../components';
import { Profile } from '../../../../../assets/images';
import './SideContent.scss';

const SideContent = (props) => {
	const { className } = props;

	const customizeClassName = `SideContent ${className}`;
	const referralData = [
		{
			date: '11:30 PM, 12 May 2023',
			number: '+91 975435665444',
		},
		{
			date: '11:30 PM, 12 May 2023',
			number: '+91 975435665444',
		},
		{
			date: '11:30 PM, 12 May 2023',
			number: '+91 975435665444',
		},
		{
			date: '11:30 PM, 12 May 2023',
			number: '+91 975435665444',
		},
		{
			date: '11:30 PM, 12 May 2023',
			number: '+91 975435665444',
		},
		{
			date: '11:30 PM, 12 May 2023',
			number: '+91 975435665444',
		},
		{
			date: '11:30 PM, 12 May 2023',
			number: '+91 975435665444',
		},
		{
			date: '11:30 PM, 12 May 2023',
			number: '+91 975435665444',
		},
		{
			date: '11:30 PM, 12 May 2023',
			number: '+91 975435665444',
		},
		{
			date: '11:30 PM, 12 May 2023',
			number: '+91 975435665444',
		},
	];
	const paymentData = [
		{ heading: 'Europe', date: '11:30 PM, 12 May 2023', total: '₹ 81.00', paidFrom: 'Axis' },
		{ heading: 'Europe', date: '11:30 PM, 12 May 2023', total: '₹ 81.00', paidFrom: 'Axis' },
		{ heading: 'Europe', date: '11:30 PM, 12 May 2023', total: '₹ 81.00', paidFrom: 'Axis' },
		{ heading: 'Europe', date: '11:30 PM, 12 May 2023', total: '₹ 81.00', paidFrom: 'Axis' },
		{ heading: 'Europe', date: '11:30 PM, 12 May 2023', total: '₹ 81.00', paidFrom: 'Axis' },
		{ heading: 'Europe', date: '11:30 PM, 12 May 2023', total: '₹ 81.00', paidFrom: 'Axis' },
		{ heading: 'Europe', date: '11:30 PM, 12 May 2023', total: '₹ 81.00', paidFrom: 'Axis' },
		{ heading: 'Europe', date: '11:30 PM, 12 May 2023', total: '₹ 81.00', paidFrom: 'Axis' },
		{ heading: 'Europe', date: '11:30 PM, 12 May 2023', total: '₹ 81.00', paidFrom: 'Axis' },
		{ heading: 'Europe', date: '11:30 PM, 12 May 2023', total: '₹ 81.00', paidFrom: 'Axis' },
		{ heading: 'Europe', date: '11:30 PM, 12 May 2023', total: '₹ 81.00', paidFrom: 'Axis' },
	];
	return (
		<div className={customizeClassName}>
			<Box className="SideContent--Box">
				<Typography className="SideContent--Title">General Details</Typography>
				<img src={Profile} alt="image" className="ProfileDetail--Image" />
			</Box>
			<Box>
				<PaymentHistory data={paymentData} />
			</Box>
			<Box>
				<Referral data={referralData} />
			</Box>
		</div>
	);
};

export default SideContent;
