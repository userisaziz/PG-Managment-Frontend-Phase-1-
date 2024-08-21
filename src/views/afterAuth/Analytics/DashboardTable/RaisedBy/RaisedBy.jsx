import React from 'react';

const RaisedBy = ({ data }) => {
	return <div>{data?.raisedBy ?? '-'}</div>;
};

export default RaisedBy;
