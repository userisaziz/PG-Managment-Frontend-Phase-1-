import React from 'react';
import ValueField from '../ValueField/ValueField';
import { Facebook, Instagram } from '../../../assets/icon';
import './Social.scss';

const Social = () => {
	return (
		<ValueField label="Social">
			<div className="Social--Icon">
				<div className="Social--Background">
					<Instagram />
				</div>
				<div className="Social--Background">
					<Facebook />
				</div>
			</div>
		</ValueField>
	);
};

export default Social;
