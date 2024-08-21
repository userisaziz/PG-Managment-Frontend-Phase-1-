import React from 'react';
import { Delete, EditIcon } from '../../../../assets/icon';
import './RoomEdit.scss';
import { useNavigate } from 'react-router-dom';
import { pathname } from '../../../../router/pathname';
import EyeShow from '../../../../assets/icon/EyeShow/EyeShow';

const RoomEdit = ({ data }) => {
	const navigate = useNavigate();
	return (
		<div className="RoomEdit">
			<div
				className="RoomEdit--Icon"
				onClick={() => {
					navigate(pathname.ROOM_DETAILS);
				}}
			>
				<EyeShow />
				{/* {data.roomNo} */}
			</div>
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
