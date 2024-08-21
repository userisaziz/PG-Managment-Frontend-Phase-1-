import React from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import './ReactDropdown.scss';
import { DropDownClosed, DropDownUp } from '../../../assets/icon';

const ReactDropdown = ({
	options,
	onChange,
	defaultOption,
	defaultValue,
	placeholder,
	className,
	disabled,
	controlClassName,
	onFocus,
	placeholderClassName,
	menuClassName,
	label,
}) => {
	return (
		<div className="ReactDropdown">
			<label className="Input--Label">{label}</label>
			<Dropdown
				options={options}
				onChange={onChange}
				onFocus={onFocus}
				value={defaultOption}
				disabled={disabled}
				defaultValue={defaultValue}
				placeholder={placeholder}
				placeholderClassName={`ReactDropdown--Placeholder ${placeholderClassName}`}
				className={`ReactDropdown ${className}`}
				controlClassName={`ReactDropdown--ReactControlClassName ${controlClassName}`}
				arrowOpen={<DropDownUp />}
				arrowClosed={<DropDownClosed />}
				menuClassName={`ReactDropdown--ReactMenuClassName ${menuClassName}`}
			/>
		</div>
	);
};

export default ReactDropdown;
