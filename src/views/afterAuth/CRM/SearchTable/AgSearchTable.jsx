import React, { useState, useMemo, useCallback, useRef, useEffect } from 'react';

// import dayjs from 'dayjs';

import { createSearchParams, useNavigate } from 'react-router-dom';
import { Pathname } from '../../../../../Pathname';
// import CustomPagination from '../../../../../Components/AgTable/CustomPagination';
import { Table } from '../../../../components';

export const AgSearchTable = ({ rowData, columnDefs, currentPage, handlePageChange, count, limit }) => {
	const navigate = useNavigate();

	const pageSize = limit;
	const totalPages = Math.ceil(count / pageSize);
	const paginatedRowData = useMemo(() => {
		const startIndex = (currentPage - 1) * pageSize;
		const endIndex = startIndex + pageSize;
		return rowData;
	}, [currentPage]);

	const updatedColumnDefs = useMemo(() => {
		return columnDefs.map((colDef) => {
			if (colDef.field === 'createdAt') {
				return {
					...colDef,
					cellRenderer: (row) => <span>{dayjs(row?.data?.createdAt).format('MMMM D, YYYY h:mm:ss A')}</span>,
				};
			} else if (colDef.field === 'email') {
				return {
					...colDef,
					cellRenderer: (row) => <span>{row?.data?.email ? row?.data?.email : '-'}</span>,
				};
			} else if (colDef.field === 'address') {
				return {
					...colDef,
					cellRenderer: (row) => <span>{row?.data?.address ? row?.data?.address : '-'}</span>,
				};
			} else if (colDef.field === 'user_name') {
				return {
					...colDef,
					cellRenderer: (row) => (
						<span
							onClick={() =>
								navigate(
									{
										pathname: Pathname.CRM_PROFILE,
										search: createSearchParams({
											username: row?.data?.user_name,
										}).toString(),
									},
									{
										state: { data: row?.data },
									}
								)
							}
							className="AccountTable__name_style"
						>
							{row?.data?.user_name}
						</span>
					),
				};
			}
			return colDef;
		});
	}, [columnDefs]);

	return (
		<div style={{ marginTop: '24px' }}>
			<Table
				paginatedData={paginatedRowData}
				columnDefs={updatedColumnDefs}
				suppressMovableColumns={true}
				suppressCellFocus={true}
				suppressRowHoverHighlight={true}
				pagination={false} // Disable ag-Grid's built-in pagination
				// rowHeight={56}
				isFullWidth={true}
			/>
			<div className="pagination-container">
				{/* <CustomPagination currentPage={currentPage} totalPages={totalPages} onChange={handlePageChange} /> */}
			</div>
		</div>
	);
};
