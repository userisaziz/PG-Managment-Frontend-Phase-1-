import React, { useState, useRef, useEffect } from 'react';
// import ArrowDownIcon from "../../Assets/icons/ArrowDownIcon";
import './CustomSelect.scss';
// import ArrowDownIcon from '../../Assets/icons/ArrowDownIcon/ArrowDownIcon';
// import InfoIcon from '../../Assets/icons/InfoIcon/InfoIcon';

function CustomSelect({
	options,
	placeholder,
	defaultValue,
	onSelect,
	// setIsOpen,
	// isOpen,
	// label,
	required,
	handleOptionSelected,
	optionKey,
	// selectedOption
	validate,
	errorMessage,
}) {
	const [isOpen, setIsOpen] = useState(false);
	const [handleError, setHandleError] = useState(false);
	const [selectedOption, setSelectedOption] = useState(defaultValue || '');
	const selectRef = useRef(null);
	const handleOptionSelect = (option) => {
		handleOptionSelected && handleOptionSelected(option);
		setSelectedOption(option[optionKey]);
		setIsOpen(false);
		if (onSelect) {
			onSelect(option[optionKey]);
		}
	};

	const handleClickOutside = (event) => {
		if (selectRef.current && !selectRef.current.contains(event.target)) {
			setIsOpen(false);
		}
	};
	useEffect(() => {
		// Add event listener to detect clicks outside the dropdown
		document.addEventListener('click', handleClickOutside);

		// Clean up the event listener when the component unmounts
		return () => {
			document.removeEventListener('click', handleClickOutside);
		};
	}, []);

	return (
		<div className={`CustomSelect ${isOpen ? 'open' : ''}`} ref={selectRef}>
			<label className="CustomSelect__label">
				{/* {label || 'text'} */}
				{required && <span className="CustomSelect__small__icon">*</span>}
			</label>
			<button
				className="CustomSelect__button"
				onClick={
					options?.length > 0
						? () => setIsOpen(!isOpen)
						: () => {
								setIsOpen(false);
								setHandleError(true);
							}
				}
				type="button"
				style={{ color: defaultValue ? '#333333' : ' #8c8c8c' }}
			>
				{defaultValue || placeholder}

				<span className="arrow">
					{/* <img src={Vector} alt="text" /> */}
					{/* <ArrowDownIcon /> */}
				</span>
			</button>
			{isOpen && (
				<ul className="CustomSelect__options">
					{options?.map((option) => (
						<li
							key={option.value}
							className={`CustomSelect__option ${selectedOption === option.label ? 'selected' : ''}`}
							onClick={() => handleOptionSelect(option)}
						>
							{/* {option.label} */}
							{option[optionKey]}
						</li>
					))}
				</ul>
			)}
			<div className="CustomSelect__validation">
				{!validate && errorMessage && handleError && (
					<span className="CustomSelect__validation__message">
						{/* <InfoIcon className="CustomSelect__validation__icon" /> */}
						{errorMessage}
					</span>
				)}
			</div>
		</div>
	);
}

export default CustomSelect;
