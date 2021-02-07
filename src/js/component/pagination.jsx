import React from "react";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";

const Pagination = ({ totalPages, handleClick }) => {
	const pages = [...Array(totalPages).keys()].map(num => num + 1);
	return (
		<div>
			{pages.map(num => (
				<Button className="m-1" variant="outline-warning" key={num} onClick={() => handleClick(num)}>
					{num}
				</Button>
			))}
		</div>
	);
};

export default Pagination;

Pagination.propTypes = {
	totalPages: PropTypes.number,
	handleClick: PropTypes.func
};
