import React, { useEffect, useState } from 'react';
import { Formik, Form } from 'formik';
import { Box, Breadcrumb, Button, Input, Typography } from '../../../../components';
import { pathname } from '../../../../router/pathname';
import './AddTenants.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useCreateTenant } from '../Redux/actionCreator';
import { toast } from 'sonner';
import { ReactDropdown } from '../../../../components/Common';
import { useGetAllHostels } from '../../Hostel/Redux/actionCreator';

const AddTenants = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { allHostels } = useSelector((state) => state.hostels); // Assuming you have a hostels reducer

	const [hostelOptions, setHostelOptions] = useState([]);
	const [floorOptions, setFloorOptions] = useState([]);
	const [roomOptions, setRoomOptions] = useState([]);

	useEffect(() => {
		dispatch(useGetAllHostels());
	}, [dispatch]);

	useEffect(() => {
		if (allHostels) {
			const options = allHostels.map((hostel) => ({
				label: hostel.name,
				value: hostel._id,
			}));
			setHostelOptions(options);
		}
	}, [allHostels]);

	const getFloorsForHostel = (hostelId) => {
		const selectedHostel = allHostels.find((hostel) => hostel._id === hostelId);
		if (selectedHostel) {
			const options = selectedHostel.floors.map((floor) => ({
				label: `Floor ${floor.floorNumber}`,
				value: floor._id,
			}));
			setFloorOptions(options);
			setRoomOptions([]); // Clear room options when hostel changes
		}
	};

	const getRoomsForFloor = (floorId) => {
		const selectedFloor = floorOptions.find((floor) => floor.value === floorId);
		if (selectedFloor) {
			const selectedHostel = allHostels.find((hostel) => hostel.floors.some((floor) => floor._id === floorId));
			const selectedFloorData = selectedHostel.floors.find((floor) => floor._id === floorId);
			const options = selectedFloorData.rooms.map((room) => ({
				label: `Room ${room}`,
				value: room,
			}));
			setRoomOptions(options);
		}
	};

	const breadCrumbData = [
		{ text: 'Tenants', url: pathname.USER_MANAGEMENT },
		{ text: `Add Tenant`, url: pathname.USER_DETAIL },
	];

	const onSubmit = (values, { setSubmitting }) => {
		const payload = {
			name: values.name,
			email: values.email,
			mobileNo: values.contactNumber,
			type: values.status,
			hostelId: values.hostel,
			roomId: values.roomNumber,
			emergencyContactNumber: values.emergencyContact,
			adhaarNumber: values.aadharNumber,
			permanentAddress: {
				state: values.permanentAddressState,
				district: values.permanentAddressDistrict,
				pincode: values.permanentAddressPincode,
			},
			temporaryAddress: {
				state: values.temporaryAddressState,
				district: values.temporaryAddressDistrict,
				pincode: values.temporaryAddressPincode,
			},
			rentType: values.rentType,
			rentedDate: values.rentedDate,
		};

		console.log('Submitting with payload:', payload); // Add console log for debugging
		dispatch(
			useCreateTenant({
				payload,
				next: () => {
					toast.success('Tenant Created');
					navigate(pathname.TENANTS_LIST);
				},
			})
		).catch((error) => {
			console.error('Error creating tenant:', error); // Log any errors
			toast.error('Failed to create tenant');
		});
		setSubmitting(false);
	};

	return (
		<div className="AddTenants">
			<Box className="AddTenants--BreadCrumb">
				<Breadcrumb items={breadCrumbData} />
			</Box>
			<Box className="AddTenants--Form">
				<Formik
					initialValues={{
						name: '',
						email: '',
						contactNumber: '',
						status: '',
						hostel: '',
						floor: '',
						roomNumber: '',
						emergencyContact: '',
						aadharNumber: '',
						permanentAddressState: '',
						permanentAddressDistrict: '',
						permanentAddressPincode: '',
						temporaryAddressState: '',
						temporaryAddressDistrict: '',
						temporaryAddressPincode: '',
						rentType: '',
						rentedDate: '',
					}}
					validate={(values) => {
						const errors = {};
						// Add validation logic here
						return errors;
					}}
					onSubmit={onSubmit}
				>
					{({ isSubmitting, values, setFieldValue, handleChange, handleBlur }) => (
						<Form>
							<Typography className="AddTenants--Name">Personal Details</Typography>
							<div className="AddTenants--EqualDiv">
								<Input
									type="text"
									name="name"
									label="Name"
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.name}
								/>
								<ReactDropdown
									label="Type"
									options={[
										{ label: 'Student', value: 'Student' },
										{ label: 'Employed', value: 'Employed' },
										{ label: 'Guest', value: 'Guest' },
									]}
									value={values.status}
									onChange={(selectedOption) => setFieldValue('status', selectedOption.value)}
									onBlur={handleBlur}
									placeholder="Select Type"
									isRequired
								/>
							</div>
							<div className="AddTenants--EqualDiv">
								<Input
									type="text"
									name="contactNumber"
									label="Contact Number"
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.contactNumber}
								/>
								<Input
									type="text"
									name="emergencyContact"
									label="Emergency Contact Number"
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.emergencyContact}
								/>
							</div>
							<Input
								type="email"
								name="email"
								label="Email"
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.email}
							/>
							<Input
								type="text"
								name="aadharNumber"
								label="Aadhar Number"
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.aadharNumber}
							/>
							<Typography className="AddTenants--Name">Permanent Address</Typography>
							<div className="AddTenants--District">
								<Input
									type="text"
									name="permanentAddressState"
									label="State"
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.permanentAddressState}
								/>
								<Input
									type="text"
									name="permanentAddressDistrict"
									label="District"
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.permanentAddressDistrict}
								/>
								<Input
									type="number"
									name="permanentAddressPincode"
									label="Pincode"
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.permanentAddressPincode}
								/>
							</div>

							<Typography className="AddTenants--Name">Temporary Address</Typography>
							<div className="AddTenants--District">
								<Input
									type="text"
									name="temporaryAddressState"
									label="State"
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.temporaryAddressState}
								/>
								<Input
									type="text"
									name="temporaryAddressDistrict"
									label="District"
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.temporaryAddressDistrict}
								/>
								<Input
									type="number"
									name="temporaryAddressPincode"
									label="Pincode"
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.temporaryAddressPincode}
								/>
							</div>

							<Typography className="AddTenants--Name">Hostel Allocation</Typography>
							<ReactDropdown
								label="Hostel"
								options={hostelOptions}
								value={values.hostel}
								onChange={(selectedOption) => {
									setFieldValue('hostel', selectedOption.value);
									getFloorsForHostel(selectedOption.value);
								}}
								onBlur={handleBlur}
								placeholder="Select Hostel"
								isRequired
							/>
							<ReactDropdown
								label="Floor"
								options={floorOptions}
								value={values.floor}
								onChange={(selectedOption) => {
									setFieldValue('floor', selectedOption.value);
									getRoomsForFloor(selectedOption.value);
								}}
								onBlur={handleBlur}
								placeholder="Select Floor"
								isRequired
							/>
							<ReactDropdown
								label="Room Number"
								options={roomOptions}
								value={values.roomNumber}
								onChange={(selectedOption) => setFieldValue('roomNumber', selectedOption.value)}
								onBlur={handleBlur}
								placeholder="Select Room Number"
								isRequired
							/>

							<Typography className="AddTenants--Name">Fees</Typography>
							<ReactDropdown
								label="Rent Type"
								options={[
									{ label: 'Daily', value: 'daily' },
									{ label: 'Monthly', value: 'monthly' },
								]}
								value={values.rentType}
								onChange={(selectedOption) => setFieldValue('rentType', selectedOption.value)}
								onBlur={handleBlur}
								placeholder="Select Rent Type"
								isRequired
							/>
							<Input
								type="text"
								name="rentedDate"
								label="Rented Date"
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.rentedDate}
							/>

							<Button type="submit" disabled={isSubmitting}>
								Submit
							</Button>
						</Form>
					)}
				</Formik>
			</Box>
		</div>
	);
};

export default AddTenants;
