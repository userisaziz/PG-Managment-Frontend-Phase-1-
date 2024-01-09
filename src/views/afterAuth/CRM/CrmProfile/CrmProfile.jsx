import React from 'react';
import './CrmProfile.scss';
import ProfileDetails from './ProfileDetails/ProfileDetails';
import ProfileTabale from './ProfileTable';
// import { useSelector } from 'react-redux';
const CrmProfile = () => {
	// const { crm } = useSelector((state) => state);
	// const { getUserDetails } = crm;

	return (
		<div className="CrmProfile__wrapper">
			{/* <ProfileDetails userDetails={getUserDetails ? getUserDetails[0] : []} />
			<ProfileTabale /> */}
		</div>
	);
};

export default CrmProfile;
