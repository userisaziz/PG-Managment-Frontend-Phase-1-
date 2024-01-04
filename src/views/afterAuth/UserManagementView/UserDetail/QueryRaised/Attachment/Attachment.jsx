import React from 'react';
import './Attachment.scss';

const Attachment = ({ data }) => {
	return <div className="Attachment">{data?.attachment}</div>;
};

export default Attachment;
