import React, { useEffect, useMemo } from 'react';
import './ProfileTabale.scss';
import '../../../../../../Components/Table/Table.scss';
import { useState } from 'react';
import RadioButton from '../../../../../../Components/RadioButton/RadioButton';
import AgTable from '../../../../../../Components/AgTable/AgTable';
import TransactionIdModal from '../../../../../../Components/TransactionIdModal/TransactionIdModal';
import { useDispatch, useSelector } from 'react-redux';
import dayjs from 'dayjs';
import { ViewIcon } from '../../../../../../Assets/icons';
import CustomPagination from '../../../../../../Components/AgTable/CustomPagination';

import { searchedUserAllData, searchedUserChargingTransactions } from '../../Redux/actionCreator.js';
import { AccountTransactiohHeaders } from './AccountTransactiohHeaders';
import { useSearchParams } from 'react-router-dom';
import Badge from '../../../../../../Components/Badge/Badge';
import PreLoader from '../../../../../../Assets/icons/PreLoader/PreLoader';
import DocumentIcon from '../../../../../../Assets/icons/DocumentIcon/DocumentIcon';
import { downloadInvoice } from '../../../AccountTransactions/Redux/actionCreator';
import { chargingTransactionHeader } from './ChargingTransactionHeaders';

const ProfileTabale = () => {
	const [searchParam] = useSearchParams();
	const username = searchParam.get('username');
	const [openTransactionModal, setOpenTransactionModal] = useState(false);
	const [modalId, setModalId] = useState();
	const [selectedRadio, setSelectedRadio] = useState('Charging Transactions');
	const radioLabel = ['Charging Transactions', 'Account Transactions'];

	const dispatch = useDispatch();
	const handleTransactionModalClose = () => {
		setOpenTransactionModal(false);
	};

	const { crm } = useSelector((state) => state);
	const {  getUserDetails, getUserChargingTransaction, isLoading, count, countInAccount } = crm;

	const [chargePage, setChargePage] = useState(1);
	const [accPage, setAccPage] = useState(1);
	const handlePageChange = (page) => {
		setChargePage(page);
	};
	const handleAccPageChange = (page) => {
		setAccPage(page);
	};

	const totalPages = Math.ceil(count / 5);
	const totalPagesinAcc = Math.ceil(countInAccount / 5);
	const handleRadioChange = (value) => {
		setSelectedRadio(value);
	};

	const handleFileDownload = async (charging_session_id, invoice_id) => {
		await dispatch(
			downloadInvoice({
				charging_session_id: charging_session_id,
				invoice_id: invoice_id,
			})
		);
	};

	const updatedColumnDefsAcc = useMemo(() => {
		return AccountTransactiohHeaders.map((colDef) => {
			if (colDef.field === 'Actions') {
				return {
					...colDef,
					cellRenderer: (row) => (
						<div className="AccountTable__items">
							{row?.data?.invoice_type == 'charging' ? (
								<div
									title="Download invoice"
									className="AccountTable__singleItem"
									onClick={() => {
										handleFileDownload(row?.data?.charging_session_id, row?.data?.invoice_id);
									}}
								>
									<DocumentIcon />
								</div>
							) : (
								'-'
							)}
						</div>
					),
				};
			} else if (colDef.field === 'createdAt') {
				return {
					...colDef,
					cellRenderer: (row) => <span>{dayjs(row?.data?.createdAt).format('MMMM D, YYYY h:mm:ss A')}</span>,
				};
			} else if (colDef.field === 'txn_status') {
				return {
					...colDef,
					cellRenderer: (row) => (
						<span>
							<Badge badge={false} props={row?.data?.txn_status} />
						</span>
					),
				};
			} else if (colDef.field === 'merchant_id') {
				return {
					...colDef,
					cellRenderer: (row) => <span>{row.data.merchant_id ? row.data.merchant_id : '-'}</span>,
				};
			} else if (colDef.field === 'order_id') {
				return {
					...colDef,
					cellRenderer: (row) => <span>{row.data.order_id ? row.data.order_id : '-'}</span>,
				};
			} else if (colDef.field === 'external_payment_id') {
				return {
					...colDef,
					cellRenderer: (row) => (
						<span>{row.data.external_payment_id ? row.data.external_payment_id : '-'}</span>
					),
				};
			}
			return colDef;
		});
	}, []);

	const updatedColumnDefs = useMemo(() => {
		return chargingTransactionHeader.map((colDef) => {
			if (colDef.field === 'chargingSession.createdAt') {
				return {
					...colDef,
					cellRenderer: (row) => (
						<span>{dayjs(row?.data?.createdAt).format('MMMM D, YYYY h:mm:ss A')}</span>
					),
				};
			}

			 if (colDef.field === 'chargingSession.charging_end') {
				return {
					...colDef,
					cellRenderer: (row) => (
						<span>
							{dayjs(row?.data?.transactions?.chargingSession?.charging_end).format(
								'MMMM D, YYYY h:mm:ss A'
							)}
						</span>
					),
				};
			} else if (colDef.field === 'Actions') {
				return {
					...colDef,
					cellRenderer: (row) => (
						<div
							onClick={() => {
								setOpenTransactionModal(row?.data?.id),
									setModalId(row?.data?.chargingSession?.ocpp_transaction_id);
							}}
							style={{ cursor: 'pointer' }}
						>
							<ViewIcon />
						</div>
					),
				};
			} else if (colDef.field === 'id') {
				return {
					...colDef,
					cellRenderer: (row) => (
						<div
							onClick={() => {
								setOpenTransactionModal(row?.data?.id);
								setModalId(row?.data?.chargingSession?.ocpp_transaction_id);
							}}
							style={{
								color: '#00AA74',
								textDecoration: 'underline',
								cursor: 'pointer',
								flexWrap: 'nowrap',
							}}
						>
							{row?.data?.id}
						</div>
					),
				};
			} 
			return colDef;
		});
	}, [chargingTransactionHeader]);

	useEffect(() => {
		dispatch(
			searchedUserChargingTransactions({
				username: username,
				invoice_type: 'charging',
				page: chargePage - 1,
			})
		);
	}, [chargePage]);

	useEffect(() => {
		dispatch(
			searchedUserAllData({
				username: username,
				page: accPage - 1,
			})
		);
	}, [accPage]);

	return (
		<div className="search_table_wrp">
			<div>
				<RadioButton spans={radioLabel} onChange={handleRadioChange} defaultvalue={selectedRadio} />
			</div>

			<div className="search_table">
				{selectedRadio !== radioLabel[0] ? (
					<>
						{isLoading ? (
							<div className="AccountTransaction__preloader">
								<PreLoader />
							</div>
						) : (
							<>
								<AgTable
									columnDefs={updatedColumnDefsAcc}
									paginatedData={getUserDetails ? getUserDetails[0]?.transactions : []}
								/>
								<CustomPagination
									currentPage={accPage}
									totalPages={totalPagesinAcc}
									onChange={handleAccPageChange}
								/>
							</>
						)}
					</>
				) : (
					<>
						{' '}
						{isLoading ? (
							<div className="AccountTransaction__preloader">
								<PreLoader />
							</div>
						) : (
							<>
								<AgTable columnDefs={updatedColumnDefs} paginatedData={getUserChargingTransaction? getUserChargingTransaction : []} />
								<CustomPagination
									currentPage={chargePage}
									totalPages={totalPages}
									onChange={handlePageChange}
								/>
							</>
						)}
					</>
				)}
			</div>
			<TransactionIdModal
				openModal={openTransactionModal}
				handleClose={handleTransactionModalClose}
				modalDataId={modalId}
			/>
		</div>
	);
};
export default ProfileTabale;
