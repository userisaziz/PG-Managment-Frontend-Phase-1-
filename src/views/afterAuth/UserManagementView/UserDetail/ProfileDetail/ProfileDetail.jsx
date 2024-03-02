import React, { useState } from 'react';
import './ProfileDetail.scss';
import { Button, Chip, Interest, Modal, Questionaire, Social, Typography, ValueField } from '../../../../../components';
import { Profile } from '../../../../../assets/images';
import { useLocation } from 'react-router';

const ProfileDetail = () => {
	const location = useLocation();
	const data = location?.state;
	const [removeModal, setRemoveModal] = useState(false);
	const [blockModal, setBlockModal] = useState(false);

	const faq = [
		{ que: 'I enjoy spending my weekends outdoors, hiking, and exploring nature.' },
		{ que: 'I thrive in social settings, meeting new people, and engaging in lively conversations.' },
		{ que: 'I enjoy spending my weekends outdoors, hiking, and exploring nature.' },
		{ que: 'I thrive in social settings, meeting new people, and engaging in lively conversations.' },
		{ que: 'I enjoy spending my weekends outdoors, hiking, and exploring nature.' },
		{ que: 'I thrive in social settings, meeting new people, and engaging in lively conversations.' },
		{ que: 'I enjoy spending my weekends outdoors, hiking, and exploring nature.' },
		{ que: 'I thrive in social settings, meeting new people, and engaging in lively conversations.' },
		{ que: 'I enjoy spending my weekends outdoors, hiking, and exploring nature.' },
		{ que: 'I thrive in social settings, meeting new people, and engaging in lively conversations.' },
		{ que: 'I enjoy spending my weekends outdoors, hiking, and exploring nature.' },
		{ que: 'I thrive in social settings, meeting new people, and engaging in lively conversations.' },
	];

	return (
		<div className="ProfileDetail">
			<div className="ProfileDetail--Header">
				<Typography className="ProfileDetail--Title">General Details</Typography>
				<div className="ProfileDetail--Chip">
					<Chip label="Shift Tenant" onClick={() => setBlockModal(true)} />
					<Chip label="Remove Tenant" onClick={() => setRemoveModal(true)} />
				</div>
			</div>
			<div className="ProfileDetail--ImageContainer">
				<img src={Profile} alt="image" className="ProfileDetail--Image" />
				<img src={Profile} alt="image" className="ProfileDetail--Image" />
				<img src={Profile} alt="image" className="ProfileDetail--Image" />
			</div>
			<div className="ProfileDetail--DetailHeader">
				<ValueField label="Name">Akash Srivastav</ValueField>
				<ValueField label="Age">26</ValueField>
				<ValueField label="Phone Number">+91 9548245682</ValueField>
				<ValueField label="Gender">Male</ValueField>
				<ValueField label="Country">India</ValueField>
				<ValueField label="Pronoun">He/Him</ValueField>
				<ValueField label="Date of birth">04-12-2000</ValueField>
				<ValueField label="Continent">Asia</ValueField>
			</div>
			{/* <Typography className="ProfileDetail--Title">Other Details</Typography>
			<div className="ProfileDetail--OtherDetails">
				<ValueField label="Bio">
					Adventure-seeking traveler who loves exploring new cultures and cuisines.
				</ValueField>
				<Social />
				<Interest data={['music', 'biryani', 'coffee', 'books', 'cricket']} />
			</div> */}
			{/* <Questionaire data={faq} variant="Box" /> */}
			<Modal
				title={`Are you sure you want to remove ${data?.name} id from app?`}
				isOpen={removeModal}
				onClose={setRemoveModal}
			>
				<div className="ProfileDetail--Buttons">
					<Button
						variant="secondary"
						onClick={() => {
							setRemoveModal(false);
						}}
					>
						No
					</Button>
					<Button type="round">Yes</Button>
				</div>
			</Modal>
			<Modal title={`Block ${data?.name} id for?`} isOpen={blockModal} onClose={setBlockModal}>
				<div className="ProfileDetail--Buttons">
					<Button
						variant="secondary"
						onClick={() => {
							setBlockModal(false);
						}}
					>
						No
					</Button>
					<Button type="round">Yes</Button>
				</div>
			</Modal>
		</div>
	);
};

export default ProfileDetail;
