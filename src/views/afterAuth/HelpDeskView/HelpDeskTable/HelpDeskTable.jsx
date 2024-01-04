import React, { useState } from 'react';
import './HelpDeskTable.scss';
import { Box, Download, SearchBar, Tab, Typography } from '../../../../components';
import Query from './Query/Query';
import Report from './Report/Report';

const HelpDeskTable = () => {
	const types = ['Query', 'Report'];
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
		<Box className="HelpDeskTable--Box">
			<div className="HelpDeskTable">
				<div className="HelpDeskTable--Header">
					<div className="HelpDeskTable--HeaderLeft">
						<Typography className="HelpDeskTable--Title">Help Desk</Typography>
						<SearchBar className="HelpDeskTable--Search" />
					</div>
					<Download value={selectValue} onchange={onChange} className="HelpDeskTable--DownloadSelect" />
				</div>
				<Tab types={types} active={active} changeActive={setActive} className="HelpDeskTable--Tabs" />
				{active === types[0] && <Query />}
				{active === types[1] && <Report />}
			</div>
		</Box>
	);
};

export default HelpDeskTable;
