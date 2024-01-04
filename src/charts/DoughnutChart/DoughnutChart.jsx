import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import DoughnutLabel from './DoughnutLabel';
import './Doughnut.scss';

const DoughnutChart = (props) => {
	const { data, className, title, text } = props;

	const doughnutOptions = {
		maintainAspectRatio: false,
		responsive: true,
		cutout: 60,
		plugins: {
			tooltip: {
				enabled: false,
			},
			legend: {
				display: false,
			},
		},
	};

	const textCenter = {
		id: 'textCenter',
		beforeDatasetsDraw(chart) {
			const { ctx } = chart;
			ctx.save();
			ctx.font = 'bolder 2rem Mulish san-serif';
			ctx.fillStyle = '#000';
			ctx.textAlign = 'center';
			ctx.textBaseline = 'middle';
			ctx.fillText(text, chart.getDatasetMeta(0).data[0].x, chart.getDatasetMeta(0).data[0].y);
		},
	};

	return (
		<React.Fragment>
			<div className="Title">{title}</div>
			<div className={className}>
				<div className="DoughnutContainer">
					<Doughnut data={data} options={doughnutOptions} plugins={[textCenter]} />
				</div>
				<div className="DoughnutLabels">
					<DoughnutLabel data={data} />
				</div>
			</div>
		</React.Fragment>
	);
};

export default DoughnutChart;
