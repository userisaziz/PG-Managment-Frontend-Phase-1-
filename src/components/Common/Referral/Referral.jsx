import React, { useState } from 'react';
import { Cross } from '../../../assets/icon';
import Typography from '../Typography/Typography';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import './Referral.scss';

const Referral = (props) => {
	const { data } = props;
	const [openModal, setIsOpenModal] = useState(false);
	const HeaderHelper = () => {
		return (
			<div className="Referral--Header">
				<Typography className="Referral--Title">Referral</Typography>
				<Cross onClick={() => setIsOpenModal(false)} className="Referral--Icon" />
			</div>
		);
	};
	return (
		<div className="Referral">
			<div className="Referral--Header">
				<Typography className="Referral--Title">
					Referral <span className="Referral--Span">(10)</span>{' '}
				</Typography>
				<Button variant="Link" className="Referral--Button" onClick={() => setIsOpenModal(true)}>
					View More
				</Button>
			</div>
			<div className="Referral--Container">
				{data?.slice(0, 4)?.map((data) => (
					<div className="Referral--Content">
						<Typography className="Referral--Number">{data?.number}</Typography>
						<Typography className="Referral--Date">{data?.date}</Typography>
					</div>
				))}
			</div>
			<Modal onClose={setIsOpenModal} isOpen={openModal} title={HeaderHelper()}>
				<div className="Referral--Container">
					{data?.map((data) => (
						<div className="Referral--Content">
							<Typography className="Referral--Number">{data?.number}</Typography>
							<Typography className="Referral--Date">{data?.date}</Typography>
						</div>
					))}
				</div>
			</Modal>
		</div>
	);
};

export default Referral;
