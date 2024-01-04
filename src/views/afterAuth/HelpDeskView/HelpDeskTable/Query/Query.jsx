import React, { useState } from 'react';
import { Tab } from '../../../../../components';
import './Query.scss';
import OpenQuery from './OpenQuery/OpenQuery';
import ClosedQuery from './ClosedQuery/ClosedQuery';
const Query = () => {
	const types = ['Open', 'Closed'];
	const [active, setActive] = useState(types[0]);

	return (
		<div className="Query">
			<Tab types={types} active={active} changeActive={setActive} className="Query--Tabs" />
			{active === types[0] && <OpenQuery />}
			{active === types[1] && <ClosedQuery />}
		</div>
	);
};

export default Query;
