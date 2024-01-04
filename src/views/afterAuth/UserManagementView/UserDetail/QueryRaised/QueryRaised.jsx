import React from 'react';
import { Table } from '../../../../../components';
import Date from './Date/Date';
import Query from './Query/Query';
import Status from './Status/Status';
import Attachment from './Attachment/Attachment';

const QueryRaised = () => {
	const rowData = [
		{
			s_no: 1,
			date: '12-04-2023',
			query: "Hello, I just joined your dating app and I'm having trouble setting up my account. It keeps giving",
			status: 'Resolved',
			attachment: 'Image.jpeg',
		},
		{
			s_no: 1,
			date: '12-04-2023',
			query: "Hello, I just joined your dating app and I'm having trouble setting up my account. It keeps giving",
			status: 'Resolved',
			attachment: 'Image.jpeg',
		},
		{
			s_no: 1,
			date: '12-04-2023',
			query: "Hello, I just joined your dating app and I'm having trouble setting up my account. It keeps giving",
			status: 'Pending',
			attachment: 'Image.jpeg',
		},
		{
			s_no: 1,
			date: '12-04-2023',
			query: "Hello, I just joined your dating app and I'm having trouble setting up my account. It keeps giving",
			status: 'Resolved',
			attachment: 'Image.jpeg',
		},
	];
	const tableHeader = [
		{ headerName: 'SL No', field: 's_no', width: 80 },
		{ headerName: 'Date', field: 'date', cellRenderer: Date },
		{ headerName: 'Query', field: 'query', width: 600, cellRenderer: Query },
		{ headerName: 'Status', field: 'status', cellRenderer: Status },
		{ headerName: 'Attachment', field: 'attachment', cellRenderer: Attachment },
	];
	return <Table header={tableHeader} row={rowData} isFullWidth={true} />;
};

export default QueryRaised;
