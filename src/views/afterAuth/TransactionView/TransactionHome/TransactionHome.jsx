import React, { useState } from 'react';
import { Box, Button, Download, SearchBar, Tab, Table, Typography } from '../../../../components';

import Paid from '../Paid/Paid';
import { UnPaid } from '../Upaid/UnPaid';

const TransactionHome = () => {
	const types = ['Paid Transcations', 'Unpaid Transcations'];
	const [selectValue, setSelectValue] = useState('');
	const [active, setActive] = useState(types[0]);

	const onChange = (e) => {
		if (typeof e === 'string') {
			setSelectValue(e);
			return;
		}
		setTextValue(e.target.value);
	};
	return (
		<div>
			<Box className="HelpDeskTable--Box">
				<div className="HelpDeskTable">
					<div className="HelpDeskTable--Header">
						<div className="HelpDeskTable--HeaderLeft">
							<Typography className="HelpDeskTable--Title">Transactions</Typography>
							<SearchBar className="HelpDeskTable--Search" />
							<Button>Pay a Rent</Button>
						</div>
						<Download value={selectValue} onchange={onChange} className="HelpDeskTable--DownloadSelect" />
					</div>
					<Tab types={types} active={active} changeActive={setActive} className="HelpDeskTable--Tabs" />
					{active === types[0] && <Paid />}
					{active === types[1] && <UnPaid />}
				</div>
			</Box>
		</div>
	);
};

export default TransactionHome;
