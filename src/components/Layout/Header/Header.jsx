import React, { useState } from 'react';
import './Header.scss';
import { ArrowDown, ArrowUp, LogoWithBrandName, UserprofileIcon } from '../../../assets/icon';
import { useNavigate } from 'react-router-dom';
import { Notification, Profile, ProfileChip, ProfileDropdown, Typography } from '../../Common';

const Header = (props) => {
	const { data } = props;
	const navigateTo = useNavigate();
	const [isOpenChangePasswordModal, setIsOpenChangePasswordModal] = useState(false);

	const [isProfileOpen, setIsProfileOpen] = useState(false);
	const [confirmModal, setConfirmModal] = useState(false);
	const handleProfile = () => setIsProfileOpen(!isProfileOpen);

	const firstName = localStorage.getItem('firstName');
	const lastName = localStorage.getItem('lastName');

	return (
		<header className="Header">
			<div className="Header--Left">
				<LogoWithBrandName />
			</div>
			<div className="Header--Right">
				<Notification />

				<Profile
					isProfileOpen={isProfileOpen}
					handleProfile={handleProfile}
					data={data}
					onOpenChangePasswordModal={setIsOpenChangePasswordModal}
				/>
			</div>

			{/* <ChangePassword isOpen={isOpenChangePasswordModal} onClose={setIsOpenChangePasswordModal} /> */}
		</header>
	);
};

export default Header;
