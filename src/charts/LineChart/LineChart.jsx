import React from 'react';
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import './LineChart.scss';

const LineChart = (props) => {
	const { data, className, verticalgrid = true, dashedBorder = true } = props;

	const dash = dashedBorder && { border: { dash: [15, 10] } };

	const options = {
		elements: {
			line: {
				// borderWidth: 1.5,
				// tension: 0.2,
			},
			point: {
				pointStyle: 'circle',
				pointRadius: 5,
				pointHoverRadius: 8, // Display a circle at each data point
			},
		},

		// radius: 0,
		// scales: {
		// 	x: {
		// 		ticks: {
		// 			padding: 10,
		// 		},
		// 		grid: {
		// 			tickLength: 0,
		// 			display: verticalgrid,
		// 			color: '#F0F0F0',
		// 		},
		// 	},
		// 	y: {
		// 		ticks: {
		// 			padding: 10,
		// 		},
		// 		...dash,
		// 		grid: {
		// 			tickLength: 0,
		// 			color: '#F0F0F0',
		// 		},
		// 	},
		// },
		responsive: true,
		plugins: {
			title: {
				display: true,
				text: (ctx) => 'Expense vs Income Comparison Chart',
			},
			tooltip: {
				enabled: true,
				// mode: 'nearest', // Show tooltip for the nearest item
			},
			legend: {
				position: 'bottom',
				labels: {
					boxWidth: 8,
					boxHeight: 8,
					usePointStyle: true,
					padding: 20,
				},
			},
		},
	};
	return (
		<div className={className}>
			<Line options={options} data={data} />
		</div>
	);
};

export default LineChart;
