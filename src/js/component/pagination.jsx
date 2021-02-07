import React from "react";
import PropTypes from "prop-types";

const Pagination = ({ totalPages, handleClick }) => {
	const pages = [...Array(totalPages).keys()].map(num => num + 1);
	return (
		<div>
			{pages.map(num => (
				<button key={num} onClick={() => handleClick(num)}>
					{num}
				</button>
			))}
		</div>
	);
};

export default Pagination;

Pagination.propTypes = {
	totalPages: PropTypes.number,
	handleClick: PropTypes.func
};
