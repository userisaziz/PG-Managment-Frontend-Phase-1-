import React from 'react';
import { Bar } from 'react-chartjs-2';

import './VerticalBar.scss'; // Assuming you have a separate stylesheet for vertical bar chart

const VerticalBar = (props) => {
	const { data, className, verticalgrid = true, dashedBorder = true, horizontalGrid = true } = props;

	const dash = dashedBorder && { border: { dash: [15, 10] } };

	const options = {
		elements: {
			bar: {
				borderWidth: 1.5,
			},
		},
		indexAxis: 'x', // This line sets the chart to be vertical
		radius: 0,
		scales: {
			y: {
				ticks: {
					padding: 10,
				},
				grid: {
					tickLength: 0,
					display: verticalgrid,
					color: '#F0F0F0',
				},
			},
			x: {
				ticks: {
					padding: 10,
				},
				...dash,
				grid: {
					display: horizontalGrid,
					tickLength: 0,
					color: '#F0F0F0',
				},
			},
		},
		responsive: true,
		plugins: {
			tooltip: {
				enabled: true,
			},
			legend: {
				position: 'bottom',
				labels: {
					font: {
						size: 14,
						family: "'Mulish', 'Helvetica', 'Arial', sans-serif",
					},

					boxWidth: 8,
					boxHeight: 8,
					usePointStyle: true,
					padding: 40,
					color: '#fff',
				},
			},
		},
	};

	return (
		<div className={className}>
			<Bar options={options} data={data} />
		</div>
	);
};

export default VerticalBar;
