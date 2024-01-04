import React from 'react';
import './Report.scss';
import { Table } from '../../../../../components';

import { fakeData } from '../dummyData';
import { Country, NoOfReports, Reason, Name } from './CellRenderers';
const Report = () => {
	const tableHeader = [
		{ headerName: 'SL No.', field: 'sl_no', width: 100 },
		{ headerName: 'Name', field: 'name', cellRenderer: Name },
		{ headerName: 'Country', field: 'country', cellRenderer: Country },
		{ headerName: 'No Of Reports', field: 'no_of_reports', cellRenderer: NoOfReports },
		{ headerName: 'Reason', field: 'Reason', cellRenderer: Reason },
	];
	return (
		<div className="Report">
			<Table header={tableHeader} row={fakeData} isFullWidth={true} />
		</div>
	);
};

export default Report;
