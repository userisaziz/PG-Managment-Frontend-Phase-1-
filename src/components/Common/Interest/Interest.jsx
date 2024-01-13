import React from 'react';
import ValueField from '../ValueField/ValueField';
import Chip from '../Chip/Chip';
import './Interest.scss';

const Interest = (props) => {
	const { data, label = 'Interest' } = props;
	return (
		<ValueField label={label}>
			<div className="Interest--Container">
				{data?.map((data) => (
					<Chip label={data} className="Interest--Chip" />
				))}
			</div>
		</ValueField>
	);
};

export default Interest;
