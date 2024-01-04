import React, { useState } from 'react';
import { Box, Breadcrumb, Divider, Download, Typography, ValueField } from '../../../../components';
import './TransactionDetails.scss';

const TransactionDetails = ({ data }) => {
	const [selectValue, setSelectValue] = useState('');
	const breadCrumbData = [
		{ text: 'Transaction History', url: '/slm-admin/dashboard/transaction-history' },
		{ text: 'Akash Srivastava', url: '/slm-admin/dashboard/transaction-history/:${id}' },
	];

	const onChange = (e) => {
		setSelectValue(e);
	};

	return (
		<div className="TransactionDetails">
			<Box className="TransactionDetails--BreadCrumb">
				<Breadcrumb items={breadCrumbData} />
			</Box>
			<Box>
				<div className="TransactionDetails--TransactionHeader">
					<Typography className="TransactionDetails--UserName">Akash Srivastava</Typography>
					<Download value={selectValue} onchange={onChange} className="TransactionDetails--DownloadSelect" />
				</div>

				<Box className="TransactionDetails--Values">
					<ValueField label="Transaction Id">23456787656789876</ValueField>
					<ValueField label="Paid From">XX4271</ValueField>
					<ValueField label="Paid To">Razorpay payment</ValueField>
					<ValueField label="Date">11:30 PM, 12 May 2023</ValueField>
				</Box>

				<Typography className="TransactionDetails--ContinentTitle">Continent</Typography>
				<div className="TransactionDetails--Container">
					<div className="TransactionDetails--TransactionDetails">
						<Typography className="TransactionDetails--Name">Europe</Typography>
						<Divider color="#CAC9C94D" margin="0rem 1rem" width="75%" />
						<Typography className="TransactionDetails--Name">₹ 81.00</Typography>
					</div>
					<div className="TransactionDetails--TransactionDetails">
						<Typography className="TransactionDetails--Name">Gst Taxes</Typography>
						<Divider color="#CAC9C94D" margin="0rem 1rem" width="75%" />
						<Typography className="TransactionDetails--Name">₹ 24.58</Typography>
					</div>
				</div>

				<Divider color="#CAC9C94D" width="60%" margin="3.2rem 0rem" />
				<div className="TransactionDetails--TransactionTotal">
					<Typography className="TransactionDetails--NameTotal">Paid amount</Typography>
					<Typography className="TransactionDetails--Name">₹ 105</Typography>
				</div>
			</Box>
		</div>
	);
};

export default TransactionDetails;
