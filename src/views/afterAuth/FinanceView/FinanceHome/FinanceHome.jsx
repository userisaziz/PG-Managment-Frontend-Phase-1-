import React from 'react';
import Box from '../../../../components/Common/Box/Box';
import { Button, Table, Typography } from '../../../../components';
import './FinanceHome.scss';
const FinanceCard = ({ title, subTitle }) => {
	return (
		<>
			<div className="FinanceHome--Card">
				<Typography>{title}</Typography>
				<Typography>{subTitle}</Typography>
			</div>
		</>
	);
};
const FinanceHome = () => {
	return (
		<div>
			<Box>
				<Typography variant="p">Finance</Typography>
				<Typography>Keep track of your revenue and expenses over time</Typography>
			</Box>
			<Box>
				{/* <Typography>Revenue Summary</Typography>
				<div className="FinanceHome--CardContainer">
					<FinanceCard />
					<FinanceCard />
					<FinanceCard />
				</div> */}
				<div className="FinanceHome--Header">
					<Typography variant="span">Expenses Summary</Typography>
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
				<Table />
			</Box>
		</div>
	);
};

export default FinanceHome;
