import React from 'react';
import { Delete, EditIcon } from '../../../../assets/icon';
import './RoomEdit.scss';
const RoomEdit = () => {
	return (
		<div className="RoomEdit">
			<div>
				<EditIcon />
			</div>
			<div>
				<Delete />
			</div>
		</div>
	);
};

export default RoomEdit;
