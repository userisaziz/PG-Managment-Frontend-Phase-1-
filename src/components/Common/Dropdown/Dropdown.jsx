import React, { useEffect, useState } from 'react';
import { Select } from 'antd';
import { v4 as uuidv4 } from 'uuid';

import './Dropdown.scss';

const { Option } = Select;

const Dropdown = (props) => {
	const {
		className,
		options,
		onSelect,
		label,
		isRequired,
		keyToRead,
		placeholder,
		prefix,
		name,
		id,
		onBlur,
		isError,
		errorMessage,
		value,
		isDisabled,
		onClick,
		isLoading,
		suffixKeyToRead,
	} = props;

	const [selectedValue, setSelectedValue] = useState(value);

	const customClassName = `Dropdown ${className}`;

	const handleChange = (value) => {
		setSelectedValue(value);
		const selectedItem = options.find((item) => (keyToRead ? item[keyToRead] === value : item === value));
		onSelect(selectedItem);
	};

	const addSuffix = (item) => {
		if (suffixKeyToRead) {
			return `(${item[suffixKeyToRead] ?? ''})`;
		} else {
			return '';
		}
	};

	const itemsInDropdown = (item) =>
		keyToRead ? `${item[keyToRead]}  ${suffixKeyToRead ? addSuffix(item) : ''} ` : item;

	useEffect(() => {
		if (value === '') setSelectedValue('');
	}, [value]);

	return (
		<div className={customClassName}>
			<Select
				value={selectedValue}
				onChange={handleChange}
				placeholder={placeholder}
				disabled={isDisabled}
				className="Dropdown--Field"
				dropdownClassName="Dropdown--Menu"
			>
				{options &&
					options.map((item, index) => (
						<Option key={uuidv4()} value={keyToRead ? item[keyToRead] : item}>
							{itemsInDropdown(item)}
						</Option>
					))}
			</Select>
			{isError && <div className="error-message">{errorMessage}</div>}
		</div>
	);
};

export default Dropdown;
