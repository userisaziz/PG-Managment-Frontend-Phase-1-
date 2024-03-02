import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { pathname } from '../../../../router/pathname';
import { Box, Breadcrumb, Tab } from '../../../../components';
import './UserDetail.scss';
import ProfileDetail from './ProfileDetail/ProfileDetail';
import UseTime from './UseTime/UseTime';
import QueryRaised from './QueryRaised/QueryRaised';
import SideContent from './SideContent/SideContent';

const UserDetail = () => {
	const location = useLocation();
	const data = location?.state;
	const types = ['Profile Detail', 'Transactions'];

	const [active, setActive] = useState(types[0]);

	const customizeBoxSize = active === 'Transactions' ? 'UserDetail--BoxFull' : 'UserDetail--Box';

	const breadCrumbData = [
		{ text: 'User Management', url: pathname.USER_MANAGEMENT },
		{ text: `${data?.name}`, url: pathname.USER_DETAIL },
	];
	return (
		<div className="UserDetail">
			<Box className="UserDetail--BreadCrumb">
				<Breadcrumb items={breadCrumbData} />
			</Box>
			<div className="UserDetail--Container">
				<Box className={customizeBoxSize}>
					<Tab types={types} active={active} changeActive={setActive} className="UserDetail--Tab" />
					{active === types[0] && <ProfileDetail />}
					{/* {active === types[1] && <UseTime />} */}
					{active === types[1] && <QueryRaised />}
				</Box>
				{active !== types[1] && <SideContent className="UserDetail--SideContent" />}
			</div>
		</div>
	);
};

export default UserDetail;
