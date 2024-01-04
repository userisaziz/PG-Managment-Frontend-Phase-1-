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
				borderWidth: 1.5,
				tension: 0.5,
			},
		},
		radius: 0,
		scales: {
			x: {
				ticks: {
					padding: 10,
				},
				grid: {
					tickLength: 0,
					display: verticalgrid,
					color: '#F0F0F0',
				},
			},
			y: {
				ticks: {
					padding: 10,
				},
				...dash,
				grid: {
					tickLength: 0,
					color: '#F0F0F0',
				},
			},
		},
		responsive: true,
		plugins: {
			tooltip: {
				enabled: false,
			},
			legend: {
				position: 'bottom',
				labels: {
					boxWidth: 8,
					boxHeight: 8,
					usePointStyle: true,
					padding: 40,
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
