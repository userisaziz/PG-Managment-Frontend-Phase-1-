// HorizontalBarChart.js
import React from 'react';
import { Bar } from 'react-chartjs-2';

const BarChart = ({ data, height = '45vh', width = '100%', labels }) => {
	const longLabels = labels ? labels?.map((label) => label.split(' ')) : null;
	const chartData = {
		labels: longLabels,
		datasets: [
			{
				backgroundColor: '#1A80E5',
				// borderColor: 'rgba(75,192,192,1)',
				borderWidth: 1,
				data: data,
				borderRadius: 20,
				// categoryPercentage: 1.0,
				barPercentage: 0.3,
			},
		],
	};

	const options = {
		indexAxis: 'x',
		radius: 0,
		scales: {
			y: {
				ticks: {
					padding: 10,
				},
				grid: {
					display: true,
					color: '#F0F0F0',
				},
				border: { dash: [10, 0] },
				beginAtZero: true,
			},
			x: {
				ticks: {
					padding: 10,
					autoSkip: false,
					maxRotation: 0,
					minRotation: 0,
				},
				grid: {
					display: false,
				},
			},
		},
		barPercentage: 0.3,
		responsive: true,
		plugins: {
			tooltip: {
				enabled: true,
			},
			legend: {
				display: false,
			},
		},
		maintainAspectRatio: false,
	};

	return (
		<div style={{ height: height, width: width }}>
			<Bar data={chartData} options={options} />
		</div>
	);
};

export default BarChart;
