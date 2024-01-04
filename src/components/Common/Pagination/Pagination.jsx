import React from 'react';

import { ArrowLeft, ArrowRight, BackwardIcon, ForwardIcon } from '../../../assets/icon';
import ReactPaginate from 'react-paginate';

// import Input from '../Input/Input';
import Button from '../Button/Button';
import Typography from '../Typography/Typography';

import './Pagination.scss';

const Pagination = (props) => {
	const {
		goTo,
		page,
		isError,
		isLoading,
		totalItems,
		isDisabled,
		updatePage,
		updateGoTo,
		maxPageLimit = 10,
		totalItemsFound,
	} = props;

	const handlePreviousPage = () => {
		if (page > 1) updatePage(page - 1);
	};

	const handleNextPage = () => {
		updatePage(page + 1);
	};

	const handleGoToPage = (e) => {
		const pageNumber = e.target.value;

		if (!isNaN(pageNumber) && parseFloat(pageNumber) > 0 && pageNumber <= maxPageLimit) {
			updateGoTo(pageNumber);
		} else {
			updateGoTo('');
			updatePage(1);
		}
	};

	return (
		<section className="Pagination">
			<div className="Pagination--Actions">
				<Typography className="Pagination--TotalPageCount">
					Showing <span> 0 - 0</span> out of <span>0</span>
				</Typography>

				<div className="Pagination--PageNavigator">
					{/* <Button
						className="Pagination--Navigator"
						icon={<ArrowLeft />}
						onClick={handlePreviousPage}
						isDisabled={isLoading}
					/>
					<div className="Pagination--Navigator Pagination--ShowCurrentPage">{page}</div>
					<Button
						className="Pagination--Navigator"
						icon={<ArrowRight />}
						onClick={handleNextPage}
						isDisabled={isLoading || isDisabled || totalItemsFound === 0 || isError}
					/> */}

					{/* <ReactPaginate
						breakLabel="..."
						nextLabel="next >"
						// onPageChange={handlePageClick}
						pageRangeDisplayed={5}
						pageCount={1}
						previousLabel="< previous"
						renderOnZeroPageCount={null}
					/> */}
					<ReactPaginate
						nextLabel={<BackwardIcon />}
						// onPageChange={handlePageClick}
						pageRangeDisplayed={2}
						marginPagesDisplayed={2}
						pageCount={10}
						previousLabel={<ForwardIcon />}
						pageClassName="page-item"
						pageLinkClassName="page-link"
						previousClassName="page-item"
						previousLinkClassName="page-link"
						nextClassName="page-item"
						nextLinkClassName="page-link"
						breakLabel="..."
						breakClassName="page-item break"
						breakLinkClassName="page-link"
						containerClassName="pagination"
						activeClassName="active"
						renderOnZeroPageCount={null}
						className="Pagination--ButtonPage"
					/>
				</div>

				{/* <div className="Pagination--GoToPage">
					<div>Go to</div>
					<Input
						className="Pagination--Navigator Pagination--InputGoToPage"
						type="number"
						value={goTo}
						onChange={handleGoToPage}
						isDisabled={isLoading || isError}
					/>
				</div> */}
			</div>
		</section>
	);
};

export default Pagination;
