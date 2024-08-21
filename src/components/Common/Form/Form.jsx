import React from 'react';
import { Formik, Form as FromWrapper } from 'formik';

const Form = ({
	initialValues,
	validationSchema,
	handleSubmit,
	children,
	validateOnChange = true,
	validateOnBlur = true,
}) => (
	<Formik
		initialValues={initialValues}
		validationSchema={validationSchema}
		enableReinitialize={true}
		validateOnChange={validateOnChange}
		validateOnBlur={validateOnBlur}
		onSubmit={(values, { setSubmitting, resetForm, setErrors }) => {
			handleSubmit(values, resetForm, setErrors);
			setSubmitting(true);
		}}
	>
		{(formik) => <FromWrapper autoComplete="off">{children(formik)}</FromWrapper>}
	</Formik>
);
export default Form;
