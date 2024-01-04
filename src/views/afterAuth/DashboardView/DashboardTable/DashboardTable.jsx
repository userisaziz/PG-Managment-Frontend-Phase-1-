import React from 'react';
import { Table } from '../../../../components';
import './DashboardTable.scss';
import RaisedBy from './RaisedBy/RaisedBy';
import DateTime from './DateTime/DateTime';
import Reason from './Reason/Reason';
import Status from './Status/Status';

const DashboardTable = () => {
	const rowData = [
		{
			raisedBy: 'Abhishek shrivastava',
			date: '12-04-2023, 11:59 pm',
			reason: 'Not able to login',
			status: 'Resolved',
		},
		{
			raisedBy: 'Abhishek shrivastava',
			date: '12-04-2023, 11:59 pm',
			reason: 'Not able to login',
			status: 'Resolved',
		},
		{
			raisedBy: 'Abhishek shrivastava',
			date: '12-04-2023, 11:59 pm',
			reason: 'Not able to login',
			status: 'Resolved',
		},
		{
			raisedBy: 'Abhishek shrivastava',
			date: '12-04-2023, 11:59 pm',
			reason: 'Not able to login',
			status: 'Pending',
		},
		{
			raisedBy: 'Abhishek shrivastava',
			date: '12-04-2023, 11:59 pm',
			reason: 'Not able to login',
			status: 'Resolved',
		},
		{
			raisedBy: 'Abhishek shrivastava',
			date: '12-04-2023, 11:59 pm',
			reason: 'Not able to login',
			status: 'Pending',
		},
	];
	const tableHeader = [
		{ headerName: 'Raised by', field: 'raisedBy', cellRenderer: RaisedBy  },
		{ headerName: 'Date and time', field: 'date', cellRenderer: DateTime },
		{ headerName: 'Reason', field: 'reason', cellRenderer: Reason },
		{ headerName: 'Status', field: 'status', cellRenderer: Status },
	];
	return <Table className="DashboardTable--Table" header={tableHeader} row={rowData} isFullWidth={true} />;
};

export default DashboardTable;
