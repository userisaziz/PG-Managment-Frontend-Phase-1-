import React, { useState } from 'react';
import { Chip, Typography } from '../../../../../components';
import './UseTime.scss';
import { LineChart } from '../../../../../charts';
import { UpArrow } from '../../../../../assets/icon';

const UseTime = () => {
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
		<div className="UseTime">
			<div className="UseTime--Header">
				<Typography className="UseTime--Title"> Usage Time</Typography>
				<div className="UseTime--Chip">
					<Chip label="Daily" isActive={activeTab === 'Daily'} onClick={() => setActiveTab('Daily')} />
					<Chip label="Weekly" isActive={activeTab === 'Weekly'} onClick={() => setActiveTab('Weekly')} />
					<Chip label="Monthly" isActive={activeTab === 'Monthly'} onClick={() => setActiveTab('Monthly')} />
				</div>
			</div>
			<div className="UseTime--TimeDataContent">
				<Typography className="UseTime--Time">342 hrs</Typography>
				<Typography className="UseTime--TimeData">
					<UpArrow /> 23%
				</Typography>
				<Typography className="UseTime--TimeContent">Than Yesterday</Typography>
			</div>
			{activeTab === 'Daily' && (
				<LineChart data={data} className="UseTime--Line" verticalgrid={false} dashedBorder={true} />
			)}
			{activeTab === 'Weekly' && (
				<LineChart data={WeeklyData} className="UseTime--Line" verticalgrid={false} dashedBorder={true} />
			)}

			{activeTab === 'Monthly' && (
				<LineChart data={MonthlyData} className="UseTime--Line" verticalgrid={false} dashedBorder={true} />
			)}
		</div>
	);
};

export default UseTime;
