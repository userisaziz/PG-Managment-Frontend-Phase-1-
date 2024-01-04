import React from 'react';
import './ViewTicket.scss';
import { Box, Breadcrumb, Button, Chip, Typography, ValueField } from '../../../../../../components';
import { Timer } from '../../../../../../assets/icon';
import { Profile } from '../../../../../../assets/images';
const ViewTicket = () => {
	const breadCrumbData = [
		{ text: 'Help desk', url: '/' },
		{ text: 'Open', url: '/users' },
		{ text: 'Ticket ID - GS6473734', url: '/users/rakesh' },
	];
	return (
		<div className="ViewTicket">
			<Box className="ViewTicket--Breadcrumb">
				<Breadcrumb items={breadCrumbData} />
			</Box>

			<Box>
				<div className="ViewTicket--Header">
					<Typography className="ViewTicket--TicketID">Ticket ID - GS6473734</Typography>
					<Chip label="Resolve" isActive={true} className="ViewTicket--Chip" icon={<Timer />} />
				</div>
				<div className="ViewTicket--Content">
					<div className="ViewTicket--ContentLeft"></div>
					<div className="ViewTicket--ContentRight">
						<div className="ViewTicket--ImgContainer">
							<img src={Profile} />
						</div>
						<div className="ViewTicket--Details">
							<ValueField label="Name">Akash Srivastav</ValueField>
							<ValueField label="Age">26</ValueField>
							<ValueField label="Phone Number">-</ValueField>
							<ValueField label="Gender">Male</ValueField>
							<ValueField label="Email">Siddhantbhoi@gmail.com</ValueField>
							<ValueField label="Country">India</ValueField>
						</div>
						<Button className="ViewTicket--Button" variant="secondary">
							Veiw Profile
						</Button>
					</div>
				</div>
			</Box>
		</div>
	);
};

export default ViewTicket;
