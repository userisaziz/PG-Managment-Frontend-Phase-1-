import React, { useEffect } from 'react';
import './ProfileDetails.scss';
import RefundModal from './RefundModal';
import WalletIcon from '../../../../../../Assets/icons/WalletIcon/WalletIcon.jsx';
import { useNavigate } from 'react-router';
import dayjs from 'dayjs';
import { setRouteNameAndPath } from '../../../Redux/reducer';
import { useDispatch } from 'react-redux';
import { ArrowLeft } from '../../../../../../Assets/icons';

const ProfileDetails = ({ userDetails }) => {
	const [open, setOpen] = React.useState(false);
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);
	const data = userDetails;
	const handleNavigateCRM = () => {
		navigate(-1);
	};

	useEffect(() => {
		const timer = setTimeout(() => {
			dispatch(
				setRouteNameAndPath({
					name: `${data?.user_name}`,
					icon: (
						<ArrowLeft
							onClick={() => {
								handleNavigateCRM();
							}}
						/>
					),
				})
			);
		}, 0);
		return () => {
			clearInterval(timer);
		};
	}, [data]);

	return (
		<div className="CRProfileDetails">
			<h4 className="CRProfileDetails__heading">User Details</h4>
			<div className="CRProfileDetails__wrapper">
				<div className="CRProfileDetails__user__profile">
					<div className="CRProfileDetails__user__details">
						<h4 className="CRProfileDetails__user__name">
							{data?.first_name && data?.last_name
								? `${data.first_name} ${data.last_name}`
								: data?.user_name}
						</h4>

						<div className="CRProfileDetails__user__contacts__details">
							<span>+91 {data?.mobile_number}</span>
							<span>{data?.email ? data?.email : '-'}</span>
							<span>{data?.address ? data?.address : '-'}</span>
						</div>
					</div>
					<div className="CRProfileDetails__user__join__date">
						<p className="CRProfileDetails__user__join__paragraph">
							Joined {dayjs(data?.createdAt).format('DD.MM.YY ')}
						</p>
					</div>
				</div>
				<div className="CRProfileDetails__balance">
					<div className="CRProfileDetails__wallet">
						<p>Current Wallet Balance</p>
						<div className="CRProfileDetails__wallet__balance">
							<WalletIcon />
							<p className="CRProfileDetails__wallet__paragraph">{data?.wallet?.balance}</p>
						</div>
						<div className="CRProfileDetails__refund__modal">
							<button onClick={handleOpen} className="CRProfileDetails__refund__button">
								Refund
							</button>
							<RefundModal
								handleClose={handleClose}
								open={open}
								handleOpen={handleOpen}
								customerId={data?.id}
								setOpen={setOpen}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default ProfileDetails;
