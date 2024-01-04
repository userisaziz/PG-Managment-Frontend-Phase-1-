import React, { useState } from 'react';
import { Cross, Globe } from '../../../assets/icon';
import Typography from '../Typography/Typography';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import './PaymentHistory.scss';

const PaymentHistory = (props) => {
	const { data } = props;

	return (
		<div className="PaymentHistory">
			<div className="PaymentHistory--Header">
				<Typography className="PaymentHistory--Title">PaymentHistory</Typography>
			</div>
			<div className="PaymentHistory--Container">
				{data?.map((data) => (
					<div className="PaymentHistory--Content">
						<div className="PaymentHistory--PaymentContainer">
							<Typography className="PaymentHistory--Heading">
								<Globe />
								{data?.heading}
							</Typography>
							<Typography className="PaymentHistory--Number">{data?.total}</Typography>
						</div>
						<div className="PaymentHistory--PaymentContainer">
							<Typography className="PaymentHistory--Date">{data?.date}</Typography>
							<Typography className="PaymentHistory--Date">Paid From {data?.paidFrom}</Typography>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default PaymentHistory;
