import React, { useState } from 'react';
import './TransactionTableHeader.scss';
import { Download, Dropdown, SearchBar, Typography } from '../../../../components';

const TransactionTableHeader = () => {
	const [value, setValue] = useState('');
	const [selectValue, setSelectValue] = useState('');
	const menu = [
		{ id: 1, value: 'Asia' },
		{ id: 2, value: 'North America' },
		{ id: 3, value: 'South America' },
		{ id: 4, value: 'Africa' },
		{ id: 5, value: 'Australia' },
		{ id: 6, value: 'Antarctica' },
	];

	const onChange = (e) => {
		setSelectValue(e);
	};

	const handleSelect = (val, index) => {
		setValue({ value: val, id: index });
	};

	return (
		<div className="TableHeaderContainer">
			<Typography className="TableHeaderContainer--Title">Transaction History</Typography>
			<SearchBar />
			<Dropdown
				placeholder="Select Continents"
				options={menu}
				keyToRead="value"
				isRequired={true}
				value={value}
				onSelect={(value) => handleSelect(value)}
			/>
			<Download value={selectValue} onchange={onChange} className="TableHeaderContainer--DownloadSelect" />
		</div>
	);
};

export default TransactionTableHeader;
