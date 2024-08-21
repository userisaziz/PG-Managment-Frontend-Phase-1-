import React, { useEffect, useMemo, useState } from 'react';
import { Box, Button, Dropdown, Typography, Input } from '../../../../components';
import { Formik, Form } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { useCreateRoom } from '../Redux/actionCreator';
import { useGetAllHostels } from '../../Hostel/Redux/actionCreator';
import { toast } from 'sonner';
import './AddRoom.scss';
import { ReactDropdown } from '../../../../components/Common';
import { useNavigate } from 'react-router-dom';
import { pathname } from '../../../../router/pathname';
import { useCallback } from 'react';

const AddRoom = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { allHostels } = useSelector((state) => state.hostels); // Assuming you have a hostels reducer

	const [hostelOptions, setHostelOptions] = useState([]);
	const [floorOptions, setFloorOptions] = useState([]);

	// useEffect(() => {
	// 	dispatch(useGetAllHostels());
	// }, [dispatch]);

	useEffect(() => {
		const hostelOptions = allHostels.map((hostel) => ({
			label: hostel.name,
			value: hostel._id,
		}));
		console.log('hostelOptions: ', hostelOptions);
		setHostelOptions(hostelOptions);
	}, [allHostels]);

	const handleHostels = useMemo(() => {
		dispatch(useGetAllHostels());
	}, []);

	const getFloorsForHostel = (hostelId) => {
		const selectedHostel = allHostels.find((hostel) => hostel._id === hostelId);
		if (selectedHostel) {
			const floorOptions = selectedHostel.floors.map((floor) => ({
				label: `Floor ${floor.floorNumber}`,
				value: floor._id,
			}));
			setFloorOptions(floorOptions);
		}
	};

	const initialValues = {
		roomNo: '',
		imageUrl: '',
		maxOccupancy: '',
		hostelId: '',
		floorId: '',
		feeMonth: 0,
		feePerDay: 0,
	};

	const onSubmit = (values) => {
		dispatch(
			useCreateRoom({
				payload: values,
				next: () => {
					toast.success('Room Created');
					navigate(pathname.ROOMS_LIST);
				},
			})
		);
	};

	return (
		<Box className="AddRoom">
			<Typography className="AddRoom--Title">Add a Room</Typography>
			<Formik initialValues={initialValues} onSubmit={onSubmit}>
				{({ values, errors, touched, handleChange, handleBlur }) => (
					<Form className="AddRoom--Content">
						<Input
							label="Room Number"
							name="roomNo"
							type="text"
							value={values.roomNo}
							onChange={handleChange}
							onBlur={handleBlur}
							isRequired
						/>
						<Input
							label="Image URL"
							name="imageUrl"
							type="text"
							value={values.imageUrl}
							onChange={handleChange}
							onBlur={handleBlur}
							isRequired
						/>
						<ReactDropdown
							label="Hostel"
							options={hostelOptions}
							value={values.hostelId}
							onFocus={handleHostels}
							onChange={(selectedOption) => {
								handleChange({ target: { name: 'hostelId', value: selectedOption.value } });
								getFloorsForHostel(selectedOption.value);
							}}
							onBlur={handleBlur}
							placeholder="Select Hostel"
							isRequired
						/>
						<ReactDropdown
							label="Floor"
							options={floorOptions}
							value={values.floorId}
							onChange={(selectedOption) =>
								handleChange({ target: { name: 'floorId', value: selectedOption.value } })
							}
							onBlur={handleBlur}
							placeholder="Select Floor"
							isRequired
						/>
						<Input
							label="Max Occupancy"
							name="maxOccupancy"
							type="number"
							value={values.maxOccupancy}
							onChange={handleChange}
							onBlur={handleBlur}
							isRequired
						/>
						<Input
							label="Monthly Fee"
							name="feeMonth"
							type="number"
							value={values.feeMonth}
							onChange={handleChange}
							onBlur={handleBlur}
							isRequired
						/>
						<Input
							label="Fee Per Day"
							name="feePerDay"
							type="number"
							value={values.feePerDay}
							onChange={handleChange}
							onBlur={handleBlur}
							isRequired
						/>
						<div className="AddRoom--ButtonsDiv">
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

export default AddRoom;
