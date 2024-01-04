import React, { useState } from 'react';
import { Button, Checkbox, Input, Typography } from '../../../components';
import { useNavigate } from 'react-router-dom';
import './LoginView.scss';
import FormLayout from '../../../components/Layout/FormLayout/FormLayout';
import { pathname } from '../../../router/pathname';
import EyeHide from '../../../assets/icon/EyeHide/EyeHide';
import EyeShow from '../../../assets/icon/EyeShow/EyeShow';

const LoginView = () => {
	const navigateTo = useNavigate();
	const [checked, setChecked] = useState(false);
	const [input, setInput] = useState('');
	const [showPassword, setShowPassword] = useState(false);
	const handleCheckbox = (e) => {
		setChecked(e.target.checked);
	};
	const handleButtonClick = () => {
		navigateTo(pathname.SLM_ADMIN);
	};
	const handleOnBlur = () => {
		console.log('check validation');
	};
	const handleChange = (e) => {
		setInput(e.target.value);
	};
	const handleForgotPassword = () => {
		navigateTo(pathname.FORGOT_PASSWORD);
	};
	const handleResetPassword = () => {
		navigateTo(pathname.VALIDATE_OTP);
	};
	const togglePasswordVisibility = () => {
		if (input?.length > 0) setShowPassword((prevState) => !prevState);
	};
	const renderIcon = () =>
		showPassword ? (
			<EyeShow onClick={togglePasswordVisibility} className="LoginView--Icon" />
		) : (
			<EyeHide onClick={togglePasswordVisibility} className="LoginView--Icon" />
		);

	return (
		<FormLayout title={'Sign In'} className="LoginView--FormLayout">
			<div className="LoginView--InputBox">
				<Input
					className="LoginView--Input"
					placeholder="Email ID"
					type="email"
					isRequired={true}
					onChange={handleChange}
					onBlur={handleOnBlur}
					value={input}
				/>
				<Input
					className="LoginView--Input"
					placeholder="Password"
					type={showPassword ? 'text' : 'password'}
					isRequired={true}
					onChange={handleChange}
					onBlur={handleOnBlur}
					value={input}
					icon={renderIcon()}
				/>
			</div>
			<div className="LoginView--CheckboxContainer">
				<Checkbox label="Remember me" onChange={handleCheckbox} isChecked={checked} id="generic-checkbox" />
			</div>
			<Button variant="primary" onClick={handleButtonClick} className="LoginView--Button">
				Sign In
			</Button>
			<div className="LoginView--LinksContainer">
				<span className="LoginView--ForgotLink" onClick={handleForgotPassword}>
					Forgot your password?
				</span>
				<span className="LoginView--ResetLink" onClick={handleResetPassword}>
					Reset Password
				</span>
			</div>
		</FormLayout>
	);
};

export default LoginView;
