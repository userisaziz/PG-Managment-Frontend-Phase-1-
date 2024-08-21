import React, { useState } from 'react';
import './ActivityView.scss';
import { Chip, Download, Tab, Typography } from '../../../../components';
import { LineChart } from '../../../../charts';
import { Dropdown, Menu, Button } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import VerticalBar from '../../../../charts/VerticalBar/VerticalBar.jsx';
import { DownloadIcon } from '../../../../assets/icon/index.js';
import { ReactDropdown } from '../../../../components/Common/index.js';

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
	];

	const data = {
		labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
		datasets: [
			{
				label: 'Salary Expenses',

				data: [100, 45, 18, 9, 33, 12, 98],
				// borderColor: '#2B9DEF',
				fill: true,
				backgroundColor: '#2B9DEF',
			},
			{
				label: 'Maintaince Expenses',
				data: [15, 25, 40, 5, 22, 8, 70],
				// borderColor: '#FF6B6B',
				fill: true,
				// backgroundColor: 'rgba(255, 107, 107, 0.10)',
				backgroundColor: '#FF6B6B',
			},
			{
				label: 'Miscellaneous',
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
	const activityTypes = ['Expense', 'Income'];
	const [active, setActive] = useState(activityTypes[0]);
	const changeActivityType = () => {};

	const menuItems = menu.map((item) => ({
		value: item.continent,
		label: item.continent,
	}));

	const handleMenuClick = (e) => {
		setContinentValue(e.key);
	};

	const dropdownMenu = (
		<Menu onClick={handleMenuClick} className="dark-theme-menu">
			{menuItems.map((item) => (
				<Menu.Item key={item.key}>{item.label}</Menu.Item>
			))}
		</Menu>
	);

	const downloadMenu = (
		<Menu onClick={(e) => handleSelect(e.key)} className="dark-theme-menu">
			<Menu.Item key="pdf">Download PDF</Menu.Item>
			<Menu.Item key="csv">Download CSV</Menu.Item>
		</Menu>
	);

	return (
		<React.Fragment>
			<div className="ActivityView--Header">
				<Tab active={active} types={activityTypes} changeActive={setActive} />
				{/* <Typography className="ActivityView--Title"> User Expenses</Typography> */}

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

					<ReactDropdown
						options={menuItems}
						className={'ActivityView--Dropdown'}
						controlClassName={'ActivityView--Controls'}
					/>

					<Dropdown overlay={downloadMenu} className="ActivityView--Download">
						<div>
							<DownloadIcon width={40} height={40} />
						</div>
					</Dropdown>
				</div>
			</div>
			{activeTab === 'Weekly' && (
				<VerticalBar data={data} className="ActivityView--Line" verticalgrid={false} dashedBorder={true} />
			)}

			{activeTab === 'Monthly' && (
				<VerticalBar
					data={MonthlyData}
					className="ActivityView--Line"
					verticalgrid={false}
					dashedBorder={true}
				/>
			)}

			{activeTab === 'Custom' && (
				<VerticalBar data={data} className="ActivityView--Line" verticalgrid={false} dashedBorder={true} />
			)}
		</React.Fragment>
	);
};

export default ActivityView;
