import React from 'react';
import { Box, SearchBar } from '../../../../components';
import { DoughnutChart } from '../../../../charts';

const AllHostels = () => {
	const doughnutData = {
		labels: [
			{ key: 'Asia', value: '10 lacs' },
			{ key: 'South America', value: '10 lacs' },
		],
		datasets: [
			{
				data: [9, 17],
				hoverOffset: 0,
				cutout: '75%',
				rotation: 270,
				borderRadius: [8, 8],
			},
		],
	};
	return (
		<div>
			<Box>
				<SearchBar />
			</Box>
			<Box>
				<div>
					<DoughnutChart
						data={doughnutData}
						title="Total Beds"
						text="750"
						className="DashboardView--Labels"
					/>
				</div>
				<div>
					<Box dark={true}>
						<DoughnutChart
							data={doughnutData}
							title="Total Beds"
							text="750"
							className="DashboardView--Labels"
						/>
					</Box>
				</div>
			</Box>
		</div>
	);
};

export default AllHostels;
