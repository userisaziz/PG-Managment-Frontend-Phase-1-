import React from 'react';
import ProfileDropdown from '../ProfileDropdown/ProfileDropdown';
import ProfileChip from '../ProfileChip/ProfileChip';
import { UserprofileIcon } from '../../../assets/icon';
import Typography from '../Typography/Typography';
import './Profile.scss';

const Profile = (props) => {
	const { handleProfile, isProfileOpen, data, onOpenChangePasswordModal } = props;

	const profileDetails = (props) => {
		const { name, role } = props;
		return (
			<>
				<div className="Profiles">
					<div className="Profiles--ProfileIconContainer">
						<UserprofileIcon />
					</div>
				</div>
				<div className="Profiles--ProfileDetails">
					<Typography className="Profiles--Name">{name}</Typography>
					<Typography className="Profiles--Role">{role}</Typography>
				</div>
			</>
		);
	};
	return (
		<>
			<ProfileChip profileDetails={profileDetails} handleProfile={handleProfile} isProfileOpen={isProfileOpen} />
			{isProfileOpen && (
				<ProfileDropdown
					data={data}
					handleProfile={handleProfile}
					onOpenChangePasswordModal={onOpenChangePasswordModal}
					profileDetails={profileDetails}
				/>
			)}
		</>
	);
};

export default Profile;
