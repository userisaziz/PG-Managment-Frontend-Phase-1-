import React from 'react';

const Contact = ({ data }) => {
	return <div>{data?.contact ?? '-'}</div>;
};

export default Contact;
