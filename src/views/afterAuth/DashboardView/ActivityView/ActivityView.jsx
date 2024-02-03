import React, { useState } from 'react';
import './ActivityView.scss';
import { Chip, Download, Dropdown, Typography } from '../../../../components';
import { LineChart } from '../../../../charts';

import VerticalBar from '../../../../charts/VerticalBar/VerticalBar.jsx';

const ActivityView = () => {
	const [selectValue, setSelectValue] = useState('');
	const [continentValue, setContinentValue] = useState('');
	const [activeTab, setActiveTab] = useState('Weekly');

	const menu = [
		{
			continent: 'ASIA',
		},
		{
			continent: 'EUROPE',
		},
		{
			continent: 'AFRICA',
		},
		{
			continent: 'SOUTH_AMERICA',
		},
		{
			continent: 'NORTH_AMERICA',
		},
		{
			continent: 'AUSTRALIA',
		},
		{
			continent: 'ANTARCTICA',
		},
	];

	const data = {
		labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
		datasets: [
			{
				label: 'Total Customer Interacted',

				data: [100, 45, 18, 9, 33, 12, 98],
				// borderColor: '#2B9DEF',
				fill: true,
				backgroundColor: '#2B9DEF',
			},
			{
				label: 'Total Sales Closed',
				data: [15, 25, 40, 5, 22, 8, 70],
				// borderColor: '#FF6B6B',
				fill: true,
				// backgroundColor: 'rgba(255, 107, 107, 0.10)',
				backgroundColor: '#FF6B6B',
			},
			{
				label: 'In Progress',
				data: [15, 17, 3, 5, 10, 11, 56],
				borderColor: '#FBC42E',
				fill: true,
				// backgroundColor: 'rgba(251, 196, 46, 0.10)',
				backgroundColor: '#FBC42E',
			},
		],
	};
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
			{
				label: 'Total Customer Interacted',
				data: [26, 45, 18, 9, 33, 12, 98, 9, 20, 3, 55, 23],
				borderColor: '#FBC42E',
				fill: true,
				backgroundColor: 'rgba(251, 196, 46, 0.10)',
			},
		],
	};

	const handleSelect = (val) => {
		console.log(val);
		setSelectValue(val);
	};
	return (
		<React.Fragment>
			<div className="ActivityView--Header">
				<Typography className="ActivityView--Title"> User Expenses</Typography>

				<div className="ActivityView--RightHeader">
					<div className="ActivityView--Chip">
						<Chip label="Weekly" isActive={activeTab === 'Weekly'} onClick={() => setActiveTab('Weekly')} />
						<Chip
							label="Monthly"
							isActive={activeTab === 'Monthly'}
							onClick={() => setActiveTab('Monthly')}
						/>
						<Chip label="Custom" isActive={activeTab === 'Custom'} onClick={() => setActiveTab('Custom')} />
					</div>

					<Dropdown
						placeholder="Select Store"
						options={menu}
						keyToRead="continent"
						isRequired={true}
						value={continentValue}
						onSelect={(value) => setContinentValue(value?.continent)}
						className="ActivityView--Dropdown"
					/>

					<Download
						className="ActivityView--Download"
						value={selectValue}
						onchange={(value) => handleSelect(value)}
					/>
				</div>
			</div>
			{activeTab === 'Weekly' && (
				<VerticalBar data={data} className="ActivityView--Line" verticalgrid={false} dashedBorder={true} />
			)}

			{activeTab === 'Monthly' && (
				<LineChart data={MonthlyData} className="ActivityView--Line" verticalgrid={false} dashedBorder={true} />
			)}

			{activeTab === 'Custom' && (
				<LineChart data={data} className="ActivityView--Line" verticalgrid={false} dashedBorder={true} />
			)}
		</React.Fragment>
	);
};

export default ActivityView;
