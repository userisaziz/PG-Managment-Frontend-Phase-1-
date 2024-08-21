import React from 'react';
import './AddHostel.scss';
import { Box, Button, Dropdown, Typography, Input } from '../../../../components';
import { Formik, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';
import { useCreateHostel } from '../Redux/actionCreator';
import { toast } from 'sonner';

const AddHostel = () => {
	const dispatch = useDispatch();

	const initialValues = {
		name: '',
		state: '',
		district: '',
		pincode: '',
		pgType: 'Male',
		numFloors: '',
	};

	const onSubmit = (values) => {
		const payload = {
			name: values.name,
			numFloors: values.numFloors,
			address: {
				state: values.state,
				district: values.district,
				pincode: values.pincode,
			},
			pgType: values.pgType,
		};
		dispatch(
			useCreateHostel({
				payload: payload,
				next: () => {
					toast.success('Created');
				},
			})
		);
		console.log(values);
	};

	const pgTypeOptions = ['Men', 'Women', 'Coliving'];

	return (
		<Box className="AddHostel">
			<Typography className="AddHostel--Title">Add a Hostel</Typography>
			<Formik initialValues={initialValues} onSubmit={onSubmit}>
				{({ values, errors, touched, handleChange, handleBlur }) => (
					<Form className="AddHostel--Content">
						<Input
							label="Name"
							name="name"
							value={values.name}
							onChange={handleChange}
							onBlur={handleBlur}
							isRequired
							errorMessage={touched.name && errors.name ? errors.name : null}
						/>
						<Input
							label="Number of Floors"
							name="numFloors"
							value={values.numFloors}
							onChange={handleChange}
							onBlur={handleBlur}
							isRequired
							errorMessage={touched.numFloors && errors.numFloors ? errors.numFloors : null}
						/>
						<Input
							label="State"
							name="state"
							value={values.state}
							onChange={handleChange}
							onBlur={handleBlur}
							isRequired
							errorMessage={touched.state && errors.state ? errors.state : null}
						/>
						<Input
							label="District"
							name="district"
							value={values.district}
							onChange={handleChange}
							onBlur={handleBlur}
							isRequired
							errorMessage={touched.district && errors.district ? errors.district : null}
						/>
						<Input
							label="Pincode"
							name="pincode"
							type="number"
							value={values.pincode}
							onChange={handleChange}
							onBlur={handleBlur}
							isRequired
							errorMessage={touched.pincode && errors.pincode ? errors.pincode : null}
						/>
						<Dropdown
							label="PG Type"
							name="pgType"
							options={pgTypeOptions}
							value={values.pgType}
							onChange={handleChange}
							onBlur={handleBlur}
							placeholder="Select PG Type"
							isRequired
							errorMessage={touched.pgType && errors.pgType ? errors.pgType : null}
						/>
						<div className="AddHostel--ButtonsDiv">
							<Button variant="secondary" type="button">
								Cancel
							</Button>
							<Button type="submit">Submit</Button>
						</div>
					</Form>
				)}
			</Formik>
		</Box>
	);
};

export default AddHostel;
