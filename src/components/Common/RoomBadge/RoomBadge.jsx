import React from 'react';
import './RoomBadge.scss';
import Typography from '../Typography/Typography';

const RoomBadge = () => {
	// Array of room numbers
	const numbers = Array.from({ length: 40 }, (_, i) => i + 1);

	// Randomly assign vacancy status to each room
	const rooms = numbers.map((number) => ({
		id: number,
		number: number,
		vacant: Math.random() < 0.5 ? true : false, // Randomly assign vacancy status
	}));

	return (
		<div className="RoomBadge">
			{rooms.map((room) => (
				<div className={room.vacant ? 'RoomBadge--Vacant' : 'RoomBadge--Filled'} key={room.id}>
					<Typography className="RoomBadge--Title">Room {room.number}</Typography>
					{/* <Typography className="RoomBadge--Vacancy">{room.vacant ? 'Vacant' : 'Occupied'}</Typography> */}
				</div>
			))}
		</div>
	);
};

export default RoomBadge;
