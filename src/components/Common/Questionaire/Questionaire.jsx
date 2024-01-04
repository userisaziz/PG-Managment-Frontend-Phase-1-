import React, { useState } from 'react';
import Typography from '../Typography/Typography';
import Button from '../Button/Button';
import './Questionaire.scss';
import Modal from '../Modal/Modal';
import { Cross } from '../../../assets/icon';

const Questionaire = (props) => {
	const { data, variant } = props;

	const [openModal, setIsOpenModal] = useState(false);
	const HeaderHelper = () => {
		return (
			<div className="Questionaire--Header">
				<Typography className="Questionaire--Title">Questionaire</Typography>
				<Cross onClick={() => setIsOpenModal(false)} className="Questionaire--Icon" />
			</div>
		);
	};
	const ContentClassName = `Questionaire--${variant}`;
	return (
		<div className="Questionaire">
			<div className="Questionaire--Header">
				<Typography className="Questionaire--Title">Questionaire</Typography>
				<Button variant="Link" className="Questionaire--Button" onClick={() => setIsOpenModal(true)}>
					View More
				</Button>
			</div>
			<div className="Questionaire--Container">
				{data?.slice(0, 5)?.map((data) => (
					<div className={ContentClassName}>{data?.que}</div>
				))}
			</div>
			<Modal onClose={setIsOpenModal} isOpen={openModal} title={HeaderHelper()}>
				<div className="Questionaire--Container">
					{data?.map((data) => (
						<div className="Questionaire--Box">{data?.que}</div>
					))}
				</div>
			</Modal>
		</div>
	);
};

export default Questionaire;
