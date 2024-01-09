import React, { useState } from 'react';
import Button from '../../../../../../Components/Button/Button';
import Input from '../../../../../../Components/Input/Input';
import { useDispatch } from 'react-redux';
import './RefundModal.scss';
import { refundTxn } from '../../Redux/actionCreator';
import Modal from '../../../../../../Components/Modal/Modal';

const RefundModal = ({ setOpen, open, handleClose, customerId }) => {
	const [inputValue, setInputValue] = useState();
	const [transactionVlidate, setTransactionVlidate] = useState(false);

	const dispatch = useDispatch();

	const handleChange = (elem) => {
		setTransactionVlidate(true);
		setInputValue(elem.target.value);
	};
	const handleRefund = async () => {
		const payload = {
			customer_id: customerId,
			transaction_number: inputValue,
		};
		await dispatch(refundTxn(payload));
		setOpen(false);
	};
	const customButtonStyle = {
		width: '210px',
		height: '56',
	};

	return (
		<Modal {...{ open: open, handleClose: handleClose, boxStyle: { width: '456px' } }}>
			<h4 className="RefundModal__heading">Refund Money</h4>
			<div style={{ marginTop: '20px' }}>
				<Input
					value={inputValue}
					handleChange={handleChange}
					type={'text'}
					label={'Enter Transaction number'}
					placeholder={`TXN number `}
				/>
			</div>
			<div className="RefundModal__button">
				<Button
					onClick={() => {
						setInputValue('');
					}}
					style={customButtonStyle}
					variant={inputValue ? 'outline' : 'disabled_outline'}
					size="small"
				>
					Cancel
				</Button>
				<Button
					style={customButtonStyle}
					variant={transactionVlidate ? 'primary' : 'disabled'}
					size="small"
					onClick={handleRefund}
				>
					Initiate refund
				</Button>
			</div>
		</Modal>
	);
};

export default RefundModal;
