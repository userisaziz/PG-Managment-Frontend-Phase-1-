import React, { useRef, useState } from 'react';
import { InvoiceEllipsis } from '../../../../../assets/icon';
import './Invoice.scss';
import Tippy from '@tippyjs/react';

const Invoice = ({ data }) => {
	const tippyRef = useRef();
	const [visible, setVisible] = useState(false);
	const show = () => setVisible(true);
	const hide = () => setVisible(false);

	const dropDownContent = (
		<div className="MenuContainer">
			<div className="MenuContainer--Select">View invoice</div>
			<div className="MenuContainer--Select">Download invoice</div>
		</div>
	);

	return (
		<>
			<Tippy
				ref={tippyRef}
				content={dropDownContent}
				visible={visible}
				onClickOutside={hide}
				allowHTML={true}
				arrow={false}
				appendTo={document.body}
				interactive={true}
				placement="right"
			>
				<div className="MenuContainer--InvoiceContainer" onClick={visible ? hide : show}>
					<InvoiceEllipsis />
				</div>
			</Tippy>
		</>
	);
};

export default Invoice;
