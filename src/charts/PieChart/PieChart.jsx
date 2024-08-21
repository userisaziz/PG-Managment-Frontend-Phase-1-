import React from 'react';
import { Pie } from 'react-chartjs-2'; // Changed from Doughnut to Pie
// import DoughnutLabel from './DoughnutLabel';

import './PieChart.scss';
import DoughnutLabel from '../DoughnutChart/DoughnutLabel';

const PieChart = (props) => {
	// Changed component name
	const { data, className, title, text } = props;

	const pieOptions = {
		// Changed variable name
		maintainAspectRatio: false,
		font: {
			size: 14,
			family: "'Mulish', 'Helvetica', 'Arial', sans-serif",
		},

		responsive: true,
		plugins: {
			tooltip: {
				enabled: false,
			},
			legend: {
				display: false,
			},
		},
	};

	// const textCenter = {
	// 	id: 'textCenter',
	// 	beforeDatasetsDraw(chart) {
	// 		const { ctx } = chart;
	// 		ctx.save();
	// 		ctx.font = 'bolder 2rem Mulish san-serif';
	// 		ctx.fillStyle = '#000';
	// 		ctx.textAlign = 'center';
	// 		ctx.textBaseline = 'middle';
	// 		ctx.fillText(text, chart.getDatasetMeta(0).data[0].x, chart.getDatasetMeta(0).data[0].y);
	// 	},
	// };

	return (
		<React.Fragment>
			<div className="Title">{title}</div>
			<div className={className}>
				<div className="PieContainer">
					<Pie data={data} options={pieOptions} /> {/* Changed from Pie to Pie */}
				</div>
				<div className="PieLabels">
					<DoughnutLabel data={data} />
				</div>
			</div>
		</React.Fragment>
	);
};

export default PieChart; // Changed export name
