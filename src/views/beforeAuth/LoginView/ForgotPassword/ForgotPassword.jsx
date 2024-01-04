import React, { useState } from 'react';
import { Button, Checkbox, Input, Typography } from '../../../../components';
import { useNavigate } from 'react-router-dom';
import './ForgotPassword.scss';
import FormLayout from '../../../../components/Layout/FormLayout/FormLayout';
import { pathname } from '../../../../router/pathname';
import { LeftArrow } from '../../../../assets/icon';

const ForgotPassword = () => {
	const navigateTo = useNavigate();
	const [input, setInput] = useState('');

	const handleButtonClick = () => {
		alert('button clicked');
	};
	const handleOnBlur = () => {
		console.log('check validation');
	};
	const handleChange = (e) => {
		setInput(e.target.value);
	};
	const handleBackToLogin = () => {
		navigateTo(pathname.LOGIN);
	};
	return (
		<FormLayout className='ForgotPassword--FormLayout' title="Forgot Password" subTitle="A reset email will be sent to your email id">
			<Input
				className="ForgotPassword--Input"
				placeholder="Enter email"
				type="email"
				isRequired={true}
				onChange={handleChange}
				onBlur={handleOnBlur}
				value={input}
			/>

			<div className="ForgotPassword--ButtonContainer">
				<Button
					variant="primary"
					isDisabled={true}
					onClick={handleButtonClick}
					className="ForgotPassword--Button"
				>
					Request new password
				</Button>
			</div>
			<div className="ForgotPassword--LinksContainer" onClick={handleBackToLogin}>
				<LeftArrow />
				<span className="ForgotPassword--ForgotLink">Back to Login</span>
			</div>
		</FormLayout>
	);
};

export default ForgotPassword;
