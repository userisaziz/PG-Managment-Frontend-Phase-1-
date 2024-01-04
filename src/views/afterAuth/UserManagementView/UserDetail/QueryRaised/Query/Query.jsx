import React from 'react';
import './Query.scss';

const Query = ({ data }) => {
	return <div className="QueryTable">{data.query ?? '-'}</div>;
};

export default Query;
