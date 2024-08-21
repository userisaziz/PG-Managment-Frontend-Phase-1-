import React from 'react';
import Badge from '../../../../components/Common/Badge/Badge';

const RoomStatus = ({ data }) => {
	return <Badge props={data?.occupancyStatus}>{data?.occupancyStatus}</Badge>;
};

export default RoomStatus;
