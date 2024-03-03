import React from 'react';
import Box from '../../../../components/Common/Box/Box';
import { Button, Table, Typography } from '../../../../components';
import './FinanceHome.scss';
const FinanceCard = ({ title, subTitle }) => {
	return (
		<>
			<div className="FinanceHome--Card">
				<Typography className="ViewDetailsCard--Title">{title}</Typography>
				<Typography className="DashboardCard--Subheading">{subTitle}</Typography>
			</div>
		</>
	);
};
const FinanceHome = () => {
	// Row Headers
	const columnDefs = [
		{ headerName: 'Category', field: 'category' },
		{ headerName: 'Description', field: 'description' },
		{ headerName: 'Amount', field: 'amount' },
		{ headerName: 'Date', field: 'date' },
	];

	// Row Data
	const rowData = [
		{ category: 'Salaries', description: 'Salary for staff members', amount: 5000, date: '2024-03-01' },
		{ category: 'Maintenance', description: 'Repair work in common areas', amount: 2000, date: '2024-03-02' },
		{ category: 'Utilities', description: 'Electricity bill', amount: 1000, date: '2024-03-03' },
		{ category: 'Food', description: 'Groceries for the hostel kitchen', amount: 1500, date: '2024-03-04' },
		{ category: 'Cleaning', description: 'Cleaning supplies', amount: 800, date: '2024-03-05' },
		{ category: 'Internet', description: 'Internet bill', amount: 1200, date: '2024-03-06' },
		{ category: 'Repairs', description: 'Plumbing repair', amount: 600, date: '2024-03-07' },
		{ category: 'Security', description: 'Security guard salary', amount: 2000, date: '2024-03-08' },
		{ category: 'Furniture', description: 'New desks and chairs', amount: 3000, date: '2024-03-09' },
		{ category: 'Insurance', description: 'Insurance premium', amount: 1800, date: '2024-03-10' },
		{ category: 'Events', description: 'Hostel party expenses', amount: 2500, date: '2024-03-11' },
		{ category: 'Transportation', description: 'Shuttle service for students', amount: 900, date: '2024-03-12' },
	];

	return (
		<div>
			{/* <Box>
				<Typography className="DashboardCard--Heading" variant="p">
					Finance
				</Typography>
				<Typography className="DashboardCard--Subheading">
					Keep track of your revenue and expenses over time
				</Typography>
			</Box> */}
			<Box>
				{/* <Typography>Revenue Summary</Typography>
				<div className="FinanceHome--CardContainer">
					<FinanceCard />
					<FinanceCard />
					<FinanceCard />
				</div> */}
				<div className="FinanceHome--Header">
					<Typography className="DashboardCard--Heading" variant="span">
						Expenses Summary
					</Typography>
					<Button>Add Expense</Button>
				</div>

				<div className="FinanceHome--CardContainer">
					<FinanceCard title={'Total Expense'} subTitle={'₹ 5,24,45,685'} />
					<FinanceCard title={'Maintenance'} subTitle={'₹ 5,24,45,685'} />
					<FinanceCard title={'Salaries'} subTitle={'₹ 5,24,45,685'} />
					<FinanceCard title={'Net Revenue'} subTitle={'₹ 5,24,45,685'} />
				</div>
			</Box>
			<Box>
				<Table row={rowData} header={columnDefs} />
			</Box>
		</div>
	);
};

export default FinanceHome;
