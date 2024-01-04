import React from 'react';

const Attachment = ({ data }) => {
	return <div>{data?.attachment ? data?.attachment : '-'}</div>;
};
export default Attachment;
