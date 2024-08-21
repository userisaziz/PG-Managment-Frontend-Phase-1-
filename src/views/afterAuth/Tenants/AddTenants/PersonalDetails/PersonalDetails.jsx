import React from 'react';
import { Box, Button, CustomSelect, Dropdown, Input, Typography } from '../../../../../components';
import { Wizard, useWizard } from 'react-use-wizard';
import './PersonalDetails.scss';
import { Formik, Form, Field, ErrorMessage } from 'formik'; // Import Formik components
import NextPrevButton from '../../../../../components/Tenants/NextPrevButton';

const PersonalDetails = () => {
	const { handleStep } = useWizard();

	const menu = [
		{
			label: 'Student',
			value: 'student',
		},
		{
			label: 'Employed',
			value: 'employed',
		},
		{
			label: 'Unemployed',
			value: 'unemployed',
		},
	];

	return (
		<Formik
			initialValues={{
				name: '',
				status: '',
				contactNumber: '',
				emergencyContact: '',
				email: '',
				aadharNumber: '',
			}}
			validate={(values) => {
				const errors = {};
				// Add validation logic here
				return errors;
			}}
			onSubmit={(values, { setSubmitting }) => {
				console.log('values: ', values);

				setSubmitting(false);
			}}
		>
			{({ isSubmitting }) => (
				<Form>
					<Typography className="PersonalDetails--Name">Personal Details</Typography>
					<div className="PersonalDetails--EqualDiv">
						<Field type="text" name="name" label="Name" component={Input} />
						<Field name="status" label="Status" component={Dropdown} options={menu} keyToRead="value" />
					</div>
					<div className="PersonalDetails--EqualDiv">
						<Field type="number" name="contactNumber" label="Contact Number" component={Input} />
						<Field type="number" name="emergencyContact" label="Emergency Contact" component={Input} />
					</div>
					<Field type="email" name="email" label="Email" component={Input} />
					<Field type="number" name="aadharNumber" label="Aadhar Number" component={Input} />

					<NextPrevButton disabled={isSubmitting} />
				</Form>
			)}
		</Formik>
	);
};

export default PersonalDetails;
