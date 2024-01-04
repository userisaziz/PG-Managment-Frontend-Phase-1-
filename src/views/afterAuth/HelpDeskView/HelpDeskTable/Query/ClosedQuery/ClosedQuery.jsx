import React from 'react';
import './ClosedQuery.scss';
import { Table } from '../../../../../../components';
import { rowData } from '../../dummyData';
import { Attachment, Country, RequestId, Name, SLNo, Query } from '../CellRenderers';
const ClosedQuery = () => {
	const tableHeader = [
		{ headerName: 'SL No.', field: 'sl_no', width: 100 },
		{ headerName: 'Request Id', field: 'request_id', cellRenderer: RequestId },
		{ headerName: 'Name', field: 'name', cellRenderer: Name },
		{ headerName: 'Query', field: 'query', cellRenderer: Query },
		{ headerName: 'Attachment', field: 'attachment', cellRenderer: Attachment },
		{ headerName: 'Country', field: 'country', cellRenderer: Country },
	];

	return (
		<div className="ClosedQuery">
			<Table header={tableHeader} row={rowData} />
		</div>
	);
};

export default ClosedQuery;
